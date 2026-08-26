'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Layout, Cpu } from 'lucide-react';
import Link from 'next/link';

const mainStacks = [
  {
    name: 'Frontend',
    icon: Layout,
    tools: 'Next.js / React',
    desc: '洗練されたUIと心地よいUXの提供',
    glow: 'rgba(236,72,153,0.15)',
  },
  {
    name: 'Backend',
    icon: Server,
    tools: 'Java / Kotlin / Node.js',
    desc: '堅牢で拡張性の高いシステム設計',
    glow: 'rgba(168,85,247,0.15)',
  },
  {
    name: 'Logic',
    icon: Code2,
    tools: 'TypeScript / C#',
    desc: '型安全による高品質なコード管理',
    glow: 'rgba(79,70,229,0.15)',
  },
  {
    name: 'AI & Management',
    icon: Cpu,
    tools: 'AI Workflow / Slikk',
    desc: '最新技術と徹底した進捗管理の両立',
    glow: 'rgba(59,130,246,0.15)',
  },
];

const TechStackSection = () => {
  return (
    <section className="py-32 pb-0 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-100 bg-white/2 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Core Competence
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Tech Stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainStacks.map((stack, i) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                },

                opacity: { duration: 0.8, delay: i * 0.1 },
                default: { duration: 0.8 },
              }}
              className="group relative p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-xl transition-all duration-500"
              style={{ boxShadow: `0 20px 40px ${stack.glow}` }}
            >
              {/* アイコン装飾 */}
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <stack.icon className="w-8 h-8 text-white/80" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {stack.name}
              </h3>
              <p className="text-pink-400/80 text-xs font-mono mb-4 tracking-wider uppercase">
                {stack.tools}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                {stack.desc}
              </p>

              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${stack.glow} 0%, transparent 100%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm tracking-widest uppercase group"
          >
            View All Skills
            <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-pink-500 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
