import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Cloud,
  Server,
  Database,
} from "lucide-react";

export const metadata = {
  title:
    "SaaS Development Company | Custom SaaS Application Development",
  description:
    "Build scalable SaaS applications with Creonox. We develop multi-tenant SaaS platforms, subscription systems, customer portals, admin dashboards and cloud-native software products.",
  keywords: [
    "SaaS Development Company",
    "Custom SaaS Development",
    "SaaS Application Development",
    "Multi Tenant SaaS",
    "Cloud Software Development",
    "Subscription Platform Development",
    "SaaS Product Development",
    "Enterprise SaaS Development",
    "B2B SaaS Development",
    "Software Product Development",
  ],
  alternates: {
    canonical: "https://www.creonox.com/services/saas-development",
  },
};

const features = [
  "Multi-Tenant Architecture",
  "Subscription Billing",
  "User Management",
  "Role Based Access",
  "Analytics Dashboard",
  "API Integrations",
  "Cloud Infrastructure",
  "Usage Tracking",
];

const modules = [
  {
    icon: Layers,
    title: "Multi-Tenant Platform",
    description:
      "Serve multiple customers from a single scalable SaaS platform while maintaining data isolation and security.",
  },
  {
    icon: CreditCard,
    title: "Subscription Management",
    description:
      "Handle recurring billing, pricing plans, invoicing and customer subscriptions.",
  },
  {
    icon: Users,
    title: "User & Team Management",
    description:
      "Manage organizations, permissions, teams and role-based access controls.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Track user engagement, platform performance and business metrics.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Implement enterprise-grade authentication, authorization and compliance controls.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Deploy highly available SaaS applications on AWS, Azure or Google Cloud.",
  },
];

const benefits = [
  "Recurring revenue model",
  "Scalable architecture",
  "Automated subscription billing",
  "Global accessibility",
  "Lower operational costs",
  "Faster product growth",
  "Real-time analytics",
  "Enterprise-grade security",
];

export default function SaaSDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[800px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* HERO */}

      <section className="relative pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            SaaS Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Build Cloud Software
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Designed To Scale.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Creonox develops modern SaaS applications for startups,
            enterprises and software companies. We build subscription-based
            software products with scalable cloud architecture, advanced
            security and exceptional user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Book Consultation
            </Link>

            <Link
              href="/services/custom-software-development"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium"
            >
              View Software Services
            </Link>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              SaaS Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Problems We Help SaaS Companies Solve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Building SaaS products requires scalable architecture,
              subscription billing, security, performance optimization and
              continuous delivery. We help businesses launch SaaS platforms
              that are reliable, secure and growth-ready.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Legacy Software",
              "Manual Processes",
              "Scalability Challenges",
              "Operational Complexity",
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
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              SaaS Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              SaaS Platform Features
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Everything required to build and scale a modern SaaS product.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white">
                  <Server size={22} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Enterprise-ready functionality for SaaS businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
            SaaS Modules
          </span>

          <h2 className="mt-4 text-4xl font-semibold">
            Core SaaS Components
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

      {/* PROCESS */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Development Process
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              From Idea To SaaS Product
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "Product Discovery & Market Validation",
              "Architecture & Platform Planning",
              "UX/UI Design & User Flows",
              "Development & Integrations",
              "Launch, Scale & Optimization",
            ].map((step, index) => (
              <div
                key={step}
                className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-[120px_1fr]"
              >
                <div>
                  <span className="text-sm font-medium text-violet-600">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{step}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Businesses Choose SaaS
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

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">
            Industries We Serve
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "FinTech",
              "Healthcare",
              "Education",
              "HR Tech",
              "Legal Tech",
              "Logistics",
              "Real Estate",
              "Professional Services",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-medium">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 space-y-8">
            {[
              {
                q: "What is SaaS development?",
                a: "SaaS development involves building cloud-based software applications that users access through subscriptions.",
              },
              {
                q: "Can you build multi-tenant SaaS platforms?",
                a: "Yes. We develop scalable multi-tenant SaaS applications with tenant isolation and enterprise security.",
              },
              {
                q: "Do you build MVPs for startups?",
                a: "Yes. We help startups validate ideas and launch SaaS products quickly.",
              },
              {
                q: "Which cloud providers do you support?",
                a: "AWS, Azure, Google Cloud and hybrid cloud deployments.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">
            Related Services
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/services/custom-software-development" className="rounded-full border px-5 py-3">
              Custom Software Development
            </Link>

            <Link href="/services/ai-software-development" className="rounded-full border px-5 py-3">
              AI Software Development
            </Link>

            <Link href="/services/crm-development" className="rounded-full border px-5 py-3">
              CRM Development
            </Link>

            <Link href="/services/custom-erp-development" className="rounded-full border px-5 py-3">
              ERP Development
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Database className="mx-auto h-16 w-16 text-violet-600" />

          <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">
            Ready To Launch Your SaaS Product?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Build a scalable SaaS platform with subscription billing,
            cloud infrastructure and enterprise-grade architecture.
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