import React from 'react';
import Reveal from './Reveal';
import styles from './portfolio.module.css';

const values = [
	{
		mark: '◎',
		title: '品質',
		body: 'AIを使った設計レビューとテストで、バグの少ない実装に。読みやすさと堅いエラーハンドリングを標準にします。',
		tone: '#FFD23F',
		rotate: -0.8,
	},
	{
		mark: '⚡',
		title: '速度',
		body: '過剰設計は避けて、必要な範囲から実装。小さく出して反応を見ながら育てます。',
		tone: '#9BE564',
		rotate: 0.7,
	},
	{
		mark: '∞',
		title: '継続',
		body: '運用しやすさを前提に構成を決め、引き継いだあとも改善を続けられる状態でお渡しします。',
		tone: '#7FC7FF',
		rotate: -0.6,
	},
];

export default function HowIWorkSection() {
	return (
		<section id="way" className={styles.section}>
			<Reveal>
				<div className={`${styles.badge} ${styles.badgeWay}`}>03 — HOW I WORK</div>
				<h2 className={styles.sectionTitle}>小さくつくって、早く届ける。</h2>
				<p className={`${styles.sectionLead} ${styles.wayLead}`}>
					読みやすいコード、堅めのエラーハンドリング、段階的な導入。この3つでプロダクトを安定させます。
				</p>
			</Reveal>
			<div className={styles.wayCards}>
				{values.map(value => (
					<Reveal key={value.title}>
						<div
							className={styles.wayCard}
							style={{ background: value.tone, transform: `rotate(${value.rotate}deg)` }}
						>
							<div className={styles.wayMark} aria-hidden="true">
								{value.mark}
							</div>
							<div className={styles.wayTitle}>{value.title}</div>
							<p className={styles.wayText}>{value.body}</p>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
