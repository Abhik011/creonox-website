"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRight,
    FileText,
    ShoppingCart,
    Package,
    Settings,
    Truck,
    Receipt,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
    {
        step: "01",
        title: "Lead",
        description:
            "Capture customer enquiries, opportunities and business requirements.",
        icon: ArrowRight,
    },
    {
        step: "02",
        title: "Quotation",
        description:
            "Generate pricing, proposals and approval workflows automatically.",
        icon: FileText,
    },
    {
        step: "03",
        title: "Order",
        description:
            "Convert approved quotations into confirmed business orders.",
        icon: ShoppingCart,
    },
    {
        step: "04",
        title: "Inventory",
        description:
            "Allocate stock, warehouses and inventory resources efficiently.",
        icon: Package,
    },
    {
        step: "05",
        title: "Operations",
        description:
            "Manage production, procurement and operational execution.",
        icon: Settings,
    },
    {
        step: "06",
        title: "Dispatch",
        description:
            "Coordinate shipments, routes and delivery planning.",
        icon: Truck,
    },
    {
        step: "07",
        title: "Invoice",
        description:
            "Automate invoicing, collections and financial reporting.",
        icon: Receipt,
    },
];

export default function ERPWorkflowHorizontalScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const ctx = gsap.context(() => {
            const getScrollAmount = () => {
                const lastCard = track.children[
                    track.children.length - 1
                ] as HTMLElement;

                const lastCardLeft = lastCard.offsetLeft;
                const lastCardWidth = lastCard.offsetWidth;

                return (
                    lastCardLeft -
                    window.innerWidth / 2 +
                    lastCardWidth / 2
                );
            };

            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.refresh();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#f8f8fc]"
        >
            <div className="flex h-screen flex-col">

                {/* Header */}

                <div className="mx-auto w-full max-w-7xl px-6 pt-12">

                    <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                        ERP Workflow
                    </span>

                    <h2 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-6xl">
                        Built Around Real Business Workflows
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Every department works together in one connected ERP platform.
                        Scroll down to follow the complete workflow from lead generation
                        to invoicing and business intelligence.
                    </p>
                </div>

                {/* Horizontal Timeline */}

                <div className="mt-10 flex-1 overflow-hidden">

                    <div
                        ref={trackRef}
                        className="flex h-full items-center gap-8 pl-[25vw] pr-[35vw]"
                    >
                        {workflowSteps.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="relative h-[320px] w-[340px] shrink-0"
                                >
                                    {/* Connection Line */}

                                    {index !== workflowSteps.length - 1 && (
                                        <div className="absolute left-full top-1/2 z-0 h-[2px] w-8 -translate-y-1/2 bg-violet-300" />
                                    )}

                                    {/* Card */}

                                    <div
                                        className="
                      relative
                      z-10
                      flex
                      h-full
                      w-full
                      flex-col
                      rounded-[32px]
                      border
                      border-slate-200
                      bg-white
                      p-7
                      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_30px_80px_rgba(124,58,237,0.15)]
                    "
                                    >
                                        <div className="flex items-center justify-between">

                                            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                                                Step {item.step}
                                            </span>

                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">
                                                <Icon className="h-5 w-5 text-violet-600" />
                                            </div>

                                        </div>

                                        <h3 className="mt-6 text-3xl font-semibold text-slate-950">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                                            {item.description}
                                        </p>

                                        <div className="mt-6">
                                            <div className="h-2 rounded-full bg-slate-100">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                                                    style={{
                                                        width: `${((index + 1) / workflowSteps.length) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}