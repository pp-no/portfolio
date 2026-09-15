'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './portfolio.module.css';

type Props = {
	children: React.ReactNode;
	className?: string;
};

/**
 * スクロールで一度だけフェードインさせるラッパー。
 *
 * カード側が持つ rotate() を壊さないよう、ラッパーは opacity と translateY だけを
 * 動かし、transform の指定を中の要素と共有しない。
 */
const Reveal: React.FC<Props> = ({ children, className }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setShown(true);
			return;
		}

		const io = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) return;
					setShown(true);
					io.unobserve(entry.target);
				});
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
		);

		io.observe(el);
		return () => io.disconnect();
	}, []);

	const classes = [styles.reveal, shown ? styles.revealShown : '', className ?? '']
		.filter(Boolean)
		.join(' ');

	return (
		<div ref={ref} data-reveal={shown ? 'shown' : 'hidden'} className={classes}>
			{children}
		</div>
	);
};

export default Reveal;
