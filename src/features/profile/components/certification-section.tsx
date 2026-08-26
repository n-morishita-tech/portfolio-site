'use client';

import { motion } from 'framer-motion';

import { JetBrains_Mono } from 'next/font/google';
import { certificationCategories } from '../data/certifications';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const CertificationSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black"
    >
      {/* ウィンドウヘッダー */}
      <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>
        <p
          className={`${jetbrains.className} text-[10px] text-white/20 ml-2 uppercase tracking-widest`}
        >
          terminal — certifications
        </p>
      </div>

      <div className="p-8">
        <p
          className={`${jetbrains.className} text-pink-500 mb-6 flex items-center gap-2`}
        >
          <span className="text-white/20">❯</span> certifications.list()
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {certificationCategories.map((category) => (
            <div key={category.title}>
              <p
                className={`${jetbrains.className} text-white/40 text-xs mb-4 uppercase tracking-tighter`}
                // eslint-disable-next-line react/jsx-no-comment-textnodes
              >
                // {category.title}
              </p>
              <ul className="space-y-3">
                {category.list.map((cert) => (
                  <li
                    key={cert}
                    className={`${jetbrains.className} text-sm text-white/80 flex items-start gap-3 group`}
                  >
                    <span className="text-pink-500 group-hover:animate-pulse">
                      →
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationSection;
