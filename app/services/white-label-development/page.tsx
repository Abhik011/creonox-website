import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Smartphone,
  Building2,
  Database,
  Shield,
  Handshake,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title:
    "White Label Software Development Company",
  description:
    "Partner with Creonox for white label software development services. We help agencies, startups and technology companies deliver web, mobile, ecommerce, CRM, ERP and SaaS solutions under their own brand.",
  keywords: [
    "White Label Development",
    "White Label Software Development",
    "White Label Web Development",
    "White Label App Development",
    "White Label Agency Partner",
    "White Label SaaS Development",
    "White Label ERP Development",
    "White Label CRM Development",
    "Outsource Software Development",
    "Agency Development Partner",
  ],
  alternates: {
    canonical:
      "https://creonox.com/services/white-label-development",
  },
};

const features = [
  "White Label Web Development",
  "White Label Mobile Apps",
  "SaaS Development",
  "ERP & CRM Development",
  "Dedicated Development Teams",
  "NDA Protection",
  "Agency Partnerships",
  "Long-Term Technical Support",
];

const modules = [
  {
    icon: Users,
    title: "Dedicated Development Team",
    description:
      "Extend your agency with experienced developers working as your internal team.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom business websites, corporate websites and marketing platforms delivered under your brand.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for your clients.",
  },
  {
    icon: Building2,
    title: "ERP & CRM Solutions",
    description:
      "Enterprise-grade ERP and CRM software developed under your agency brand.",
  },
  {
    icon: Database,
    title: "SaaS Development",
    description:
      "Build scalable SaaS products and subscription-based platforms for your customers.",
  },
  {
    icon: Shield,
    title: "Confidential Delivery",
    description:
      "Strict NDA protection and completely white-labeled project execution.",
  },
];

const benefits = [
  "Increase agency revenue",
  "Expand service offerings",
  "Reduce hiring costs",
  "Scale delivery capacity",
  "Access experienced developers",
  "Faster project turnaround",
  "Maintain client ownership",
  "Grow without operational overhead",
];

export default function WhiteLabelDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[800px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* HERO */}

      <section className="relative pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            White Label Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Scale Your Agency
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Without Hiring More Developers.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Deliver websites, mobile apps, SaaS platforms, ERP systems and
            custom software solutions under your own brand while Creonox handles
            the development, deployment and technical execution.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Become A Partner
            </Link>

            <Link
              href="/services/custom-software-development"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Agency Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Problems We Help Agencies Solve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Many agencies lose opportunities because they lack development
              resources, technical expertise or delivery capacity. Our white
              label development services help agencies scale confidently without
              increasing internal overhead.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Limited Internal Resources",
              "Missed Project Opportunities",
              "Hiring Challenges",
              "Scaling Difficulties",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <CheckCircle2 className="h-10 w-10 text-violet-600" />
                <h3 className="mt-5 text-lg font-semibold">
                  {item}
                </h3>
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
              Partnership Benefits
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              White Label Development Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Expand your service offerings and deliver more value to clients
              without building a large in-house development team.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white">
                  <Handshake size={22} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Professional development services delivered under your brand.
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
            Service Capabilities
          </span>

          <h2 className="mt-4 text-4xl font-semibold">
            What We Can Deliver
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
              Partnership Process
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              How Our White Label Partnership Works
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "Discovery & Partnership Setup",
              "Requirements & Project Planning",
              "Design & Development",
              "Testing & Quality Assurance",
              "Delivery & Ongoing Support",
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
                  <h3 className="text-xl font-semibold">
                    {step}
                  </h3>
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
              Why Agencies Partner With Us
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <CheckCircle2 className="mb-4 h-6 w-6 text-violet-600" />
                <h3 className="font-medium">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">
            Ideal For
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Digital Agencies",
              "Marketing Agencies",
              "Consulting Firms",
              "IT Service Providers",
              "Startup Studios",
              "SaaS Companies",
              "Design Agencies",
              "Technology Partners",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-medium">
                  {industry}
                </h3>
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
                q: "What is white label development?",
                a: "White label development allows agencies to deliver software solutions under their own brand while we handle technical execution.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes. We work under strict NDA agreements and maintain complete confidentiality.",
              },
              {
                q: "Can you work as our internal development team?",
                a: "Yes. We can operate as an extension of your agency and support ongoing projects.",
              },
              {
                q: "What services can be white-labeled?",
                a: "Web development, mobile apps, SaaS products, ERP systems, CRM platforms and custom software.",
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

            <Link href="/services/saas-development" className="rounded-full border px-5 py-3">
              SaaS Development
            </Link>

            <Link href="/services/ecommerce-development" className="rounded-full border px-5 py-3">
              Ecommerce Development
            </Link>

            <Link href="/services/mobile-app-development" className="rounded-full border px-5 py-3">
              Mobile App Development
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Briefcase className="mx-auto h-16 w-16 text-violet-600" />

          <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">
            Looking For A Reliable White Label Development Partner?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Expand your agency capabilities, deliver more projects and increase
            revenue without building a large in-house development team.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white"
          >
            Become A Partner
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </section>
  );
}