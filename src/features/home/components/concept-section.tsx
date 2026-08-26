'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Layers3 } from 'lucide-react';

const policies = [
  {
    number: '01',
    title: '将来を見据えた設計',
    label: 'FUTURE-PROOF',
    description: [
      '現在のニーズや使いやすさを満たすことはもちろん、将来的な機能追加や仕様変更、運用コストまで考えて設計・開発します。',
      '変化に柔軟に対応できる土台を作り、必要な機能を迅速に追加できるプロダクトを目指します。',
    ],
    icon: Layers3,
    glow: 'rgba(99,102,241,0.16)',
    accent: 'from-indigo-400 via-purple-500 to-transparent',
    numberColor: 'text-indigo-400/10',
  },
  {
    number: '02',
    title: 'AIを過信しない開発',
    label: 'HUMAN-VERIFIED AI',
    description: [
      'AIを積極的に活用し、開発のスピードと生産性を高めます。',
      '一方で、AIの回答をそのまま採用することはありません。ハルシネーションやセキュリティ、将来的な拡張性などを人の目で確認します。',
      'AIの力を活用しながらも、品質・安全性・保守性を考慮し、最終的な判断は人が行います。',
    ],
    icon: BrainCircuit,
    glow: 'rgba(236,72,153,0.16)',
    accent: 'from-pink-400 via-purple-500 to-transparent',
    numberColor: 'text-pink-400/10',
  },
];

const ConceptSection = () => {
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
    <section className="relative py-24 md:py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-40 w-100 h-100 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-1/4 -right-40 w-100 h-100 bg-pink-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-linear-to-b from-purple-500/5 to-transparent blur-3xl pointer-events-none" />

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
          className="mb-20 md:mb-24"
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

            {/* Decorative Dots */}
            <div className="absolute -top-2 right-[5%] md:right-[10%] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.7)]" />
            </div>
          </div>
        </motion.div>

        {/* Policies */}
        <div className="space-y-8 md:space-y-12">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.div
                key={policy.number}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: '-100px',
                }}
                variants={fadeInUp}
                className={`relative group ${
                  index === 1 ? 'md:ml-16 lg:ml-28' : 'md:mr-16 lg:mr-28'
                }`}
              >
                {/* Large Background Number */}
                <div
                  className={`absolute ${
                    index === 0
                      ? '-top-10 -left-2 md:-left-8'
                      : '-top-10 -right-2 md:-right-8'
                  } text-[7rem] md:text-[10rem] font-black leading-none tracking-tighter ${policy.numberColor} select-none pointer-events-none`}
                >
                  {policy.number}
                </div>

                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-700 group-hover:border-white/20"
                  style={{
                    boxShadow: `0 25px 60px ${policy.glow}`,
                  }}
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at ${
                        index === 0 ? '20% 30%' : '80% 30%'
                      }, ${policy.glow} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Top Gradient Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r ${policy.accent} opacity-60`}
                  />

                  <div className="relative z-10 p-7 md:p-9 lg:p-10">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-9">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-5 h-5 text-white/70" />
                        </div>

                        <div>
                          <span className="block text-[9px] font-bold tracking-[0.3em] text-white/30">
                            POLICY
                          </span>

                          <span className="text-xs font-mono text-white/45">
                            {policy.number}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                    </div>

                    {/* Label */}
                    <p
                      className={`text-[11px] font-bold tracking-[0.28em] uppercase bg-linear-to-r ${policy.accent} bg-clip-text text-transparent mb-3`}
                    >
                      {policy.label}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-7">
                      {policy.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-full h-px bg-linear-to-r from-white/15 via-white/5 to-transparent mb-7" />

                    {/* Description */}
                    <div className="max-w-3xl space-y-4">
                      {policy.description.map((text, i) => (
                        <p
                          key={i}
                          className={`leading-relaxed ${
                            i === policy.description.length - 1
                              ? 'text-white/75 font-medium text-sm md:text-base'
                              : 'text-white/50 text-sm md:text-base'
                          }`}
                        >
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-10 right-10 h-px bg-linear-to-r ${policy.accent} opacity-0 group-hover:opacity-70 transition-opacity duration-700`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
