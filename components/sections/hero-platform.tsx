"use client";

import { motion } from "framer-motion";

export default function HeroPlatform() {
  const depth = 16;

  return (
    <div
      className="
        relative
        mx-auto
        mt-24
        h-[650px]
        w-full
        max-w-6xl
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-violet-500/10
          via-fuchsia-500/10
          to-cyan-500/10

          blur-3xl
        "
      />

      {/* Main Isometric Platform */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
        "
        style={{
          transform:
            "translate(-50%, -50%) rotateX(65deg) rotateZ(-35deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shadow */}
        <div
          className="
            absolute

            h-[340px]
            w-[620px]

            rounded-[50px]

            bg-slate-300/30

            blur-xl
          "
          style={{
            transform: "translateZ(-50px)",
          }}
        />

        {/* Bottom */}
        <div
          className="
            absolute

            h-[340px]
            w-[620px]

            rounded-[50px]

            bg-slate-200
          "
          style={{
            transform: "translateZ(-30px)",
          }}
        />

        {/* Main */}
        <div
          className="
            absolute

            h-[340px]
            w-[620px]

            rounded-[50px]

            border
            border-white/40

            bg-white/90

            backdrop-blur-xl

            shadow-[0_40px_120px_rgba(15,23,42,0.12)]
          "
        />

        {/* Top Layer */}
        <div
          className="
            absolute

            h-[280px]
            w-[560px]

            rounded-[40px]

            bg-gradient-to-br
            from-violet-50
            via-white
            to-cyan-50
          "
          style={{
            transform:
              "translateZ(25px) translateX(30px) translateY(30px)",
          }}
        />
      </div>

      {/* Floating AI Cube */}
      <div
        className="
          absolute
          left-1/2
          top-[110px]

          -translate-x-1/2
        "
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={{
            rotateX: 360,
            rotateY: 360,
            y: [0, -15, 0],
          }}
          transition={{
            rotateX: {
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            },
            rotateY: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 4,
              repeat: Infinity,
            },
          }}
          style={{
            width: 100,
            height: 100,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-violet-500/30

              blur-3xl
            "
          />

          {/* Front */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-gradient-to-br
              from-violet-500
              via-fuchsia-500
              to-cyan-400
            "
            style={{
              transform: `translateZ(${depth}px)`,
            }}
          />

          {/* Back */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-gradient-to-br
              from-violet-700
              via-fuchsia-700
              to-cyan-600
            "
            style={{
              transform: `rotateY(180deg) translateZ(${depth}px)`,
            }}
          />

          {/* Left */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-violet-800
            "
            style={{
              transform: `rotateY(-90deg) translateZ(${depth}px)`,
            }}
          />

          {/* Right */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-cyan-500
            "
            style={{
              transform: `rotateY(90deg) translateZ(${depth}px)`,
            }}
          />

          {/* Top */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-white/30
              backdrop-blur-xl
            "
            style={{
              transform: `rotateX(90deg) translateZ(${depth}px)`,
            }}
          />

          {/* Bottom */}
          <div
            className="
              absolute
              inset-0

              rounded-3xl

              bg-violet-950
            "
            style={{
              transform: `rotateX(-90deg) translateZ(${depth}px)`,
            }}
          />
        </motion.div>
      </div>

      {/* Center AI Engine */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-[320px]

          flex
          h-28
          w-28

          -translate-x-1/2

          items-center
          justify-center

          rounded-3xl

          bg-gradient-to-br
          from-violet-600
          via-fuchsia-500
          to-cyan-400

          text-sm
          font-semibold
          text-white

          shadow-[0_20px_80px_rgba(139,92,246,0.35)]
        "
      >
        AI CORE
      </motion.div>

      {/* Modules */}
      <Module
        title="CRM"
        left="18%"
        top="55%"
      />

      <Module
        title="AUDIT"
        left="50%"
        top="80%"
      />

      <Module
        title="ERP"
        left="82%"
        top="55%"
      />

      {/* Data Pulse */}
      <motion.div
        animate={{
          x: [0, 260],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-[240px]
          top-[320px]

          h-3
          w-3

          rounded-full

          bg-cyan-400

          shadow-[0_0_20px_rgba(34,211,238,1)]
        "
      />
    </div>
  );
}

function Module({
  title,
  left,
  top,
}: {
  title: string;
  left: string;
  top: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className="
        absolute

        h-24
        w-24

        -translate-x-1/2
        -translate-y-1/2

        rounded-3xl

        border
        border-white/20

        bg-white/90

        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      "
      style={{
        left,
        top,
      }}
    >
      <div
        className="
          flex
          h-full
          items-center
          justify-center

          text-sm
          font-semibold

          text-slate-700
        "
      >
        {title}
      </div>
    </motion.div>
  );
}