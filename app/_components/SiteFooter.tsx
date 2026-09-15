import React from 'react';
import styles from './portfolio.module.css';

export default function SiteFooter() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInner}>
				<span>© {new Date().getFullYear()} OKI — ここまで見てくれてありがとう！</span>
				<span className={styles.footerStack}>Next.js &amp; TypeScript</span>
			</div>
		</footer>
	);
}
