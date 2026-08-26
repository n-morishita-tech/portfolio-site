'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
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
    <section className="relative py-14 md:py-16 px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-linear-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Lines */}
      <div className="absolute top-1/2 left-0 w-1/4 h-px bg-linear-to-r from-transparent to-pink-500/20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-1/4 h-px bg-linear-to-l from-transparent to-indigo-500/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Section Title */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-8 md:w-16 h-px bg-linear-to-r from-transparent to-pink-500/60" />

            <p className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Contact
            </p>

            <div className="w-8 md:w-16 h-px bg-linear-to-l from-transparent to-indigo-500/60" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8"
          >
            Web開発のご相談、
            <br className="md:hidden" />
            <span className="bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              お待ちしています。
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            className="text-white/50 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            <p>
              「こんなものを作りたい」という段階でも大丈夫です。
              <br className="hidden md:block" />
              要件整理や技術選定から、一緒に考えます。
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-5"
          >
            <Link href="/contact">
              <button
                className="
                  group relative
                  px-10 py-4
                  rounded-full
                  bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500
                  text-white font-semibold
                  shadow-[0_0_40px_rgba(236,72,153,0.2)]
                  hover:shadow-[0_0_60px_rgba(236,72,153,0.4)]
                  hover:scale-[1.03]
                  active:scale-95
                  transition-all duration-500
                  flex items-center gap-3
                "
              >
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                お問い合わせはこちら
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </Link>

            <p className="text-white/25 text-xs tracking-wider">
              お気軽にご相談ください
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
