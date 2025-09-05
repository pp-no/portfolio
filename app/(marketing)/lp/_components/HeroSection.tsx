import React from "react";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">{children}</span>
);

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:grid-cols-2 sm:py-20">
        <div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            ビジネスに活用できる<br className="hidden sm:block" />
            <span className="whitespace-nowrap">最適なAPPを。</span>
          </h1>
          <p className="mt-4 text-gray-600">
            数多くの導入実績を誇るサービスがAPP化してさらに使いやすく。
            あなたのビジネス戦略を強力にサポートします。
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>導入実績100社以上</Badge>
            <Badge>初月費用無料</Badge>
            <Badge>iOS / Android 対応</Badge>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-black">
              今すぐ試してみる
            </a>
            <a href="#reasons" className="rounded-xl border px-5 py-2 text-sm font-medium hover:bg-gray-50">
              特長を見る
            </a>
          </div>
          <p className="mt-3 text-xs text-emerald-700">＼ 今だけ無料お試し期間あり！ ／</p>
        </div>
        <div>
          <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
            <img
              src="https://placehold.co/600x400?text=Screenshot"
              alt="アプリのスクリーンショット"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
