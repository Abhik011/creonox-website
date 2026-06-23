import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Brain,
  Database,
  MessageSquare,
  Eye,
  BarChart3,
  Sparkles,
  Cpu,
} from "lucide-react";

export const metadata = {
  title:
    "AI Software Development Company | Custom AI Development Services",
  description:
    "Build intelligent AI-powered software solutions with Creonox. We develop custom AI applications, generative AI platforms, AI agents, machine learning systems, computer vision solutions and enterprise AI software.",
  keywords: [
    "AI Software Development Company",
    "AI Development Services",
    "Custom AI Software Development",
    "Generative AI Development",
    "AI Agent Development",
    "Machine Learning Development",
    "Enterprise AI Solutions",
    "AI Application Development",
    "LLM Development Company",
    "Artificial Intelligence Development",
  ],
  alternates: {
    canonical:
      "https://creonox.com/services/ai-software-development",
  },
};

const features = [
  "AI Agents",
  "Generative AI",
  "Machine Learning",
  "LLM Integration",
  "Computer Vision",
  "Predictive Analytics",
  "AI Automation",
  "Enterprise AI Platforms",
];

const modules = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Build autonomous AI agents capable of handling workflows, customer support, research and operational tasks.",
  },
  {
    icon: Brain,
    title: "Generative AI",
    description:
      "Develop AI applications powered by large language models for content generation, analysis and automation.",
  },
  {
    icon: Database,
    title: "Machine Learning",
    description:
      "Train and deploy machine learning models for forecasting, classification and intelligent decision making.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Deploy conversational AI assistants that improve customer engagement and support operations.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Leverage image recognition, object detection and visual intelligence solutions.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Use AI-driven insights to forecast trends, identify opportunities and optimize business performance.",
  },
];

const benefits = [
  "Automate repetitive tasks",
  "Increase operational efficiency",
  "Reduce business costs",
  "Improve decision making",
  "Enhance customer experience",
  "Unlock business insights",
  "Scale operations faster",
  "Gain competitive advantage",
];

export default function AISoftwareDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      {/* Background Effects */}

      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[800px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* HERO */}

      <section className="relative pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            AI Software Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            AI Software
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Built Around Your Business Intelligence.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Creonox develops custom AI software solutions that help businesses
            automate workflows, enhance decision-making, improve customer
            experiences and unlock the power of artificial intelligence across
            operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Book AI Consultation
            </Link>

            <Link
              href="/services/custom-software-development"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium"
            >
              View Development Services
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Business Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Problems AI Helps Solve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Businesses generate massive amounts of data every day. Manual
              processes, repetitive tasks and disconnected systems often limit
              growth and efficiency. AI helps organizations automate operations,
              improve productivity and gain actionable business insights.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Manual Processes",
              "Data Overload",
              "Operational Inefficiency",
              "Poor Decision Making",
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
          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              AI Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              AI Software Features
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Build intelligent systems that automate processes, analyze data
              and drive business growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white">
                  <Sparkles size={22} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Enterprise-grade AI capabilities tailored for modern businesses.
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
            AI Solutions
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
            AI Development Services
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
              From Idea To Production AI Systems
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "Business Discovery & Use Case Analysis",
              "AI Strategy & Architecture Planning",
              "Model Selection & Development",
              "Integration & Automation",
              "Testing, Deployment & Optimization",
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
            <h2 className="text-4xl font-bold text-slate-950">
              Benefits Of AI Adoption
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
              "Healthcare",
              "Finance",
              "Manufacturing",
              "Logistics",
              "Retail",
              "Education",
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
                q: "What AI software solutions can you build?",
                a: "We develop AI agents, chatbots, generative AI applications, machine learning systems, computer vision platforms and enterprise AI software.",
              },
              {
                q: "Can AI integrate with existing systems?",
                a: "Yes. AI can integrate with ERP, CRM, databases and existing business applications.",
              },
              {
                q: "Which AI models do you use?",
                a: "We work with OpenAI, Gemini, Claude and open-source AI models.",
              },
              {
                q: "How long does AI development take?",
                a: "AI projects typically take between 6 weeks and 6 months depending on complexity.",
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

            <Link href="/services/custom-erp-development" className="rounded-full border px-5 py-3">
              ERP Development
            </Link>

            <Link href="/services/crm-development" className="rounded-full border px-5 py-3">
              CRM Development
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
          <Cpu className="mx-auto h-16 w-16 text-violet-600" />

          <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">
            Ready To Build AI-Powered Software?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Transform your business with intelligent AI systems designed to
            automate operations, improve decision-making and drive growth.
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