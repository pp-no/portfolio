'use client';
import React from 'react';

export default function TopInfoBar() {
	return (
		<div className="border-b bg-gray-50">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm text-gray-700 sm:flex-row">
				<div className="flex flex-wrap items-center gap-4">
					<span className="font-semibold">03-XXXX-XXXX</span>
					<span>営業時間 9:00〜17:00（⼟⽇祝除く）</span>
				</div>
				<a
					href="#cta"
					className="rounded-lg bg-emerald-600 px-3.5 py-1.5 font-medium text-white hover:bg-emerald-700"
				>
					無料で始めてみる
				</a>
			</div>
		</div>
	);
}
