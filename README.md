# simple-lp — Portfolio (Next.js + Tailwind v4)

個人ポートフォリオ用の LP（Landing Page）です。  
**Next.js (App Router, TypeScript)** と **Tailwind CSS v4** で構築し、自己紹介／制作物／お問い合わせを掲載しています。

- Demo (local): http://localhost:3000
- Tech: Next.js / React / TypeScript / Tailwind CSS v4 / lucide-react / react-icons

---

## ✨ About This Portfolio

このリポジトリ自体が **ポートフォリオWebサイト** です。  
ほかの制作物（Live / Repo）は以下の通り（`app/page.tsx` 内の `useProjects()` で管理）：

1. **Next.js Todo アプリ（開発中）**  
   - Live (Vercel): https://todo-next-kappa-wheat.vercel.app  
   - Repo: https://github.com/pp-no/todo-next  
   - Status: CRUD（登録・編集・削除）動作済み。破壊的操作可（自由に追加・編集・削除OK）

2. **Smarty SSG テスト実装**  
   - Repo: https://github.com/pp-no/my-ssg-site  
   - Note: Smarty（PHPテンプレートエンジン）での SSG 構成や生成方法の検証

3. **ASP.NET C# Web 開発テスト**  
   - Repo: https://github.com/pp-no/my-dotNet-site  
   - Note: 初期環境構築とページ表示のみ。今後 CRUD に拡張予定

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
