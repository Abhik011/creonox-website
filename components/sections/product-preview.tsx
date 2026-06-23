"use client";

import { motion } from "framer-motion";

export default function ProductPreview() {
  return (
    <section className="relative py-32">
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/10
            blur-[140px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-600">
            Products
          </p>

          <h2 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            Software built around
            <span className="block">
              how businesses actually operate.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
            Purpose-built systems designed for teams that manage
            audits, compliance, logistics, and operations.
          </p>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              rounded-[40px]
              bg-gradient-to-r
              from-violet-500/20
              via-blue-500/10
              to-violet-500/20
              blur-3xl
            "
          />

          {/* Browser Frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-slate-200
              bg-white/80
              backdrop-blur-xl
              shadow-[0_50px_120px_rgba(15,23,42,0.12)]
            "
          >
            {/* Browser Top */}
            <div className="flex items-center gap-2 border-b border-slate-100 px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-200" />
              <div className="h-3 w-3 rounded-full bg-yellow-200" />
              <div className="h-3 w-3 rounded-full bg-green-200" />

              <div className="ml-4 rounded-full bg-slate-100 px-4 py-1 text-xs text-slate-500">
                app.creonox.com
              </div>
            </div>

            {/* Screenshot */}
            <img
              src="/assets/caiq-dashboard.jpg"
              alt="Product Dashboard"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Intelligent Workflows
            </h3>

            <p className="text-slate-500">
              Automate repetitive tasks and reduce operational friction.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Operational Visibility
            </h3>

            <p className="text-slate-500">
              Track everything from one centralized system.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Built To Scale
            </h3>

            <p className="text-slate-500">
              Designed for growing organizations and modern teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}