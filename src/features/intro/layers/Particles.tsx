import { motion } from 'framer-motion';
import { IntroStage } from '../types';

export default function Particles({ stage }: { stage: IntroStage }) {
  if (stage !== IntroStage.EXPLODE && stage !== IntroStage.GATHER) return null;

  const particles = Array.from({ length: 40 });

  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          initial={{ x: 0, y: 0 }}
          animate={
            stage === IntroStage.EXPLODE
              ? {
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 600,
                }
              : { x: 0, y: 0 }
          }
          transition={{ duration: 1 }}
        />
      ))}
    </>
  );
}
