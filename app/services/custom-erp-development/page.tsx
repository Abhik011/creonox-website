import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import ERPFaq from "@/components/ERPFaq";
export const metadata: Metadata = {
    title: "ERP Development Company | Custom ERP Development Services | Creonox",
    description:
        "Custom ERP development services for logistics, manufacturing and enterprise businesses.",
};

const modules = [
    "Finance",
    "Inventory",
    "CRM",
    "Operations",
    "Warehouse",
    "Fleet",
];
const faqs = [
    {
        question: "What is ERP development?",
        answer:
            "ERP development is the process of building software that integrates finance, inventory, operations, procurement, HR and reporting into a single platform.",
    },
    {
        question: "How much does custom ERP development cost?",
        answer:
            "ERP development costs vary depending on modules, integrations and business complexity. Most projects range from ₹5 lakh to ₹50 lakh+.",
    },
    {
        question: "How long does ERP development take?",
        answer:
            "ERP implementations typically take between 3 and 12 months depending on scope, integrations and customization requirements.",
    },
    {
        question: "Do you provide logistics ERP development?",
        answer:
            "Yes. Creonox specializes in logistics ERP development including fleet management, dispatch planning, POD tracking and billing automation.",
    },
    {
        question: "Can you integrate ERP with existing software?",
        answer:
            "Yes. We integrate ERP systems with CRMs, accounting software, warehouse systems, payment gateways and third-party APIs.",
    },
    {
        question: "Why choose Creonox as your ERP development company?",
        answer:
            "We build ERP systems around your workflows instead of forcing your business into generic software.",
    },
];

