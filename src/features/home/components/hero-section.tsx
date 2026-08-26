'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './three-back-ground';

import DawnovermistForestValley from '../../../../public/images/dawn_overmisty_forestvalley.webp';
import MoonlitCherryblossoms from '../../../../public/images/moonlit_cherryblossoms.webp';
import moonlitCoastalCliffsLighthouse from '../../../../public/images/moonlit_coastal_cliffs_lighthouse.webp';
import sereneNightByTheLake from '../../../../public/images/serene_night_by_the_lake.webp';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 'mist',
      src: DawnovermistForestValley,
      alt: '霧と夕陽',
    },
    {
      id: 'cherryblossoms',
      src: MoonlitCherryblossoms,
      alt: '月と桜',
    },
    {
      id: 'coastal',
      src: moonlitCoastalCliffsLighthouse,
      alt: '月と城',
    },
    {
      id: 'serene',
      src: sereneNightByTheLake,
      alt: '湖',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full h-130 md:h-175 bg-[#0a0a0a] flex items-center overflow-hidden">
      <ThreeBackground />
      {/* --- 背景画像 --- */}
      <div className="absolute right-0 top-0 w-full h-full md:w-[65%]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* グラデーション */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="md:hidden absolute inset-0 bg-black/40" />
      </div>

      {/* --- テキスト --- */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-linear-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
              Build Beautiful
            </span>
            <br />
            <span className="text-white/90">Web Experiences</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed"
          >
            LP制作から業務ツール開発まで、
            <br />
            使いやすさと美しさを両立したWebを構築します。
          </motion.p>

          <motion.div variants={item} className="mt-10 flex gap-4">
            <Link
              href="/profile"
              className="px-8 py-4 rounded-lg bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 active:scale-95 transition"
            >
              View Profile
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* --- スクロール誘導 --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* マウス型 */}
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [2, 12, 2] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-1 h-2 bg-white/60 rounded-full mt-2"
          />
        </div>

        {/* 矢印 */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-white/40 text-sm"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
