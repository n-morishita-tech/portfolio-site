'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { SkillCard } from './SkillCard';
import { useSkillHover } from '../hooks/useSkillHover';

export const SkillSection = () => {
  useSkillHover();

  return (
    <section className="mt-12">
      <h3 className="text-lg font-semibold mb-6">Tech Stack</h3>

      {skillCategories.map((category) => (
        <div key={category.title} className="mb-12">
          <h4 className="text-sm text-neutral-400 mb-6">{category.title}</h4>

          <motion.div
            className="grid grid-cols-4 md:grid-cols-8 gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {category.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};
