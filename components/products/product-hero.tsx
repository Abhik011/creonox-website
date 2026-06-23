"use client";

import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden py-40">
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[1000px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.08]
          blur-[180px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-violet-600">
            Products
          </p>

          <h1
            className="
              mt-6
              text-6xl
              font-semibold
              tracking-[-0.06em]
              text-slate-950
              md:text-8xl
            "
          >
            Building intelligent
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              operating systems.
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-600">
            Purpose-built software designed around real workflows,
            operational complexity and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}