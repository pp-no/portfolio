import React from "react";

export default function UseCasesSection() {
  const cases = [
    { title: "店舗運営", img: "https://placehold.co/400x250?text=UseCase+1" },
    { title: "イベント管理", img: "https://placehold.co/400x250?text=UseCase+2" },
    { title: "フィールドセールス", img: "https://placehold.co/400x250?text=UseCase+3" },
  ];
  return (
    <section id="usecases" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">SAMPLE APPの活用場面</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {cases.map((u) => (
            <div key={u.title} className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                <img src={u.img} alt={u.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{u.title}</h3>
                <a href="#cta" className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-black">
                  今すぐ試す
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
