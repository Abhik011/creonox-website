"use client";

const principles = [
  {
    title: "Operations First",
    description:
      "Software should reflect real-world workflows.",
  },
  {
    title: "AI Native",
    description:
      "Intelligence should be embedded into every workflow.",
  },
  {
    title: "Industry Focused",
    description:
      "Every industry deserves purpose-built software.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Build products designed to remain useful for years.",
  },
];

export default function Principles() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-600">
            Principles
          </p>

          <h2 className="mt-6 text-6xl font-semibold tracking-[-0.06em]">
            What we believe.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="
                rounded-[32px]
                border
                border-slate-100
                bg-white
                p-8

                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
              "
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}