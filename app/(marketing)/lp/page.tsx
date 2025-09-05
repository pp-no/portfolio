import Script from 'next/script';
import TopInfoBar from './_components/TopInfoBar';
import HeroSection from './_components/HeroSection';
import ReasonsSection from './_components/ReasonsSection';
import FlowSection from './_components/FlowSection';
import BenefitsSection from './_components/BenefitsSection';
import UseCasesSection from './_components/UseCasesSection';
import LogosSection from './_components/LogosSection';
import FaqSection from './_components/FaqSection';
import ContactCtaSection from './_components/ContactCtaSection';

export const metadata = {
	title: 'SAMPLE APP｜ビジネスに活用できる最適なアプリ',
	description: '導入実績100社以上。初月無料。iOS/Android対応の業務アプリで現場を加速。',
	openGraph: {
		title: 'SAMPLE APP｜ビジネスに活用できる最適なアプリ',
		description: '導入実績100社以上。初月無料。iOS/Android対応の業務アプリで現場を加速。',
		url: 'https://example.com/lp',
		siteName: 'SAMPLE APP',
		images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'SAMPLE APP' }],
		locale: 'ja_JP',
		type: 'website',
	},
	twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
};

export default function Page() {
	return (
		<main>
			<Script id="ldjson" type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'SoftwareApplication',
					name: 'SAMPLE APP',
					applicationCategory: 'BusinessApplication',
					offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
				})}
			</Script>

			<TopInfoBar />
			<HeroSection />
			<ReasonsSection />
			<FlowSection />
			<BenefitsSection />
			<UseCasesSection />
			<LogosSection />
			<FaqSection />
			<ContactCtaSection />
			<div className="text-center">
				<a
					href="./"
					className="rounded-lg bg-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-black"
				>
					TOPへ戻る
				</a>
			</div>
		</main>
	);
}
