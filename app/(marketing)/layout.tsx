import React from 'react';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* 共通ヘッダー */}
			<header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
					<div className="flex items-center gap-2">
						<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900 text-white">
							A
						</span>
						<span className="text-sm font-semibold">SAMPLE</span>
					</div>
					<nav className="hidden gap-6 text-sm sm:flex">
						<a href="/lp#reasons" className="hover:text-gray-600">
							理由
						</a>
						<a href="/lp#flow" className="hover:text-gray-600">
							流れ
						</a>
						<a href="/lp#benefits" className="hover:text-gray-600">
							メリット
						</a>
						<a href="/lp#faq" className="hover:text-gray-600">
							FAQ
						</a>
					</nav>
					<a
						href="/lp#cta"
						className="rounded-lg bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-black"
					>
						今すぐ試す
					</a>
				</div>
			</header>

			{children}

			{/* 共通フッター */}
			<footer className="mt-20 border-t bg-white">
				<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
					<p>© {new Date().getFullYear()} Acme, Inc.</p>
				</div>
			</footer>
		</>
	);
}
