'use client';

import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-20 text-center md:text-left"
    >
      {/* 背景グロー */}
      <div className="absolute -top-20 left-0 md:left-10 w-80 h-40 bg-pink-500/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 left-1/2 w-72 h-40 bg-purple-500/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Section Label */}
        <div className="flex items-center justify-center md:justify-start gap-4 mb-5">
          {/* Left Line */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)]" />

            <div className="w-10 md:w-16 h-px bg-linear-to-r from-pink-500/70 to-purple-500/20" />
          </div>

          <h2 className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Works
          </h2>

          {/* Right Line */}
          <div className="w-10 md:w-16 h-px bg-linear-to-r from-purple-500/20 to-indigo-500/70" />

          <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.8)]" />
        </div>

        {/* Main Title */}
        <p className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
          Selected{' '}
          <span className="bg-linear-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Projects
          </span>
        </p>

        {/* Subtle Accent */}
        <div className="mt-6 flex justify-center md:justify-start">
          <div className="h-px w-24 bg-linear-to-r from-pink-500/50 via-purple-500/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderSection;
