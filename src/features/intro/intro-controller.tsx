'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useIntroStage } from '@/features/intro/hooks/use-intro-stage';
import { IntroStage } from './types';

import TextReveal from './layers/text-reveal';
import Particles from './layers/particles';
import LogoReveal from './layers/logo-reveal';
import ScreenOpen from './layers/screen-open';
import { useIntroVisibility } from './hooks/use-intro-visibility';
import { useRevealApp } from './hooks/use-reveal-app';

export default function IntroController() {
  const stage = useIntroStage();
  const showIntro = useIntroVisibility();

  // アプリ表示制御（DOM操作を分離）
  useRevealApp(stage, showIntro);

  if (!showIntro || stage === IntroStage.DONE) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div className="fixed inset-0 z-999 flex items-center justify-center bg-black overflow-hidden">
        {/* 背景オーラ */}
        <motion.div
          className="absolute w-[70vw] h-[70vw] rounded-full blur-3xl bg-purple-500/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <TextReveal stage={stage} />
        <Particles stage={stage} />
        <LogoReveal stage={stage} />
        <ScreenOpen stage={stage} />
      </motion.div>
    </AnimatePresence>
  );
}
