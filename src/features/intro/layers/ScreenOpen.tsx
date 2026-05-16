import { motion } from 'framer-motion';
import { IntroStage } from '../types';

export default function ScreenOpen({ stage }: { stage: IntroStage }) {
  if (stage !== IntroStage.OPEN) return null;

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-black"
        animate={{ y: '-100%' }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
        animate={{ y: '100%' }}
        transition={{ duration: 0.8 }}
      />
    </>
  );
}
