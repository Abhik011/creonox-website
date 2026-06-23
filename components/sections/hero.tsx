"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CreonoxLogo from "../creonox-logo";
export default function Hero() {
  
return ( 
<section className="relative overflow-hidden bg-[#f7f7fb] pt-24">

 <div className="absolute inset-0 -z-10 overflow-hidden">
{/* Top Glow */}
<div
className="
absolute
inset-x-0
top-0


        h-[500px]
        sm:h-[600px]

        bg-gradient-to-b
        from-violet-950
        via-violet-800
        to-transparent

        opacity-90
      "
    />

    {/* Center Glow */}
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className="
        absolute
        left-1/2
        top-[15%]

        h-[300px]
        w-[300px]

        sm:h-[500px]
        sm:w-[500px]

        md:h-[700px]
        md:w-[700px]

        -translate-x-1/2

        rounded-full

        bg-violet-500/20

        blur-[120px]
      "
    />

    {/* Grid */}
    <div
      className="
        absolute
        inset-0

        opacity-[0.03]

        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:90px_90px]
      "
    />
  </div>

  {/* HERO */}
<div
  className="
    mx-auto

    flex
    min-h-[calc(100svh-96px)]

    max-w-6xl

    flex-col
    items-center
    justify-center

    px-6

    text-center
  "
>
  {/* Badge */}
  <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.6,
    }}
    className="
      mb-8

      inline-flex
      items-center
      gap-2

      rounded-full

      border
      border-violet-200

      bg-white

      px-5
      py-2.5

      text-xs
      font-semibold

      uppercase

      tracking-[0.2em]

      text-violet-700

      shadow-sm
    "
  >
    <span
      className="
        h-2
        w-2

        rounded-full

        bg-violet-500

        animate-pulse
      "
    />

    AI Native Product Company
  </motion.div>

  {/* Logo Reveal */}
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.8,
      y: 20,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    transition={{
      duration: 0.8,
    }}
    className="mb-10"
  >
    <CreonoxLogo
      size={80}
      textShows={false}
    />
  </motion.div>

  {/* Headline */}
  <motion.h1
    initial={{
      opacity: 0,
      y: 30,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.2,
      duration: 0.8,
    }}
    className="
      max-w-5xl

      text-5xl
      font-semibold

      leading-[0.95]

      tracking-[-0.06em]

      text-slate-950

      sm:text-6xl
      md:text-7xl
      lg:text-8xl
    "
  >
    Replace spreadsheets
    <br />

    <span
      className="
        bg-gradient-to-r
        from-violet-600
        via-blue-600
        to-violet-500

        bg-clip-text

        text-transparent
      "
    >
      with intelligent systems
    </span>
  </motion.h1>

  {/* Description */}
  <motion.p
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.4,
      duration: 0.8,
    }}
    className="
      mt-8

      max-w-2xl

      text-lg
      leading-8

      text-slate-600
    "
  >
    Creonox builds AI-powered operating systems
    for accounting, compliance, logistics,
    automation and global trade.
  </motion.p>

  {/* CTA */}
  <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.6,
      duration: 0.8,
    }}
    className="
      mt-10

      flex
      flex-col
      gap-4

      sm:flex-row
    "
  >
    <Link
      href="/products"
      className="
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl

        bg-violet-600

        px-7
        py-3.5

        font-medium

        text-white

        transition-all

        hover:scale-[1.02]
        hover:bg-violet-700
      "
    >
      Explore Products
      <ArrowRight size={16} />
    </Link>

    <Link
      href="/contact"
      className="
        rounded-xl

        border
        border-slate-300

        bg-white

        px-7
        py-3.5

        font-medium

        transition-all

        hover:border-violet-300
        hover:bg-violet-50
      "
    >
      Book Demo
    </Link>
  </motion.div>
</div>
</section>

);
}