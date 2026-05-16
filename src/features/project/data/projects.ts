import { ProjectCategories } from '../types';

export const projectCategories: ProjectCategories[] = [
  {
    title: 'Notion Clone',
    category: 'Full Stack Web Application',
    description:
      'Notionを参考に開発したフルスタックWebアプリ。JWT認証、階層メモ管理、編集履歴復元、リアルタイム保存、ダークモードなど実用的な機能を実装。React + Redux Toolkitによる状態管理と、Express / MongoDBによるREST API設計を用いて構築しました。',
    tech: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'MUI',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      '...',
    ],
    // github: 'https://github.com/xxxx',
    demo: '/videos/notion_clone.mp4',
    videoSrc: '/videos/notion_clone.mp4',
    // thumbnail: '/images/portfolio/notion_clone.webp',
  },
  // 次のプロジェクトを追加する際はここをコピー
  {
    title: 'Slack Clone',
    category: 'Full Stack Application',
    description:
      'Slackを参考に開発したリアルタイムチャットアプリ。Socket.IOによる双方向通信を用いて、メッセージ送受信・ワークスペース招待・チャンネル更新を即時同期。JWT認証、画像アップロード、ユーザー情報編集などの機能を実装し、React + Redux Toolkitによる状態管理と、Express / MongoDBによるAPI設計を用いて構築しました。',
    tech: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'MUI',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Socket.IO',
      'JWT',
      '...',
    ],
    // github: 'https://github.com/xxxx',
    demo: '/videos/slack_clone.mp4',
    videoSrc: '/videos/slack_clone.mp4',
    // thumbnail: '/images/portfolio/slack_clone.png',
  },
  // 次のプロジェクトを追加する際はここをコピー
  {
    title: 'Blog Platform',
    category: 'Full Stack Web Application',
    description:
      'Next.jsを用いて開発したブログアプリ。Auth.jsによる認証機能、記事CRUD、プロフィール編集、画像アップロード、公開/非公開管理などを実装。Prisma + SQLiteによるデータ管理と、App Routerを活用したモダンな構成で構築しました。',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Auth.js',
      'Prisma',
      'SQLite',
      'Zod',
      'Axios',
      'Radix UI',
      '...',
    ],
    // github: 'https://github.com/xxxx',
    demo: '/videos/blog.mp4',
    videoSrc: '/videos/blog.mp4',
    // thumbnail: '/images/portfolio/blog.png',
  },
];
