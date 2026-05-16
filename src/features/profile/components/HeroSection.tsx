'use client';

import Image from 'next/image';
import CatIcon from '../../../../public/images/cat_icon.webp';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center md:flex-row justify-center md:gap-16 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-10 mt-20"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-6">
          {/* 左（広げる） */}
          <div className="w-16 h-16 bg-pink-300/80 rounded-full blur-md -translate-x-12 translate-y-13" />

          {/* 中央 */}
          <div className="w-16 h-16 bg-pink-400 rounded-full blur-sm" />

          {/* 右（広げる） */}
          <div className="w-16 h-16 bg-pink-300/80 rounded-full blur-md translate-x-12 translate-y-13" />
        </div>

        <motion.div whileHover={{ scale: 1.06 }} className="relative w-55 h-55">
          <div className="absolute inset-0 rounded-full bg-pink-400/40 blur-xl scale-110" />

          <Image
            src={CatIcon}
            alt="cat icon"
            fill
            className="
              object-cover rounded-full 
              border border-white/10
              shadow-[0_0_60px_rgba(244,114,182,0.5)]
            "
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center md:text-left md:ml-10"
      >
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-pink-500 mb-4">
          About Me
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter leading-[1.2]">
          本質を貫く戦略と、
          <br />
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            意志ある技術。
          </span>
        </h1>

        <div className="space-y-6 text-white/70 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          <p>
            「プログラミングは、ビジネスの理想を現実へと繋ぐ手段」という信条のもと、
            <span className="text-white font-medium">
              マーケティングの意図を汲み取った設計
            </span>
            と、
            <span className="text-white font-medium">
              変化を恐れない柔軟な実装
            </span>
            を追求しています。
          </p>

          <p className="text-base md:text-lg">
            十数人規模でのテスト・障害対応といったシステムの堅牢性が問われる現場から、2〜3人でのスピード開発まで幅広く経験。
            研修講師として「技術を誰にでもわかる言葉に翻訳する」スキルを磨いてきたため、ビジネスサイドとの円滑な意思決定を得意としています。
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
