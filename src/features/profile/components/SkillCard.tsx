import Image from 'next/image';
import { motion } from 'framer-motion';
import { itemVariants } from '../constants/animations';
import { Skill } from '../types';

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col items-center group"
    >
      <div
        className="skill-card w-20 h-20 flex items-center justify-center bg-neutral-900 border border-neutral-700 rounded-full transition group-hover:scale-110 group-hover:-translate-y-1"
        style={{ boxShadow: `0 0 25px ${skill.glow}` }}
      >
        <Image src={skill.logo} alt={skill.name} />
      </div>

      <span className="absolute -top-7 text-xs bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100">
        {skill.name}
      </span>

      <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100">
        {[1, 2, 3, 4, 5].map((lv) => (
          <div
            key={lv}
            className={`h-1 w-6 rounded-full ${
              skill.level >= lv ? 'bg-cyan-400' : 'bg-neutral-700'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};
