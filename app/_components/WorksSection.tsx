'use client';

import React, { useState } from 'react';
import Reveal from './Reveal';
import styles from './portfolio.module.css';

/** カード見出し帯の色。index 順に巡回させる */
const TONES = ['#FFD23F', '#9BE564', '#7FC7FF', '#FFB3A0', '#D9C2FF'];
/** カードの傾き。ランダムにせず固定値を index 順に巡回させる */
const ROTATIONS = [-0.8, 0.7, -0.5, 0.9, -0.7];

type Work = {
	id: string;
	no: string;
	kind: string;
	title: string;
	punch: string;
	url: string;
	/** リンクボタンの文言。デモがない作品は GitHub に飛ばす */
	urlLabel: string;
	stack: string[];
	tags: string[];
	body: string;
	problem: string;
	approach: string;
	why: string;
};

const WORKS: Work[] = [
	{
		id: 'devscope',
		no: '01',
		kind: 'PRODUCT / 2026',
		title: 'DevScope',
		punch: '技術系YouTubeを、カテゴリで追える場所に。',
		url: 'https://dev-scope-chi.vercel.app/',
		urlLabel: '開いてみる ↗',
		stack: ['Next.js', 'TypeScript', 'frontend'],
		tags: ['Next.js', 'TypeScript', 'YouTube API', 'TailwindCSS', 'Vercel'],
		body: 'Webエンジニア向けの技術系YouTube動画を、AI・フロントエンド・バックエンド・インフラなどカテゴリー別に整理して探せるサービス。情報量の多い領域を効率よく追える導線にしました。',
		problem: '技術系の動画は量が多く、いま自分に必要な領域だけを拾うのが難しい。',
		approach: '領域単位のカテゴリ設計とAPI取得の整理。一覧の見通しを最優先にUIを組みました。',
		why: '外部APIの取得と描画を分けやすく、公開までが速いNext.js + Vercel。',
	},
	{
		id: 'next-todo',
		no: '02',
		kind: 'CRUD / SANDBOX',
		title: 'Next.js Todo アプリ',
		punch: 'CRUDを、触って確かめられる形で。',
		url: 'https://todo-next-kappa-wheat.vercel.app',
		urlLabel: '開いてみる ↗',
		stack: ['Next.js', 'TypeScript', 'frontend', 'fullstack'],
		tags: ['Next.js', 'TypeScript', 'CRUD', 'TailwindCSS', 'CI/CD'],
		body: '登録・編集・削除まで動くCRUDシステム。個人開発用なので、自由に追加・編集・削除して大丈夫です。',
		problem: '実装力は文章より、動くものを触ってもらうほうが早く伝わる。',
		approach: '状態管理と入力バリデーションを最小構成で。CI/CDでpushから公開まで自動化。',
		why: 'App Routerでのデータ更新の流れを検証したくてNext.jsを採用。',
	},
	{
		id: 'nuxt-todo',
		no: '03',
		kind: 'CRUD / SANDBOX',
		title: 'Nuxt.js Todo アプリ',
		punch: '同じ要件を、別フレームワークで。',
		url: 'https://nuxt-todo-wine.vercel.app/',
		urlLabel: '開いてみる ↗',
		stack: ['Nuxt.js', 'TypeScript', 'frontend', 'fullstack'],
		tags: ['Nuxt.js', 'TypeScript', 'CRUD', 'TailwindCSS', 'CI/CD'],
		body: 'Next.js版と同じ要件をNuxt.jsで実装したCRUDシステム。こちらも自由に操作いただけます。',
		problem: 'フレームワークごとの得意・不得意は、同条件で作らないと比較できない。',
		approach: '同一要件を移植し、状態管理とルーティングの差分を実装レベルで確認。',
		why: '案件ごとに最適な選択をするため、Vue系の感覚も手元に残す狙い。',
	},
	{
		id: 'yahoo',
		no: '04',
		kind: 'RSS / MINI APP',
		title: 'ニュース記事表示',
		punch: '外部フィードを、軽量に取り込む。',
		url: 'https://nuxt-yahoo-ai-lp.vercel.app/',
		urlLabel: '開いてみる ↗',
		stack: ['Nuxt.js', 'TypeScript', 'frontend'],
		tags: ['Nuxt.js', 'TypeScript', 'RSS'],
		body: '外部ニュースの最新記事5件を取得して表示する小さなアプリ。取得・整形・表示の最短経路を検証しました。',
		problem: '外部フィードは形式が揺れやすく、そのまま出すと表示が崩れる。',
		approach: '取得と整形を分離し、想定外のデータでも壊れない構成に。',
		why: '小さく素早く試すため、サーバー側取得が書きやすいNuxt.js。',
	},
	{
		id: 'ec',
		no: '05',
		kind: 'E-COMMERCE / AI',
		title: 'ファッション ECサイト',
		punch: 'AIハーネスで、EC基本機能をひと通り。',
		url: 'https://ruby-on-rails-product.onrender.com/',
		urlLabel: '開いてみる ↗',
		stack: ['Ruby', 'fullstack'],
		tags: ['Ruby', 'Rails', 'EC', 'SQLite', 'AIハーネス'],
		body: 'planner / generator / evaluater を組み合わせたAIハーネス設計で、商品登録・カート・購入フローまで実装。※無料ホスティングのため初回は復帰に数十秒かかる場合があります。',
		problem: 'ECは機能が多く、個人開発では速度と品質が両立しにくい。',
		approach: 'AIに計画・生成・評価の役割を分け、レビューを挟みながら実装。',
		why: '管理機能まで含めた一式を短期間で立ち上げられるRails。',
	},
	{
		id: 'daily-report',
		no: '06',
		kind: 'FULLSTACK / 2026',
		title: 'DailyReport',
		punch: '書いて、翌朝に活かす。',
		url: 'https://github.com/pp-no/daily-report-app',
		urlLabel: 'GitHub を見る ↗',
		stack: ['Java', 'TypeScript', 'fullstack'],
		tags: [
			'Spring Boot 3.5',
			'Java 21',
			'React 19',
			'TypeScript',
			'PostgreSQL',
			'Docker',
			'GitHub Actions',
		],
		body: '日報を記録・管理し、翌朝の業務開始30分前に前日のまとめをメールで通知するWebアプリ。Spring Boot + React でフルスタック実装しました。※デモ環境は現在停止中のため、GitHubリポジトリを公開しています。',
		problem: '日報は書いて終わりになりやすく、翌日の動きに結びつかない。',
		approach:
			'JWT認証つきの記録・管理機能に加えて、翌朝の始業30分前に前日分をまとめてメール通知。Docker と GitHub Actions でCIまで通しました。',
		why: '層の分け方がはっきりしていて保守しやすいSpring Boot、画面は書き慣れたReact + TypeScript。',
	},
];

