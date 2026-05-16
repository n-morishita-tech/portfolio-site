'use client';

// 💡 useState と useEffect をインポートに追加
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../../../../public/images/cat_icon.webp';
import { IntroStage } from '../types';

export default function LogoReveal({ stage }: { stage: IntroStage }) {
  // 💡 マウント状態を管理するステートを追加
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // ブラウザに読み込まれたらtrueにする
  }, []);

  if (stage !== IntroStage.LOGO && stage !== IntroStage.MOVE) return null;

  // 💡 サーバーサイドでの一瞬のチラつき（ヘッダーの位置誤認）を防ぐ
  if (!isMounted) return null;

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
