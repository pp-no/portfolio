'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Monitor, PenTool, SquareCode, Workflow } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const fadeUp = {
	hidden: { opacity: 0, y: 18 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
	visible: {
		transition: { staggerChildren: 0.08 },
	},
};

interface Project {
	title: string;
	description: string;
	tech: string[];
	link?: string;
	image?: string;
}

// 自己紹介文は JSX から切り出して、文面調整時に構造へ触れなくて済むようにする。
const profileParagraphs = [
	'バックエンドエンジニアとしては、PHPやASP.NETC#、C++と多様なプロジェクトに取り組んだ経験もあります。',
	'3〜4年のPHPの実務経験を活かし、MVCモデルを活用したスクラッチ開発やSQLを利用したデータ処理やセキュリティを意識したサーバーサイドのロジック作成の強みもあります。',
	'フロントエンドエンジニアとしても経験があり、SEOを意識したコーディング、jQueryに加えてReactやNext.jsにも取り組んでいます。(本ページもNext.jsになります。)開発全般に関して広範な知識を深めていくことを目指しています。',
	'今後は、メインとしてフロントエンドを中心に業務に携わりますが、バックエンドの知識や技術もありますので適材適所でフルスタック対応も可能です。',
	'新しい技術や開発手法を積極的に取り入れ、より良いシステムを作り上げるために努力を惜しまない所存です。これからの成長を通じて、より多くのプロジェクトに貢献できることを楽しみにしています。',
];

const capabilityCards = [
	{
		title: 'フロントエンド',
		description: 'HTML / SASS（CSS） / JavaScript',
		icon: Monitor,
	},
	{
		title: 'バックエンド',
		description: 'PHP / ASP.NET C# / C++',
		icon: Workflow,
	},
	{
		title: 'モダン開発',
		description: 'jQuery / React / Next.js / TypeScript',
		icon: SquareCode,
	},
	{
		title: '改善対応',
		description: 'Node.js / TailwindCSS / REST / リファクタリング / パフォーマンス最適化',
		icon: PenTool,
	},
];

const valueCards = [
	{ k: '品質', v: 'AIを活用したバグの少ない実装とテスト' },
	{ k: '速度', v: '過剰設計を避けた実装' },
	{ k: '継続', v: '運用しやすさと改善' },
];

// 制作物一覧は表示コンポーネント内でのみ使うため、軽いローカルフックとして閉じ込める。
const useProjects = (): Project[] =>
	useMemo(
		() => [
			{
				title: 'Next.js Todo アプリ',
				description:
					'Next.js を利用した CRUD システム。登録・編集・削除は動作済み。破壊的操作可。個人開発用のため自由に追加・編集・削除して問題ありません。',
				tech: ['Next.js', 'TypeScript', 'CRUD', 'TailwindCSS', 'Vercel', 'CICD'],
				link: 'https://todo-next-kappa-wheat.vercel.app',
				image: '/img/img_next_todo.webp',
			},
			{
				title: 'Nuxt.js  Todo アプリ ',
				description: 'Nuxt.js を利用した CRUD システム。登録・編集・削除は動作済み。破壊的操作可。個人開発用のため自由に追加・編集・削除して問題ありません。',
				tech: ['Nuxt.js', 'TypeScript', 'CRUD', 'TailwindCSS', 'Vercel', 'CICD'],
				link: 'https://nuxt-todo-wine.vercel.app/',
				image: '/img/img_nuxt_todo.webp',
			},
			{
				title: 'Nuxt.js yahoo記事表示',
				description: 'Nuxt.js を利用した yahooニュースの最新記事5件表示。',
				tech: ['Nuxt.js', 'TypeScript', 'RSS'],
				link: 'https://nuxt-yahoo-ai-lp.vercel.app/',
				image: '/img/img_nuxt_yahoo.webp',
			},
			{
				title: 'ruby on rails ECサイト',
				description:
					'AIハーネス設計(planner,generator,evaluater)によるAI連携で、ECサイトの基本機能を実装。商品登録、カート、購入フローを構築。\n※無料ホスティングの都合で、初回アクセス時はスリープ復帰のため数十秒かかる場合があります',
				tech: ['Ruby', 'Rails', 'EC', 'SQLite', 'AIハーネス'],
				link: 'https://ruby-on-rails-product.onrender.com/',
				image: '/img/img_EC_rails.webp',
			},
			{
				title: 'サンプルLP',
				description: 'スターバックス風のキャンペーンLP（HTML / CSS / jQuery）。',
				tech: ['HTML', 'CSS', 'jQuery'],
				link: 'https://static-sample-lp.onrender.com/',
				image: '/img/img_stuba_lp.webp',
			},
			{
				title: 'サンプルLP (Next.js)',
				description: 'Next.js + TailwindCSS のLP。SEO/レスポンシブ/アクセシビリティを意識して実装。',
				tech: ['Next.js', 'LP', 'TailwindCSS'],
				link: 'https://portfolio-rouge-two-50.vercel.app/lp',
				image: '/img/img_soft_lp.webp',
			},
		],
		[],
	);

