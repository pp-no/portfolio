import type { Metadata } from 'next';
import './globals.css';
import Gtm from './Gtm';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'OKI — Web Engineer Portfolio',
	description:
		'バックエンド7年、フロントはReact / Next.js / TypeScript。既存システムの改善から新規実装まで、小さくつくって早く届けて、壊れにくい状態でお渡しします。業務委託・スポット相談を受付中です。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

	return (
		<html lang="ja">
			<head>
				{/* 日本語を含むため Google Fonts の動的サブセット配信を利用する
				    （next/font で日本語を自己ホストすると全サブセットを取り込むためビルドが極端に重くなる） */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				{/* App Router の layout に置いた <link> は全ページに適用されるため、
				    Pages Router 向けの no-page-custom-font は該当しない */}
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Shantell+Sans:ital,wght@0,400;0,700;0,800;1,600&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className="antialiased"
				style={{
					fontFamily:
						'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				}}
			>
				<Suspense fallback={null}>
					<Gtm />
				</Suspense>

				{gtmId ? (
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>
				) : null}

				{children}
			</body>
		</html>
	);
}
