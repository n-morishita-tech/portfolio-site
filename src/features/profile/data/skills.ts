import HtmlLogo from '../../../../public/images/languages/html_logo.webp';
import CssLogo from '../../../../public/images/languages/css_logo.webp';
import SassLogo from '../../../../public/images/languages/sass_logo.webp';
import TailwindLogo from '../../../../public/images/languages/tailwind_logo.webp';
import JavascriptLogo from '../../../../public/images/languages/javascript_logo.webp';
import TypescriptLogo from '../../../../public/images/languages/typescript_logo.webp';
import ReactLogo from '../../../../public/images/languages/react_logo.webp';
import NextLogo from '../../../../public/images/languages/next_logo.webp';
import VueLogo from '../../../../public/images/languages/vue_logo.webp';
import JavaLogo from '../../../../public/images/languages/java_logo.webp';
import CsharpLogo from '../../../../public/images/languages/charp_logo.webp';
import KotlinLogo from '../../../../public/images/languages/kotlin_logo.webp';
import NodeLogo from '../../../../public/images/languages/node_logo.webp';
import PythonLogo from '../../../../public/images/languages/python_logo.webp';
import MySqlLogo from '../../../../public/images/languages/mysql_logo.webp';
import PostgreSqlLogo from '../../../../public/images/languages/postgresql_logo.webp';
import MongoDbLogo from '../../../../public/images/languages/mongodb_logo.webp';
import GitLogo from '../../../../public/images/languages/git_logo.webp';
import DockerLogo from '../../../../public/images/languages/docker_logo.webp';
import AWSLogo from '../../../../public/images/languages/aws_logo.webp';

import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { logo: HtmlLogo, name: 'HTML', level: 5, glow: 'rgba(239,68,68,0.9)' },
      { logo: CssLogo, name: 'CSS', level: 5, glow: 'rgba(59,130,246,0.9)' },
      {
        logo: SassLogo,
        name: 'Sass',
        level: 4,
        glow: 'rgba(236,72,153,0.9)',
      },
      {
        logo: TailwindLogo,
        name: 'Tailwind',
        level: 4,
        glow: 'rgba(255,255,255,0.9',
      },
      {
        logo: JavascriptLogo,
        name: 'Javascript',
        level: 5,
        glow: 'rgba(234,179,8,0.9)',
      },
      {
        logo: TypescriptLogo,
        name: 'Typescript',
        level: 5,
        glow: 'rgba(59,130,246,0.9)',
      },
      {
        logo: ReactLogo,
        name: 'React',
        level: 4,
        glow: 'rgba(56,189,248,0.9)',
      },
      {
        logo: NextLogo,
        name: 'Next.js',
        level: 4,
        glow: 'rgba(255,255,255,0.9)',
      },
      {
        logo: VueLogo,
        name: 'Vue.js',
        level: 2,
        glow: 'rgba(34,197,94,0.9)',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        logo: JavaLogo,
        name: 'Java',
        level: 4,
        glow: 'rgba(249,115,22,0.9)',
      },
      {
        logo: KotlinLogo,
        name: 'Kotlin',
        level: 5,
        glow: 'rgba(168,85,247,0.9)',
      },
      {
        logo: CsharpLogo,
        name: 'C#',
        level: 4,
        glow: 'rgba(132,204,22,0.9)',
      },
      {
        logo: NodeLogo,
        name: 'Node.js',
        level: 5,
        glow: 'rgba(34,197,94,0.9)',
      },
      {
        logo: PythonLogo,
        name: 'Python',
        level: 3,
        glow: 'rgba(56,189,248,0.9)',
      },
    ],
  },
  {
    title: 'Others',
    skills: [
      {
        logo: MySqlLogo,
        name: 'MySQL',
        level: 4,
        glow: 'rgba(59,130,246,0.9)',
      },
      {
        logo: PostgreSqlLogo,
        name: 'PostgreSQL',
        level: 4,
        glow: 'rgba(59,130,246,0.9)',
      },
      {
        logo: MongoDbLogo,
        name: 'MongoDB',
        level: 4,
        glow: 'rgba(132,204,22,0.9)',
      },
      { logo: GitLogo, name: 'Git', level: 4, glow: 'rgba(248,113,113,0.9)' },
      {
        logo: DockerLogo,
        name: 'Docker',
        level: 2,
        glow: 'rgba(56,189,248,0.9)',
      },
      {
        logo: AWSLogo,
        name: 'AWS',
        level: 2,
        glow: 'rgba(249,115,22,0.9)',
      },
      // {
      //   logo: MaterialUILogo,
      //   name: 'Material UI',
      //   level: 5,
      //   glow: 'rgba(249,115,22,0.9)',
      // },
      // {
      //   logo: MudBlazorLogo,
      //   name: 'Mud Balazor',
      //   level: 4,
      //   glow: 'rgba(249,115,22,0.9)',
      // },
    ],
  },
];
