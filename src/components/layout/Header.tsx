'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '../../components/ui/sheet';
import Hamburger from './Hamburger';
import { Button } from '../ui/button';
import Image from 'next/image';

import CatIcon from '../../../public/images/cat_icon.webp';

export default function Header() {
  const [open, setOpen] = useState(false);

  // --- 受注状況の管理設定 ---
  const statusConfig = {
    isAvailable: true, // true: 受付中, false: 満枠・停止中
    statusText: 'Available for work',
    detailText: '案件受付中',
    dotColor: 'bg-emerald-400',
    busyColor: 'bg-amber-400',
  };

  const headerMenu = [
    { path: '/', name: 'Home' },
    { path: '/profile', name: 'Profile' },
    { path: '/project', name: 'Project' },
  ];

  return (
    <header className="h-16 w-full flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md text-white sticky top-0 px-6 z-50 border-b border-white/10">
      {/* ロゴエリア */}
      <div className="flex items-center gap-3 pl-3">
        {/* 💡 修正ポイント: イントロの移動アニメーション（MOVE）中、または完了（DONE）した時だけ layoutId を有効にする */}
        <div>
          <Image
            src={CatIcon}
            alt="CatIcon"
            width={36}
            height={36}
            className="rounded-full shadow-[0_0_15px_rgba(244,114,182,0.5)]"
          />
        </div>

        <Link
          href="/"
          className="
            font-semibold text-lg tracking-wider
            bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400
            bg-clip-text text-transparent
            hover:opacity-80
            transition
          "
        >
          N.Morishita
        </Link>

        {/* PC用ステータスバッジ */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 ml-4 rounded-full bg-white/5 border border-white/10">
          <span className="relative flex h-2 w-2">
            {statusConfig.isAvailable && (
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusConfig.dotColor} opacity-75`}
              ></span>
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig.isAvailable ? statusConfig.dotColor : statusConfig.busyColor}`}
            ></span>
          </span>
          <span className="text-[10px] font-medium text-white/60 tracking-widest uppercase">
            {statusConfig.isAvailable ? statusConfig.statusText : 'Busy'}
          </span>
        </div>
      </div>

      {/* PCナビ */}
      <nav className="hidden md:flex items-center gap-10">
        {headerMenu.map((elem) => (
          <Link
            href={elem.path}
            key={elem.name}
            className="
              relative text-sm font-medium tracking-[0.12em] text-white/60
              transition-all duration-300 hover:text-white
              after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
              after:bg-linear-to-r after:from-pink-400 after:via-purple-400 after:to-indigo-400
              after:transition-all after:duration-300 hover:after:w-full
            "
          >
            {elem.name}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link href="/contact" className="hidden md:block">
        <Button
          className="
            relative overflow-hidden
            bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500
            text-white font-medium px-5 py-2 rounded-lg
            shadow-[0_0_20px_rgba(236,72,153,0.4)]
            hover:scale-105 transition-all duration-300
          "
        >
          Contact
        </Button>
      </Link>

      {/* スマホ用メニュー */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Hamburger />
          </SheetTrigger>

          {open && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              onClick={() => setOpen(false)}
            />
          )}

          <SheetContent
            side="right"
            className="bg-[#0a0a0a] text-white border-none z-50 flex flex-col"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl text-left tracking-wider text-white/90">
                MENU
              </SheetTitle>
              <SheetDescription className="text-left text-white/40 border-b pb-4 tracking-wide">
                NAVIGATION
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-6 text-lg pl-6 mt-6">
              {[...headerMenu, { path: '/contact', name: 'Contact' }].map(
                (elem) => (
                  <Link
                    href={elem.path}
                    key={elem.name}
                    onClick={() => setOpen(false)}
                    className="
                      text-white/80 text-xl font-medium tracking-[0.08em]
                      transition-all duration-300 hover:text-pink-400 hover:translate-x-1
                    "
                  >
                    {elem.name}
                  </Link>
                ),
              )}
            </div>

            {/* スマホメニュー内のステータスカード */}
            <div className="mt-auto mb-8 mx-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  {statusConfig.isAvailable && (
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusConfig.dotColor} opacity-75`}
                    ></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig.isAvailable ? statusConfig.dotColor : statusConfig.busyColor}`}
                  ></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">
                  Current Status
                </span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {statusConfig.isAvailable
                  ? statusConfig.detailText
                  : '現在、新規受付を停止しております'}
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
