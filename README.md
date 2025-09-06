# simple-lp — Portfolio (Next.js + Tailwind v4)

個人ポートフォリオ用の LP（Landing Page）です。  
**Next.js (App Router, TypeScript)** と **Tailwind CSS v4** で構築し、自己紹介／制作物／お問い合わせを掲載しています。

- Demo (local): http://localhost:3000
- Tech: Next.js / React / TypeScript / Tailwind CSS v4 / lucide-react / react-icons

---

## ✨ About This Portfolio

このリポジトリ自体が **ポートフォリオWebサイト** です。  
制作物リンクがございますのでそちらから遷移できます。

> 実務経験の詳細は別資料にて共有可能です。

---

## 🌗 Dark Mode

右上のトグルで **Light / Dark** を切替。  
初期値は `localStorage('theme')` > OS の `prefers-color-scheme` > light。  
Chrome では `color-scheme` により **スクロールバーなどのネイティブUI** が先に切り替わる場合があります。  
ページ配色は `dark:*` クラスの付いた要素から切り替わります。

---

## 🛠 Tech Stack

- Framework: Next.js (App Router, TypeScript)
- Styling: Tailwind CSS v4
- Icons: lucide-react（汎用）+ react-icons（ブランド：GitHub など）
- Tooling: PostCSS（`@tailwindcss/postcss`）

---

## 🚀 Getting Started

```bash
npm run dev
# or: yarn dev / pnpm dev / bun dev
