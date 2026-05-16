'use client';

import Link from 'next/link';
import { Github, ExternalLink, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import { projectCategories } from '../data/projects';

const ProjectCard = () => {
  return (
    <>
      {projectCategories.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative flex flex-col h-full bg-white/2 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:border-white/20"
        >
          {/* メディアエリア：動画を表示 */}
          <div className="relative h-64 w-full bg-neutral-900 overflow-hidden">
            {project.videoSrc ? (
              <video
                src={project.videoSrc}
                // poster={project.thumbnail}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full opacity-50 group-hover:opacity-80 transition-opacity duration-700 object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-pink-500/10 to-indigo-500/10">
                <PlayCircle className="w-12 h-12 text-white/10" />
              </div>
            )}

            {/* カテゴリーラベル */}
            <div className="absolute top-6 left-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full">
                {project.category}
              </span>
            </div>

            {/* グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
          </div>

          {/* コンテンツエリア */}
          <div className="p-10 pt-6 flex flex-col flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-white/50 text-base leading-relaxed mb-8 flex-1">
              {project.description}
            </p>

            {/* 技術スタック */}
            <div className="flex gap-2 mb-10 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono tracking-wider border border-white/5 bg-white/[0.03] text-white/40 px-3 py-1 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* アクションリンク */}
            <div className="flex items-center gap-8 mt-auto pt-6 border-t border-white/5">
              {/* <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-white transition-all group/link"
              >
                <Github className="w-5 h-5 transition-transform group-hover/link:-translate-y-0.5" />
                <span>Source Code</span>
              </Link> */}

              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 text-sm font-semibold text-pink-400/80 hover:text-pink-400 transition-all group/link"
              >
                <ExternalLink className="w-5 h-5 transition-transform group-hover/link:-translate-y-0.5" />
                <span>View Demo</span>
              </Link>
            </div>
          </div>

          {/* 下部の装飾ライン */}
          <div className="absolute bottom-0 left-0 w-0 h-0.75 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:w-full transition-all duration-700" />
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;
