'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Mail, ExternalLink, Moon, Sun, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';

/**
 * app/page.tsx（Next.js App Router）
 * - 拡張子: .tsx
 * - このファイルを app/page.tsx として保存してください
 * - Tailwind が有効な前提（layout.tsx と globals.css の設定は本文参照）
 */

// ===== 型定義 =====
interface Project {
	title: string;
	description: string;
	tech: string[];
	link?: string; // 外部リンク（任意）
	image?: string; // サムネイル画像（任意）
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
				title: 'Nuxt.js yahoo記事表示',
				description:
					'Nuxt.js を利用した yahooニュースの最新記事5件表示。',
				tech: ['Nuxt.js', 'TypeScript', 'RSS'],
				link: 'https://github.com/pp-no/nuxt-yahoo-ai-lp',
				image: '',
			},
			{
				title: 'Smarty SSG LP実装',
				description:
					'Smarty (PHPテンプレートエンジン) を用いた SSG (静的サイトジェネレーター) のサンプルLP環境。ファッション系用にサンプルLPの作成。',
				tech: ['Smarty', 'PHP', 'SSG', 'LP'],
				link: 'https://my-ssg-site-wcl5.onrender.com/',
				image: '',
			},
			{
				title: 'ASP.NET C# Web 開発',
				description:
					'ASP.NET C# を用いた Web 開発の初期実装。簡単な環境構築とSQLiteからデータを取得しリストページを表示。今後は CRUD システムとして拡張予定。',
				tech: ['ASP.NET', 'C#', 'SQLite'],
				link: 'https://github.com/pp-no/my-dotNet-site',
				image: '',
			},
			{
				title: 'サンプルLP',
				description:
					'スターバックス風のキャンペーンLPを HTML / CSS / jQuery だけで再現したテンプレートです。',
				tech: ['HTML', 'CSS', 'jQuery'],
				link: 'https://static-sample-lp.onrender.com/',
				image: '',
			},
			{
				title: 'サンプルLP (Next.js)',
				description:
					'Next.js と TailwindCSS を用いたWeb/ソフトウェア業サンプルのランディングページ。SEOを意識したコーディングと、レスポンシブ対応、アクセシビリティにも配慮。',
				tech: ['Next.js', 'LP', 'TailwindCSS'],
				link: 'https://portfolio-rouge-two-50.vercel.app/lp',
				image: '',
			},
			{
				title: 'Google Maps JS API',
				description:
					'新しい読み込み方式（importLibrary）”＋Geocoding API＋AdvancedMarker利用で地図表示。入力キーワードで住所検索し、地図にマーカー表示。',
				tech: ['jQuery', 'GoogleMaps'],
				link: 'https://github.com/pp-no/my-google-map',
				image: '',
			},
		],
		[],
	);

