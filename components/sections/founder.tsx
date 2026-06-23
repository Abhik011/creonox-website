"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

type FounderProps = {
variant?: "home" | "about";
};

export default function Founder({
variant = "home",
}: FounderProps) {
const content = {
home: {
label: "From The Founder",
opening:
"We're building the operating systems that modern industries deserve.",


  paragraphs: [
    "Most businesses still operate through spreadsheets, disconnected tools and manual processes. We believe every industry deserves software designed around how it actually works.",

    "At Creonox, we're building intelligent operating systems that simplify complexity, automate repetitive work and help organizations operate with greater clarity, speed and confidence.",

    "What began with CA IQ is only the beginning. Our vision is to create a family of products that power the next generation of industry operations.",
  ],
},

about: {
  label: "From The Founder",
  opening:
    "Building Creonox started with a simple observation: businesses spend too much time managing processes and too little time creating value.",

  paragraphs: [
    "Throughout my journey working with businesses, I repeatedly saw the same challenges — spreadsheets becoming systems, disconnected tools creating complexity and teams spending valuable hours on repetitive operational work.",

    "It became clear that the problem wasn't a lack of software. The problem was that most software wasn't built around how industries actually operate.",

    "Creonox was founded on the belief that technology should simplify complexity, not add to it. We are building intelligent operating systems that bring together workflows, data, automation and decision-making into a single experience.",

    "What began with CA IQ is only the first step. Our long-term vision is to create a family of operating systems that empower industries to operate with greater clarity, speed and confidence.",

    "We are still early in this journey, but the opportunity ahead is enormous. Thank you for being part of it.",
  ],
},


};

const current = content[variant];

return ( <section className="relative overflow-hidden py-24 md:py-40">
{/* Background Glow */} <div
     className="
       absolute
       left-1/2
       top-0
       h-[700px]
       w-[700px]
       -translate-x-1/2
       rounded-full
       bg-violet-500/[0.05]
       blur-[180px]
     "
   />


  <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
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
        rounded-[32px]
        md:rounded-[40px]
        border
        border-slate-100
        bg-white/80
        p-8
        md:p-16
        text-left
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(15,23,42,0.06)]
      "
    >
      <p
        className="
          text-xs
          md:text-sm
          uppercase
          tracking-[0.35em]
          text-violet-600
        "
      >
        {current.label}
      </p>

      {/* Opening */}
      <div className="mt-8 max-w-4xl">
        <p
          className="
            text-xl
            md:text-2xl
            lg:text-3xl
            font-medium
            tracking-[-0.03em]
            leading-relaxed
            text-slate-900
          "
        >
          {current.opening}
        </p>
      </div>

      {/* Note */}
      <div
        className="
          mt-10
          max-w-4xl
          space-y-6
          text-base
          md:text-lg
          leading-8
          text-slate-600
        "
      >
        {current.paragraphs.map(
          (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )
        )}
      </div>

      {/* Signature */}
      <div className="mt-14">
        <div
          className="
            h-px
            w-24
            bg-gradient-to-r
            from-violet-500
            to-transparent
          "
        />

        <div className="mt-8">
          <h3
            className="
              text-xl
              md:text-2xl
              font-semibold
              text-slate-950
            "
          >
            Abhijeet Kulkarni
          </h3>

          <p className="mt-2 text-slate-500">
            Founder & CEO, Creonox
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <motion.a
            href="https://www.linkedin.com/in/abhijeet-kulkarni-2a0892321/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-600
              transition-all
              hover:border-blue-200
              hover:text-blue-600
            "
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/abhijeet.kulkarni__"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              bg-white
              text-slate-600
              transition-all
              hover:border-pink-200
              hover:text-pink-600
            "
          >
            <Instagram size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  </div>
</section>


);
}
