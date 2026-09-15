import React from 'react';
import SiteHeader from './_components/SiteHeader';
import HeroSection from './_components/HeroSection';
import TechTicker from './_components/TechTicker';
import WorksSection from './_components/WorksSection';
import AboutSection from './_components/AboutSection';
import HowIWorkSection from './_components/HowIWorkSection';
import ContactSection from './_components/ContactSection';
import SiteFooter from './_components/SiteFooter';
import styles from './_components/portfolio.module.css';

export default function Page() {
	return (
		<div className={styles.portfolio}>
			<a className={styles.skipLink} href="#main">
				本文へ移動
			</a>
			<SiteHeader />
			<main id="main">
				<HeroSection />
				<TechTicker />
				<WorksSection />
				<AboutSection />
				<HowIWorkSection />
				<ContactSection />
			</main>
			<SiteFooter />
		</div>
	);
}
