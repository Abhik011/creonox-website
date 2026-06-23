import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Code2,
  Globe,
  Layers3,
  Shield,
  Rocket,
  Database,
  Cpu,
} from "lucide-react";

export const metadata = {
  title:
    "Mobile App Development Company | iOS & Android Apps",
  description:
    "Creonox is a mobile app development company offering Android app development, iOS app development, Flutter app development and enterprise mobile application development services.",
  keywords: [
    "mobile app development company",
    "mobile app development services",
    "android app development company",
    "ios app development company",
    "flutter app development company",
    "custom mobile app development",
    "cross platform app development",
    "enterprise mobile app development",
    "mobile application development company",
    "app developers india",
  ],
  alternates: {
    canonical:
      "https://creonox.com/services/mobile-app-development",
  },
};

const features = [
  "Android App Development",
  "iOS App Development",
  "Flutter Development",
  "React Native Development",
  "Enterprise Mobile Apps",
  "UI/UX Design",
  "API Integrations",
  "App Maintenance",
];

const appTypes = [
  "E-commerce Apps",
  "ERP Mobile Apps",
  "CRM Applications",
  "Healthcare Apps",
  "Education Apps",
  "Fintech Apps",
  "Logistics Apps",
  "On-Demand Apps",
  "Marketplace Apps",
];

const technologies = [
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Firebase",
  "Node.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
];

const industries = [
  "Healthcare",
  "Fintech",
  "Retail",
  "Logistics",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Travel",
];

export default function MobileAppDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      {/* Background */}

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
            Mobile App Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Mobile App Development
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Built For Growth.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Creonox develops custom mobile applications for startups,
            enterprises, and growing businesses. We build Android, iOS, Flutter
            and cross-platform mobile applications designed for scalability,
            performance, and exceptional user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Start Your App Project
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Business Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Mobile Apps That Solve Real Business Problems
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Businesses today require mobile-first experiences to engage
              customers, improve productivity, automate operations and drive
              revenue growth. Our custom mobile applications are designed to
              help organizations stay competitive in a digital-first world.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Poor Customer Engagement",
              "Manual Processes",
              "Disconnected Systems",
              "Limited Scalability",
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

      {/* SERVICES */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center pb-24">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              App Development Services
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Mobile App Development Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Full-cycle mobile application development from strategy and UI/UX
              design to development, deployment and support.
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
                    <Smartphone size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {feature}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Modern mobile solutions engineered for performance,
                    scalability and growth.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Platforms We Build For
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Android Applications",
              "iOS Applications",
              "Flutter Apps",
              "Cross Platform Apps",
            ].map((platform) => (
              <div
                key={platform}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <Smartphone className="mb-4 h-10 w-10 text-violet-600" />
                <h3 className="font-semibold">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP TYPES */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Mobile Apps We Develop
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {appTypes.map((app) => (
              <div
                key={app}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Technologies We Use
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Our Mobile App Development Process
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Discovery & Strategy",
              "UI/UX Design",
              "App Development",
              "API Integration",
              "Testing & QA",
              "Launch & Support",
            ].map((step) => (
              <div
                key={step}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <Rocket className="mb-4 h-10 w-10 text-violet-600" />
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CREONOX */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Why Choose Creonox For Mobile App Development?
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We combine strategy, UI/UX design, development expertise and
              modern technologies to build high-performance mobile applications
              that drive measurable business results.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border bg-white p-6">
              <Code2 className="mb-4 h-8 w-8 text-violet-600" />
              Expert Developers
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <Shield className="mb-4 h-8 w-8 text-violet-600" />
              Secure Architecture
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <Layers3 className="mb-4 h-8 w-8 text-violet-600" />
              Scalable Solutions
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <Globe className="mb-4 h-8 w-8 text-violet-600" />
              Global Standards
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Industries We Serve
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-semibold tracking-[-0.04em]">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 space-y-6">
            {[
              {
                q: "What mobile app platforms do you develop?",
                a: "We develop Android, iOS and cross-platform mobile applications using Flutter and React Native.",
              },
              {
                q: "How much does mobile app development cost?",
                a: "The cost depends on features, integrations and complexity. Most projects range from ₹50,000 to ₹15,00,000+.",
              },
              {
                q: "How long does mobile app development take?",
                a: "Simple apps take 4–8 weeks while enterprise-grade applications may take 3–8 months.",
              },
              {
                q: "Do you provide app maintenance?",
                a: "Yes. We provide maintenance, updates, performance optimization and feature enhancements.",
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

      {/* INTERNAL LINKS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold">
            Related Services
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/services/custom-software-development"
              className="rounded-full border px-5 py-3"
            >
              Custom Software Development
            </Link>

            <Link
              href="/services/web-development"
              className="rounded-full border px-5 py-3"
            >
              Web Development
            </Link>

            <Link
              href="/services/erp-development-company"
              className="rounded-full border px-5 py-3"
            >
              ERP Development
            </Link>

            <Link
              href="/services/crm-development"
              className="rounded-full border px-5 py-3"
            >
              CRM Development
            </Link>

            <Link
              href="/services/ecommerce-development"
              className="rounded-full border px-5 py-3"
            >
              Ecommerce Development
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Ready To Build Your Mobile App?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Launch a powerful mobile application that helps your business grow,
            engage users and generate revenue.
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