'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Mail, Moon, Sun, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';

// ===== アニメーション設定 =====
const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};
const fade = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

// ===== 型定義 =====
interface Project {
	title: string;
	description: string;
	tech: string[];
	link?: string;
	image?: string;
}

const useProjects = (): Project[] =>
	useMemo(
		() => [
			{
				title: 'Next.js Todo アプリ (開発中)',
				description:
					'Next.js を利用した CRUD システム。登録・編集・削除は動作済み。破壊的操作可。個人開発用のため自由に追加・編集・削除して問題ありません。',
				tech: ['Next.js', 'TypeScript', 'CRUD'],
				link: 'https://todo-next-kappa-wheat.vercel.app',
				image: '/img/img_next_todo.png',
			},
			{
				title: 'Nuxt.js TODOアプリ',
				description: 'Nuxt.js を利用した CRUD システム。登録・編集・削除は動作済み。破壊的操作可。個人開発用のため自由に追加・編集・削除して問題ありません。',
				tech: ['Nuxt.js', 'TypeScript', 'CRUD'],
				link: 'https://nuxt-todo-wine.vercel.app/',
				image: '/img/img_nuxt_todo.png',
			},
			{
				title: 'Nuxt.js yahoo記事表示',
				description: 'Nuxt.js を利用した yahooニュースの最新記事5件表示。',
				tech: ['Nuxt.js', 'TypeScript', 'RSS'],
				link: 'https://nuxt-yahoo-ai-lp.vercel.app/',
				image: '/img/img_nuxt_yahoo.png',
			},
			{
				title: 'Smarty SSG LP実装',
				description:
					'Smarty (PHPテンプレートエンジン) を用いた SSG のサンプルLP。ファッション系のレイアウトで実装。',
				tech: ['Smarty', 'PHP', 'SSG', 'LP'],
				link: 'https://my-ssg-site-wcl5.onrender.com/',
				image: '/img/img_fashion_lp.png',
			},
			{
				title: 'ASP.NET C# Web 開発',
				description:
					'ASP.NET C# で初期実装。SQLiteからデータ取得しリスト表示。今後 CRUD 拡張予定。',
				tech: ['ASP.NET', 'C#', 'SQLite'],
				link: 'https://github.com/pp-no/my-dotNet-site',
				image: '',
			},
			{
				title: 'サンプルLP',
				description: 'スターバックス風のキャンペーンLP（HTML / CSS / jQuery）。',
				tech: ['HTML', 'CSS', 'jQuery'],
				link: 'https://static-sample-lp.onrender.com/',
				image: '/img/img_stuba_lp.png',
			},
			{
				title: 'サンプルLP (Next.js)',
				description:
					'Next.js + TailwindCSS のLP。SEO/レスポンシブ/アクセシビリティを意識して実装。',
				tech: ['Next.js', 'LP', 'TailwindCSS'],
				link: 'https://portfolio-rouge-two-50.vercel.app/lp',
				image: '/img/img_soft_lp.png',
			},
			{
				title: 'Google Maps JS API',
				description: 'importLibrary + Geocoding + AdvancedMarker。住所検索→地図にマーカー表示。',
				tech: ['jQuery', 'GoogleMaps'],
				link: 'https://github.com/pp-no/my-google-map',
				image: '',
			},
		],
		[],
	);

