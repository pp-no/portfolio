import React from "react";

export default function BenefitsSection() {
  const cards = [
    { title: "コスト最適化", desc: "必要な機能に絞った料金で無駄を削減。", img: "https://placehold.co/400x250?text=Benefit+1" },
    { title: "スピード導入", desc: "最短当日から運用開始できる初期セットアップ。", img: "https://placehold.co/400x250?text=Benefit+2" },
    { title: "拡張性", desc: "API連携で業務に合わせて柔軟に拡張可能。", img: "https://placehold.co/400x250?text=Benefit+3" },
  ];
  return (
    <section id="benefits" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">SAMPLE APPのメリット</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
