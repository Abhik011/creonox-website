"use client";

import { motion } from "framer-motion";

interface CreonoxLogoProps {
  size?: number;
  textShows?: boolean;
}

export default function CreonoxLogo({
  size = 40,
  textShows = true,
}: CreonoxLogoProps) {
  const depth = size / 4;

  return (
    <div className="flex items-center gap-3">
      {/* Perspective Container */}
      <div
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={{
            rotateX: 360,
            rotateY: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: size,
            height: size,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              inset-0
              rounded-xl
              bg-violet-500/30
              blur-xl
            "
          />

          {/* FRONT */}
          <div
            className="
              absolute
              inset-0

              rounded-xl

              border
              border-white/20

              bg-gradient-to-br
              from-violet-500
              via-fuchsia-500
              to-cyan-400
            "
            style={{
              transform: `translateZ(${depth}px)`,
            }}
          />

          {/* BACK */}
          <div
            className="
              absolute
              inset-0

              rounded-xl

              bg-gradient-to-br
              from-violet-700
              via-fuchsia-700
              to-cyan-600

              opacity-90
            "
            style={{
              transform: `rotateY(180deg) translateZ(${depth}px)`,
            }}
          />

          {/* LEFT */}
          <div
            className="
              absolute
              inset-0

              rounded-xl

              bg-gradient-to-b
              from-violet-700
              to-fuchsia-900
            "
            style={{
              transform: `rotateY(-90deg) translateZ(${depth}px)`,
            }}
          />

          {/* RIGHT */}
          <div
            className="
              absolute
              inset-0

              rounded-xl

              bg-gradient-to-b
              from-cyan-400
              to-blue-600
            "
            style={{
              transform: `rotateY(90deg) translateZ(${depth}px)`,
            }}
          />

          {/* TOP */}
          <div
            className="
              absolute
              inset-0

              rounded-xl

              border
              border-white/10

              bg-white/30
              backdrop-blur-xl
            "
            style={{
              transform: `rotateX(90deg) translateZ(${depth}px)`,
            }}
          />

          {/* BOTTOM */}
          <div
            className="
              absolute
              inset-0

              rounded-xl

              bg-violet-950/60
            "
            style={{
              transform: `rotateX(-90deg) translateZ(${depth}px)`,
            }}
          />

          {/* Orbit Ring */}
          {/* <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -inset-2

              rounded-full

              border
              border-violet-400/20
            "
          /> */}

          {/* Orbit Particle */}
          {/* <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              -inset-2
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-0

                h-1.5
                w-1.5

                -translate-x-1/2

                rounded-full

                bg-cyan-300
              "
            />
          </motion.div> */}
        </motion.div>
      </div>

      {/* Text */}
      {textShows && (
        <div>
          <h1
            className="
              text-lg
              font-bold
              tracking-tight
              text-slate-950
            "
          >
            Creonox
          </h1>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-slate-500
            "
          >
            Where Systems Become Intelligent
          </p>
        </div>
      )}
    </div>
  );
}