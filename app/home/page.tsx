"use client";

import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Creonox from "@/public/creonox.svg";

import {
    Layers,
    CreditCard,
    Smartphone,
    Truck,
    ArrowRight,
    ShoppingCart,
    CheckCircle,
    Linkedin,
    Instagram,
    Twitter,
    Mail,
    Phone,
    MessageCircle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return value;
}

// ─── Stat card with animated counter ─────────────────────────────────────────
function StatCard({
    value,
    label,
    animate,
}: {
    value: string;
    label: string;
    animate: boolean;
}) {
    // Parse numeric prefix from strings like "20+", "1M+", "99.9%", "90 Days"
    const numericMatch = value.match(/^[\d.]+/);
    const numericPart = numericMatch ? parseFloat(numericMatch[0]) : 0;
    const suffix = value.replace(/^[\d.]+/, "");
    const counted = useCountUp(numericPart, 1600, animate);

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-semibold text-violet-400">
                {animate ? `${counted}${suffix}` : value}
            </p>
            <p className="text-white/60 text-sm mt-1">{label}</p>
        </div>
    );
}

export default function Hero() {
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const formRef = useRef<HTMLDivElement | null>(null);
    const statsRef = useRef<HTMLDivElement | null>(null);
    const API = process.env.NEXT_PUBLIC_API_URL;
    // ── Form state ──────────────────────────────────────────────────────────────
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "Custom ERP",
        message: "",
        agency: "69c7e3de92b529904b6a6a3c", 
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/website/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            setSubmitted(true);
        } catch (err) {
            if (err instanceof Error) {
                setSubmitError(err.message);
            } else {
                setSubmitError("Something went wrong");
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    // ── Scroll restore ──────────────────────────────────────────────────────────
    useEffect(() => {
        window.history.scrollRestoration = "manual";
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, []);

    // ── Animate stats when section enters viewport ──────────────────────────────
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setStatsVisible(true);
            },
            { threshold: 0.4 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0e1a33] to-[#0b1220] text-white overflow-hidden">
            <Head>
                <title>
                    Creonox Technologies | ERP, Logistics, FinTech & Mobile App Development
                </title>
                <meta
                    name="description"
                    content="Creonox Technologies builds custom ERP systems, logistics software, FinTech platforms and mobile applications. Scalable, secure and fully owned solutions for modern businesses."
                />
                <meta
                    name="keywords"
                    content="ERP software company, logistics ERP, fintech software development, mobile app development company, custom ERP India"
                />
                <meta name="author" content="Creonox Technologies" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Creonox Technologies" />
                <meta
                    property="og:description"
                    content="Custom ERP, Logistics, FinTech & Mobile App Development Company"
                />
                <meta property="og:type" content="website" />
            </Head>

            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-violet-500/20 blur-[160px]" />
            </div>

            {/* HEADER */}
            <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/0">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold tracking-wide">
                        <Image
                            src={Creonox}
                            alt="Creonox Technologies Logo"
                            className="h-5 w-auto"
                            priority
                        />
                        <span className="text-violet-400">Creonox</span>
                        <span className="text-white">Technologies</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex gap-8 text-sm text-white/70">
                            {["Solutions", "Contact"].map((i) => (
                                <a
                                    key={i}
                                    href={`#${i.toLowerCase()}`}
                                    className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-violet-400 hover:after:w-full after:transition-all"
                                >
                                    {i}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section className="relative pt-28 pb-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center z-10">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm">
                        Software • ERP • FinTech • Mobile Apps
                    </span>

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        We build{" "}
                        <strong className="relative inline-block text-violet-400 font-semibold">
                            high-performance software
                            <span className="absolute inset-0 bg-violet-400/20 blur-2xl -z-10 animate-pulse" />
                        </strong>
                        <br />
                        for modern businesses
                    </h1>

                    <p className="mt-6 text-white/70 max-w-xl">
                        Creonox Technologies builds custom ERP systems, FinTech platforms,
                        logistics software, e-commerce backends and mobile applications —
                        engineered for scale, security and full code ownership.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex gap-4">
                        <Button
                            size="lg"
                            onClick={() => {
                                setShowForm(true);
                                setTimeout(() => {
                                    formRef.current?.scrollIntoView({ behavior: "smooth" });
                                }, 100);
                            }}
                            className="bg-violet-500 hover:bg-violet-400 text-black shadow-[0_0_30px_rgba(167,139,250,0.6)]"
                        >
                            Get Free Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    {/* Trust points */}
                    <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
                        {["Custom-built", "Code ownership", "Scalable architecture"].map(
                            (text) => (
                                <div
                                    key={text}
                                    className="flex items-center gap-2 hover:-translate-y-[1px] transition"
                                >
                                    <CheckCircle className="h-5 w-5 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                    <span>{text}</span>
                                </div>
                            )
                        )}
                    </div>

                    {/* APP STORE BADGES — FIX: added real hrefs, open in new tab */}
                    <div className="mt-10 flex items-center gap-4">
                        <motion.a
                            href="https://apps.apple.com" // 🔁 Replace with your App Store URL when published
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            className="group relative flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl cursor-pointer overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <Apple className="h-6 w-6 text-white" />
                            <div className="text-xs leading-tight">
                                <div className="text-white/60">Available on</div>
                                <div className="font-semibold">App Store</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://play.google.com" // 🔁 Replace with your Play Store URL when published
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            className="group relative flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl cursor-pointer overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <Play className="h-6 w-6 text-emerald-400" />
                            <div className="text-xs leading-tight">
                                <div className="text-white/60">Available on</div>
                                <div className="font-semibold">Google Play</div>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>

                {/* RIGHT MOCKUPS */}
                <div className="relative h-[600px] perspective-[1600px]">
                    <div className="absolute inset-0 bg-violet-500/20 blur-[160px] rounded-full" />

                    {/* ERP DASHBOARD */}
                    <motion.div
                        animate={{ y: [0, -16, 0], rotateZ: [0, 1.5, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.06, rotateX: 6 }}
                        className="absolute top-0 left-0 w-[380px] h-[280px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-violet-400 text-sm font-medium">ERP • Operations Overview</p>
                            <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Live</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {[{ label: "Orders", value: "1,248" }, { label: "Revenue", value: "₹42.6L" }, { label: "Pending", value: "36" }].map((kpi) => (
                                <div key={kpi.label} className="rounded-xl bg-white/10 p-3 text-center">
                                    <p className="text-xs text-white/50">{kpi.label}</p>
                                    <p className="text-sm font-semibold text-white">{kpi.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <p className="text-xs text-white/50 mb-2">Weekly Performance</p>
                            <div className="flex items-end gap-2 h-10">
                                {[40, 70, 55, 90, 60, 80].map((h, i) => (
                                    <div key={i} className="w-3 rounded-full bg-violet-400/70" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>Billing Automation</span><span className="text-emerald-400">Active</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <span>Inventory Sync</span><span className="text-emerald-400">Running</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* FINTECH LEDGER */}
                    <motion.div
                        animate={{ y: [0, 12, 0], rotateZ: [0, -2, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.06 }}
                        className="absolute top-40 right-40 w-[260px] h-[190px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_30px_80px_rgba(167,139,250,0.35)]"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-xs text-violet-400 font-medium">FinTech • Ledger</p>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Synced</span>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-xs text-white/60">
                                <span>Credits</span><span className="text-emerald-400 font-medium">₹12.4L</span>
                            </div>
                            <div className="flex justify-between text-xs text-white/60">
                                <span>Debits</span><span className="text-red-400 font-medium">₹9.1L</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p className="text-xs text-white/50 mb-1">Net Balance</p>
                            <p className="text-sm font-semibold text-white">₹3.3L</p>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-2/3 bg-violet-400/70 rounded-full" />
                        </div>
                        <p className="mt-2 text-[10px] text-white/40">Auto-reconciled • Last update 2m ago</p>
                    </motion.div>

                    {/* LOGISTICS */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotateZ: [0, 1, 0] }}
                        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute bottom-24 left-20 w-[320px] h-[200px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-sm text-violet-400 font-medium">Logistics • Live Tracking</p>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">GPS Live</span>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs text-white/60">Truck #TRK-1023</span>
                            <span className="text-xs text-emerald-400 font-medium">In Transit</span>
                        </div>
                        <div className="mb-3">
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-3/4 bg-emerald-400/70 rounded-full" />
                            </div>
                            <div className="mt-1 flex justify-between text-[10px] text-white/40">
                                <span>Mumbai</span><span>Delhi</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            {[["ETA", "18m"], ["Speed", "54 km/h"], ["Stops", "1 left"]].map(([l, v]) => (
                                <div key={l} className="rounded-xl bg-white/10 p-2">
                                    <p className="text-[10px] text-white/50">{l}</p>
                                    <p className="text-xs font-medium text-white">{v}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* E-COMMERCE */}
                    <motion.div
                        animate={{ y: [0, 14, 0], rotateZ: [0, -1.2, 0] }}
                        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.06 }}
                        className="absolute bottom-0 right-0 w-[280px] h-[440px] rounded-[38px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
                    >
                        <div className="p-5 pt-10 space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-violet-400 font-medium">E-commerce • Orders</p>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20">Today</span>
                            </div>
                            {[["ORD-7821", "Paid", "₹2,499"], ["ORD-7822", "Packed", "₹1,299"], ["ORD-7823", "Shipped", "₹3,799"]].map(([id, status, price]) => (
                                <div key={id} className="rounded-xl bg-white/10 px-4 py-3 flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-white">{id}</p>
                                        <p className="text-[10px] text-white/50">{status}</p>
                                    </div>
                                    <span className="text-xs font-medium text-emerald-400">{price}</span>
                                </div>
                            ))}
                            <div className="mt-4 space-y-2">
                                <div className="flex justify-between text-xs text-white/60">
                                    <span>Total Orders</span><span className="text-white">128</span>
                                </div>
                                <div className="flex justify-between text-xs text-white/60">
                                    <span>Revenue</span><span className="text-emerald-400">₹4.8L</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SOLUTIONS */}
            <section id="solutions" className="py-20 max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
                    What We <span className="text-violet-400">Build</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {[
                        {
                            title: "Custom ERP",
                            icon: <Layers />,
                            desc: "Billing, operations, reports & automation tailored to your workflow.",
                            preview: ["Invoices", "Reports", "Role Access", "Automation"],
                            href: null,
                            cta: "Request Demo",
                            ctaHref: "#contact",
                            popular: false,
                            featured: false,
                        },
                        {
                            title: "Medical ERP",
                            icon: <Layers />,
                            desc: "End-to-end medical & pharmacy ERP with POS billing, inventory, GST compliance and multi-branch control.",
                            preview: ["POS Billing", "Inventory & Expiry", "GST Invoices", "Schedule H"],
                            href: "https://medical-erp-demo.vercel.app/",
                            cta: "View Live Demo →",
                            ctaHref: "https://medical-erp-demo.vercel.app/",
                            popular: true,
                            featured: true,
                        },
                        {
                            title: "Logistics Software",
                            icon: <Truck />,
                            desc: "Shipment tracking, COD reconciliation & logistics billing.",
                            preview: ["Live Tracking", "COD", "GST Billing", "Fleet"],
                            href: "/logistics",
                            cta: "View Live Demo →",
                            ctaHref: "/logistics",
                            popular: true,
                            featured: true,
                        },
                        {
                            title: "FinTech Systems",
                            icon: <CreditCard />,
                            desc: "Ledgers, payments & reconciliation engines.",
                            preview: ["Wallets", "Settlements", "Reconciliation", "APIs"],
                            href: null,
                            cta: "Request Demo",
                            ctaHref: "#contact",
                            popular: false,
                            featured: false,
                        },
                        {
                            title: "Mobile Applications",
                            icon: <Smartphone />,
                            desc: "Android & iOS apps for customers, drivers, agents & internal teams.",
                            preview: ["Android", "iOS", "Dashboards", "Real-time Sync"],
                            href: null,
                            cta: "Request Demo",
                            ctaHref: "#contact",
                            popular: false,
                            featured: false,
                        },
                        {
                            title: "E-commerce Platforms",
                            icon: <ShoppingCart />,
                            desc: "Custom e-commerce backends with orders, inventory & payments.",
                            preview: ["Orders", "Inventory", "Payments", "Returns"],
                            href: null,
                            cta: "Request Demo",
                            ctaHref: "#contact",
                            popular: false,
                            featured: false,
                        },
                    ].map((s) => (
                        <div
                            key={s.title}
                            className={`
                group relative rounded-3xl border border-white/10
                bg-white/5 backdrop-blur-xl p-8
                transition-all duration-500
                hover:-translate-y-3 hover:border-violet-400/50
                hover:shadow-[0_0_40px_rgba(167,139,250,0.35)]
                ${s.featured ? "scale-[1.05] border-violet-400/40 shadow-[0_0_60px_rgba(167,139,250,0.45)]" : ""}
              `}
                        >
                            {s.popular && (
                                <span className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold bg-yellow-500 text-black shadow-[0_0_25px_rgba(167,139,250,0.7)]">
                                    Most Popular
                                </span>
                            )}
                            <div className="text-violet-400 mb-4 text-3xl">{s.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-center">{s.title}</h3>
                            <p className="text-sm text-white/70 mb-6 text-center leading-relaxed">{s.desc}</p>
                            <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {s.preview.map((p) => (
                                        <div key={p} className="text-xs rounded-lg bg-white/10 px-3 py-2 text-white/80 text-center">{p}</div>
                                    ))}
                                </div>
                            </div>
                            {/* FIX: All cards now have a real CTA — no more "Coming Soon" dead ends */}
                            <div className="text-center">
                                <a
                                    href={s.ctaHref}
                                    target={s.href && s.href.startsWith("http") ? "_blank" : undefined}
                                    rel={s.href && s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition"
                                >
                                    {s.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY US — with animated stat counters */}
            <section id="whyus" className="py-28 bg-black/40 relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            Why choose <span className="text-violet-400">Creonox</span>
                        </h2>
                        <ul className="space-y-4 text-white/70">
                            {[
                                "No SaaS lock-in — you own everything",
                                "Designed for Indian & global businesses",
                                "Clean architecture & scalable systems",
                                "Long-term product mindset",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FIX: Animated counters trigger on scroll into view */}
                    <div ref={statsRef} className="grid grid-cols-2 gap-6">
                        {[
                            ["20+", "Projects Delivered"],
                            ["1M+", "Monthly Transactions"],
                            ["99.9%", "System Accuracy"],
                            ["90", "Day Avg ROI"],
                        ].map(([v, l]) => (
                            <StatCard key={l} value={v} label={l} animate={statsVisible} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / CONTACT */}
            <section id="contact" ref={formRef} className="relative py-28 px-6 text-white overflow-hidden">
                <div className="pointer-events-none absolute inset-0 flex justify-center">
                    <div className="w-[520px] h-full bg-violet-500/20 blur-[160px] opacity-70" />
                </div>

                <div className="relative max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Let's build something{" "}
                        <span className="text-violet-400">powerful together</span>
                    </h2>
                    <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                        A 15-minute discussion can uncover automation gaps, revenue leaks,
                        and scalable architecture opportunities for your business.
                    </p>

                    {!showForm && (
                        <motion.button
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowForm(true)}
                            className="bg-violet-500 hover:bg-violet-400 text-black font-medium px-12 py-4 rounded-2xl shadow-[0_0_40px_rgba(167,139,250,0.6)] hover:shadow-[0_0_60px_rgba(167,139,250,0.8)] transition-all"
                        >
                            Book Free Consultation
                        </motion.button>
                    )}

                    <AnimatePresence mode="wait">
                        {showForm && !submitted && (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mt-12 max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 text-left shadow-[0_0_60px_rgba(167,139,250,0.25)]"
                            >
                                {/* FIX: Real form with all fields including Phone, wired to Formspree */}
                                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-400"
                                    />
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-400"
                                    />
                                    {/* FIX: Phone field added */}
                                    <input
                                        required
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone / WhatsApp Number"
                                        className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-400"
                                    />
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company / Startup (optional)"
                                        className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-400"
                                    />
                                    {/* FIX: Default "Choose a service" option added */}
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="md:col-span-2 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400"
                                    >
                                        <option value="" disabled>Choose a service…</option>
                                        <option>Custom ERP</option>
                                        <option>Medical ERP</option>
                                        <option>Logistics Software</option>
                                        <option>FinTech System</option>
                                        <option>Mobile App</option>
                                        <option>E-commerce Platform</option>
                                        <option>General Consultation</option>
                                    </select>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your requirement…"
                                        className="md:col-span-2 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-400"
                                    />

                                    {submitError && (
                                        <p className="md:col-span-2 text-center text-sm text-red-400">{submitError}</p>
                                    )}

                                    <div className="md:col-span-2 text-center pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-violet-500 hover:bg-violet-400 disabled:opacity-60 text-black font-medium px-12 py-3 rounded-2xl shadow-[0_0_40px_rgba(167,139,250,0.6)] transition-all"
                                        >
                                            {isSubmitting ? "Sending…" : "Submit Request"}
                                        </button>
                                        <p className="mt-4 text-xs text-white/50">No spam. No sales pressure. Just clarity.</p>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {submitted && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mt-16 flex flex-col items-center text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                                    className="mb-6"
                                >
                                    <CheckCircle className="h-20 w-20 text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.8)]" />
                                </motion.div>
                                <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                                <p className="text-white/70 max-w-md">
                                    Your request has been received. Our team will reach out within{" "}
                                    <span className="text-white">24 hours</span>.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 bg-black/40 relative">
                <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-4 text-sm">
                    <div>
                        <h3 className="text-white font-semibold mb-3">
                            Creonox <span className="text-violet-400">Technologies</span>
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                            We design and build custom ERP systems, FinTech platforms,
                            logistics software and mobile applications — scalable, secure and fully owned by you.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Services</h4>
                        <ul className="space-y-2 text-white/60">
                            <li>Custom ERP Development</li>
                            <li>Medical ERP</li>
                            <li>Logistics Software</li>
                            <li>FinTech Systems</li>
                            <li>Mobile App Development</li>
                            <li>E-commerce Platforms</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Contact</h4>
                        <ul className="space-y-3 text-white/60">
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-violet-400" />
                                <a href="tel:+917517050463" className="hover:text-white">+91 75170 50463</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-violet-400" />
                                <a href="mailto:hello@creonox.com" className="hover:text-white">hello@creonox.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="h-4 w-4 text-violet-400" />
                                India · Serving Global Clients
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Stay Connected</h4>
                        {/* FIX: Newsletter form wired up */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const input = e.currentTarget.querySelector("input") as HTMLInputElement;
                                if (input?.value) {
                                    fetch(`${API}/api/website/subscribe`, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ email: input.value }),
                                    });
                                    input.value = "";
                                    alert("Subscribed! 🎉");
                                }
                            }}
                            className="flex items-center gap-2 mb-5"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Your email"
                                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-violet-400"
                            />
                            <button
                                type="submit"
                                className="bg-violet-500 hover:bg-violet-400 text-black px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(167,139,250,0.5)] transition"
                            >
                                Join
                            </button>
                        </form>

                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/company/creonox-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-violet-400 transition">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/creonox.global/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-violet-400 transition">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://x.com/CreonoxGlobal" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-violet-400 transition">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://wa.me/917517050463?text=Hi%20Creonox%20Team,%20I%20am%20interested%20in%20your%20software%20solutions."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs font-medium px-3 py-2 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] transition"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                                Chat
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 text-center text-white/50 text-xs">
                    © {new Date().getFullYear()} Creonox Technologies · ERP · FinTech · Logistics · Mobile Apps
                </div>
            </footer>

            {/* WHATSAPP FLOATING CTA */}
            <a
                href="https://wa.me/917517050463?text=Hi%20Creonox%20Team,%20I%20am%20interested%20in%20your%20software%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-[999] group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-medium px-4 py-4 rounded-full shadow-[0_0_40px_rgba(37,211,102,0.7)] hover:shadow-[0_0_60px_rgba(37,211,102,0.9)] transition-all"
            >
                <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
                <FaWhatsapp className="h-7 w-7 text-black" />
            </a>
        </main>
    );

}