export default function Page() {
	const projects = useProjects();

	// --- Hydration-safe テーマ制御 ---
	// SSR/初回は必ず light で描画（サーバHTMLと一致させる）
	const [mounted, setMounted] = useState(false);
	const [dark, setDark] = useState(false);

	// 初回マウント後にだけ保存値/OS設定を反映
	useEffect(() => {
		try {
			const saved = localStorage.getItem('theme');
			const initial =
				saved === 'dark'
					? true
					: saved === 'light'
					? false
					: window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

			setDark(initial);

			const root = document.documentElement;
			root.classList.toggle('dark', initial);
			root.style.colorScheme = initial ? 'dark' : 'light';
		} catch {}
		setMounted(true);
	}, []);

	// 以降のトグル変更を反映
	useEffect(() => {
		if (!mounted) return;
		const root = document.documentElement;
		root.classList.toggle('dark', dark);
		root.style.colorScheme = dark ? 'dark' : 'light';
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {}
	}, [dark, mounted]);

	return (
		<div className="min-h-screen bg-white text-gray-900 antialiased scroll-smooth dark:bg-gray-950 dark:text-gray-100">
			{/* ===== ナビゲーション ===== */}
			<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/60 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
				<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
					<a href="#home" className="font-semibold tracking-tight text-lg">
						oki<span className="text-primary">.</span>portfolio
					</a>
					<nav className="hidden sm:flex items-center gap-6 text-sm">
						{[
							{ href: '#about', label: 'About' },
							{ href: '#work', label: 'Work' },
							{ href: '#contact', label: 'Contact' },
						].map(item => (
							<a
								key={item.href}
								href={item.href}
								className="relative hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-cyan-500 after:transition-[width] after:duration-300 hover:after:w-full opacity-90"
							>
								{item.label}
							</a>
						))}

						<a
							className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
							href="https://github.com/pp-no"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<SiGithub className="h-4 w-4" />
							<span className="hidden md:inline">GitHub</span>
						</a>

						<button
							type="button"
							className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
							onClick={() => setDark(v => !v)}
							aria-label="Toggle theme"
							title="Toggle theme"
							suppressHydrationWarning
						>
							{/* マウント前は Moon 固定で描画差分を回避 */}
							{mounted ? (
								dark ? (
									<Sun className="h-4 w-4" />
								) : (
									<Moon className="h-4 w-4" />
								)
							) : (
								<Moon className="h-4 w-4" />
							)}
						</button>
					</nav>
				</div>
			</header>

			{/* ===== Hero ===== */}
			<section id="home" className="relative overflow-hidden">
				{/* 背景のグラデーション装飾 */}
				<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
					<motion.div
						className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-400 via-sky-400 to-cyan-400 dark:from-indigo-600 dark:via-sky-700 dark:to-cyan-700"
						initial={{ scale: 0.95, rotate: 0 }}
						animate={{ scale: 1, rotate: 6 }}
						transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
					/>
				</div>

				<div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
					<motion.p
						className="text-sm font-medium tracking-widest text-gray-600 dark:text-gray-400 uppercase"
						variants={fade}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-10% 0px' }}
					>
						Web Engineer
					</motion.p>

					<motion.h1
						className="mt-3 text-4xl font-bold leading-tight sm:text-6xl"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						ウェブ開発のプロ
						<span className="block bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
							5年以上の経験で安心サポート！
						</span>
					</motion.h1>

					<motion.p
						className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						SE、Web業務と比較的Web開発の経験が多く、フルスタックの経験もあり！
					</motion.p>

					<motion.div
						className="mt-8 flex flex-wrap gap-3"
						variants={stagger}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.a
							variants={fadeUp}
							href="#work"
							className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							個人制作物を見る
							<ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0 group-hover:translate-x-0.5" />
						</motion.a>

						<motion.a
							variants={fadeUp}
							href="#contact"
							className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							お問い合わせ
						</motion.a>
					</motion.div>
				</div>
			</section>

			{/* ===== About ===== */}
			<section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
				<motion.div
					className="grid grid-cols-1 gap-10 sm:grid-cols-5"
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-10% 0px' }}
				>
					<motion.div className="sm:col-span-2" variants={fadeUp}>
						<h2 className="text-2xl font-bold sm:text-3xl relative inline-block">
							自己紹介
							<span className="absolute left-0 -bottom-2 h-[3px] w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
						</h2>
						<p className="mt-3 text-gray-600 dark:text-gray-300">
							バックエンドエンジニアとしては、
							PHPやASP.NETC#、C++と多様なプロジェクトに取り組んだ経験もあります。
							<br />
							3〜4年のPHPの実務経験を活かし、MVCモデルを活用したスクラッチ開発やSQLを利用したデータ処理やセキュリティを意識したサーバーサイドのロジック作成の強みもあります。
							<br />
							フロントエンドエンジニアとしても経験があり、SEOを意識したコーディング、jQueryに加えてReactやNext.jsにも取り組んでいます。(本ページもNext.jsになります。)開発全般に関して広範な知識を深めていくことを目指しています。
							<br />
							今後は、メインとしてフロントエンドを中心に業務に携わりますが、バックエンドの知識や技術もありますので適材適所でフルスタック対応も可能です。
							<br />
							新しい技術や開発手法を積極的に取り入れ、より良いシステムを作り上げるために努力を惜しまない所存です。これからの成長を通じて、より多くのプロジェクトに貢献できることを楽しみにしています。
						</p>
						<ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
							<li>経験例：</li>
							<li>・HTML / SASS（CSS） / JavaScript</li>
							<li>・PHP / ASP.NET C# / C++</li>
							<li>・jQuery / React / Next.js / TypeScript</li>
							<li>・Node.js / TailwindCSS / REST</li>
							<li>・リファクタリング / パフォーマンス最適化</li>
						</ul>
					</motion.div>

					<motion.div className="sm:col-span-3" variants={fadeUp}>
						<div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
							<h3 className="font-semibold">価値観</h3>
							<p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
								小さく作って素早く届ける。SEOを意識した可読性の高いコード、堅牢なエラーハンドリング、段階的な導入でプロダクトを安定させます。
							</p>
							<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
								{[
									{ k: '品質', v: 'AIと連携しバグの少なさとテスト' },
									{ k: '速度', v: '過剰設計を避けた実装' },
									{ k: '継続', v: '運用しやすさと改善' },
								].map(item => (
									<div
										key={item.k}
										className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
									>
										<div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
											{item.k}
										</div>
										<div className="mt-1 font-medium">{item.v}</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</motion.div>
			</section>

			{/* ===== Work ===== */}
			<section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
				<div className="flex items-end justify-between gap-4">
					<div>
						<h2 className="text-2xl font-bold sm:text-3xl relative inline-block">
							個人制作物
							<span className="absolute left-0 -bottom-2 h-[3px] w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
						</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
							最近の個人製作物の取り組みを抜粋しています。 ※実務経験は別途資料で送付いたします。
						</p>
					</div>
				</div>

				<motion.div
					className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-10% 0px' }}
				>
					{projects.map(p => (
						<motion.a
							key={p.title}
							href={p.link}
							target="_blank"
							rel="noreferrer"
							className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 block"
							variants={fadeUp}
							whileHover={{ y: -6, scale: 1.005 }}
							whileTap={{ scale: 0.995 }}
						>
							{/* サムネ */}
							<div className="aspect-video relative overflow-hidden rounded-2xl">
								{p.image ? (
									<Image
										src={p.image}
										alt={p.title}
										fill
										className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
										sizes="(min-width:1280px) 360px, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
										priority={false}
									/>
								) : (
									<div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-cyan-950 flex items-center justify-center">
										<span className="text-sm text-gray-500 dark:text-gray-400">{p.title}</span>
									</div>
								)}
								{/* 軽いグロー */}
								<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
									<div className="absolute -inset-[30%] bg-gradient-to-tr from-indigo-400/10 via-sky-400/10 to-cyan-400/10 blur-2xl" />
								</div>
							</div>

							<h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
							<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>

							<div className="mt-3 flex flex-wrap gap-2">
								{p.tech.map(t => (
									<span
										key={t}
										className="text-xs rounded-full border border-gray-300 dark:border-gray-700 px-2.5 py-1 text-gray-700 dark:text-gray-300 transition hover:-translate-y-0.5"
									>
										{t}
									</span>
								))}
							</div>
						</motion.a>
					))}
				</motion.div>
			</section>

			{/* ===== Contact ===== */}
			<section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
				<motion.div
					className="rounded-3xl border border-gray-200 dark:border-gray-800 p-8 sm:p-12 text-center bg-white/70 dark:bg-gray-900/50"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<h2 className="text-2xl font-bold sm:text-3xl">お問い合わせ</h2>
					<p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						業務委託・副業・スポット相談などお気軽に。GitHub やメールからご連絡ください。
					</p>
					<div className="mt-6 flex flex-wrap justify-center gap-3">
						<motion.a
							href={`mailto:onryki.work@gmail.com?subject=${encodeURIComponent(
								'お問い合わせ（ポートフォリオLP）',
							)}&body=${encodeURIComponent('お名前：\nご用件：\n')}`}
							className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<Mail className="h-4 w-4" /> メールで相談する
						</motion.a>

						<motion.a
							href="https://github.com/pp-no"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<SiGithub className="h-4 w-4" /> GitHub を見る
						</motion.a>
					</div>
				</motion.div>
			</section>

			{/* ===== フッター ===== */}
			<footer className="py-10 text-center text-xs text-gray-500 dark:text-gray-400">
				{/* 年が年末年始の瞬間でズレても警告を出さないよう保険 */}
				<span suppressHydrationWarning>© {new Date().getFullYear()}</span> oki. Built with Next.js &
				TailwindCSS.
			</footer>
		</div>
	);
}
