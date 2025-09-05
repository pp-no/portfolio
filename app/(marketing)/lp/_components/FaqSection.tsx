import React from 'react';

export default function FaqSection() {
	const faq = [
		{
			q: '無料トライアルはありますか？',
			a: 'はい、14日間の無料期間をご利用いただけます。機能制限はありません。',
		},
		{
			q: 'サポート体制は？',
			a: 'メール/チャットにて平日 9:00〜17:00 に対応します。ドキュメントもご用意しています。',
		},
		{
			q: 'セキュリティは大丈夫？',
			a: '通信は全てTLSで暗号化。データは暗号化保管し、監査ログを取得しています。',
		},
	];
	return (
		<section id="faq" className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-center text-2xl font-semibold sm:text-3xl">よくある質問</h2>
				<div className="mx-auto mt-8 max-w-3xl divide-y rounded-2xl border bg-white shadow-sm">
					{faq.map((f, i) => (
						<details key={f.q} className="group p-6 open:bg-gray-50">
							<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
								{i + 1}. {f.q}
								<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs group-open:rotate-45">
									＋
								</span>
							</summary>
							<p className="mt-3 text-sm text-gray-600">{f.a}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
