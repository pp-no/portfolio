// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Gtm from './Gtm';
import { Suspense } from 'react'; // ← 追加

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ポートフォリオ',
	description: 'Next.jsによるポートフォリオの作成',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{/* GTM (JS) は Suspense でラップ */}
				<Suspense fallback={null}>
					<Gtm />
				</Suspense>

				{/* GTM (noscript) */}
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
