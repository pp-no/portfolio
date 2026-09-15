import React from 'react';
import styles from './portfolio.module.css';

const items = [
	'NEXT.JS',
	'TYPESCRIPT',
	'REACT',
	'NUXT.JS',
	'PHP',
	'C#',
	'C++',
	'SQL',
	'TAILWIND',
	'CI / CD',
];

const starColors = ['var(--yellow)', 'var(--green)', 'var(--red)'];

/** ★区切りのスタック一覧。同じ並びを2セット流して無限ループに見せる */
const TickerGroup: React.FC = () => (
	<div className={styles.tickerGroup}>
		{items.map((item, i) => (
			<React.Fragment key={item}>
				<span>{item}</span>
				<span style={{ color: starColors[i % starColors.length] }}>★</span>
			</React.Fragment>
		))}
	</div>
);

export default function TechTicker() {
	return (
		<div className={styles.ticker} aria-hidden="true">
			<div className={styles.tickerTrack}>
				<TickerGroup />
				<TickerGroup />
			</div>
		</div>
	);
}