// セクション見出しの小ラベルは全体で見た目を統一する。
function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9f8967]">
			<span>{children}</span>
			<span className="h-px w-16 bg-[#c8bbab]" />
		</div>
	);
}

export default function Page() {
	const projects = useProjects();

	return (
		<div className="min-h-screen bg-[#efebe5] text-[#1f2330] antialiased">
			<section
				id="home"
				className="relative overflow-hidden bg-[#181b20] text-white"
			>
				{/* モバイルでは机とモニターが残るように少し右寄せでトリミングする。 */}
				<Image
					src="/img/img_portfolio_kv.webp"
					alt="ポートフォリオのビジュアル"
					fill
					priority
					className="object-cover object-[68%_center] sm:object-[62%_center] lg:object-center"
					sizes="100vw"
				/>
				{/* 見出しの可読性を保つため、左から右へ抜ける暗いオーバーレイを重ねる。 */}
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,17,21,0.94)_0%,rgba(15,17,21,0.88)_32%,rgba(15,17,21,0.72)_48%,rgba(15,17,21,0.38)_68%,rgba(15,17,21,0.16)_100%)] sm:bg-[linear-gradient(90deg,rgba(15,17,21,0.9)_0%,rgba(15,17,21,0.84)_28%,rgba(15,17,21,0.52)_44%,rgba(15,17,21,0.18)_62%,rgba(15,17,21,0.08)_100%)]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,11,15,0.6),rgba(9,11,15,0.22)_36%,rgba(9,11,15,0.12)_100%)] sm:bg-[linear-gradient(to_top,rgba(9,11,15,0.45),rgba(9,11,15,0.1)_34%,rgba(9,11,15,0.08)_100%)]" />
				<div className="absolute inset-y-0 left-[56%] hidden w-px bg-white/10 lg:block" />

				<header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
					<a href="#home" className="flex items-center gap-3 text-sm tracking-[0.22em] text-white/90">
						<span className="text-3xl font-bold tracking-tight">OKI.</span>
						<span className="text-base tracking-[0.18em]">Portfolio</span>
					</a>

					<div className="flex items-center gap-3">
						<nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/68 px-8 py-4 text-sm font-medium text-[#242831] backdrop-blur lg:flex">
							<a href="#about" className="transition hover:text-[#b99761]">
								About
							</a>
							<a href="#work" className="transition hover:text-[#b99761]">
								Works
							</a>
							<a href="#contact" className="transition hover:text-[#b99761]">
								Contact
							</a>
						</nav>
						<a
							href="#contact"
							className="inline-flex h-14 items-center gap-3 rounded-full bg-[#11141a] px-6 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-[#242933]"
						>
							Contact
							<ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</header>

				<div className="relative z-10 mx-auto max-w-7xl px-5 pb-18 pt-6 lg:px-10 lg:pb-28 lg:pt-10">
					<motion.div
						className="relative flex min-h-[540px] max-w-[58rem] flex-col justify-center px-1 py-12 sm:min-h-[620px] sm:px-4 sm:py-14 lg:min-h-[700px] lg:px-0"
						initial="hidden"
						animate="visible"
						variants={stagger}
					>
						{/* 画面幅が広い時だけ縦線を出して、左側に重心を作る。 */}
						<div className="absolute bottom-12 left-0 hidden h-24 w-px bg-white/16 lg:block" />
						<motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.38em] text-white/50">
							Web Engineer
						</motion.p>
						<motion.h1
							variants={fadeUp}
							className="mt-8 text-4xl font-semibold leading-[1.35] sm:text-5xl lg:text-[4.4rem]"
						>
							ウェブ開発のプロ
							<span className="text-[#c9b08b]">5年以上の経験</span>
							で安心サポート！
						</motion.h1>
						<motion.p
							variants={fadeUp}
							className="mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
						>
							SE、Web業務と比較的Web開発の経験が多く、フルスタックの経験もあり！
						</motion.p>
						<motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
							<a
								href="#work"
								className="inline-flex min-h-14 items-center gap-3 rounded-full border border-[#bda17b] px-7 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171c27]"
							>
								個人制作物を見る
								<ArrowRight className="h-4 w-4" />
							</a>
							<a
								href="https://github.com/pp-no"
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-14 items-center gap-3 rounded-full border border-white/10 px-6 text-sm font-semibold text-white/86 transition hover:border-white/24 hover:bg-white/6"
							>
								<SiGithub className="h-4 w-4" />
								GitHub
							</a>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<main>
				{/* About は実写の代わりにタイポ中心のカードで静かなトーンを維持する。 */}
				<section id="about" className="px-5 py-20 lg:px-10 lg:py-24">
					<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
						<motion.div
							className="relative overflow-hidden rounded-[30px] bg-[#d8d1c6] p-6 sm:p-8"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-10% 0px' }}
							variants={fadeUp}
						>
							<div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[linear-gradient(140deg,#2f3748_0%,#181d27_62%,#10131a_100%)] shadow-[0_28px_80px_rgba(17,21,33,0.22)]">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.1),transparent_26%),linear-gradient(to_top,rgba(0,0,0,0.24),transparent_40%)]" />
								<div className="absolute left-8 top-8 text-sm uppercase tracking-[0.3em] text-white/45">
									About Me
								</div>
								<div className="absolute bottom-10 left-8 right-8">
									<div className="text-[96px] font-semibold leading-none text-white/92 sm:text-[128px]">OKI</div>
									<div className="mt-4 max-w-[14rem] text-sm leading-7 text-white/65">
										Web / Frontend / Backend / Full Stack
									</div>
								</div>
								<div className="absolute bottom-8 right-6 rotate-[-8deg] text-6xl font-light text-[#c9b08b] opacity-90 sm:text-7xl">
									.
								</div>
							</div>
						</motion.div>

						<div className="grid gap-10">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: '-10% 0px' }}
								variants={stagger}
							>
								<motion.div variants={fadeUp}>
									<SectionLabel>About</SectionLabel>
									<h2 className="mt-6 text-3xl font-semibold leading-[1.6] text-[#171c27] sm:text-4xl">
										自己紹介
									</h2>
								</motion.div>
								<div className="mt-8 space-y-4 text-[15px] leading-8 text-[#343949]">
									{profileParagraphs.map(paragraph => (
										<motion.p key={paragraph} variants={fadeUp}>
											{paragraph}
										</motion.p>
									))}
								</div>
							</motion.div>

							<motion.div
								className="grid gap-4 md:grid-cols-2"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={stagger}
							>
								{capabilityCards.map(item => {
									const Icon = item.icon;
									return (
										<motion.div
											key={item.title}
											variants={fadeUp}
											className="rounded-[24px] border border-[#d5cec2] bg-white/75 p-6 shadow-[0_18px_40px_rgba(24,29,39,0.04)]"
										>
											<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d7c19a] bg-[#f8f3ea] text-[#171c27]">
												<Icon className="h-5 w-5" />
											</div>
											<h3 className="mt-5 text-lg font-semibold text-[#171c27]">{item.title}</h3>
											<p className="mt-3 text-sm leading-7 text-[#555b6c]">{item.description}</p>
										</motion.div>
									);
								})}
							</motion.div>

							<motion.div
								className="rounded-[28px] border border-[#d5cec2] bg-[#171c27] p-7 text-white"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={fadeUp}
							>
								<p className="text-sm leading-8 text-white/74">
									小さく作って素早く届ける。SEOを意識した可読性の高いコード、堅牢なエラーハンドリング、段階的な導入でプロダクトを安定させます。
								</p>
								<div className="mt-6 grid gap-3 sm:grid-cols-3">
									{valueCards.map(item => (
										<div key={item.k} className="rounded-[20px] border border-white/10 bg-white/5 px-5 py-4">
											<div className="text-[11px] uppercase tracking-[0.28em] text-[#d5b37c]">{item.k}</div>
											<div className="mt-2 text-sm leading-6 text-white/82">{item.v}</div>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				<section id="work" className="bg-[#171c27] px-5 py-20 text-white lg:px-10 lg:py-24">
					<div className="mx-auto max-w-7xl">
						<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<SectionLabel>Works</SectionLabel>
								<h2 className="mt-6 text-3xl font-semibold sm:text-4xl">個人制作物</h2>
								<p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
									最近の個人製作物の取り組みを抜粋しています。 ※実務経験は別途資料で送付いたします。
								</p>
							</div>
							<a
								href="#contact"
								className="inline-flex min-h-14 items-center gap-3 self-start rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171c27]"
							>
								お問い合わせ
								<ArrowRight className="h-4 w-4" />
							</a>
						</div>

						<motion.div
							className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-10% 0px' }}
							variants={stagger}
						>
							{projects.map(project => (
								<motion.a
									key={project.title}
									href={project.link}
									target="_blank"
									rel="noreferrer"
									variants={fadeUp}
									className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/12 bg-white/4 transition duration-300 hover:-translate-y-1 hover:border-[#d5b37c]/60 hover:bg-white/7"
								>
									<div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/4">
										{project.image ? (
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover transition duration-500 group-hover:scale-105"
												sizes="(min-width:1280px) 30vw, (min-width:768px) 50vw, 100vw"
											/>
										) : null}
										<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,13,20,0.46),transparent_40%)]" />
									</div>
									{/* 本文量が違っても CTA が PC で左下に揃うように縦方向へ伸ばす。 */}
									<div className="flex flex-1 flex-col p-6">
										<div className="text-[11px] uppercase tracking-[0.28em] text-[#d5b37c]">Project</div>
										<h3 className="mt-3 text-xl font-semibold leading-8">{project.title}</h3>
										<p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/68">
											{project.description}
										</p>
										<div className="mt-5 flex flex-wrap gap-2">
											{project.tech.map(tech => (
												<span
													key={tech}
													className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/74"
												>
													{tech}
												</span>
											))}
										</div>
										<div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#d5b37c] md:mt-auto md:pt-8">
											<span>詳細を見る</span>
											<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
										</div>
									</div>
								</motion.a>
							))}
						</motion.div>
					</div>
				</section>

				<section id="contact" className="px-5 py-20 lg:px-10 lg:py-24">
					<motion.div
						className="mx-auto grid max-w-7xl gap-8 rounded-[34px] bg-[linear-gradient(135deg,#171c27_0%,#232a38_100%)] px-7 py-8 text-white shadow-[0_24px_70px_rgba(20,24,34,0.16)] sm:px-10 sm:py-10 lg:grid-cols-[88px_minmax(0,1fr)_auto] lg:items-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp}
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/14">
							<Mail className="h-9 w-9" />
						</div>
						<div>
							<h2 className="text-2xl font-semibold leading-10 sm:text-3xl">お問い合わせ</h2>
							<p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
								業務委託・副業・スポット相談などお気軽に。GitHub やメールからご連絡ください。
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<a
								href={`mailto:onryki.work@gmail.com?subject=${encodeURIComponent(
									'お問い合わせ（ポートフォリオLP）',
								)}&body=${encodeURIComponent('お名前：\nご用件：\n')}`}
								className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d5b37c] px-7 text-sm font-semibold text-[#171c27] transition hover:bg-[#e2c38f]"
							>
								メールで相談する
								<ArrowRight className="h-4 w-4" />
							</a>
							<a
								href="https://github.com/pp-no"
								target="_blank"
								rel="noreferrer"
								className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/14 px-7 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171c27]"
							>
								<SiGithub className="h-4 w-4" />
								GitHub を見る
							</a>
						</div>
					</motion.div>
				</section>
			</main>

			<footer className="border-t border-[#d8d1c5] px-5 py-8 text-center text-xs tracking-[0.16em] text-[#6e7381] lg:px-10">
				<span suppressHydrationWarning>© {new Date().getFullYear()}</span> oki. Built with Next.js &
				TailwindCSS.
			</footer>
		</div>
	);
}
