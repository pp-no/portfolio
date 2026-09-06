import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';

const projects = [
	{ title: 'DevScope', category: '技術情報を、探しやすく。', description: '技術系YouTube動画をカテゴリー別に整理。AI、フロントエンド、バックエンドなど、日々のキャッチアップを支える個人開発サービスです。', tech: 'Next.js / TypeScript / YouTube API / Tailwind CSS / Vercel', link: 'https://dev-scope-chi.vercel.app/', image: '/img/img_devscope.webp' },
	{ title: 'Fashion EC', category: '商品登録から、購入まで。', description: 'Ruby on Railsで構築したECサイト。AIハーネスを活用し、商品登録・カート・購入フローの基本機能を実装しました。', note: '無料ホスティングのため、初回表示に数十秒かかる場合があります。', tech: 'Ruby on Rails / SQLite / AIハーネス', link: 'https://ruby-on-rails-product.onrender.com/', image: '/img/img_EC_rails.webp' },
	{ title: 'Next.js Todo', category: 'Next.jsでつくるCRUD。', description: 'タスクの登録・編集・削除を実装した個人開発アプリ。自由に操作をお試しいただけます。', tech: 'Next.js / TypeScript / Tailwind CSS / CI/CD', link: 'https://todo-next-kappa-wheat.vercel.app', image: '/img/img_next_todo.webp' },
	{ title: 'Nuxt.js Todo', category: 'Nuxt.jsでつくるCRUD。', description: 'Nuxt.jsによるタスク管理アプリ。こちらも自由にタスクの登録・編集・削除をお試しいただけます。', tech: 'Nuxt.js / TypeScript / Tailwind CSS / CI/CD', link: 'https://nuxt-todo-wine.vercel.app/', image: '/img/img_nuxt_todo.webp' },
	{ title: 'News Reader', category: '最新ニュースを、コンパクトに。', description: 'RSSを利用して、Yahoo!ニュースの最新記事5件を表示するアプリです。', tech: 'Nuxt.js / TypeScript / RSS', link: 'https://nuxt-yahoo-ai-lp.vercel.app/', image: '/img/img_nuxt_yahoo.webp' },
];

const expertise = [
	{ title: 'Frontend', detail: '使いやすさと、変更しやすさ。', tech: 'React / Next.js / TypeScript / JavaScript / jQuery / HTML / Sass' },
	{ title: 'Backend', detail: '画面の先にある、データと仕組み。', tech: 'PHP / ASP.NET C# / C++ / SQL / REST API' },
	{ title: 'Maintenance', detail: '既存の仕組みを理解し、育てる。', tech: '運用改善 / リファクタリング / パフォーマンス最適化' },
];

const emailLink = `mailto:onryki.work@gmail.com?subject=${encodeURIComponent('お問い合わせ（ポートフォリオ）')}&body=${encodeURIComponent('お名前：\nご用件：\n')}`;

