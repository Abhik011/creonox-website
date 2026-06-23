
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function DesktopMegaMenu({
    open,
    setOpen,
}: Props) {
    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Trigger */}

            <button
                className="
          flex
          items-center
          gap-1

          rounded-xl
          px-4
          py-2.5
          text-sm
          font-medium
          text-slate-600
          transition-all
          duration-300
          hover:text-violet-700
          hover:bg-violet-50
        "
            >
                Services

                <ChevronDown
                    size={14}
                    className={`
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
                />
            </button>

            {/* Mega Menu */}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 12,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 12,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="
              absolute
              left-1/2
              top-[calc(100%-4px)]
            z-[100000]

              mt-0

              w-[1100px]
              max-w-[90vw]

              -translate-x-1/2

              rounded-[32px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-[0_40px_120px_rgba(15,23,42,0.12)]
            "
                    >
                        <div className="grid grid-cols-12 gap-8">
                            {/* Featured */}

                           

                            {/* Services */}

                            <div className="col-span-3">
                                <p
                                    className="
                    mb-5

                    text-xs
                    font-semibold

                    uppercase
                    tracking-[0.2em]

                    text-slate-400
                  "
                                >
                                    Services
                                </p>

                                <div className="space-y-2">
                                    {[
                                        {
                                            title:
                                                "ERP Development Company",
                                            desc:
                                                "Enterprise software solutions",
                                            href:
                                                "/services/erp-development-company",
                                        },
                                        {
                                            title:
                                                "Custom ERP Development",
                                            desc:
                                                "Tailored ERP systems",
                                            href:
                                                "/services/custom-erp-development",
                                        },
                                        {
                                            title:
                                                "CRM Development",
                                            desc:
                                                "Customer management software",
                                            href:
                                                "/services/crm-development",
                                        },
                                        {
                                            title:
                                                "Mobile App Development",
                                            desc:
                                                "iOS & Android applications",
                                            href:
                                                "/services/mobile-app-development",
                                        },
                                    ].map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="
                        block

                        rounded-2xl

                        p-4

                        transition-all
                        duration-300

                        hover:bg-violet-50
                      "
                                        >
                                            <h4
                                                className="
                          font-medium
                          text-slate-950
                        "
                                            >
                                                {item.title}
                                            </h4>

                                            <p
                                                className="
                          mt-1
                          text-sm
                          text-slate-500
                        "
                                            >
                                                {item.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
