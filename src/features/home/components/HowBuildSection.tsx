'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bot, PenTool, BarChart3, ChevronRight } from 'lucide-react'; // アイコン追加
import HowBuild from '../../../../public/images/how_i_build.webp';

const steps = [
  {
    title: 'AI / Critique', // AIを「使う」だけでなく「批評する」ニュアンスを追加
    icon: Bot,
    desc: 'AIによる超速実装と、徹底した人間による検証。',
    detail:
      'AIで実装を高速化しつつ、提示されたコードの「嘘」や「非効率」を厳格に排除。確実な品質とスピードを両立させます。',
    color: 'from-pink-500',
  },
  {
    title: 'Architecture', // 単なるDesignより「設計」の重みを強調
    icon: PenTool,
    desc: '変化に対応し、長く使い続けられる構造設計。',
    detail:
      'マーケティング視点で「後から変えやすいか」を重視。その場しのぎではない、保守性の高いコードとUXを構築します。',
    color: 'from-purple-500',
  },
  {
    title: 'Growth / Goal', // ビジネスを「成長」や「目的」に紐付ける
    icon: BarChart3,
    desc: '技術を「手段」として、ビジネスの成果を最大化。',
    detail:
      '「なぜ作るか」という本質に立ち返り、ユーザー価値と収益に貢献する、マーケティング起点の実装を届けます。',
    color: 'from-indigo-500',
  },
];

const HowIBuildSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-40 pb-0 px-6 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={HowBuild}
          alt="Process Background"
          fill
          className="object-cover opacity-40 mix-blend-screen scale-100"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Development Process
          </h2>
          <p className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            How I Build
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-md hover:bg-white/5 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div
                  className={`p-3 rounded-2xl bg-linear-to-br ${step.color}/20 border border-white/10 group-hover:scale-110 transition-transform duration-500`}
                >
                  <step.icon
                    className={`w-6 h-6 bg-linear-to-br ${step.color} to-white bg-clip-text text-transparent`}
                  />
                </div>
                <span className="text-xs font-mono text-white/20 italic">
                  0{i + 1}
                </span>
              </div>

              <h3
                className={`text-2xl font-bold text-white mb-4 group-hover:bg-linear-to-r ${step.color} to-white group-hover:bg-clip-text group-hover:text-transparent transition-all`}
              >
                {step.title}
              </h3>
              <p className="text-white/80 font-medium mb-4 leading-relaxed">
                {step.desc}
              </p>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {step.detail}
              </p>

              <div
                className={`absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex justify-center items-center gap-4 mb-20">
          <div className="flex items-center gap-2 text-white/50">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Flow
            </span>
            <div className="w-24 h-px bg-linear-to-r from-white/10 via-white/50 to-white/60 relative">
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-pink-600 rounded-full blur-[2px]"
              />
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block p-px rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 mb-8">
            <div className="px-6 py-2 rounded-full bg-[#0a0a0a] text-sm text-white/80 backdrop-blur-xl">
              Consistency & Quality
            </div>
          </div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90">
            AIを<span className="text-pink-400">「粗削りな原石」</span>
            として磨き上げ、 設計を
            <span className="text-purple-400">「持続可能な土台」</span>
            として。そしてビジネスを
            <span className="text-indigo-400">「唯一の正解」</span>として。
          </p>
          <p className="mt-6 text-white/40 leading-loose">
            AIの出力に責任を持ち、マーケティングの文脈で正しく機能するプロダクトを構築します。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIBuildSection;
