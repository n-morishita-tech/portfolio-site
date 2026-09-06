'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../../../../public/images/cat_icon.webp';
import { IntroStage } from '../types';

export default function LogoReveal({ stage }: { stage: IntroStage }) {
  if (stage !== IntroStage.LOGO && stage !== IntroStage.MOVE) return null;

  return (
    <motion.div
      className="flex items-center justify-center z-99"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div layoutId="site-logo" className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
          {/* 左 */}
          <div
            className="
          w-16 h-16
          bg-pink-300/80
          rounded-full
          blur-md
          -translate-x-14 translate-y-3
        "
          />

          {/* 中央 */}
          <div
            className="
          w-16 h-16
          bg-pink-400/90
          rounded-full
          blur-sm
          -translate-y-14
        "
          />

          {/* 右 */}
          <div
            className="
          w-16 h-16
          bg-pink-300/80
          rounded-full
          blur-md
          translate-x-14 translate-y-3
        "
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-pink-400/40 blur-xl scale-110" />

          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            priority
            className="relative z-10 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
