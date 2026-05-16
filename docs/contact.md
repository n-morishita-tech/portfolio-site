# 📩 Contactページ設計（View構成）

## 🎯 目的

Contact機能を「View / UI / ロジック」で分離し、再利用性・保守性・拡張性を向上させる。

---

## 🗂️ ディレクトリ構成

```
src/
├── app/
│   └── (site)/
│       └── contact/
│           └── page.tsx
│
├── features/
│   └── contact/
│       ├── components/
│       │   ├── ContactView.tsx     # レイアウト・背景・アニメーション
│       │   ├── ContactForm.tsx     # フォームUI
│       │   └── ContactSuccess.tsx  # 送信成功UI
│       │
│       ├── hooks/
│       │   └── useContactForm.ts   # 状態管理・送信処理
│       │
│       ├── schema/
│       │   └── contactSchema.ts    # zodバリデーション
│       │
│       ├── services/
│       │   └── sendContact.ts      # API通信
│       │
│       └── types/
│           └── contact.ts          # 型定義
```

---

## 🧠 設計思想

### ① page.tsx（エントリーポイント）

```tsx
import { ContactView } from '@/features/contact/components/ContactView';

export default function ContactPage() {
  return <ContactView />;
}
```

👉 **ルーティングのみ**

---

### ② ContactView（View層）

- 背景
- レイアウト
- アニメーション

```tsx
<ContactForm />
```

👉 UIを包む「外側の構造」

---

### ③ ContactForm（UI層）

- 入力フォーム
- エラー表示
- ローディング
- 送信処理呼び出し

👉 **ロジックは持たない**

---

### ④ useContactForm（ロジック層）

- form状態管理
- バリデーション（zod）
- API送信
- エラーハンドリング
- loading / success制御

---

### ⑤ ContactSuccess（状態UI）

- 送信成功時の表示

👉 UI状態ごとに分離

---

## 🔄 データフロー

```
入力
 ↓
handleChange
 ↓
zodバリデーション
 ↓
handleSubmit
 ↓
API（sendContact）
 ↓
成功 → ContactSuccess
失敗 → エラー表示 / toast
```

---

## 🎯 改善ポイント

### Before

- page.tsxに全て記述
- UI・ロジック混在

---

### After

- View / UI / ロジック分離
- 再利用可能
- 保守性向上

---

## 🚀 拡張性

- toast通知（sonner）
- リアルタイムバリデーション
- 多言語対応
- CMS連携

---

## 🎯 まとめ

Contact機能をView層で包むことで、

- UIとレイアウトの分離
- ロジックの独立性
- 再利用性

を実現した。

👉 **実務レベルの設計に改善**