export default function Page() {
	return (
		<div className={styles.portfolio} id="home">
			<a className={styles.skipLink} href="#main">本文へ移動</a>
			<header className={styles.header}>
				<a className={styles.identity} href="#home" aria-label="OKI ホーム">oki<span>.</span></a>
				<span className={styles.headerRole}>Web engineer / Portfolio</span>
				<nav aria-label="メインナビゲーション" className={styles.nav}>
					<a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <ArrowUpRight size={14} aria-hidden="true" /></a>
				</nav>
			</header>
			<main id="main">
				<section className={styles.hero} aria-labelledby="hero-title">
					<div className={styles.heroIntro}><span className={styles.eyebrow}>Frontend & backend development</span><span className={styles.experience}>10 years in engineering</span></div>
					<h1 id="hero-title" className={styles.headline}>Built to work.<br /><span>Made to last.</span></h1>
					<div className={styles.heroBottom}>
						<div><p className={styles.heroJapanese}>つくる。その先まで、考える。</p><p className={styles.heroDescription}>エンジニアとして10年。<br />フロントエンドからバックエンドまで、<br />使う人と、引き継ぐ人に向き合うWeb開発。</p></div>
						<a className={styles.workLink} href="#work">制作物を見る <span><ArrowDown size={20} aria-hidden="true" /></span></a>
					</div>
				</section>
				<section id="work" className={styles.work} aria-labelledby="work-title">
					<div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Selected work</p><h2 id="work-title">手を動かして、確かめる。</h2></div><p>個人開発の記録。<br />実務経験の詳細は、別途資料にてお伝えします。</p></div>
					<div className={styles.projects}>
						{projects.map((project, index) => (
							<article key={project.title} className={`${styles.project} ${index === 0 ? styles.featured : ''}`}>
								<a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink} aria-label={`${project.title}を開く（新しいタブ）`}>
									<div className={styles.projectImage}><Image src={project.image} alt={`${project.title}の画面`} fill sizes={index === 0 ? '(min-width: 1200px) 1080px, 92vw' : '(min-width: 1200px) 520px, (min-width: 700px) 44vw, 92vw'} className={styles.screenshot} /><span className={styles.openProject}><ArrowUpRight size={21} aria-hidden="true" /></span></div>
									<div className={styles.projectTitle}><h3>{project.title}</h3><span>{project.category}</span></div>
								</a>
								<div className={styles.projectDetails}><p>{project.description}</p><p className={styles.tech}>{project.tech}</p>{project.note && <p className={styles.projectNote}>{project.note}</p>}</div>
							</article>
						))}
					</div>
					</section>
				<section id="about" className={styles.about} aria-labelledby="about-title">
					<div className={styles.aboutIntro}><p className={styles.eyebrow}>About / Approach</p><h2 id="about-title">長く付き合える<br />コードを書きたい。</h2><a className={styles.textLink} href="https://github.com/pp-no" target="_blank" rel="noopener noreferrer">GitHub / pp-no <ArrowUpRight size={16} aria-hidden="true" /><span className={styles.srOnly}>（新しいタブ）</span></a></div>
					<div className={styles.aboutBody}><p>新しくつくることも、今あるものを良くすることも。<br />10年の開発経験で、大切にしてきたことです。</p><p>PHPのMVC開発やSQLによるデータ処理、ASP.NET C#、C++を用いた実装から、React・Next.jsのフロントエンドまで。既存システムの運用改善と、新規開発の両方に取り組んできました。</p><p>現在はフロントエンドを主軸に、APIやデータ設計まで全体を見ながら開発しています。技術選定で見るのは、流行よりも、保守性とチームでの扱いやすさ。必要なものを、必要な大きさで実装します。</p><p>AIは設計整理やコードレビューを支える道具として活用し、判断や品質確認は人の手で行うことを大切にしています。</p></div>
					<div className={styles.expertise}>{expertise.map(item => <div key={item.title} className={styles.expertiseRow}><h3>{item.title}</h3><div><p>{item.detail}</p><p className={styles.tech}>{item.tech}</p></div></div>)}</div>
				</section>
				<section id="contact" className={styles.contact} aria-labelledby="contact-title"><p className={styles.eyebrow}>Get in touch</p><div className={styles.contactMain}><h2 id="contact-title">次につくるものの、<br />話をしましょう。</h2><a href={emailLink} className={styles.contactArrow} aria-label="メールで相談する"><ArrowUpRight aria-hidden="true" /></a></div><div className={styles.contactBottom}><p>業務委託・副業・スポットでのご相談など。<br />実務経験の資料をご希望の方も、お気軽にご連絡ください。</p><a href={emailLink}>メールで相談する <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>
			</main>
			<footer className={styles.footer}><span>© {new Date().getFullYear()} OKI</span><span>Thoughtfully built with Next.js.</span><a href="#home">Back to top ↑</a></footer>
		</div>
	);
}
