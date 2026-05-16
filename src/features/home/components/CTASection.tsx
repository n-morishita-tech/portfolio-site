'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react'; // アイコン追加

const CTASection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative py-40 pb-20 px-6 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-linear-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-bold tracking-[0.5em] uppercase bg-linear-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-6"
          >
            Get in Touch
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8"
          >
            Let’s Build <br className="md:hidden" />
            the <span className="italic">Next</span> Era.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg md:text-xl leading-relaxed mb-16 max-w-2xl mx-auto"
          >
            ただのシステムではなく、心に届く体験を。
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/contact">
              <button className="group relative px-12 py-5 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-xl shadow-[0_0_40px_rgba(236,72,153,0.2)] hover:shadow-[0_0_60px_rgba(236,72,153,0.4)] transition-all duration-500 active:scale-95 flex items-center gap-3">
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                プロジェクトの相談をする
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </Link>

            <motion.p
              variants={fadeInUp}
              className="text-white/30 text-sm tracking-widest uppercase"
            >
              Usually responds within 24 hours
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