const FILTERS = [
	{ key: 'all', label: 'ぜんぶ' },
	{ key: 'frontend', label: 'フロント' },
	{ key: 'fullstack', label: 'フルスタック' },
	{ key: 'Next.js', label: 'Next.js' },
	{ key: 'Nuxt.js', label: 'Nuxt.js' },
	{ key: 'TypeScript', label: 'TypeScript' },
	{ key: 'Ruby', label: 'Ruby' },
	{ key: 'Java', label: 'Java' },
];

export default function WorksSection() {
	const [filter, setFilter] = useState('all');
	const [open, setOpen] = useState<Record<string, boolean>>({});

	const works = WORKS.filter(work => filter === 'all' || work.stack.includes(filter));

	const toggle = (id: string) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

	return (
		<section id="work" className={styles.section}>
			<Reveal className={styles.worksHead}>
				<div className={styles.worksHeadMain}>
					<div className={`${styles.badge} ${styles.badgeWorks}`}>01 — WORKS</div>
					<h2 className={styles.sectionTitle}>ぜんぶ、触れます。</h2>
					<p className={styles.sectionLead}>
						実際に公開しているものだけ並べました。「なにを解いたか」と「なぜその技術か」も書いています。
						<span className={styles.note}>※実務案件は別途資料でお送りします。</span>
					</p>
				</div>
				<div className={styles.filters}>
					{FILTERS.map(item => {
						const on = item.key === filter;
						return (
							<button
								key={item.key}
								type="button"
								aria-pressed={on}
								onClick={() => setFilter(item.key)}
								className={`${styles.filter} ${on ? styles.filterOn : ''}`}
							>
								{item.label}
							</button>
						);
					})}
				</div>
			</Reveal>

			<div className={styles.works}>
				{works.map((work, index) => {
					const isOpen = !!open[work.id];
					const detailId = `work-detail-${work.id}`;
					return (
						<Reveal key={work.id}>
							<article
								className={`${styles.workCard} ${isOpen ? styles.workCardOpen : ''}`}
								style={{ transform: `rotate(${ROTATIONS[index % ROTATIONS.length]}deg)` }}
							>
								<div
									className={styles.workHead}
									style={{ background: TONES[index % TONES.length] }}
								>
									<span className={styles.workNo}>{work.no}</span>
									<span className={styles.workKind}>{work.kind}</span>
								</div>
								<div className={styles.workBody}>
									<h3 className={styles.workTitle}>{work.title}</h3>
									<div className={styles.workPunch}>{work.punch}</div>
									<p className={styles.workText}>{work.body}</p>
									<div className={styles.workTags}>
										{work.tags.map(tag => (
											<span key={tag} className={styles.tag}>
												{tag}
											</span>
										))}
									</div>
									<div className={styles.workActions}>
										<a
											href={work.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`${styles.btn} ${styles.workBtnOpen}`}
										>
											{work.urlLabel}
										</a>
										<button
											type="button"
											onClick={() => toggle(work.id)}
											aria-expanded={isOpen}
											aria-controls={detailId}
											className={`${styles.btn} ${styles.workBtnDetail}`}
										>
											{isOpen ? '閉じる' : 'くわしく'}
										</button>
									</div>
								</div>
								{isOpen && (
									<div id={detailId} className={styles.workDetail}>
										<div>
											<div className={`${styles.detailLabel} ${styles.detailProblem}`}>
												こまっていたこと
											</div>
											<p className={styles.detailText}>{work.problem}</p>
										</div>
										<div>
											<div className={`${styles.detailLabel} ${styles.detailApproach}`}>
												やったこと
											</div>
											<p className={styles.detailText}>{work.approach}</p>
										</div>
										<div>
											<div className={`${styles.detailLabel} ${styles.detailWhy}`}>
												その技術にした理由
											</div>
											<p className={styles.detailText}>{work.why}</p>
										</div>
									</div>
								)}
							</article>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
}
