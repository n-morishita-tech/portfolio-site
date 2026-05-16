import { StaticImageData } from 'next/image';

export type Skill = {
  logo: StaticImageData;
  name: string;
  level: number;
  glow: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type CertificationCategory = {
  title: string;
  list: string[];
};
