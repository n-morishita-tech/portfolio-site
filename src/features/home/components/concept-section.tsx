'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers3, ShieldCheck, BrainCircuit, ArrowRight } from 'lucide-react';

const policies = [
  {
    id: 'future',
    number: '01',
    title: '将来を見据えた設計・開発',
    shortTitle: '拡張性',
    label: 'FUTURE-PROOF',
    description: `
    拡張しやすい設計のもとで最小限の機能を実装したプロトタイプを迅速に開発することにより、齟齬が無く、市場の変化に対応しやすい製品を開発します。
    `,
    icon: Layers3,
    color: 'text-purple-400',
    bg: 'bg-purple-400',
    glow: 'rgba(168,85,247,0.55)',
    gradient: 'from-purple-400 via-indigo-500 to-blue-500',
  },
  {
    id: 'security',
    number: '02',
    title: 'セキュリティ / 運用コスト',
    shortTitle: 'セキュリティ / コスト',
    label: 'SECURITY & OPERATION',
    description:
      '開発時の品質だけでなく、セキュリティや運用・保守まで考慮し、長期的な負担を抑えられる環境を構築します。',
    icon: ShieldCheck,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400',
    glow: 'rgba(34,211,238,0.55)',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
  },
  {
    id: 'ai',
    number: '03',
    title: 'AIを過信しない開発',
    shortTitle: 'AI',
    label: 'HUMAN-VERIFIED AI',
    description: `AIの台頭で開発が楽になりましたが、回答の矛盾やセキュリティリスクのある提案をすることを身をもって感じています。
      AIを活用して開発を効率化しながら、生成されたコードや提案をそのまま採用せず、人の目で品質・安全性を確認します。`,
    icon: BrainCircuit,
    color: 'text-pink-400',
    bg: 'bg-pink-400',
    glow: 'rgba(236,72,153,0.55)',
    gradient: 'from-pink-400 via-purple-500 to-indigo-500',
  },
];

