"use client";

const modules = [
  {
    title: "Audit Hub",
    description:
      "AI-powered audit workflow management.",
    image: "/assets/audit-hub.png",
  },
  {
    title: "Automation Center",
    description:
      "Automate reminders, follow-ups and compliance communication.",
    image: "/assets/automation.png",
  },
  {
    title: "Client Portal",
    description:
      "Modern collaboration between firms and clients.",
    image: "/assets/client-portal.png",
  },
];

export default function ProductModules() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {modules.map((module, index) => (
          <div
            key={module.title}
            className={`
              mb-24
              grid
              items-center
              gap-12
              lg:grid-cols-2
              ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }
            `}
          >
            <div>
              <h3 className="text-5xl font-semibold tracking-[-0.05em]">
                {module.title}
              </h3>

              <p className="mt-6 text-xl leading-9 text-slate-600">
                {module.description}
              </p>
            </div>

            <div>
              <img
                src={module.image}
                alt={module.title}
                className="
                  rounded-[24px]
                  border
                  border-slate-200
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}