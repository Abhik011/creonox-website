"use client";

export default function ProductShowcase() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-slate-100
            bg-white
            shadow-[0_20px_80px_rgba(15,23,42,0.08)]
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <span className="text-violet-600">
                Flagship Product
              </span>

              <h2 className="mt-6 text-6xl font-semibold tracking-[-0.05em]">
                CA IQ
              </h2>

              <p className="mt-6 text-xl text-slate-600 leading-9">
                The AI Operating System for CA Firms.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Audit Hub",
                  "Automation",
                  "Client Portal",
                  "Compliance",
                  "AI Assistant",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      px-4
                      py-2
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <img
                src="/assets/caiq-dashboard.jpg"
                alt="CA IQ"
                className="rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}