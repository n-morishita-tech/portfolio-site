'use client';

import { motion } from 'framer-motion';
import { ContactForm } from './components/contact-form';

export const ContactView = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-125 h-125 rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-purple-500/5 blur-[120px]" />

        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-linear-to-r from-transparent via-pink-500/20 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mb-10"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px bg-linear-to-r from-transparent to-pink-500/60" />

            <p className="text-xs font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Get in Touch
            </p>

            <div className="w-10 h-px bg-linear-to-r from-indigo-500/60 to-transparent" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            Contact
          </h1>

          <p className="mt-4 text-white/50 leading-relaxed">
            ご相談・ご依頼など、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  );
};
