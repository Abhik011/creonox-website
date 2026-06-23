"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "CA IQ",
    category: "Accounting OS",
    description:
      "The complete operating system for CA firms.",
    image: "/assets/caiq-dashboard.jpg",
    gradient:
      "from-violet-500/15 via-white to-blue-500/10",
  },
  {
    name: "Audit Hub",
    category: "Module",
    description:
      "AI-powered audit workflow management.",
    image: "/assets/audit-hub.png",
    gradient:
      "from-blue-500/15 via-white to-cyan-500/10",
  },
  {
    name: "Compliance Hub",
    category: "Module",
    description:
      "Manage compliance, deadlines and filings.",
    image: "/assets/compliance.png",
    gradient:
      "from-emerald-500/15 via-white to-teal-500/10",
  },
  {
  name: "Automation Center",
  category: "AI Automation",
  description:
    "Create intelligent workflows that automatically engage clients, collect documents, send reminders and follow up without manual effort.",
  image: "/assets/automation.png",
  gradient:
    "from-violet-500/15 via-white to-blue-500/10",
},
];

export default function ProductStack() {
  return (
<section className="relative py-20 md:py-32 lg:py-40">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    {/* Header */}
    <div className="mb-16 md:mb-24 text-center">
      <p
        className="
          text-xs
          md:text-sm
          font-medium
          uppercase
          tracking-[0.3em]
          text-violet-600
        "
      >
        Product Ecosystem
      </p>

      <h2
        className="
          mt-4
          md:mt-6
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-semibold
          tracking-[-0.06em]
          text-slate-950
        "
      >
        Built as a family
        <span
          className="
            block
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-500
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          of operating systems.
        </span>
      </h2>
    </div>

    {/* Stack */}
    <div className="relative">
      {products.map((product, index) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            mb-8
            md:mb-16
            lg:sticky
            lg:top-28
          "
          style={{
            zIndex: index + 1,
          }}
        >
          <div
            className={`
              relative
              overflow-hidden
              rounded-[28px]
              md:rounded-[40px]
              bg-gradient-to-br
              ${product.gradient}
              shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              backdrop-blur-xl
            `}
          >
            {/* Glow */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[300px]
                w-[300px]
                md:h-[600px]
                md:w-[600px]
                -translate-x-1/2
                rounded-full
                bg-violet-500/10
                blur-[100px]
              "
            />

            <div
              className="
                grid
                items-center
                gap-8
                lg:grid-cols-2
              "
            >
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-16">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-white/80
                    px-3
                    py-1.5
                    md:px-4
                    md:py-2
                    text-xs
                    md:text-sm
                    font-medium
                    text-violet-700
                  "
                >
                  {product.category}
                </span>

                <h3
                  className="
                    mt-6
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-semibold
                    tracking-[-0.05em]
                    text-slate-950
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                    mt-4
                    md:mt-6
                    max-w-lg
                    text-base
                    md:text-lg
                    leading-7
                    md:leading-8
                    text-slate-600
                  "
                >
                  {product.description}
                </p>
              </div>

              {/* Screenshot */}
              <div className="relative p-4 sm:p-6 lg:p-10">
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[20px]
                    md:rounded-[28px]
                    bg-white
                    shadow-[0_10px_40px_rgba(15,23,42,0.08),
                            0_30px_100px_rgba(15,23,42,0.08)]
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-auto
                      object-cover
                    "
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}