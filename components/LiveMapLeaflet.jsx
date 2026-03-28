"use client";

import { MapPin, Navigation } from "lucide-react";

export default function RouteMap() {
  return (
    <div className="relative h-[560px] w-full rounded-3xl overflow-hidden bg-[#070b14] border border-white/10">

  {/* BASE LAND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,#1e293b55,transparent_60%),radial-gradient(circle_at_70%_70%,#020617,transparent_65%)]" />

  {/* CITY BLOCKS */}
  <div
    className="absolute inset-0 opacity-[0.25]"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, #ffffff0a 0 22px, transparent 22px 44px),
        repeating-linear-gradient(90deg, #ffffff0a 0 28px, transparent 28px 56px)
      `,
      backgroundSize: "160px 160px",
    }}
  />

  {/* SECONDARY ROADS */}
  <svg viewBox="0 0 1000 560" className="absolute inset-0 w-full h-full opacity-40">
    <path d="M0 120 H1000" stroke="white" strokeWidth="1" />
    <path d="M0 260 H1000" stroke="white" strokeWidth="1" />
    <path d="M0 420 H1000" stroke="white" strokeWidth="1" />

    <path d="M160 0 V560" stroke="white" strokeWidth="1" />
    <path d="M360 0 V560" stroke="white" strokeWidth="1" />
    <path d="M560 0 V560" stroke="white" strokeWidth="1" />
    <path d="M760 0 V560" stroke="white" strokeWidth="1" />
  </svg>

  {/* MAIN ROADS + ROUTES */}
  <svg viewBox="0 0 1000 560" className="absolute inset-0 w-full h-full">

    {/* MAIN ROAD (THICK) */}
    <path
      d="M100 460 L280 380 L420 440 L600 320 L760 360 L920 240"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      opacity="0.18"
    />

    {/* ACTIVE ROUTE */}
    <path
      d="M100 460 L280 380 L420 440 L600 320 L760 360 L920 240"
      stroke="#38bdf8"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* ALTERNATE ROUTES */}
    <path
      d="M280 380 L420 300"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="6 10"
      opacity="0.6"
    />
    <path
      d="M600 320 L760 260"
      stroke="white"
      strokeWidth="2"
      strokeDasharray="6 10"
      opacity="0.6"
    />

    {/* DIRECTION ARROW */}
    <polygon
      points="920,240 900,230 902,250"
      fill="#38bdf8"
    />
  </svg>

  {/* INTERSECTION DOTS */}
  {[
    [280, 380],
    [420, 440],
    [600, 320],
    [760, 360],
  ].map(([x, y], i) => (
    <div
      key={i}
      className="absolute h-2 w-2 rounded-full bg-white/50"
      style={{ left: `${x / 10}%`, top: `${y / 5.6}%` }}
    />
  ))}

  {/* START */}
  <div className="absolute left-[9%] bottom-[14%] text-center">
    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
    <span className="text-xs text-white/70 mt-1 block">Mumbai</span>
  </div>

  {/* MID NAV */}
  <div className="absolute left-[58%] top-[56%] flex items-center gap-2">
    <div className="relative">
      <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-xl animate-pulse" />
      <div className="relative h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center">
        <Navigation className="h-5 w-5 text-white" />
      </div>
    </div>

    <div className="rounded-md bg-black/70 px-3 py-1 text-xs border border-white/10 text-white">
      TRK-1023 · Live
    </div>
  </div>

  {/* DESTINATION */}
  <div className="absolute right-[6%] top-[20%] text-center">
    <MapPin className="h-5 w-5 text-sky-400 drop-shadow-[0_0_14px_#38bdf8]" />
    <span className="text-xs text-white/70 mt-1 block">Bangalore</span>
  </div>

  {/* ETA */}
  <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-xl bg-sky-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
    ETA · 14:00 Arrival
  </div>

</div>

  );
}