const ConceptSection = () => {
  const [activeId, setActiveId] = useState('future');

  const activePolicy =
    policies.find((policy) => policy.id === activeId) ?? policies[0];

  const ActiveIcon = activePolicy.icon;

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
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
    <section className="relative py-18 md:py-20 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-100 h-100 bg-pink-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-1/4 -right-40 w-100 h-100 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* =========================================
            Header
        ========================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 md:w-16 h-px bg-linear-to-r from-pink-500 to-purple-500" />

            <span className="text-[11px] md:text-xs font-bold tracking-[0.35em] text-white/35 uppercase">
              Development Principles
            </span>
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-none bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              My Policy
            </h2>

            <div className="absolute -top-2 right-[5%] md:right-[10%] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.7)]" />
            </div>
          </div>
        </motion.div>

        {/* =========================================
            Main
        ========================================== */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-center">
          {/* =====================================
              LEFT : Triangle
          ====================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="relative flex items-center justify-center min-h-105 md:min-h-120"
          >
            <TrianglePrinciples activeId={activeId} onChange={setActiveId} />
          </motion.div>

          {/* =====================================
              RIGHT : Detail
          ====================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePolicy.id}
                initial={{
                  opacity: 0,
                  x: 24,
                  filter: 'blur(6px)',
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  x: -24,
                  filter: 'blur(6px)',
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Number / Label */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs font-mono tracking-[0.3em] text-white/25">
                    {activePolicy.number}
                  </span>

                  <div className="h-px w-10 bg-white/10" />

                  <span
                    className={`text-[10px] font-bold tracking-[0.25em] uppercase bg-linear-to-r ${activePolicy.gradient} bg-clip-text text-transparent`}
                  >
                    {activePolicy.label}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="mb-6 w-12 h-12 rounded-xl border border-white/10 bg-white/2 flex items-center justify-center"
                  style={{
                    borderColor: activePolicy.glow,
                    boxShadow: `0 0 30px ${activePolicy.glow}`,
                  }}
                >
                  <ActiveIcon className={`w-6 h-6 ${activePolicy.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {activePolicy.title}
                </h3>

                {/* Accent */}
                <div
                  className={`mt-6 mb-6 w-24 h-px bg-linear-to-r ${activePolicy.gradient}`}
                />

                {/* Description */}
                <p className="max-w-xl whitespace-pre-line text-sm md:text-base leading-8 text-white/45">
                  {activePolicy.description}
                </p>

                {/* Hint */}
                <div className="mt-8 flex items-center gap-2 text-white/20">
                  <ArrowRight className="w-3.5 h-3.5" />

                  <span className="text-[10px] tracking-[0.2em] uppercase">
                    Hover over the principles
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
Triangle
========================================================= */

type TrianglePrinciplesProps = {
  activeId: string;
  onChange: (id: string) => void;
};

const TrianglePrinciples = ({
  activeId,
  onChange,
}: TrianglePrinciplesProps) => {
  const activeIndex = policies.findIndex((policy) => policy.id === activeId);

  return (
    <div className="relative w-80 h-75 md:w-100 md:h-90">
      {/* =====================================
          Ambient Glow
      ====================================== */}
      <motion.div
        animate={{
          opacity: 0.08 + activeIndex * 0.015,
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-[18%] rounded-full bg-purple-500 blur-[90px]"
      />

      {/* =====================================
          SVG Triangle
      ====================================== */}
      <svg
        viewBox="0 0 400 360"
        className="absolute inset-0 w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Main Gradient */}
          <linearGradient
            id="triangleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          {/* Active Gradient */}
          <linearGradient
            id="activeTriangleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          {/* Glow */}
          <filter
            id="triangleGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong Glow */}
          <filter
            id="strongTriangleGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="8" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =================================
            Outer Triangle Glow
        ================================== */}
        <motion.polygon
          points="200,20 370,325 30,325"
          fill="none"
          stroke="url(#triangleGradient)"
          strokeWidth="10"
          opacity="0.05"
          filter="url(#triangleGlow)"
          animate={{
            opacity: activeId ? 0.1 : 0.05,
          }}
        />

        {/* =================================
            Main Triangle
        ================================== */}
        <motion.polygon
          points="200,20 370,325 30,325"
          fill="none"
          stroke="url(#triangleGradient)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.28"
        />

        {/* =================================
            Inner Triangle
        ================================== */}
        <polygon
          points="200,45 345,305 55,305"
          fill="rgba(255,255,255,0.008)"
          stroke="rgba(255,255,255,0.035)"
          strokeWidth="1"
        />

        {/* =================================
            Active Edge Highlight
        ================================== */}

        {/* Top → Left */}
        <motion.line
          x1="200"
          y1="20"
          x2="30"
          y2="325"
          stroke="url(#activeTriangleGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity:
              activeId === 'future' || activeId === 'security' ? 0.7 : 0.15,
          }}
          transition={{ duration: 0.35 }}
        />

        {/* Top → Right */}
        <motion.line
          x1="200"
          y1="20"
          x2="370"
          y2="325"
          stroke="url(#activeTriangleGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: activeId === 'future' || activeId === 'ai' ? 0.7 : 0.15,
          }}
          transition={{ duration: 0.35 }}
        />

        {/* Left → Right */}
        <motion.line
          x1="30"
          y1="325"
          x2="370"
          y2="325"
          stroke="url(#activeTriangleGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: activeId === 'security' || activeId === 'ai' ? 0.7 : 0.15,
          }}
          transition={{ duration: 0.35 }}
        />

        {/* =================================
            Moving Light
        ================================== */}
        <motion.circle
          r="3"
          fill="white"
          filter="url(#strongTriangleGlow)"
          animate={{
            cx:
              activeId === 'future'
                ? [200, 30, 370, 200]
                : activeId === 'security'
                  ? [30, 370, 200, 30]
                  : [370, 200, 30, 370],
            cy:
              activeId === 'future'
                ? [20, 325, 325, 20]
                : activeId === 'security'
                  ? [325, 325, 20, 325]
                  : [325, 20, 325, 325],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* =================================
            Center Node
        ================================== */}
        <circle cx="200" cy="215" r="3" fill="rgba(255,255,255,0.25)" />

        <circle
          cx="200"
          cy="215"
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />

        {/* Center Cross */}
        <line
          x1="190"
          y1="215"
          x2="210"
          y2="215"
          stroke="rgba(255,255,255,0.08)"
        />

        <line
          x1="200"
          y1="205"
          x2="200"
          y2="225"
          stroke="rgba(255,255,255,0.08)"
        />
      </svg>

      {/* =====================================
          TOP POINT
      ====================================== */}
      <TriangleNode
        policy={policies[0]}
        active={activeId === policies[0].id}
        className="left-1/2 -translate-x-1/2 -top-3"
        labelClassName="top-14 left-1/2 -translate-x-1/2 text-center"
        onHover={() => onChange(policies[0].id)}
      />

      {/* =====================================
          LEFT POINT
      ====================================== */}
      <TriangleNode
        policy={policies[1]}
        active={activeId === policies[1].id}
        className="-left-3 md:-left-3.5 -bottom-1"
        labelClassName="right-16 top-1/2 -translate-y-1/2 text-right"
        onHover={() => onChange(policies[1].id)}
      />

      {/* =====================================
          RIGHT POINT
      ====================================== */}
      <TriangleNode
        policy={policies[2]}
        active={activeId === policies[2].id}
        className="-right-3 md:-right-3.5 -bottom-1"
        labelClassName="left-16 top-1/2 -translate-y-1/2 text-left"
        onHover={() => onChange(policies[2].id)}
      />
    </div>
  );
};

/* =========================================================
Triangle Node
========================================================= */

type TriangleNodeProps = {
  policy: (typeof policies)[number];
  active: boolean;
  className: string;
  labelClassName: string;
  onHover: () => void;
};

const TriangleNode = ({
  policy,
  active,
  className,
  labelClassName,
  onHover,
}: TriangleNodeProps) => {
  const Icon = policy.icon;

  return (
    <motion.button
      type="button"
      onMouseEnter={onHover}
      onFocus={onHover}
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={`absolute z-30 ${className} cursor-pointer`}
      aria-label={policy.title}
    >
      {/* Glow */}
      <motion.div
        animate={{
          opacity: active ? 0.8 : 0,
          scale: active ? 1.4 : 0.8,
        }}
        transition={{ duration: 0.35 }}
        className={`absolute inset-0 rounded-full ${policy.bg} blur-xl`}
      />

      {/* Node */}
      <motion.div
        animate={{
          borderColor: active ? policy.glow : 'rgba(255,255,255,0.12)',
          boxShadow: active
            ? `0 0 35px ${policy.glow}, inset 0 0 22px ${policy.glow}`
            : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.35 }}
        className="
    relative
    flex
    h-18 w-18
    md:h-20 md:w-20
    items-center
    justify-center
    rounded-full
    border
    bg-[#0a0a0a]
  "
      >
        <Icon
          className={`
      h-6 w-6
      md:h-7 md:w-7
      transition-colors duration-300
      ${active ? policy.color : 'text-white/30'}
    `}
        />

        {/* Active Ring */}
        <motion.div
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.7,
          }}
          className="absolute -inset-1.5 rounded-full border"
          style={{
            borderColor: policy.glow,
          }}
        />

        {/* Active Dot */}
        <motion.span
          animate={{
            scale: active ? 1 : 0,
            opacity: active ? 1 : 0,
          }}
          className={`
      absolute
      -right-1
      -top-1
      h-3 w-3
      rounded-full
      ${policy.bg}
    `}
        />
      </motion.div>

      {/* Label */}
      <div
        className={`absolute ${labelClassName} whitespace-nowrap pointer-events-none`}
      >
        <div
          className={`text-[10px] md:text-xs font-bold tracking-[0.18em] transition-colors duration-300 ${
            active ? policy.color : 'text-white/30'
          }`}
        >
          {policy.shortTitle}
        </div>

        <div className="mt-1 text-[8px] font-mono tracking-[0.15em] text-white/15">
          {policy.number}
        </div>
      </div>
    </motion.button>
  );
};

export default ConceptSection;
