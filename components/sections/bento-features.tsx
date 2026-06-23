"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Sparkles,
  Boxes,
  Cpu,
  Layers3,
  Workflow,
} from "lucide-react";

const features = [
  {
    title: "Industry Operating Systems",
    description:
      "Purpose-built products designed around industries, not generic workflows.",
    icon: Layers3,
  },
  {
    title: "AI Native",
    description:
      "Intelligence embedded directly into operations and decision making.",
    icon: Sparkles,
  },
  {
    title: "Product Ecosystem",
    description:
      "Connected products sharing workflows, data and intelligence.",
    icon: Boxes,
  },
  {
    title: "Infrastructure Layer",
    description:
      "Building the foundation for future operational industries.",
    icon: Cpu,
  },
  {
    title: "Operational Intelligence",
    description:
      "Transform fragmented operations into structured systems.",
    icon: Workflow,
  },
];

export default function BentoFeatures() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-40%"]
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[250vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(
              180deg,
              #ffffff_0%,
              #faf7ff_30%,
              #ffffff_100%
            )]
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.05]
            blur-[140px]
          "
        />

        {/* Header */}
        <div className="absolute left-0 top-24 z-20 w-full px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
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
                Built Differently
              </p>

              <h2
                className="
                  mt-5
                  max-w-4xl
                  text-5xl
                  font-semibold
                  tracking-[-0.06em]
                  text-slate-950
                  md:text-7xl
                "
              >
                Software built around

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
                  industries, not features.
                </span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Cards */}
        <motion.div
          style={{ x }}
          className="
            absolute
            left-0
            top-[70%]
            flex
            gap-6
            -translate-y-1/2
            pl-[8vw]
            pr-[10vw]
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  relative
                  flex
                  h-[300px]
                  w-[360px]
                  flex-col
                  overflow-hidden

                  rounded-[36px]

                  bg-white/90
                  backdrop-blur-xl

                  p-8

                  shadow-[0_2px_10px_rgba(15,23,42,0.03),
                          0_20px_60px_rgba(15,23,42,0.06)]

                  transition-all
                  duration-500
                "
              >
                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-violet-50/70
                    via-white
                    to-blue-50/40
                  "
                />

                {/* Glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-40
                    w-40
                    rounded-full
                    bg-violet-500/[0.08]
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="
                      text-xs
                      font-medium
                      tracking-wider
                      text-slate-400
                    "
                  >
                    0{index + 1}
                  </div>

                  <Icon
                    size={28}
                    className="
                      mt-6
                      text-violet-600
                    "
                  />

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-slate-950
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                    "
                  >
                    {feature.description}
                  </p>
                </div>

                
              </motion.div>
              
            );
          })}

          
        </motion.div>
        
      </div>
    </section>
  );
}