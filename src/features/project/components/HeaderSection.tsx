'use client';

import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 text-center md:text-left"
    >
      <h2 className="text-sm font-bold tracking-[0.4em] uppercase bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
        Works
      </h2>
      <p className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
        Selected Projects
      </p>
    </motion.div>
  );
};

export default HeaderSection;
