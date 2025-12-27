"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, XCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import {
    Truck,
    MapPin,
    Clock,
    Gauge,
    User,
    AlertTriangle,
    CheckCircle2,
    Navigation,
} from "lucide-react";
import './assests/map-png-icon.png'


export default function LogisticsLanding() {

    function Detail({
        label,
        value,
    }: {
        label: string;
        value: React.ReactNode;
    }) {
        return (
            <p className="flex justify-between">
                <span className="text-white/60">{label}</span>
                <span>{value}</span>
            </p>
        );
    }
    return (
        
        <div
            className="
    min-h-screen
    bg-gradient-to-b from-[#0b1220] via-[#0e1a33] to-[#0b1220]
    text-white
    relative
    py-20
    scroll-smooth
  "
        >
              <Header />
            <section

                className="max-w-7xl mx-auto px-6 pt-8 pb-24 grid md:grid-cols-2 gap-12 items-center relative">
                <div>
                    <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm">
                        Built for Logistics & 3PL
                    </span>

                    <h1 className="max-w-2xl text-4xl md:text-6xl font-semibold leading-tight">
                        Automate Logistics Billing, GST & COD —{" "}
                        <span className="relative inline-block">
                            {/* Glow layer */}

                            {/* Text */}
                            <span className="relative text-violet-400 drop-shadow-[0_0_12px_rgba(167,139,250,0.9)] animate-pulse">
                                Without Manual Work
                            </span>
                        </span>


                    </h1>

                    <p className="mt-6 text-lg text-white/80 max-w-xl">
                        A custom ERP that converts shipment data into GST-ready invoices,
                        reconciles COD, and closes your books faster.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button
                            size="lg"
                            className="
    relative rounded-2xl px-8
    bg-violet-500 text-white
    hover:bg-violet-400
   shadow-[0_0_25px_rgba(167,139,250,0.45)] animate-pulse

    hover:shadow-[0_0_40px_rgba(167,139,250,0.65)]
    transition-all duration-300
  "
                        >
                            Book Free Billing Audit
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>


                        <Button
                            size="lg"
                            variant="ghost"
                            className="rounded-2xl text-white/70 hover:text-white"
                        >
                            Request Demo
                        </Button>
                    </div>

                    {/* QUALIFIERS */}
                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/60">
                        <span>✔ 1,000+ shipments/month</span>
                        <span>✔ GST compliant</span>
                        <span>✔ Custom-built</span>
                    </div>
                </div>

                {/* GLASS CARD */}
                <Card className="
  relative
  max-w-md mx-auto
  bg-white/[0.04]
  backdrop-blur-2xl
  border border-white/10
  rounded-3xl
  p-2
  shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.6)]
">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />

                    <CardContent className="relative p-0 flex flex-row ">
                        {/* Title */}

                        <div className="relative p-8 flex flex-col items-start">
                            {/* Title */}
                            <p className="text-violet-400 text-sm font-medium tracking-wide mb-2">
                                Operations & Billing Pain Points
                            </p>

                            <h3 className="text-xl font-semibold text-white mb-6 leading-snug">
                                What logistics teams <span className="text-violet-400">eliminate</span> with us
                            </h3>

                            {/* List */}
                            <ul className="space-y-5 w-full max-w-sm">
                                {[
                                    {
                                        title: "Manual billing from spreadsheets",
                                        desc: "No more Excel-based invoice creation and human errors.",
                                    },
                                    {
                                        title: "COD mismatches & leakage",
                                        desc: "Automatically reconcile collected vs receivable COD.",
                                    },
                                    {
                                        title: "GST calculation & filing errors",
                                        desc: "Correct CGST / SGST / IGST every time — audit ready.",
                                    },
                                    {
                                        title: "Month-end billing chaos",
                                        desc: "Close books faster with automated statements & reports.",
                                    },
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-4">
                                        {/* Icon */}
                                        <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 shrink-0">
                                            <CheckCircle className="h-5 w-5 text-violet-400" />
                                        </span>

                                        {/* Text */}
                                        <div>
                                            <p className="text-white font-medium leading-tight">
                                                {item.title}
                                            </p>
                                            <p className="text-white/60 text-sm mt-1">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </CardContent>
                </Card>
                {/* Scroll hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 text-white/40 text-sm animate-bounce">
                    <span>Scroll</span>
                    <ChevronDown className="h-4 w-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]" />
                </div>

                <section className="border-t border-white/10 py-10">
                    <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-6 text-white/60 text-sm">
                        <span>3PL & Transport Companies</span>
                        <span>Courier & Last-mile</span>
                        <span>Multi-branch Logistics</span>
                    </div>
                </section>

            </section>
            <section className="border-t border-white/10 py-10">
                <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-6 text-white/60 text-sm">
                    <span>3PL & Transport Companies</span>
                    <span>Courier & Last-mile</span>
                    <span>Multi-branch Logistics</span>
                </div>
            </section>


            <section

                id="tracking"
                className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0b1220] via-[#0e1a33] to-[#0b1220] text-white"
            >
                {/* Glow beam */}
                <div className="pointer-events-none absolute inset-0 flex justify-center">
                    <div className="w-[520px] h-full bg-gradient-to-b from-violet-500/0 via-violet-500/25 to-violet-500/0 blur-3xl opacity-70" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">

                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm mb-4">
                            <Navigation className="h-4 w-4 text-violet-400" />
                            Real-time Operations
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                            Live <span className="text-violet-400">Fleet & Shipment Tracking</span>
                        </h2>

                        <p className="text-white/70 max-w-2xl mx-auto">
                            Monitor pickup, hub transfers and final delivery with live GPS,
                            AI-predicted ETA, alerts and billing sync.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* MAP / ROUTE – FULL MAP VIEW */}
                        {/* MAP / ROUTE – FULL MAP VIEW */}
                        <div
                            className="
    lg:col-span-2
    relative
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    p-4
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-1
    hover:border-violet-400/40
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(167,139,250,0.25)]
    group
  "
                        >


                            {/* MAP IMAGE */}
                            <div className="relative h-[520px] w-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/assets/16077.jpg"
                                    alt="City map"
                                    fill
                                    className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-[1.03]"
                                    priority

                                />
                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-black/30" />
                                {/* ROUTE LINE */}
                                <svg
                                    viewBox="0 0 1000 600"
                                    className="absolute inset-0 w-full h-full"
                                    fill="none"
                                >
                                    <path
                                        d="M120 120 C 260 220, 360 140, 520 220 S 760 300, 900 240"
                                        stroke="#60a5fa"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        opacity="0.15"
                                    />
                                </svg>
                                <svg
                                    viewBox="0 0 1000 600"
                                    className="absolute inset-0 w-full h-full"
                                    fill="none"
                                >
                                    {/* MAIN ROUTE */}
                                    <path
                                        d="M180 460
                                        C 280 660, 420 500, 560 340
                                        S 760 900, 890 180"
                                        stroke="#ffc940ff"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeDasharray="12 18"

                                    />
                                    {/* SECONDARY ROUTE */}
                                </svg>
                                <svg
                                    viewBox="0 0 1000 600"
                                    className="absolute inset-0 w-full h-full"
                                    fill="none">
                                    <path
                                        d="M80 420 C 200 380, 320 440, 480 400 S 720 360, 880 420"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        opacity="0.18"
                                    />
                                    <path
                                        d="M120 120 C 260 220, 360 140, 520 220 S 760 300, 900 240"
                                        stroke="#60a5fa"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        opacity="0.15"
                                    />
                                    <path
                                        d="M120 120 C 260 220, 360 140, 520 220 S 760 300, 900 240"
                                        stroke="#3b82f6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeDasharray="12 18"
                                        opacity="0.9"
                                    />
                                    <circle cx="260" cy="220" r="6" fill="#93c5fd" opacity="0.9" />
                                    <circle cx="520" cy="220" r="6" fill="#93c5fd" opacity="0.9" />
                                    <circle cx="760" cy="300" r="6" fill="#93c5fd" opacity="0.9" />
                                    <rect x="180" y="260" width="22" height="14" rx="3" fill="white" opacity="0.15" />
                                    <rect x="210" y="250" width="28" height="18" rx="3" fill="white" opacity="0.18" />
                                    <rect x="245" y="270" width="18" height="12" rx="3" fill="white" opacity="0.12" />
                                    <rect x="430" y="160" width="26" height="16" rx="3" fill="white" opacity="0.16" />
                                    <rect x="465" y="150" width="20" height="14" rx="3" fill="white" opacity="0.14" />
                                    <rect x="495" y="165" width="30" height="18" rx="3" fill="white" opacity="0.18" />
                                    <rect x="700" y="260" width="24" height="16" rx="3" fill="white" opacity="0.15" />
                                    <rect x="730" y="245" width="30" height="20" rx="3" fill="white" opacity="0.18" />
                                    <rect x="765" y="265" width="18" height="12" rx="3" fill="white" opacity="0.12" />
                                    <circle cx="520" cy="220" r="14" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
                                    <circle cx="520" cy="220" r="4" fill="#60a5fa" opacity="0.9" />
                                </svg>

                                {/* PICKUP */}
                                <div className="absolute left-[14%] bottom-[24%] text-xs text-white/80">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-10 w-10 text-emerald-400" />
                                        Mumbai
                                    </div>
                                </div>

                                {/* HUB */}
                                <div className="absolute left-[62%] top-[49%] -translate-x-1/2 text-center">
                                    <div className="relative">
                                        <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse" />
                                        <div className="relative h-11 w-10 rounded-full bg-blue-500/30 flex items-center justify-center shadow-xl">
                                            <Navigation className="h-10 w-5 text-white" />
                                        </div>
                                    </div>
                                    <span className="mt-1 block text-[11px] text-white/70">Indore Hub</span>
                                </div>


                                {/* DROP */}
                                <div className="absolute right-[1%] top-[25%] text-xs text-white/80">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-10 w-10 text-orange-400" />
                                        Bangalore
                                    </div>
                                </div>

                                {/* TRUCK */}
                                <div className="absolute left-[48%] top-[52%] flex items-center gap-2">
                                    <div className="relative">
                                        <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-xl animate-pulse" />

                                    </div>

                                    {/* <div className="rounded-md bg-black/70 px-3 py-1 text-xs border border-white/10">
                                        TRK-1023 · <span className="text-emerald-400">Live</span>
                                    </div> */}
                                </div>

                                {/* MAP KPI BAR */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                    <div className="flex gap-6 rounded-xl bg-black/60 backdrop-blur px-5 py-2 text-xs text-white/80 border border-white/10">
                                        <div className="flex items-center gap-1">
                                            <Gauge className="h-4 w-4" />
                                            54 km/h
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            ETA 18 min
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT DETAILS PANEL */}
                        <div
                            className="
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    p-6
    space-y-6
    transition-all duration-300
    hover:-translate-y-1
    hover:border-violet-400/40
    hover:shadow-[0_20px_55px_rgba(0,0,0,0.6),0_0_25px_rgba(167,139,250,0.25)]
    group
  "
                        >
                            <h4 className="text-lg font-semibold text-violet-400">
                                Live Shipment Details
                            </h4>

                            <div className="space-y-3 text-sm text-white/80">
                                <div className="transition group-hover:text-white">
                                    <Detail label="Shipment ID" value="ORD-784512" />
                                </div>

                                <div className="transition group-hover:text-white">
                                    <Detail label="Truck" value="TRK-1023" />
                                </div>

                                <div className="transition group-hover:text-white">
                                    <Detail label="Driver" value="R. Sharma" />
                                </div>

                                <div className="transition">
                                    <Detail
                                        label="Status"
                                        value={<span className="text-emerald-400">In Transit</span>}
                                    />
                                </div>

                                <div className="transition group-hover:text-white">
                                    <Detail label="Distance Left" value="212 km" />
                                </div>

                                <div className="transition group-hover:text-white">
                                    <Detail label="Fuel Efficiency" value="5.4 km/l" />
                                </div>
                            </div>

                            <Button
                                size="sm"
                                className="
      w-full
      bg-violet-500
      hover:bg-violet-400
      text-black
      shadow-[0_0_20px_rgba(167,139,250,0.35)]
      hover:shadow-[0_0_35px_rgba(167,139,250,0.6)]
      transition-all
    "
                            >
                                View Full Tracking
                            </Button>
                        </div>

                    </div>
                </div>


            </section>


            <section
                id="solutions"
                className="pt-[5px] min-h-screen relative bg-gradient-to-b from-[#0b1220] via-[#0e1a33] to-[#0b1220] text-white "
            >
                {/* Glow background */}
                <div className="pointer-events-none absolute inset-0 flex justify-center">
                    <div className="w-[620px] h-full bg-gradient-to-b from-violet-500/0 via-violet-500/20 to-violet-500/0 blur-3xl opacity-60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm mb-4">
                            <Truck className="h-4 w-4 text-violet-400" />
                            Built for Logistics Operations
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Solutions for{" "}
                            <span className="text-violet-400">Modern Logistics Teams</span>
                        </h2>

                        <p className="text-white/70 max-w-3xl mx-auto">
                            Purpose-built ERP solutions that remove manual work, prevent revenue
                            leakage, and give full operational visibility.
                        </p>
                    </div>

                    {/* Solution Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Billing & Invoicing Automation",
                                desc: "Generate shipment-wise and monthly consolidated invoices directly from route, weight and rate cards.",
                                points: ["Auto invoices", "Client rate cards", "Zero manual entry"],
                            },
                            {
                                title: "COD Reconciliation",
                                desc: "Track collected vs receivable COD across hubs, drivers and clients without spreadsheet chaos.",
                                points: ["COD mismatch alerts", "Settlement reports", "Leakage prevention"],
                            },
                            {
                                title: "GST & Compliance",
                                desc: "GST-ready invoices with CGST, SGST, IGST and exportable GSTR-1 data.",
                                points: ["Audit ready", "Tax breakup", "No filing errors"],
                            },
                            {
                                title: "Live Fleet Tracking",
                                desc: "Real-time truck, hub and route visibility with AI-based ETA and alerts.",
                                points: ["Live GPS", "Delay alerts", "Hub transfers"],
                            },
                            {
                                title: "Operations Control",
                                desc: "Centralized control for multi-branch logistics operations and client billing.",
                                points: ["Role-based access", "Audit logs", "Branch wise reports"],
                            },
                            {
                                title: "Finance & Reports",
                                desc: "Clear financial visibility with exportable reports for ERP and accounting teams.",
                                points: ["TDS handling", "Fuel surcharge", "Tally export"],
                            },
                        ].map((s) => (
                            <div
                                key={s.title}
                                className="
            group
            relative
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            transition-all duration-300
            hover:-translate-y-2
            hover:border-violet-400/40
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(167,139,250,0.25)]
          "
                            >
                                {/* subtle shine */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition">
                                    {s.title}
                                </h3>

                                <p className="text-white/70 text-sm mb-4">
                                    {s.desc}
                                </p>

                                <ul className="space-y-2 text-sm">
                                    {s.points.map((p) => (
                                        <li key={p} className="flex items-center gap-2 text-white/80">
                                            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-semibold mb-3">
                            Custom-built for your logistics workflow
                        </h3>

                        <p className="text-white/70 mb-2">
                            Not SaaS. Not templates. We build ERP systems around how your logistics
                            business actually works.
                        </p>

                        <p className="text-white/50 text-sm">
                            ERP scope is finalized after understanding your workflow.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="pricing"
                className=" pt-[15] relative bg-gradient-to-b from-[#0b1220] via-[#0e1a33] to-[#0b1220] text-white "
            >

                <div className="pointer-events-none absolute inset-0 flex justify-center">
                    <div className="w-[640px] h-full bg-gradient-to-b from-violet-500/0 via-violet-500/20 to-violet-500/0 blur-3xl opacity-60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm mb-4">
                            Pricing
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Built-to-Order ERP —{" "}
                            <span className="text-violet-400">Priced for Scale</span>
                        </h2>

                        <p className="text-white/70 max-w-3xl mx-auto">
                            We don’t sell subscriptions. We design, build and deploy a custom
                            logistics ERP tailored to your operations, billing logic and scale.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <div
                            className="
    relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:scale-[1.02]
    hover:border-violet-400/50
    hover:shadow-[0_25px_60px_rgba(167,139,250,0.25)]
  "
                        >

                            <h3 className="text-xl font-semibold mb-2">Starter ERP</h3>
                            <p className="text-white/60 text-sm mb-6">
                                For growing logistics teams starting automation
                            </p>

                            <div className="text-4xl font-semibold mb-6">
                                ₹6–8L
                            </div>

                            <ul className="space-y-3 text-sm text-white/80 mb-8">
                                <li>✔ Shipment-based invoicing</li>
                                <li>✔ GST-ready invoices</li>
                                <li>✔ Client rate cards</li>
                                <li>✔ Basic COD reconciliation</li>
                                <li>✔ Admin dashboard</li>
                            </ul>

                            <p className="text-white/50 text-sm text-center">
                                Discuss scope & customization
                            </p>

                        </div>

                        {/* Growth (Recommended) */}
                        <div
                            className="
    relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:scale-[1.02]
    hover:border-violet-400/50
    hover:shadow-[0_25px_60px_rgba(167,139,250,0.25)]
  "
                        >

                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-4 py-1 text-xs text-black font-medium">
                                Most Chosen
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                Growth ERP
                            </h3>
                            <p className="text-white/70 text-sm mb-6">
                                For multi-client, multi-branch logistics operations
                            </p>

                            <div className="text-4xl font-semibold mb-6 text-violet-400">
                                ₹12–18L
                            </div>

                            <ul className="space-y-3 text-sm text-white/90 mb-8">
                                <li>✔ Everything in Starter</li>
                                <li>✔ Advanced COD reconciliation</li>
                                <li>✔ Monthly consolidated billing</li>
                                <li>✔ Live fleet & hub tracking</li>
                                <li>✔ Role-based access control</li>
                                <li>✔ Audit logs & reports</li>
                            </ul>

                            <Button
                                size="lg"
                                className="w-full bg-violet-500 hover:bg-violet-400 text-black shadow-[0_0_25px_rgba(167,139,250,0.45)]"
                            >
                                Book Demo
                            </Button>
                        </div>

                        {/* Enterprise */}
                        <div
                            className="
    relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:scale-[1.02]
    hover:border-violet-400/50
    hover:shadow-[0_25px_60px_rgba(167,139,250,0.25)]
  "
                        >

                            <h3 className="text-xl font-semibold mb-2">Enterprise ERP</h3>
                            <p className="text-white/60 text-sm mb-6">
                                For large logistics, 3PL & enterprise operations
                            </p>

                            <div className="text-4xl font-semibold mb-6">
                                ₹25L+
                            </div>

                            <ul className="space-y-3 text-sm text-white/80 mb-8">
                                <li>✔ Fully custom workflows</li>
                                <li>✔ AI ETA & delay alerts</li>
                                <li>✔ Custom integrations (Tally, SAP, APIs)</li>
                                <li>✔ High-volume billing engine</li>
                                <li>✔ Dedicated deployment & support</li>
                            </ul>

                            <p className="text-white/50 text-sm text-center">
                                Discuss scope & customization
                            </p>

                        </div>
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-16 text-center text-white/60 text-sm max-w-3xl mx-auto">
                        No per-user pricing. No hidden charges.
                        You own the ERP, source code, and infrastructure.
                    </div>
                </div>

            </section>
            <section
                id="company"
                className="py-20 relative min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0e1a33] to-[#0b1220] text-white"
            >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 flex justify-center">
                    <div className="w-[620px] h-full bg-gradient-to-b from-violet-500/0 via-violet-500/20 to-violet-500/0 blur-3xl opacity-60" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm mb-4">
                            Company
                        </span>

                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Built by operators, for{" "}
                            <span className="text-violet-400">logistics operators</span>
                        </h2>

                        <p className="text-white/70 max-w-3xl mx-auto">
                            creonox builds custom Logistics ERP systems for companies that have
                            outgrown spreadsheets, fragmented tools and generic SaaS software.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        {/* Left */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Why creonox exists
                            </h3>

                            <p className="text-white/70 mb-6 leading-relaxed">
                                Most logistics companies lose revenue due to billing errors, COD
                                mismatches, GST issues and disconnected operations.
                                <br /><br />
                                We started creonox to solve this exact problem — by building
                                <span className="text-white font-medium">
                                    {" "}custom ERP systems that mirror real logistics workflows
                                </span>
                                , not forcing businesses to adapt to rigid SaaS tools.
                            </p>

                            <ul className="space-y-4 text-white/80">
                                {[
                                    "Built specifically for Indian logistics & 3PL businesses",
                                    "Designed around billing logic, not UI gimmicks",
                                    "Focused on revenue accuracy, control and scale",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 transition hover:text-white"
                                    >
                                        <span className="h-2 w-2 mt-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right – Stats / Trust */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { label: "ERP Projects Delivered", value: "20+" },
                                { label: "Shipments Automated / Month", value: "1M+" },
                                { label: "Billing Accuracy Achieved", value: "99.9%" },
                                { label: "Avg Client ROI Timeline", value: "90 Days" },
                            ].map((s) => (
                                <div
                                    key={s.label}
                                    className="
              group
              relative
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-6
              transition-all duration-300
              hover:-translate-y-2
              hover:border-violet-400/40
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(167,139,250,0.2)]
            "
                                >
                                    <p className="text-3xl font-semibold text-violet-400 mb-2 transition group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]">
                                        {s.value}
                                    </p>
                                    <p className="text-white/70 text-sm">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div
                        className="
        group
        mt-20
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        text-center
        transition-all duration-300
        hover:border-violet-400/40
        hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]
      "
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Our philosophy
                        </h3>

                        <p className="text-white/70 max-w-4xl mx-auto leading-relaxed">
                            We don’t sell licenses. We don’t charge per user.
                            <br />
                            We partner with logistics companies to build{" "}
                            <span className="text-white font-medium">
                                long-term ERP systems
                            </span>{" "}
                            that scale with operations, clients and revenue.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-semibold mb-4">
                            Let’s understand your logistics workflow
                        </h3>

                        <p className="text-white/70 mb-8">
                            A 15-minute discussion can reveal billing leaks and automation
                            opportunities in your operation.
                        </p>

                        <Button
                            size="lg"
                            className="
          bg-violet-500
          hover:bg-violet-400
          text-black
          px-10
          rounded-2xl
          shadow-[0_0_30px_rgba(167,139,250,0.45)]
          hover:shadow-[0_0_50px_rgba(167,139,250,0.7)]
          transition-all
        "
                        >
                            Talk to creonox
                        </Button>
                    </div>
                </div>
            </section>


            <section className="bg-black/30 py-28 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Real results from{" "}
                            <span className="text-violet-400">real logistics operations</span>
                        </h2>
                        <p className="text-white/70 max-w-3xl mx-auto">
                            ERP systems built by creonox recover revenue, reduce billing time,
                            and give full operational control.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "3PL Courier Company",
                                before: "Manual billing, COD mismatches, 12-day billing cycle",
                                after: "Automated invoices, zero COD leakage, 2-day billing",
                                impact: "₹38L recovered in 6 months",
                            },
                            {
                                title: "Multi-Branch Transporter",
                                before: "No branch visibility, Excel-based GST",
                                after: "Central ERP, GST-ready billing",
                                impact: "Billing accuracy increased to 99.9%",
                            },
                            {
                                title: "D2C Fulfilment Partner",
                                before: "Delayed invoicing & disputes",
                                after: "Shipment-based billing + live tracking",
                                impact: "Faster client payments by 40%",
                            },
                        ].map((c) => (
                            <div
                                key={c.title}
                                className="
            group
            relative
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:border-violet-400/40
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(167,139,250,0.15)]
          "
                            >
                                {/* subtle shine */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                                <h3 className="text-xl font-semibold mb-3">
                                    {c.title}
                                </h3>

                                <p className="text-sm text-white/60 mb-2">
                                    <strong className="text-white/80">Before:</strong> {c.before}
                                </p>

                                <p className="text-sm text-white/60 mb-4">
                                    <strong className="text-white/80">After:</strong> {c.after}
                                </p>

                                <div className="text-violet-400 font-semibold transition group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.6)]">
                                    {c.impact}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 text-white">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
                    Frequently asked questions
                </h2>

                <div className="space-y-6">
                    {[
                        {
                            q: "Is this a SaaS product?",
                            a: "No. creonox builds a custom ERP tailored to your logistics workflow. You own the system.",
                        },
                        {
                            q: "What is the typical project cost?",
                            a: "Most projects range from ₹8L to ₹25L depending on complexity, users and integrations.",
                        },

                        {
                            q: "Can it integrate with carriers, GST, Tally?",
                            a: "Yes. We integrate with shipping APIs, GST reports, Tally/ERP systems.",
                        },
                        {
                            q: "Is support provided after launch?",
                            a: "Yes. We provide long-term support, upgrades and scaling assistance.",
                        },
                    ].map((f) => (
                        <div
                            key={f.q}
                            className="
          group
          relative rounded-2xl border border-white/10 bg-white/5
          p-6
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:border-violet-400/40
          hover:bg-white/[0.07]
          hover:shadow-[0_20px_50px_rgba(167,139,250,0.18)]
        "
                        >
                            {/* Glow layer */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                            {/* Question */}
                            <div className="relative flex gap-3 mb-3">
                                <span className="text-violet-400 font-semibold">Q.</span>
                                <p className="font-semibold">{f.q}</p>
                            </div>

                            {/* Answer */}
                            <div className="relative flex gap-3">
                                <span className="text-white/50 font-semibold">A.</span>
                                <p className="text-white/70 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            <section className="bg-black/40 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
                        Why logistics companies choose{" "}
                        <span className="text-violet-400">creonox</span>
                    </h2>

                    <div className="overflow-x-auto">
                        <div className="min-w-[720px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-white/10 text-white/80">
                                        <th className="p-5 text-left font-medium">Feature</th>
                                        <th className="p-5 text-center font-medium">creonox ERP</th>
                                        <th className="p-5 text-center font-medium">SaaS ERP</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[
                                        ["Custom workflow", "✔ Yes", "✖ Limited"],
                                        ["One-time ownership", "✔ Yes", "✖ Subscription"],
                                        ["COD logic flexibility", "✔ Full control", "✖ Fixed"],
                                        ["GST billing accuracy", "✔ High", "⚠ Depends"],
                                        ["Scales with operations", "✔ Yes", "✖ Expensive"],
                                    ].map(([feature, creonox, saas]) => (
                                        <tr
                                            key={feature}
                                            className="border-t border-white/10 hover:bg-white/[0.04] transition"
                                        >
                                            <td className="p-5 text-white/90">{feature}</td>
                                            <td className="p-5 text-center text-emerald-400 font-medium">
                                                {creonox}
                                            </td>
                                            <td className="p-5 text-center text-red-400 font-medium">
                                                {saas}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-6xl mx-auto px-6 py-10 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    Our vision
                </h2>

                <p className="text-white/70 max-w-4xl mx-auto leading-relaxed mb-10">
                    We believe logistics companies should not lose money due to bad systems.
                    <br /><br />
                    creonox exists to build ERP platforms that give founders, finance teams
                    and operations leaders **absolute control over billing, data and growth**.
                </p>

                <div className="text-white/60 text-sm">
                    Built in India • Designed for scale • Engineered for accuracy
                </div>
            </section>

            <footer className="border-t border-white/10 py-10 text-center text-white/50">
                Custom-built Logistics ERP • Not SaaS • Not Templates
            </footer>
        </div>
    );
}
