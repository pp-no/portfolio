'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
	interface Window {
		dataLayer: Array<Record<string, unknown>>;
	}
}

/**
 * GTM 初期化 + SPA ページ遷移の page_view 発火
 */
const Gtm: React.FC = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

	// dataLayer 準備
	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
	}, []);

	// ルート変更で page_view を dataLayer へ送る
	useEffect(() => {
		if (!pathname) return;
		const url = searchParams?.toString() ? `${pathname}?${searchParams.toString()}` : pathname;

		window.dataLayer.push({
			event: 'page_view',
			page_path: url,
			page_location: window.location.href,
			page_title: document.title,
		});

		// GTM 側で Custom Event を拾いたい場合は以下に切替:
		// window.dataLayer.push({ event: 'route_change', page_path: url });
	}, [pathname, searchParams]);

	if (!gtmId) return null;

	return (
		<>
			{/* Official GTM snippet (head相当) */}
			<Script id="gtm-loader" strategy="afterInteractive">
				{`
                (function(w,d,s,l,i){w[l]=w[l]||[];
                    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
                `}
			</Script>
		</>
	);
};

export default Gtm;
