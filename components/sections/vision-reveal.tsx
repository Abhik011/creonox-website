"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function VisionReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 1, 0]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.55],
    [0, 1, 0]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.8],
    [0, 1, 0]
  );

  const opacity4 = useTransform(
    scrollYProgress,
    [0.75, 0.95, 1],
    [0, 1, 1]
  );

  const scale1 = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0.9, 1]
  );

  const scale2 = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [0.9, 1]
  );

  const scale3 = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    [0.9, 1]
  );

  const scale4 = useTransform(
    scrollYProgress,
    [0.75, 1],
    [0.9, 1]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[450vh]"
    >
      {/* Background */}
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Animated Gradient */}
        <motion.div
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            opacity-60
            bg-[linear-gradient(135deg,#ffffff,#faf5ff,#eff6ff,#ffffff)]
            bg-[length:300%_300%]
          "
        />

        {/* Glow */}
        <div className="absolute inset-0">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[800px]
              w-[800px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/10
              blur-[120px]
            "
          />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-8">
          {/* Slide 1 */}
          <motion.div
            style={{
              opacity: opacity1,
              scale: scale1,
            }}
            className="absolute text-center"
          >
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-violet-600">
              Reality
            </p>

            <h2 className="max-w-6xl text-5xl font-semibold tracking-tight text-slate-950 md:text-8xl">
              Most businesses still run on
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                spreadsheets.
              </span>
            </h2>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            style={{
              opacity: opacity2,
              scale: scale2,
            }}
            className="absolute text-center"
          >
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-violet-600">
              Problem
            </p>

            <h2 className="max-w-6xl text-5xl font-semibold tracking-tight text-slate-950 md:text-8xl">
              Workflows become fragmented.
              <span className="block">
                Visibility disappears.
              </span>
            </h2>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            style={{
              opacity: opacity3,
              scale: scale3,
            }}
            className="absolute text-center"
          >
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-violet-600">
              Vision
            </p>

            <h2 className="max-w-6xl text-5xl font-semibold tracking-tight text-slate-950 md:text-8xl">
              Software should adapt
              <span className="block">
                to the business.
              </span>
            </h2>
          </motion.div>

          {/* Slide 4 */}
          <motion.div
            style={{
              opacity: opacity4,
              scale: scale4,
            }}
            className="absolute text-center"
          >
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-violet-600">
              Creonox
            </p>

            <h2 className="max-w-6xl text-5xl font-semibold tracking-tight text-slate-950 md:text-8xl">
              Building operating systems
              <span className="block bg-gradient-to-r from-violet-600 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                for modern industries.
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg text-slate-500">
              Accounting • Compliance • Logistics • Trade
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}