import React from 'react';

export default function ReasonsSection() {
	const items = [
		'導入〜運用まで専任チームが伴走',
		'シンプルUIで現場がすぐに使いこなせる',
		'外部サービス連携（Slack / Google / LINE）',
		'万全のセキュリティ（SOC2 / ISO27001 相当）',
	];
	return (
		<section id="reasons" className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-center text-2xl font-semibold sm:text-3xl">
					SAMPLE APPをおすすめする理由
				</h2>
				<ul className="mx-auto mt-8 grid max-w-4xl gap-3 rounded-2xl border bg-white p-6 shadow-sm sm:grid-cols-2">
					{items.map(t => (
						<li key={t} className="flex items-start gap-2 text-sm">
							<span className="mt-1 inline-block h-5 w-5 rounded-full bg-emerald-600 text-white">
								✓
							</span>
							<span>{t}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
