'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Layers3, Workflow, Bot, MessageCircle, Gauge } from 'lucide-react';
import Link from 'next/link';
import HowBuild from '../../../../public/images/how_i_build.webp';

const strengths = [
  {
    number: '01',
    title: 'Full-Stack',
    subtitle: '& Infrastructure',
    icon: Layers3,
    description:
      'フロントエンドからバックエンドまで一貫して開発。CI/CDやIaCなど、開発・運用を支えるインフラにも対応します。',
    glow: 'rgba(236,72,153,0.15)',
    accent: 'from-pink-500',
  },
  {
    number: '02',
    title: 'Flexible',
    subtitle: 'Architecture',
    icon: Workflow,
    description:
      '機能追加や仕様変更を見据え、将来の変化にも柔軟に対応できる構成を意識して設計します。',
    glow: 'rgba(168,85,247,0.15)',
    accent: 'from-purple-500',
  },
  {
    number: '03',
    title: 'AI-Assisted',
    subtitle: 'Development',
    icon: Bot,
    description:
      'AIを活用して開発を効率化しながら、生成されたコードは人の目で検証します。',
    glow: 'rgba(79,70,229,0.15)',
    accent: 'from-indigo-500',
  },
  {
    number: '04',
    title: 'Speed &',
    subtitle: 'Delivery',
    icon: Gauge,
    description:
      '効率的な開発を意識し、品質を維持しながら余裕を持ったスケジュールでの納品を心がけています。',
    glow: 'rgba(236,72,153,0.15)',
    accent: 'from-pink-500',
  },
  {
    number: '05',
    title: 'Communication',
    subtitle: '& Teaching',
    icon: MessageCircle,
    description:
      '講師経験を活かし、技術的な内容も相手に合わせてわかりやすく伝え、円滑な意思決定を支援します。',
    glow: 'rgba(59,130,246,0.15)',
    accent: 'from-blue-500',
  },
];

const WhatIBringSection = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={HowBuild}
          alt=""
          fill
          className="object-cover opacity-30 mix-blend-screen"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#0a0a0a]/30 to-[#0a0a0a]" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          {/* 上部ライン */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 md:w-24 h-px bg-linear-to-r from-transparent to-pink-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
            <div className="w-12 md:w-24 h-px bg-linear-to-r from-indigo-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            What I Bring
          </h2>

          <p className="mt-6 text-white/40 text-base md:text-lg">
            開発において活かせる5つの強み
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 md:w-24 h-px bg-linear-to-r from-transparent to-pink-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
            <div className="w-12 md:w-24 h-px bg-linear-to-r from-indigo-500/50 to-transparent" />
          </div>
        </motion.div>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            const desktopPosition =
              index === 0
                ? 'md:col-span-2'
                : index === 1
                  ? 'md:col-span-2'
                  : index === 2
                    ? 'md:col-span-2'
                    : index === 3
                      ? 'md:col-start-2 md:col-span-2'
                      : 'md:col-start-4 md:col-span-2';

            return (
              <motion.div
                key={strength.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{
                  once: true,
                  margin: '-80px',
                }}
                className={`
                  ${desktopPosition}
                  group
                  relative
                  p-8
                  md:p-9
                  rounded-[2.5rem]
                  bg-white/2.5
                  border border-white/10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-white/15
                  overflow-hidden
                `}
                style={{
                  boxShadow: `0 20px 40px ${strength.glow}`,
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${strength.glow} 0%, transparent 75%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-start justify-between mb-10">
                    <div
                      className={`
                        w-12 h-12
                        rounded-2xl
                        bg-linear-to-br
                        ${strength.accent}
                        to-transparent
                        border border-white/10
                        flex items-center justify-center
                        group-hover:scale-110
                        transition-transform duration-500
                      `}
                    >
                      <Icon className="w-5 h-5 text-white/80" />
                    </div>

                    <span className="text-xs font-mono tracking-widest text-white/20">
                      {strength.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-[1.65rem] font-bold tracking-tight text-white leading-tight">
                    {strength.title}
                    <br />
                    <span
                      className={`
                        bg-linear-to-r
                        ${strength.accent}
                        to-white
                        bg-clip-text
                        text-transparent
                      `}
                    >
                      {strength.subtitle}
                    </span>
                  </h3>

                  {/* Divider */}
                  <div
                    className={`
                      mt-7
                      mb-6
                      h-px
                      bg-linear-to-r
                      ${strength.accent}
                      via-white/10
                      to-transparent
                      opacity-60
                    `}
                  />

                  {/* Description */}
                  <p className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                    {strength.description}
                  </p>
                </div>

                {/* Bottom Hover Accent */}
                <div
                  className={`
                    absolute
                    bottom-0
                    left-8
                    right-8
                    h-px
                    bg-linear-to-r
                    from-transparent
                    ${strength.accent}
                    to-transparent
                    opacity-0
                    group-hover:opacity-70
                    transition-opacity duration-500
                  `}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View All Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm tracking-widest uppercase group"
          >
            View All Skills
            <span className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-pink-500 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIBringSection;
