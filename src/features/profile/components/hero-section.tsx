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
            sizes="(max-width: 768px) 100vw, 50v"
            priority
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
        <h2 className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-[1.25]">
          Webアプリケーションを中心に、
          <br />
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            幅広い開発を経験。
          </span>
        </h1>

        <div className="space-y-6 text-white/70 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          <p>
            フロントエンドからバックエンドまで、
            <span className="text-white font-medium">
              Webアプリケーション開発に必要な領域を幅広く経験
            </span>
            してきました。
            設計・開発だけでなく、テストや障害対応など、システムを安定して運用するための業務にも携わっています。
          </p>

          <p className="text-base md:text-lg">
            少人数でのスピード感のある開発から、複数人での大規模なテスト・障害対応まで経験。
            また、研修講師として技術を分かりやすく伝える経験も積んできたため、
            <span className="text-white font-medium">
              技術だけでなく、周囲と認識を合わせながら進めること
            </span>
            も大切にしています。
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
