import React from 'react';

export default function FlowSection() {
	const steps = [
		{
			title: 'お申し込み',
			desc: 'フォーム送信後、担当より1営業日以内にご連絡します。',
			img: 'https://placehold.co/400x250?text=Flow+1',
		},
		{
			title: '初期設定',
			desc: '要件をヒアリングし、最短当日で環境をご用意。',
			img: 'https://placehold.co/400x250?text=Flow+2',
		},
		{
			title: '運用開始',
			desc: 'チュートリアル実施後、すぐに現場でご利用いただけます。',
			img: 'https://placehold.co/400x250?text=Flow+3',
		},
	];
	return (
		<section id="flow" className="bg-gray-50 py-16">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-center text-2xl font-semibold sm:text-3xl">SAMPLE APPの流れ</h2>
				<div className="mt-8 grid gap-6 sm:grid-cols-3">
					{steps.map(s => (
						<div key={s.title} className="rounded-2xl border bg-white p-4 shadow-sm">
							<div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
								<img src={s.img} alt={s.title} className="h-full w-full object-cover" />
							</div>
							<h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
							<p className="text-sm text-gray-600">{s.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
