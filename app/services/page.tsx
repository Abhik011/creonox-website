import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "AI Software Development",
        description:
            "AI copilots, workflow automation, document intelligence, predictive analytics, and enterprise AI solutions.",
        href: "/services/ai-software-development",
    },
    {
        title: "ERP Development ",
        description:
            "Custom ERP software that centralizes operations, inventory, procurement, finance, sales, HR, and reporting into a single intelligent platform.",
        href: "/services/erp-development-company",
    },
    {
        title: "SaaS Development",
        description:
            "Multi-tenant SaaS products, subscription billing, customer onboarding, analytics dashboards, and enterprise-grade cloud applications.",
        href: "/services/saas-development",
    },
    {
        title: "White Label Development",
        description:
            "White label software development, website development, mobile app development and dedicated development teams for digital agencies.",
        href: "/services/white-label-development",
    },
    {
        title: "Shopify Development",
        description:
            "High-converting Shopify stores, Shopify Plus development, custom themes, app integrations, checkout optimization, and ecommerce automation.",
        href: "/services/shopify-development",
    },
    {
        title: "Custom ERP Development",
        description:
            "Tailored ERP systems designed around your exact workflows, processes, approvals, and operational requirements.",
        href: "/services/custom-erp-development",
    },
    {
        title: "Custom Software Development",
        description:
            "Tailored ERP systems designed around your exact workflows, processes, approvals, and operational requirements.",
        href: "/services/custom-erp-development",
    },
    {
        title: "CRM Development",
        description:
            "Customer relationship management software that improves lead management, sales pipelines, customer engagement, and retention.",
        href: "/services/crm-development",
    },
    {
        title: "Logistics ERP Development",
        description:
            "Fleet management, dispatch planning, trip tracking, POD management, route optimization, billing, and logistics analytics.",
        href: "/services/logistics-erp-development",
    },
    {
        title: "Manufacturing ERP Development",
        description:
            "Production planning, procurement, inventory control, quality management, and manufacturing process automation.",
        href: "/services/manufacturing-erp-development",
    },
    {
        title: "Mobile App Development",
        description:
            "Cross-platform iOS and Android applications built with modern technologies and scalable architectures.",
        href: "/services/mobile-app-development",
    },
    {
        title: "Web Application Development",
        description:
            "Custom SaaS platforms, customer portals, enterprise dashboards, and business management applications.",
        href: "/services/web-development",
    },
    {
        title: "Ecommerce Development",
        description:
            "High-converting online stores with secure payments and inventory management.",
        href: "/services/ecommerce-development",
    },

];

export default function ServicesPage() {
    return (
        <section className="relative overflow-hidden bg-[#f7f7fb] pt-56 pb-32">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="
        absolute
        inset-x-0
        top-0
        h-[700px]
        bg-gradient-to-b
        from-violet-100
        via-violet-50
        to-transparent
      "
                />

                <div
                    className="
        absolute
        left-1/2
        top-24
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-violet-500/10
        blur-[140px]
      "
                />

                <div
                    className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 ">
                {/* Hero */}

                <div className="max-w-5xl pt-20">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600 ">
                        SERVICES
                    </p>

                    <h1
                        className="
          mt-6
          text-5xl
          md:text-7xl
          font-semibold
          tracking-[-0.06em]
          leading-[0.95]
          text-slate-950
          pt-10
        "
                    >
                        Software engineered
                        <br />
                        around how your
                        <span className="text-violet-600">
                            {" "}
                            business operates.
                        </span>
                    </h1>

                    <p
                        className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-slate-600
        "
                    >
                        Creonox helps organizations replace spreadsheets,
                        fragmented workflows, and outdated systems with modern ERP,
                        CRM, AI-powered platforms, mobile applications, and
                        enterprise automation solutions.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {[
                            "ERP Development",
                            "CRM Systems",
                            "AI Solutions",
                            "Mobile Apps",
                            "Web Platforms",
                            "Enterprise Automation",
                        ].map((item) => (
                            <span
                                key={item}
                                className="
              rounded-full
              border
              border-violet-100
              bg-white/80
              px-4
              py-2
              text-sm
              font-medium
              text-violet-700
            "
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}

                <div className="mt-24 grid gap-8 md:grid-cols-2">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="
            group
            relative
            overflow-hidden

            rounded-[32px]

            bg-white/70
            backdrop-blur-xl

            p-8

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-violet-200
            hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]
          "
                        >
                            <div
                                className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100

              bg-gradient-to-br
              from-violet-50
              via-white
              to-cyan-50
            "
                            />

                            <div className="relative z-10">
                                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                                    {service.title}
                                </h2>

                                <p className="mt-4 text-[15px] leading-8 text-slate-600">
                                    {service.description}
                                </p>

                                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                                    Explore Service

                                    <ArrowRight
                                        size={16}
                                        className="
                  transition-transform
                  group-hover:translate-x-1
                "
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>


    );
}
