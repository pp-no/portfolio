import React from 'react';
import Reveal from './Reveal';
import styles from './portfolio.module.css';

const mailLink = `mailto:onryki.work@gmail.com?subject=${encodeURIComponent(
	'お問い合わせ（ポートフォリオ）',
)}&body=${encodeURIComponent('お名前：\nご用件：\n')}`;

const meta = ['onryki.work@gmail.com', 'Remote / Japan', '稼働：応相談'];

export default function ContactSection() {
	return (
		<section id="contact" className={styles.contact}>
			<Reveal>
				<div className={styles.contactPanel}>
					<div className={styles.contactCircle} aria-hidden="true" />
					<div className={styles.contactInner}>
						<div className={`${styles.badge} ${styles.badgeContact}`}>04 — CONTACT</div>
						<h2 className={styles.contactTitle}>
							いま困っているところから、
							<br />
							気軽にどうぞ。
						</h2>
						<p className={styles.contactLead}>
							業務委託・副業・スポット相談まで。要件が固まっていない段階でも大丈夫です。だいたい1営業日以内に返します。
						</p>
						<div className={styles.contactActions}>
							<a href={mailLink} className={`${styles.btn} ${styles.contactBtnMail}`}>
								メールを書く →
							</a>
							<a
								href="https://github.com/pp-no"
								target="_blank"
								rel="noopener noreferrer"
								className={`${styles.btn} ${styles.contactBtnGithub}`}
							>
								GitHub を見る
							</a>
						</div>
						<div className={styles.contactMeta}>
							{meta.map(item => (
								<span key={item}>{item}</span>
							))}
						</div>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
