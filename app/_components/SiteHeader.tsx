import React from 'react';
import styles from './portfolio.module.css';

const navItems = [
	{ href: '#work', label: 'つくったもの' },
	{ href: '#about', label: 'できること' },
	{ href: '#way', label: '進めかた' },
];

export default function SiteHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<a href="#home" className={styles.logo} aria-label="OKI ホーム">
					<span className={styles.logoMark} aria-hidden="true">
						O
					</span>
					<span className={styles.logoText}>OKI</span>
				</a>
				<nav className={styles.nav} aria-label="メインナビゲーション">
					{navItems.map(item => (
						<a key={item.href} href={item.href} className={styles.navLink}>
							{item.label}
						</a>
					))}
					<a href="#contact" className={styles.navCta}>
						相談してみる
					</a>
				</nav>
			</div>
		</header>
	);
}