export default function Page() {
	const projects = useProjects();

	// 初期テーマ: localStorage > OS 設定
	useEffect(() => {
		try {
			const saved = localStorage.getItem('theme');
			if (saved === 'dark') setDark(true);
			else if (saved === 'light') setDark(false);
			else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
				setDark(true);
		} catch (_) {
			// no-op
		}
	}, []);
	const [dark, setDark] = useState(true);

	// 画面ロード時にダークモード初期化（任意）
	useEffect(() => {
		// HTML要素に dark クラスを付け外し（Tailwind v4 ではこれが最も確実）
		const root = document.documentElement;
		root.classList.toggle('dark', dark);
		root.style.colorScheme = dark ? 'dark' : 'light';
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch (_) {}
	}, [dark]);

	return (
		<div className={dark ? 'dark' : ''}>
			<div className="min-h-screen bg-white text-gray-900 antialiased scroll-smooth dark:bg-gray-950 dark:text-gray-100">
				{/* ===== ナビゲーション ===== */}
				<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:supports-[backdrop-filter]:bg-gray-950/60 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
					<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
						<a href="#home" className="font-semibold tracking-tight text-lg">
							oki<span className="text-primary">.</span>portfolio
						</a>
						<nav className="hidden sm:flex items-center gap-6 text-sm">
							<a className="hover:opacity-80" href="#about">
								About
							</a>
							<a className="hover:opacity-80" href="#work">
								Work
							</a>
							<a className="hover:opacity-80" href="#contact">
								Contact
							</a>
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
								className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
								onClick={() => setDark(v => !v)}
								aria-label="Toggle theme"
								title="Toggle theme"
							>
								{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
							</button>
						</nav>
					</div>
				</header>

				{/* ===== Hero ===== */}
				<section id="home" className="relative overflow-hidden">
					{/* 背景のグラデーション装飾 */}
					<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
						<div className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-400 via-sky-400 to-cyan-400 dark:from-indigo-600 dark:via-sky-700 dark:to-cyan-700" />
					</div>

					<div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
						<p className="text-sm font-medium tracking-widest text-gray-600 dark:text-gray-400 uppercase">
							Web Engineer
						</p>
						<h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">
							ウェブ開発のプロ
							<span className="block bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
								5年以上の経験で安心サポート！
							</span>
						</h1>
						<p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300">
							SE、Web業務と比較的Web開発の経験が多く、フルスタックの経験もあり！
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="#work"
								className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
							>
								個人制作物を見る
								<ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
							</a>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
							>
								お問い合わせ
							</a>
						</div>
					</div>
				</section>

				{/* ===== About ===== */}
				<section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
					<div className="grid grid-cols-1 gap-10 sm:grid-cols-5">
						<div className="sm:col-span-2">
							<h2 className="text-2xl font-bold sm:text-3xl">自己紹介</h2>
							<p className="mt-3 text-gray-600 dark:text-gray-300">
								バックエンドエンジニアとしては、
								PHPやASP.NETC#、C++と多様なプロジェクトに取り組んだ経験もあります。
								<br />
								3〜4年のPHPの実務経験を活かし、特にSQLを利用したデータ処理やセキュリティを意識したサーバーサイドのロジック作成の強みもあります。
								<br />
								フロントエンドエンジニアとしても経験があり、SEOを意識したコーディング、jQueryに加えてReactやNext.jsにも取り組んでいます。(本ページもNext.jsになります。)開発全般に関して広範な知識を深めていくことを目指しています。
								<br />
								今後は、メインとしてフロントエンドを中心に業務に携わりますが、バックエンドの知識や技術もありますので適材適所でフルスタック対応も可能です。
								<br />
								新しい技術や開発手法を積極的に取り入れ、より良いシステムを作り上げるために努力を惜しまない所存です。これからの成長を通じて、より多くのプロジェクトに貢献できることを楽しみにしています。
							</p>
							<ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
								<li>経験例：</li>
								<li>・HTML / SASS（CSS） / Javascript</li>
								<li>・PHP / ASP.NET C# / C++</li>
								<li>・Jquery / React / Next.js / TypeScript</li>
								<li>・Node.js / TailwindCSS / REST</li>
								<li>・リファクタリング / パフォーマンス最適化</li>
							</ul>
						</div>

						<div className="sm:col-span-3">
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
											className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4"
										>
											<div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
												{item.k}
											</div>
											<div className="mt-1 font-medium">{item.v}</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ===== Work ===== */}
				<section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
					<div className="flex items-end justify-between gap-4">
						<div>
							<h2 className="text-2xl font-bold sm:text-3xl">個人制作物</h2>
							<p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
								最近の個人製作物の取り組みを抜粋しています。 ※実務経験は別途資料で送付いたします。
							</p>
						</div>
					</div>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map(p => (
							<a
								key={p.title}
								href={p.link}
								target="_blank"
								rel="noreferrer"
								className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 p-6 hover:shadow-lg transition block"
							>
								{/* 疑似サムネイル */}
								<div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center">
									{p.image ? (
									<Image
										src={p.image}
										alt={p.title}
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
										priority={false}
									/>
									) : (
									<div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center">
										<span className="text-sm text-gray-500 dark:text-gray-400">{p.title}</span>
									</div>
									)}
								</div>
								<h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
								<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
								<div className="mt-3 flex flex-wrap gap-2">
									{p.tech.map(t => (
										<span
											key={t}
											className="text-xs rounded-full border border-gray-300 dark:border-gray-700 px-2.5 py-1 text-gray-700 dark:text-gray-300"
										>
											{t}
										</span>
									))}
								</div>

								{/* hover時のグロー */}
								<div
									aria-hidden
									className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
								>
									<div className="absolute -inset-[30%] bg-gradient-to-tr from-indigo-400/10 via-sky-400/10 to-cyan-400/10 blur-2xl" />
								</div>
							</a>
						))}
					</div>
				</section>

				{/* ===== Contact ===== */}
				<section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
					<div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-8 sm:p-12 text-center bg-white/70 dark:bg-gray-900/50">
						<h2 className="text-2xl font-bold sm:text-3xl">お問い合わせ</h2>
						<p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							業務委託・副業・スポット相談などお気軽に。GitHub やメールからご連絡ください。
						</p>
						<div className="mt-6 flex flex-wrap justify-center gap-3">
							<a
								href={`mailto:onryki.work@gmail.com?subject=${encodeURIComponent(
									'お問い合わせ（ポートフォリオLP）',
								)}&body=${encodeURIComponent('お名前：\nご用件：\n')}`}
								className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
							>
								<Mail className="h-4 w-4" /> メールで相談する
							</a>

							<a
								href="https://github.com/pp-no"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-300 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
							>
								<SiGithub className="h-4 w-4" /> GitHub を見る
							</a>
						</div>
					</div>
				</section>

				{/* ===== フッター ===== */}
				<footer className="py-10 text-center text-xs text-gray-500 dark:text-gray-400">
					© {new Date().getFullYear()} oki. Built with Next.js & TailwindCSS.
				</footer>
			</div>
		</div>
	);
}
