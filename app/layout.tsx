import type { Metadata } from 'next';
import './globals.css';
import Gtm from './Gtm';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'OKI — Web Engineer Portfolio',
	description: 'エンジニア歴10年。フロントエンドからバックエンドまで、使う人と引き継ぐ人に向き合うWeb開発。OKIの個人制作と開発への取り組みをご紹介します。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

	return (
		<html lang="ja">
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
