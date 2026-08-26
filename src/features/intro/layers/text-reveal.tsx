'use client';

// 💡 Variants をインポートに追加
import { motion, Variants } from 'framer-motion';
import { IntroStage } from '../types';

export default function TextReveal({ stage }: { stage: IntroStage }) {
  if (stage !== IntroStage.TEXT && stage !== IntroStage.EXPLODE) return null;

  const text = 'Welcome';

  // 💡 : Variants 型を明示
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // 💡 : Variants 型を明示（これで 'easeOut' が正しく認識されます）
  const letter: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.6,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="flex text-white text-6xl font-bold tracking-wide"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          animate={
            stage === IntroStage.EXPLODE
              ? {
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  opacity: 0,
                  scale: 0.3,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
