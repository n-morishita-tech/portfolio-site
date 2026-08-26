'use client';

import { motion } from 'framer-motion';

const ComingSoonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center p-12 text-center group hover:border-white/10 transition-colors"
    >
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
      </div>
      <p className="text-white/20 font-bold tracking-widest uppercase text-sm">
        More Projects <br /> Under Construction
      </p>
    </motion.div>
  );
};

export default ComingSoonCard;
