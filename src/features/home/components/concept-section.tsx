'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const ConceptSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative py-40 pb-0 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 right-0 h-40 z-20 pointer-events-none">
        <div
          className="absolute inset-0 backdrop-blur-2xl"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-pink-500/10 via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 right-1/4 w-125 h-125 bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-150 h-150 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* ヘッダー部分 */}
          <motion.div
            variants={fadeInUp}
            className="mb-24 text-center md:text-left"
          >
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
              My Philosophy
            </h2>
            <p className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white">
              本質を貫く戦略と、
              <br />
              <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                意志ある技術。
              </span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* 【左側】Strategy First, Code Second (目的と設計) */}
            <motion.div
              variants={fadeInUp}
              className="group relative p-10 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="mb-8 w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="text-indigo-400 w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Strategy First, Code Second
              </h3>
              <p className="text-white/60 leading-relaxed text-lg mb-4">
                プログラミングは目的を遂げ、マーケティングを具現化するための「手段」に過ぎません。
                しかし、その手段が脆弱であれば、どれほど優れた戦略も形にならず、市場には届きません。
              </p>
              <p className="text-white/80 leading-relaxed font-medium">
                確かな技術力という「土台」を築くことで、変化の激しいビジネス戦略を柔軟かつダイレクトに実行。
                やりたいマーケティングを、一切の妥協なく実現します。
              </p>

              <div className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* 【右側】Critical AI Co-Development (AIとの向き合い方) */}
            <motion.div
              variants={fadeInUp}
              className="group relative p-10 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-sm hover:bg-white/4 transition-all duration-500 md:mt-16"
            >
              <div className="mb-8 w-14 h-14 rounded-2xl bg-linear-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <CheckCircle2 className="text-pink-400 w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Critical AI Co-Development
              </h3>
              <p className="text-white/60 leading-relaxed text-lg mb-4">
                AIを強力な開発パートナーとして活用しますが、その提案を盲信することはありません。
                AI特有の「最適解らしき妥協」を人間の批判的思考で徹底的に検証し、磨き上げる。
              </p>
              <p className="text-white/80 leading-relaxed font-medium">
                AIの圧倒的なスピードと、人間の緻密な審美眼。
                この高度な共存が、曖昧さを排した「本物のプロダクト」を生み出すための最適解であると確信しています。
              </p>

              <div className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptSection;
