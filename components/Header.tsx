"use client";

import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
 
  { label: "Live Tracking", href: "#tracking" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0b1220]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* BRAND */}
        <div className="flex items-center gap-2 select-none">
          <Truck className="h-6 w-6 text-violet-400 drop-shadow-[0_0_6px_rgba(167,139,250,0.6)]" />
          <span className="font-semibold tracking-wide text-white">
            creonox <span className="text-violet-400">Logistics ERP</span>
          </span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                hover:text-white
                transition
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-violet-400
                after:transition-all
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="
              bg-violet-500
              hover:bg-violet-400
              text-black
              rounded-xl
              shadow-[0_0_20px_rgba(167,139,250,0.45)]
              hover:shadow-[0_0_32px_rgba(167,139,250,0.65)]
              transition-all
            "
          >
            Book Demo
          </Button>
        </div>

      </div>
    </header>
  );
}
