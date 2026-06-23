import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
    "Custom ERP Development",
    "Inventory Management",
    "Procurement Automation",
    "Finance & Accounting",
    "CRM Integration",
    "HR & Payroll",
    "Business Intelligence",
    "Cloud Deployment",
];

export default function ERPDevelopmentCompanyPage() {
    return (
        <section className="relative overflow-hidden bg-[#f7f7fb]">
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
            {/* Hero */}
            <section className="relative  pt-24 pb-24">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                        ERP Development Company
                    </p>

                    <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
                        ERP Software Built
                        <br />
                        <span
                            className="
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-blue-500
                bg-clip-text
                text-transparent " >Around Your Business.</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                        Creonox is an ERP development company specializing in custom
                        enterprise software for logistics, manufacturing, warehousing,
                        distribution, retail, and service businesses. We build ERP
                        systems that streamline operations, automate workflows, and
                        provide complete visibility across your organization.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
                        >
                            Book Consultation
                        </Link>

                        <Link
                            href="/services/custom-erp-development"
                            className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium"
                        >
                            View ERP Solutions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}

            <section className="py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 ">
                    <div className="mb-14 text-center pb-24">
                        <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                            ERP Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
                            Everything You Need to Run Your Business
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                            Streamline operations, automate workflows, and gain complete visibility
                            across your organization with our custom ERP solutions.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white shadow-lg">
                                        <CheckCircle2 size={22} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                        {feature}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        Powerful and scalable solution designed to improve operational
                                        efficiency and business growth.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why ERP */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                            Why Invest in ERP Development?
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            Many businesses operate using spreadsheets, disconnected
                            software, and manual workflows. ERP software connects
                            departments, centralizes data, and improves decision-making.
                            It reduces operational inefficiencies while providing real-time
                            visibility across the organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                        Industries We Serve
                    </h2>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            "Logistics",
                            "Manufacturing",
                            "Warehousing",
                            "Retail",
                            "Healthcare",
                            "Education",
                            "Construction",
                            "Distribution",
                        ].map((industry) => (
                            <div
                                key={industry}
                                className="rounded-3xl border border-slate-200 bg-white p-6"
                            >
                                <h3 className="font-medium text-slate-950">
                                    {industry}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ERP Modules */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                        ERP Modules We Build
                    </h2>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {[
                            "Inventory Management",
                            "Procurement",
                            "Sales Management",
                            "Finance & Accounting",
                            "CRM",
                            "Human Resources",
                            "Warehouse Management",
                            "Fleet Management",
                            "Business Intelligence",
                        ].map((module) => (
                            <div
                                key={module}
                                className="rounded-3xl border border-slate-200 bg-white p-6"
                            >
                                {module}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="py-24">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                        Ready to Build Your ERP Platform?
                    </h2>

                    <p className="mt-6 text-lg text-slate-600">
                        Transform operations with a custom ERP system designed around
                        your workflow, industry, and growth goals.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white"
                    >
                        Schedule a Consultation
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </section>


    );
}
