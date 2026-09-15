import React from 'react';
import Reveal from './Reveal';
import styles from './portfolio.module.css';

const skills = [
	{
		no: 'A',
		label: 'フロントエンド',
		items: ['HTML', 'SASS / CSS', 'JavaScript', 'jQuery'],
		tone: '#FFD23F',
		rotate: 0.6,
	},
	{
		no: 'B',
		label: 'モダン開発',
		items: ['React', 'Next.js', 'Nuxt.js', 'TypeScript', 'TailwindCSS'],
		tone: '#9BE564',
		rotate: -0.6,
	},
	{
		no: 'C',
		label: 'バックエンド',
		items: ['PHP', 'ASP.NET C#', 'C++', 'SQL', 'Ruby on Rails'],
		tone: '#7FC7FF',
		rotate: 0.5,
	},
	{
		no: 'D',
		label: '改善・運用',
		items: ['Node.js', 'REST API', 'リファクタリング', 'パフォーマンス最適化', 'CI/CD'],
		tone: '#FFB3A0',
		rotate: -0.5,
	},
];

export default function AboutSection() {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.section}>
				<div className={styles.aboutGrid}>
					<Reveal>
						<div className={`${styles.badge} ${styles.badgeAbout}`}>02 — ABOUT</div>
						<h2 className={styles.sectionTitle}>
							サーバーから画面まで、
							<br />
							ひと続きで考えます。
						</h2>
						<div className={styles.aboutBody}>
							<p>
								バックエンドはPHP、ASP.NET
								C#、C++。MVC前提のスクラッチ開発、SQLでのデータ処理、保守を見据えた実装に長く関わってきました。既存システムの運用改善も得意です。
							</p>
							<p>
								フロントはjQueryに加えてReact / Next.js /
								TypeScript。見た目だけでなく、再利用しやすく変更に強いUIを前提に設計します。APIやデータ設計まで通して見られるのが強みです。
							</p>
							<p>
								AIはワークフロー設計・レビュー・設計書づくりの相棒として。新しい技術は流行ではなく、開発速度・保守性・チームで扱えるかで選びます。
							</p>
						</div>
					</Reveal>

					<Reveal className={styles.skills}>
						{skills.map(skill => (
							<div
								key={skill.no}
								className={styles.skillCard}
								style={{ transform: `rotate(${skill.rotate}deg)` }}
							>
								<div className={styles.skillHead}>
									<span className={styles.skillNo} style={{ background: skill.tone }}>
										{skill.no}
									</span>
									<span className={styles.skillLabel}>{skill.label}</span>
								</div>
								<div className={styles.chips}>
									{skill.items.map(item => (
										<span key={item} className={styles.chip}>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</Reveal>
				</div>
			</div>
		</section>
	);
}
