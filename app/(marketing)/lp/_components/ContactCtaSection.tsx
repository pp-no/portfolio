import React from 'react';

export default function ContactCtaSection() {
	return (
		<section id="cta" className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<div className="grid items-center gap-6 rounded-2xl border bg-gradient-to-br from-gray-900 to-black p-8 text-white shadow-sm sm:grid-cols-2">
					<div>
						<p className="text-emerald-300 text-xs">＼ 今だけ無料お試し期間あり！／</p>
						<h2 className="mt-1 text-2xl font-semibold">お問合せ・資料請求</h2>
						<p className="mt-2 text-sm text-gray-300">
							まずは無料トライアルから。1分でお申し込み完了します。
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<a
							href="#contact-form"
							className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
						>
							今すぐ試してみる
						</a>
						<a
							href="#contact-form"
							className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
						>
							資料請求
						</a>
					</div>
				</div>

				<form
					id="contact-form"
					className="mt-6 grid gap-3 rounded-2xl border bg-white p-6 shadow-sm sm:grid-cols-2"
				>
					<input className="rounded-lg border px-3 py-2 text-sm shadow-sm" placeholder="お名前" />
					<input
						type="email"
						className="rounded-lg border px-3 py-2 text-sm shadow-sm"
						placeholder="メールアドレス"
					/>
					<input
						className="rounded-lg border px-3 py-2 text-sm shadow-sm sm:col-span-2"
						placeholder="会社名（任意）"
					/>
					<textarea
						className="rounded-lg border px-3 py-2 text-sm shadow-sm sm:col-span-2"
						rows={4}
						placeholder="お問い合わせ内容"
					/>
					<button className="sm:col-span-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
						送信する
					</button>
				</form>
			</div>
		</section>
	);
}
