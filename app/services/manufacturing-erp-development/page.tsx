import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Boxes,
  ClipboardCheck,
  BarChart3,
  Package,
  Settings,
  TrendingUp,
  Truck,
} from "lucide-react";

export const metadata = {
  title:
    "Manufacturing ERP Development Company | Custom Manufacturing ERP Software",
  description:
    "Custom Manufacturing ERP Development Company. Automate production planning, inventory, procurement, quality control, supply chain, warehouse and finance operations with a scalable ERP solution.",
  keywords: [
    "Manufacturing ERP Development Company",
    "Manufacturing ERP Software",
    "Factory ERP Software",
    "Production Planning Software",
    "Manufacturing Inventory Management Software",
    "Manufacturing Automation Software",
    "Custom Manufacturing ERP",
    "Production Management System",
    "Factory Management Software",
    "Manufacturing ERP India",
  ],
  alternates: {
    canonical:
      "https://creonox.com/services/manufacturing-erp-development",
  },
};

const features = [
  "Production Planning",
  "Inventory Management",
  "Procurement Automation",
  "Quality Control",
  "Supply Chain Management",
  "Finance & Accounting",
  "CRM Integration",
  "Business Intelligence",
];

const modules = [
  {
    icon: Package,
    title: "Production Management",
    description:
      "Manage work orders, production schedules, resource planning and manufacturing workflows.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Track raw materials, finished goods, stock movements and warehouse inventory in real-time.",
  },
  {
    icon: Truck,
    title: "Procurement Management",
    description:
      "Automate purchase requests, vendor management and procurement approvals.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Management",
    description:
      "Monitor inspections, quality checks, compliance requirements and product standards.",
  },
  {
    icon: Settings,
    title: "Plant Operations",
    description:
      "Track machine utilization, maintenance schedules and production performance.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Get real-time dashboards, operational KPIs and business intelligence insights.",
  },
];

const benefits = [
  "Reduce production delays",
  "Improve inventory accuracy",
  "Lower operational costs",
  "Automate manual workflows",
  "Increase production efficiency",
  "Improve quality control",
  "Better procurement planning",
  "Real-time business visibility",
];

export default function ManufacturingERPDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      {/* Background Effects */}

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
          top-[800px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* HERO */}

      <section className="relative pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Manufacturing ERP Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Manufacturing ERP Software
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Built Around Your Factory Operations.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Creonox develops custom Manufacturing ERP software that helps
            manufacturers streamline production planning, inventory management,
            procurement, quality control, warehouse operations, finance and
            supply chain processes from a single platform.
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

      {/* PROBLEMS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Manufacturing Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Problems We Help Manufacturers Solve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Many manufacturing companies still rely on spreadsheets,
              disconnected software, manual inventory tracking and inefficient
              production planning processes. These challenges create delays,
              inventory losses, procurement bottlenecks and poor operational
              visibility.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Production Delays",
              "Inventory Inaccuracy",
              "Procurement Issues",
              "Lack of Visibility",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <CheckCircle2 className="h-10 w-10 text-violet-600" />
                <h3 className="mt-5 text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center pb-24">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Manufacturing ERP Features
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Everything required to manage your factory, production and supply
              chain operations from one platform.
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
                    <Factory size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {feature}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Designed to improve manufacturing efficiency and operational
                    performance.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
            Manufacturing Modules
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
            Core ERP Modules For Manufacturers
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {module.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {module.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Business Benefits
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              Why Manufacturers Invest In ERP
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <CheckCircle2 className="mb-4 h-6 w-6 text-violet-600" />
                <h3 className="font-medium">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Manufacturing Industries We Serve
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Automotive",
              "Electronics",
              "Textile",
              "Food Processing",
              "Pharmaceutical",
              "Chemical",
              "Furniture",
              "Industrial Equipment",
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

      {/* FAQ */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-8">
            {[
              {
                q: "What is Manufacturing ERP Software?",
                a: "Manufacturing ERP software helps manufacturers manage production, inventory, procurement, quality control, warehouse operations and finance from a single platform.",
              },
              {
                q: "Can Manufacturing ERP be customized?",
                a: "Yes. We build ERP solutions around your manufacturing workflows, approval processes and operational requirements.",
              },
              {
                q: "How long does ERP development take?",
                a: "Most manufacturing ERP projects take between 3 to 8 months depending on scope and complexity.",
              },
              {
                q: "Can ERP integrate with existing software?",
                a: "Yes. ERP can integrate with CRM, accounting systems, warehouse software, HR platforms and third-party applications.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold">
                  {faq.q}
                </h3>

                <p className="mt-3 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">
            Related Services
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/services/custom-erp-development"
              className="rounded-full border px-5 py-3"
            >
              Custom ERP Development
            </Link>

            <Link
              href="/services/logistics-erp-development"
              className="rounded-full border px-5 py-3"
            >
              Logistics ERP Development
            </Link>

            <Link
              href="/services/crm-development"
              className="rounded-full border px-5 py-3"
            >
              CRM Development
            </Link>

            <Link
              href="/services/custom-software-development"
              className="rounded-full border px-5 py-3"
            >
              Custom Software Development
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Ready To Build Your Manufacturing ERP?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Automate production, inventory, procurement and operations with a
            custom ERP platform built specifically for your manufacturing
            business.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white"
          >
            Schedule Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </section>
  );
}