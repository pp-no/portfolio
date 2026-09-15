import React from 'react';
import Reveal from './Reveal';
import styles from './portfolio.module.css';

const facts = [
	{ k: 'なまえ', v: 'OKI — Webエンジニア' },
	{ k: 'やること', v: 'フロント / バックエンド 両方' },
	{ k: 'いる場所', v: '日本 — フルリモート' },
	{ k: 'いま', v: '業務委託・スポット相談 受付中' },
];

const terminalDots = ['var(--yellow)', 'var(--green)', 'var(--red)'];

const stats = [
	{ n: '7年+', label: 'Web開発の実務', tone: 'var(--yellow)', rotate: -1.2 },
	{ n: '6本', label: '公開中の個人開発', tone: 'var(--green)', rotate: 0.9 },
	{ n: '2面', label: 'フロント＆サーバー', tone: '#7fc7ff', rotate: -0.7 },
];

export default function HeroSection() {
	return (
		<section id="home" className={styles.hero}>
			<div className={styles.heroGrid}>
				<Reveal>
					<div className={styles.statusBadge}>
						<span className={styles.statusDot} aria-hidden="true" />
						いま案件受付中！
					</div>
					<h1 className={styles.heroTitle}>
						つくって終わり、
						<br />
						にしません。
						<span className={styles.marker}>
							<span className={styles.markerText}>運用まで</span>
							<span className={styles.markerLine} aria-hidden="true" />
						</span>
						<span className={styles.keepAll}>いっしょに。</span>
					</h1>
					<p className={styles.heroLead}>
						バックエンド7年、フロントはReact / Next.js /
						TypeScript。既存システムの改善から新規実装まで、小さくつくって早く届けて、壊れにくい状態でお渡しします。
					</p>
					<div className={styles.heroActions}>
						<a href="#work" className={`${styles.btn} ${styles.heroBtnPrimary}`}>
							つくったものを見る →
						</a>
						<a
							href="mailto:onryki.work@gmail.com"
							className={`${styles.btn} ${styles.heroBtnMail}`}
						>
							メールする
						</a>
						<a
							href="https://github.com/pp-no"
							target="_blank"
							rel="noopener noreferrer"
							className={`${styles.btn} ${styles.heroBtnGithub}`}
						>
							GitHub
						</a>
					</div>
				</Reveal>

				<Reveal className={styles.heroAside}>
					<div className={styles.terminal}>
						<div className={styles.terminalBar}>
							{terminalDots.map(color => (
								<span
									key={color}
									className={styles.terminalDot}
									style={{ background: color }}
									aria-hidden="true"
								/>
							))}
							<span className={styles.terminalTitle}>about-me.txt</span>
						</div>
						<div className={styles.terminalBody}>
							{facts.map(fact => (
								<div key={fact.k} className={styles.factRow}>
									<span className={styles.factKey}>{fact.k}</span>
									<span className={styles.factValue}>{fact.v}</span>
								</div>
							))}
						</div>
					</div>
					<div className={styles.stats}>
						{stats.map(stat => (
							<div
								key={stat.label}
								className={styles.statCard}
								style={{ background: stat.tone, transform: `rotate(${stat.rotate}deg)` }}
							>
								<div className={styles.statNumber}>{stat.n}</div>
								<div className={styles.statLabel}>{stat.label}</div>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