export default function ERPDevelopmentPage() {
    return (
        <main className="relative overflow-hidden bg-[#f7f7fb]">
            {/* Background Glow */}

            <div
                className="
          absolute
          left-1/2
          top-0
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
            />

            <div
                className="
          absolute
          right-0
          top-[600px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
            />

            {/* HERO */}

            <section className="relative py-32 md:py-40">
                <div className="mx-auto max-w-7xl px-6">
                    <p
                        className="
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-violet-600
            "
                    >
                        ERP DEVELOPMENT COMPANY
                    </p>

                    <h1
                        className="
              mt-8
              max-w-5xl
              text-5xl
              font-semibold
              tracking-[-0.06em]
              text-slate-950
              md:text-7xl
            "
                    >
                        Building ERP systems
                        <br />

                        <span
                            className="
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
                        >
                            for modern industries.
                        </span>
                    </h1>

                    <p
                        className="
              mt-10
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
                    >
                        Creonox develops custom ERP software that centralizes
                        operations, automates workflows and gives businesses complete
                        visibility across departments.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-violet-600
                px-7
                py-4
                text-white
                transition-all
                hover:scale-105
              "
                        >
                            Start Project
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/products"
                            className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-7
                py-4
                text-slate-700
                transition-all
                hover:border-violet-300
              "
                        >
                            Explore Solutions
                        </Link>
                    </div>
                </div>
            </section>

            {/* PROBLEM */}

            <section className="relative py-32">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h2
                        className="
              text-4xl
              md:text-6xl
              font-semibold
              tracking-[-0.05em]
              text-slate-950
            "
                    >
                        Most companies still run on
                        <br />
                        spreadsheets, emails and
                        <br />
                        disconnected software.
                    </h2>

                    <h3
                        className="
              mt-8
              text-4xl
              md:text-6xl
              font-semibold
              tracking-[-0.05em]
              bg-gradient-to-r
              from-violet-600
              to-blue-500
              bg-clip-text
              text-transparent
            "
                    >
                        We build a better operating system.
                    </h3>

                    <p
                        className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
                    >
                        Replace fragmented workflows with one integrated ERP platform
                        built around your business operations.
                    </p>
                </div>
            </section>

            {/* ERP FLOW */}
            <section className="py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-violet-600">
                            ERP WORKFLOW
                        </p>

                        <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.05em]">
                            Built around
                            <span className="text-violet-600">
                                {" "}real business workflows.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-8">
                            Every department works together in one connected ERP platform.
                        </p>
                    </div>

                    <div className="relative mt-24">
                        {/* Connection Line */}

                        <div
                            className="
          hidden lg:block
          absolute
          left-0
          right-0
          top-1/2
          h-[2px]
          -translate-y-1/2
          bg-gradient-to-r
          from-violet-200
          via-violet-400
          to-violet-200
        "
                        />

                        <div className="relative flex flex-wrap lg:flex-nowrap gap-6">
                            {[
                                {
                                    step: "01",
                                    title: "Lead",
                                    desc: "Capture enquiries and opportunities."
                                },
                                {
                                    step: "02",
                                    title: "Quotation",
                                    desc: "Generate pricing and proposals."
                                },
                                {
                                    step: "03",
                                    title: "Order",
                                    desc: "Convert approved quotations."
                                },
                                {
                                    step: "04",
                                    title: "Dispatch",
                                    desc: "Allocate resources and schedules."
                                },
                                {
                                    step: "05",
                                    title: "Delivery",
                                    desc: "Track fulfilment and POD."
                                },
                                {
                                    step: "06",
                                    title: "Invoice",
                                    desc: "Generate invoices and collections."
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="
              relative
              flex-1
              min-w-[220px]
            "
                                >
                                    <div
                                        className="
                relative
                z-10
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-300
                hover:shadow-[0_25px_80px_rgba(124,58,237,0.10)]
              "
                                    >
                                        <span className="text-sm font-medium text-violet-500">
                                            {item.step}
                                        </span>

                                        <h3 className="mt-4 text-2xl font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Node */}

                                    <div
                                        className="
                hidden
                lg:block
                absolute
                top-1/2
                -right-3
                z-20
                h-6
                w-6
                -translate-y-1/2
                rounded-full
                border-4
                border-white
                bg-violet-500
              "
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MODULES */}

            <section className="py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <h2
                        className="
              text-4xl
              md:text-6xl
              font-semibold
              tracking-[-0.05em]
            "
                    >
                        ERP Modules
                    </h2>

                    <div className="mt-20 grid md:grid-cols-3 gap-6">
                        {modules.map((module) => (
                            <div
                                key={module}
                                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-100
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
                            >
                                <h3 className="text-2xl font-semibold">
                                    {module}
                                </h3>

                                <p className="mt-4 text-slate-600">
                                    Fully integrated with your ERP ecosystem.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}

            <section className="py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-600 font-medium">
                            INDUSTRIES
                        </p>

                        <h2
                            className="
          mt-6
          text-4xl
          md:text-6xl
          font-semibold
          tracking-[-0.05em]
          text-slate-950
        "
                        >
                            ERP solutions built
                            <br />
                            for real industries.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Every business operates differently. We develop ERP platforms
                            tailored to industry-specific workflows, compliance requirements,
                            and operational challenges.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Logistics & Transportation",
                                description:
                                    "Fleet management, dispatch planning, trip tracking, POD management, billing and transport analytics.",
                            },
                            {
                                title: "Manufacturing",
                                description:
                                    "Production planning, procurement, inventory control, quality assurance and factory operations.",
                            },
                            {
                                title: "Retail & Ecommerce",
                                description:
                                    "Order management, inventory synchronization, POS integration and customer management.",
                            },
                            {
                                title: "Warehouse & Distribution",
                                description:
                                    "Warehouse operations, stock movement, barcode management and supply chain visibility.",
                            },
                            {
                                title: "Professional Services",
                                description:
                                    "Project management, resource allocation, billing, client management and reporting.",
                            },
                            {
                                title: "Healthcare & Education",
                                description:
                                    "Compliance management, operations tracking, records management and workflow automation.",
                            },
                        ].map((industry) => (
                            <div
                                key={industry.title}
                                className="
            group
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-violet-200
            hover:shadow-[0_20px_60px_rgba(124,58,237,0.08)]
          "
                            >


                                <h3
                                    className="
              text-2xl
              font-semibold
              tracking-tight
              text-slate-950
            "
                                >
                                    {industry.title}
                                </h3>

                                <p
                                    className="
              mt-4
              text-slate-600
              leading-7
            "
                                >
                                    {industry.description}
                                </p>

                                <div
                                    className="
              mt-6
              text-violet-600
              font-medium
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
                                >
                                    Learn more →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ERPFaq />
            {/* CTA */}

            <section className="py-40">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2
                        className="
              text-5xl
              md:text-7xl
              font-semibold
              tracking-[-0.06em]
            "
                    >
                        Ready to build
                        <br />

                        <span className="text-violet-600">
                            your ERP platform?
                        </span>
                    </h2>

                    <p
                        className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              text-slate-600
            "
                    >
                        Custom ERP development services designed around your
                        operations, workflows and growth strategy.
                    </p>

                    <Link
                        href="/contact"
                        className="
              inline-flex
              mt-10
              rounded-full
              bg-violet-600
              px-8
              py-4
              text-white
            "
                    >
                        Book Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}