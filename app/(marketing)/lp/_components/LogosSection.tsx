import React from 'react';

export default function LogosSection() {
	const logos = new Array(12)
		.fill(0)
		.map((_, i) => `https://placehold.co/120x40?text=Logo+${i + 1}`);
	return (
		<section id="logos" className="py-16">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-center text-2xl font-semibold sm:text-3xl">SAMPLE APPの活用実績</h2>
				<div className="mt-8 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4 lg:grid-cols-6">
					{logos.map(src => (
						<div
							key={src}
							className="flex items-center justify-center rounded border bg-white px-4 py-3 shadow-sm"
						>
							<img src={src} alt="logo" className="h-6 w-auto" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
