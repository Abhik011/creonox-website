"use client";

const roadmap = [
  {
    year: "Now",
    title: "CA IQ",
  },
  {
    year: "2026",
    title: "AI Intelligence Layer",
  },
  {
    year: "2026",
    title: "Advanced Automation",
  },
  {
    year: "Future",
    title: "Industry Operating Systems",
  },
];

export default function ProductRoadmap() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-600">
          What's Next
        </p>

        <h2 className="mt-6 text-6xl font-semibold tracking-[-0.06em]">
          Building the next decade
          <span className="block text-violet-600">
            of operational software.
          </span>
        </h2>

        <div className="mt-20 space-y-12">
          {roadmap.map((item) => (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-8
                border-l
                border-slate-200
                pl-8
              "
            >
              <span className="w-24 text-slate-400">
                {item.year}
              </span>

              <h3 className="text-2xl font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}