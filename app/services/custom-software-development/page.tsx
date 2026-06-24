import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Shield,
  Rocket,
  Search,
  Palette,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  LayoutDashboard,
  Users,
  Database,
  Workflow,
  Cloud,
  Cpu,
} from "lucide-react";

export const metadata = {
  title:
    "Custom Software Development Company | Custom Software Solutions",
  description:
    "Creonox develops custom software solutions, enterprise applications, SaaS platforms, ERP systems, CRM solutions and business automation software tailored to your business goals.",
  keywords: [
    "custom software development company",
    "custom software development",
    "enterprise software development",
    "business software development",
    "software development services",
    "custom application development",
    "saas development company",
    "enterprise application development",
    "software developers india",
  ],
  alternates: {
    canonical:
      "https://www.creonox.com/services/custom-software-development",
  },
};

const features = [
  "Custom Software Development",
  "Enterprise Applications",
  "SaaS Development",
  "Business Process Automation",
  "API Development",
  "Cloud Solutions",
  "System Integrations",
  "Software Maintenance",
];

const softwareTypes = [
  "ERP Systems",
  "CRM Platforms",
  "SaaS Applications",
  "Inventory Management Systems",
  "HR Management Software",
  "Logistics Software",
  "Healthcare Applications",
  "Financial Platforms",
  "Business Portals",
];

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "TypeScript",
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Finance",
  "Retail",
  "Education",
  "Construction",
  "Real Estate",
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[700px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Hero */}

      <section className="relative pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Custom Software Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Custom Software
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Built Around Your Business.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We design and develop custom software solutions that automate
            operations, streamline workflows and help businesses scale
            efficiently. From enterprise applications to SaaS platforms,
            we build software tailored to your unique business needs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Start Your Project
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

      {/* Business Challenges */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Business Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Why Businesses Invest In Custom Software
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Generic software often forces businesses to adapt their
              workflows. Custom software is built specifically around
              your processes, helping improve efficiency, reduce manual
              work and create a competitive advantage.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Manual Processes",
              "Disconnected Systems",
              "Operational Inefficiencies",
              "Limited Scalability",
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

      {/* Services */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center pb-24">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Custom Software Services
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Software Solutions Built For Growth
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We create scalable software applications that solve
              business challenges, automate workflows and improve
              operational efficiency.
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white">
                    <Code2 size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Tailored solutions engineered around your business
                    requirements.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Software Solutions */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Software Solutions We Build
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-slate-600">
            From enterprise applications to SaaS products, we develop
            software solutions designed to streamline operations and
            accelerate business growth.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {softwareTypes.map((item) => (
              <div
                key={item}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-300
                  hover:shadow-lg
                "
              >
                <h3 className="font-medium text-slate-950">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Technology Stack
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
              Modern Technologies We Use
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              We leverage proven technologies and modern development
              frameworks to build secure, scalable and future-ready
              software solutions.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-violet-200
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-violet-300
                  hover:bg-violet-50
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Development Process
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              From Idea To Deployment
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A structured development process focused on quality,
              performance and long-term business success.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <Search className="h-8 w-8 text-violet-600" />
                <span className="text-5xl font-bold text-slate-100">
                  01
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Discovery & Planning
              </h3>

              <p className="mt-3 text-slate-600">
                Understand goals, workflows, requirements and project scope.
              </p>
            </div>

            <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <Palette className="h-8 w-8 text-blue-600" />
                <span className="text-5xl font-bold text-slate-100">
                  02
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Solution Design
              </h3>

              <p className="mt-3 text-slate-600">
                Define architecture, user experience and technical strategy.
              </p>
            </div>

            <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <MonitorSmartphone className="h-8 w-8 text-green-600" />
                <span className="text-5xl font-bold text-slate-100">
                  03
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Frontend Development
              </h3>

              <p className="mt-3 text-slate-600">
                Build modern interfaces optimized for usability and performance.
              </p>
            </div>

            <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <Server className="h-8 w-8 text-orange-600" />
                <span className="text-5xl font-bold text-slate-100">
                  04
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Backend Development
              </h3>

              <p className="mt-3 text-slate-600">
                Develop APIs, databases and business logic that power your software.
              </p>
            </div>

            <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <ShieldCheck className="h-8 w-8 text-red-600" />
                <span className="text-5xl font-bold text-slate-100">
                  05
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Testing & QA
              </h3>

              <p className="mt-3 text-slate-600">
                Ensure security, performance and reliability across all features.
              </p>
            </div>

            <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <Rocket className="h-8 w-8 text-purple-600" />
                <span className="text-5xl font-bold text-slate-100">
                  06
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                Deployment & Support
              </h3>

              <p className="mt-3 text-slate-600">
                Launch, monitor and continuously improve your software platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Creonox */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Why Choose Creonox
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              We Build Software That
              <br />
              Transforms Business Operations
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Our focus is not just software development. We help businesses
              automate processes, improve efficiency and create long-term
              competitive advantages.
            </p>
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10">
              <Workflow className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-2xl font-semibold">
                Process Automation
              </h3>

              <p className="mt-4 text-slate-600">
                Eliminate repetitive manual work and streamline operations.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10">
              <Database className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-2xl font-semibold">
                Centralized Data
              </h3>

              <p className="mt-4 text-slate-600">
                Access business-critical information from a single platform.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10">
              <Cloud className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-2xl font-semibold">
                Cloud Ready
              </h3>

              <p className="mt-4 text-slate-600">
                Scalable cloud infrastructure designed for future growth.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10">
              <Cpu className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-2xl font-semibold">
                Future-Proof Solutions
              </h3>

              <p className="mt-4 text-slate-600">
                Modern architecture that evolves with your business needs.
              </p>
            </div>
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
            {industries.map((industry) => (
              <div
                key={industry}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-300
                  hover:shadow-lg
                "
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* FAQ */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Common Questions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Everything you need to know about custom software development,
              timelines, pricing and implementation.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {[
              {
                q: "What is custom software development?",
                a: "Custom software development involves creating software specifically tailored to your business workflows, processes and objectives rather than using generic off-the-shelf solutions.",
              },
              {
                q: "How much does custom software development cost?",
                a: "The cost depends on project scope, complexity, integrations and features. Most custom software projects start from ₹75,000 and scale based on business requirements.",
              },
              {
                q: "Can you integrate with existing systems?",
                a: "Yes. We integrate software with ERP systems, CRM platforms, accounting software, payment gateways, APIs and third-party applications.",
              },
              {
                q: "How long does software development take?",
                a: "Development timelines vary depending on project complexity. Most projects range from 4 weeks to several months.",
              },
              {
                q: "Do you provide maintenance and support?",
                a: "Yes. We offer ongoing maintenance, monitoring, updates, performance optimization and long-term technical support.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:border-violet-300
                  hover:shadow-lg
                "
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {faq.q}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Related Services
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Explore More Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Looking for more than custom software development? Explore our
              additional services designed to help businesses grow and scale.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/services/web-development"
              className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
            >
              <LayoutDashboard className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Web Development
              </h3>

              <p className="mt-3 text-slate-600">
                High-performance websites and web applications built for growth.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-medium text-violet-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/services/mobile-app-development"
              className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
            >
              <MonitorSmartphone className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Mobile App Development
              </h3>

              <p className="mt-3 text-slate-600">
                Android, iOS and cross-platform applications built to scale.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-medium text-violet-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/services/crm-development"
              className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
            >
              <Users className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                CRM Development
              </h3>

              <p className="mt-3 text-slate-600">
                Customer relationship management systems tailored to your sales process.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-medium text-violet-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/services/erp-development-company"
              className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
            >
              <Database className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                ERP Development
              </h3>

              <p className="mt-3 text-slate-600">
                Streamline operations with powerful ERP software solutions.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-medium text-violet-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/services/ecommerce-development"
              className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
            >
              <LayoutDashboard className="h-10 w-10 text-violet-600" />

              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                Ecommerce Development
              </h3>

              <p className="mt-3 text-slate-600">
                Build online stores and marketplaces designed to drive sales.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-medium text-violet-600">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="group flex flex-col justify-center rounded-[32px] border border-violet-200 bg-gradient-to-br from-violet-600 to-purple-600 p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">
                Need Something Custom?
              </h3>

              <p className="mt-4 text-violet-100">
                Let's discuss your requirements and build a solution tailored
                to your business.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-medium">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 p-[1px]">
            <div className="rounded-[40px] bg-slate-950 px-10 py-20 text-center">
              <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-300">
                Let's Build Something Great
              </span>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Ready To Build Custom Software?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Transform your business with software designed specifically
                around your workflows, processes and growth objectives.
                Partner with Creonox to create scalable solutions that
                drive efficiency and innovation.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Schedule Consultation
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}