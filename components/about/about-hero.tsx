"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-40">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[1200px]
            w-[1200px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.08]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,
            rgba(139,92,246,0.10),
            transparent_60%)]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-6xl"
        >
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-violet-600
            "
          >
            About Creonox
          </p>

          <h1
            className="
              mt-8
              text-6xl
              font-semibold
              tracking-[-0.06em]
              text-slate-950
              md:text-8xl
            "
          >
            Building operating systems
          </h1>

          <h1
            className="
              bg-gradient-to-r
              from-violet-600
              via-fuchsia-500
              to-blue-500
              bg-clip-text
              text-6xl
              font-semibold
              tracking-[-0.06em]
              text-transparent
              md:text-8xl
            "
          >
            for modern industries.
          </h1>

          <p
            className="
              mt-12
              max-w-3xl
              text-xl
              leading-9
              text-slate-600
            "
          >
            Creonox creates intelligent software
            products for industries where operations
            matter most. We believe software should
            adapt to businesses, not the other way around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}