'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../../../../public/images/cat_icon.webp';
import { IntroStage } from '../types';

export default function LogoReveal({ stage }: { stage: IntroStage }) {
  if (stage !== IntroStage.LOGO && stage !== IntroStage.MOVE) return null;

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div layoutId="site-logo">
        <Image
          src={Logo}
          alt="logo"
          width={200}
          height={200}
          priority
          className="rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
