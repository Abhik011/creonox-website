"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  variant?: "home" | "about" | "products";
};
export default function CTA({
variant = "home",
}: CTAProps) {
const content = {
home: {
label: "Ready To See What's Next?",
title: "The next generation of",
highlight: "industry software.",
description:
"Explore CA IQ, discover our vision and follow the journey as we build intelligent operating systems for the industries that power the world.",
primaryText: "Explore Products",
primaryHref: "/products",
secondaryText: "Get In Touch",
secondaryHref: "/contact",
},

products: {
  label: "Ready To Transform Your Operations?",
  title: "Find the right operating system",
  highlight: "for your business.",
  description:
    "Explore our products, discover how they work and see how intelligent software can simplify operations, automate workflows and drive growth.",
  primaryText: "Request Demo",
  primaryHref: "/contact",
  secondaryText: "Talk To Us",
  secondaryHref: "/contact",
},

about: {
  label: "Continue The Journey",
  title: "Explore our thinking",
  highlight: "and our products.",
  description:
    "Learn more about our vision, read insights from our team and discover the products we're building for the future.",
  primaryText: "Read Insights",
  primaryHref: "/insights",
  secondaryText: "Get In Touch",
  secondaryHref: "/contact",
},


};

const current = content[variant];

return ( <section className="relative overflow-hidden py-24 md:py-40">
{/* Background */} <div className="absolute inset-0"> <div
       className="
         absolute
         left-1/2
         top-1/2
         h-[500px]
         w-[500px]
         md:h-[900px]
         md:w-[900px]
         -translate-x-1/2
         -translate-y-1/2
         rounded-full
         bg-violet-500/[0.08]
         blur-[180px]
       "
     />

    <div
      className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,
        rgba(139,92,246,0.08),
        transparent_60%)]
      "
    />
  </div>

  <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        overflow-hidden
        rounded-[32px]
        md:rounded-[48px]
        border
        border-slate-100
        bg-white/80
        px-6
        py-16
        sm:px-8
        md:px-12
        md:py-24
        text-center
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(15,23,42,0.06)]
      "
    >
      {/* Label */}
      <p
        className="
          text-xs
          md:text-sm
          font-medium
          uppercase
          tracking-[0.35em]
          text-violet-600
        "
      >
        {current.label}
      </p>

      {/* Heading */}
      <h2
        className="
          mx-auto
          mt-6
          max-w-5xl
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-semibold
          tracking-[-0.06em]
          text-slate-950
        "
      >
        {current.title}

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
          {current.highlight}
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-base
          md:text-lg
          leading-8
          text-slate-600
        "
      >
        {current.description}
      </p>

      {/* Buttons */}
      <div
        className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
          gap-4
          sm:flex-row
        "
      >
        <Link
          href={current.primaryHref}
          className="
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-slate-950
            px-7
            py-4
            text-white
            transition-all
            hover:-translate-y-1
          "
        >
          {current.primaryText}
          <ArrowRight size={16} />
        </Link>

        <Link
          href={current.secondaryHref}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-7
            py-4
            text-slate-700
            transition-all
            hover:bg-slate-50
          "
        >
          {current.secondaryText}
        </Link>
      </div>
    </motion.div>
  </div>
</section>


);
}
