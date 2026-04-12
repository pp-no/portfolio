import type { Metadata } from 'next';
import './globals.css';
import Gtm from './Gtm';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'ポートフォリオ',
	description: 'Next.jsによるポートフォリオの作成',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

	return (
		<html lang="en">
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
