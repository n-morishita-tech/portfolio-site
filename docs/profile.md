# 👤 Profileページ設計（View構成）

## 🎯 目的

Profileページを「View / UI / データ / ロジック」で分離し、可読性・拡張性・再利用性を向上させる。

---

## 🗂️ ディレクトリ構成

```
src/
├── app/
│   └── (site)/
│       └── profile/
│           └── page.tsx
│
├── features/
│   └── profile/
│       ├── components/
│       │   ├── ProfileView.tsx        # 画面構成
│       │   ├── HeroSection.tsx        # 自己紹介
│       │   ├── SkillSection.tsx       # スキル一覧
│       │   ├── SkillCard.tsx          # スキルカード
│       │   └── CertificationSection.tsx
│       │
│       ├── data/
│       │   ├── skills.ts
│       │   └── certifications.ts
│       │
│       ├── hooks/
│       │   └── useSkillHover.ts
│       │
│       └── types/
│           └── skill.ts
```

---

## 🧠 設計思想

### ① page.tsx

```tsx
import { ProfileView } from '@/features/profile/components/ProfileView';

export default function ProfilePage() {
  return <ProfileView />;
}
```

👉 **エントリーポイントのみ**

---

### ② ProfileView（View層）

```tsx
<HeroSection />
<SkillSection />
<CertificationSection />
```

👉 ページ構成をまとめる

---

### ③ Sectionコンポーネント

#### HeroSection

- アイコン
- 自己紹介
- 初期アニメーション

---

#### SkillSection

- カテゴリごとの表示
- gridレイアウト
- animation制御

---

#### SkillCard

- ロゴ
- hoverエフェクト
- スキルレベル表示

---

#### CertificationSection

- 資格一覧
- ターミナル風UI

---

### ④ data分離

```ts
skills.ts;
certifications.ts;
```

👉 UIとデータを切り離す

---

### ⑤ hooks分離

```ts
useSkillHover.ts;
```

👉 hover演出ロジック

---

## 🎬 アニメーション設計

- Section → 制御
- Card → 表現

```tsx
initial = 'hidden';
whileInView = 'visible';
```

---

## 🎯 改善ポイント

### Before

- page.tsxにロジック集中
- 可読性低い

---

### After

- View導入
- Section分割
- data / hooks分離

---

## 🔗 Contactとの統一

| 項目      | Contact     | Profile     |
| --------- | ----------- | ----------- |
| View層    | ContactView | ProfileView |
| UI分離    | Form        | Section     |
| hooks分離 | ✅          | ✅          |
| data分離  | -           | ✅          |

👉 **設計統一**

---

## 🚀 拡張性

- フィルタ機能
- 多言語対応
- CMS連携
- アニメーション強化

---

## 🎯 まとめ

View層を導入することで、

- ページ構成の明確化
- UIの分離
- 拡張性向上

を実現した。

👉 **プロダクトとして一貫性のある設計**
