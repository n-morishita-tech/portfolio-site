'use client';

import { motion } from 'framer-motion';
import { ContactForm } from './components/ContactForm';

export const ContactView = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse -top-40 -left-40" />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse -bottom-40 -right-40" />
      </div>

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};
