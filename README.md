# OKI — Web Engineer Portfolio

エンジニア歴10年の経験、個人制作、開発への取り組みを紹介するポートフォリオです。実務経験の詳細は別資料で共有し、掲載作品は個人開発と明記しています。

## セットアップ

```bash
npm ci
npm run dev
```

http://localhost:3000 を開いて確認します。

## 構成と更新

- `app/page.tsx`: トップページ。制作物、技術領域、自己紹介、連絡先を管理します。
- `app/page.module.css`: トップページ専用の配色・レイアウト・レスポンシブ対応。
- `app/layout.tsx`: 日本語設定、メタデータ、GTM。
- `public/img/`: 制作物のスクリーンショット。
- `/lp`: 既存の別ランディングページ。

Next.js App Router / TypeScript / Tailwind CSS v4 / CSS Modules を使用。トップページはServer Componentで、不要なクライアントアニメーションを読み込みません。GTMを利用する場合のみ `.env.local` に `NEXT_PUBLIC_GTM_ID` を設定してください。

## デザイン方針

[Minimal Gallery](https://minimal.gallery/)を参照し、明るい背景、スレートブルー、余白とタイポグラフィを中心に構成。装飾用のヒーロー写真やカードの多用を避け、実際の制作画面と開発への考え方を主役にしています。テーマ切り替えはありません。

キーボードフォーカス、本文へのスキップリンク、動きを減らす設定に対応しています。外部作品は新しいタブで開き、メールリンクは端末のメールアプリを起動します。

## 検証

```bash
npm run lint
npx tsc --noEmit
npm run build
```
