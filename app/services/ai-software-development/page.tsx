
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  Brain,
  Sparkles,
  Cpu,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://creonox.com"),

  title:
    "AI Software Development Company | Custom AI Development Services",

  description:
    "Creonox is an AI software development company delivering custom AI applications, AI agents, generative AI platforms, machine learning solutions, enterprise AI systems, computer vision software, and intelligent business automation solutions.",

  keywords: [
    "AI Software Development Company",
    "Custom AI Development Services",
    "AI Agent Development",
    "Generative AI Development Company",
    "Enterprise AI Solutions",
    "Machine Learning Development",
    "Artificial Intelligence Development",
    "LLM Development Company",
    "AI Automation Solutions",
    "AI Application Development",
    "AI Consulting Services",
    "OpenAI Development",
    "Gemini AI Development",
    "Enterprise AI Software",
    "AI Chatbot Development",
    "Custom AI Software Development",
    "AI Workflow Automation",
    "Computer Vision Development",
    "Predictive Analytics Solutions",
    "AI Integration Services",
  ],

  alternates: {
    canonical:
      "https://creonox.com/services/ai-software-development",
  },

  openGraph: {
    title:
      "AI Software Development Company | Creonox",

    description:
      "Build intelligent AI-powered software solutions with Creonox. AI agents, generative AI, machine learning, automation and enterprise AI systems.",

    url:
      "https://creonox.com/services/ai-software-development",

    siteName: "Creonox",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Software Development Company",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AI Software Development Company | Creonox",

    description:
      "Custom AI software development, AI agents, generative AI platforms and enterprise AI solutions.",

    images: ["/og-image.png"],
  },
};

/* =========================================================
   JSON-LD SCHEMA
========================================================= */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  serviceType: "AI Software Development",

  name: "AI Software Development Services",

  provider: {
    "@type": "Organization",
    name: "Creonox Technologies",
    url: "https://creonox.com",
  },

  areaServed: "Worldwide",

  description:
    "Custom AI software development company providing AI agents, generative AI applications, machine learning solutions, enterprise AI software and workflow automation systems.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://creonox.com",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://creonox.com/services",
    },

    {
      "@type": "ListItem",
      position: 3,
      name: "AI Software Development",
      item:
        "https://creonox.com/services/ai-software-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What AI software solutions can Creonox build?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Creonox develops AI agents, AI copilots, chatbots, machine learning systems, predictive analytics platforms, enterprise AI applications, computer vision solutions and workflow automation systems.",
      },
    },

    {
      "@type": "Question",
      name: "Can AI integrate with existing ERP and CRM systems?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. We integrate AI with ERP, CRM, accounting software, HR systems, inventory management software, logistics platforms and other enterprise applications.",
      },
    },

    {
      "@type": "Question",
      name: "Which AI models do you work with?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "We work with OpenAI GPT, Google Gemini, Claude, Llama and custom machine learning models depending on project requirements.",
      },
    },
  ],
};

/* =========================================================
   DATA
========================================================= */

const highlights = [
  "Custom AI Software",
  "Generative AI Platforms",
  "AI Agent Development",
  "Machine Learning Systems",
  "Enterprise AI Solutions",
  "Workflow Automation",
];

const trustPoints = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous AI systems that perform tasks, execute workflows and assist teams.",
  },

  {
    icon: Brain,
    title: "Generative AI",
    description:
      "Build applications powered by GPT, Gemini, Claude and other large language models.",
  },

  {
    icon: Database,
    title: "Enterprise AI",
    description:
      "Integrate AI directly into ERP, CRM and business-critical software platforms.",
  },

  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description:
      "Enterprise-grade architecture designed for performance, compliance and growth.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AISoftwareDevelopmentPage() {
  return (
    <>
      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative overflow-hidden bg-[#f8f8fc]">

        {/* BACKGROUND */}

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute right-0 top-[600px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* HERO */}

        <section className="relative pt-28 pb-28">
          <div className="mx-auto max-w-7xl px-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700">
              <Sparkles size={14} />
              AI Software Development Company
            </div>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">

              Build Intelligent

              <br />

              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                AI Software That Automates,
                Learns & Scales.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Creonox is a leading AI software development company
              helping businesses leverage artificial intelligence,
              machine learning, generative AI and intelligent
              automation to improve efficiency, reduce costs and
              accelerate growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-medium text-white transition hover:bg-violet-700"
              >
                Book AI Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/custom-software-development"
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-medium"
              >
                Explore Software Development
              </Link>

            </div>
          </div>
        </section>

        {/* TRUST SECTION */}

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                      <Icon size={24} />
                    </div>

                    <h2 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY AI SECTION */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Why AI Matters
            </span>

            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Transform Business Operations With
              Artificial Intelligence
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              Organizations generate enormous amounts of operational,
              customer and financial data. Artificial Intelligence
              enables businesses to analyze this information in real
              time, automate repetitive tasks, identify opportunities
              and make faster data-driven decisions.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2">

              {[
                "Automate repetitive business processes",
                "Reduce operational costs",
                "Improve customer experiences",
                "Increase team productivity",
                "Unlock real-time business insights",
                "Improve forecasting accuracy",
                "Enhance decision making",
                "Scale operations efficiently",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-violet-600" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI DEVELOPMENT SERVICES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              AI Development Services
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              End-To-End AI Software Development Services
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              From AI strategy and consulting to enterprise deployment,
              Creonox helps organizations build scalable AI systems that
              automate workflows, improve productivity and create
              competitive advantages.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "AI Agent Development",
                  description:
                    "Build autonomous AI agents capable of reasoning, planning, task execution and workflow automation."
                },
                {
                  title: "Generative AI Development",
                  description:
                    "Create AI-powered applications using GPT, Gemini, Claude and open-source LLMs."
                },
                {
                  title: "AI Chatbot Development",
                  description:
                    "Deploy intelligent conversational assistants for customer support, sales and operations."
                },
                {
                  title: "Machine Learning Solutions",
                  description:
                    "Develop predictive models, forecasting systems and intelligent recommendation engines."
                },
                {
                  title: "Computer Vision Development",
                  description:
                    "Leverage image recognition, OCR, defect detection and visual intelligence platforms."
                },
                {
                  title: "Enterprise AI Integration",
                  description:
                    "Integrate AI into ERP, CRM, HRMS, finance and existing enterprise software."
                }
              ].map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                    <Cpu size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI USE CASES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              AI Use Cases
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Real Business Applications Of Artificial Intelligence
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              AI is transforming how businesses operate. Our AI solutions
              help organizations automate operations, process data faster,
              improve customer engagement and make better business decisions.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "AI Customer Support Automation",
                "AI Sales Assistants",
                "AI Knowledge Bases",
                "AI Audit Automation",
                "AI Document Processing",
                "AI Compliance Monitoring",
                "AI Predictive Analytics",
                "AI Recommendation Engines"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <Zap className="mb-4 h-6 w-6 text-violet-600" />

                  <h3 className="font-semibold">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">

              <div className="rounded-3xl bg-white p-10 border border-slate-200">
                <h3 className="text-2xl font-semibold">
                  AI-Powered Customer Service
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  AI chatbots and virtual assistants can handle customer
                  inquiries, resolve support tickets and provide
                  personalized responses around the clock. This improves
                  customer satisfaction while reducing support costs.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-10 border border-slate-200">
                <h3 className="text-2xl font-semibold">
                  Intelligent Workflow Automation
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  AI automates repetitive tasks such as document reviews,
                  approvals, data entry and reporting, allowing teams to
                  focus on strategic initiatives.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* AI TECHNOLOGY STACK */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Technology Stack
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Technologies We Use To Build AI Systems
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Our engineers work with the latest AI frameworks, large
              language models, vector databases and cloud platforms to
              build secure, scalable and production-ready AI software.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-4">

              {[
                "OpenAI GPT",
                "Google Gemini",
                "Claude",
                "Llama",
                "LangChain",
                "CrewAI",
                "AutoGen",
                "Pinecone",
                "Weaviate",
                "MongoDB",
                "PostgreSQL",
                "AWS"
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              AI Solutions Across Industries
            </h2>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  AI For Manufacturing
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Optimize production planning, quality control,
                  predictive maintenance and inventory management
                  through AI-driven insights and automation.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  AI For Logistics
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Improve route optimization, fleet management,
                  warehouse operations and demand forecasting with
                  intelligent logistics platforms.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  AI For Finance
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Detect fraud, automate compliance, improve risk
                  analysis and deliver intelligent financial insights.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  AI For Healthcare
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Enable clinical decision support, medical document
                  processing and patient engagement solutions powered
                  by artificial intelligence.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* WHY CHOOSE CREONOX */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Why Creonox
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Why Businesses Choose Creonox For AI Development
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              We combine artificial intelligence expertise, enterprise
              software engineering and deep business understanding to
              create AI solutions that deliver measurable business value.
              Our team focuses on building production-ready AI systems
              that integrate seamlessly with existing business operations.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Business First Approach",
                  description:
                    "AI solutions aligned with business goals and measurable outcomes."
                },
                {
                  title: "Enterprise Architecture",
                  description:
                    "Secure, scalable and future-ready AI infrastructure."
                },
                {
                  title: "Rapid Delivery",
                  description:
                    "Accelerated development using proven frameworks and methodologies."
                },
                {
                  title: "Long-Term Partnership",
                  description:
                    "Continuous optimization, support and AI innovation."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI DEVELOPMENT PROCESS */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Development Process
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Our AI Development Lifecycle
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Every successful AI initiative starts with understanding
              business objectives, identifying opportunities and creating
              a roadmap that transforms AI ideas into scalable products.
            </p>

            <div className="mt-16 space-y-6">

              {[
                {
                  step: "01",
                  title: "Discovery & Assessment",
                  description:
                    "Understand business goals, challenges, datasets and AI opportunities."
                },
                {
                  step: "02",
                  title: "AI Strategy & Architecture",
                  description:
                    "Define technology stack, infrastructure and implementation roadmap."
                },
                {
                  step: "03",
                  title: "Model Development",
                  description:
                    "Build AI models, agents and automation workflows tailored to business requirements."
                },
                {
                  step: "04",
                  title: "Integration & Deployment",
                  description:
                    "Integrate AI into ERP, CRM, websites, applications and enterprise systems."
                },
                {
                  step: "05",
                  title: "Optimization & Scaling",
                  description:
                    "Monitor performance, improve accuracy and continuously optimize AI systems."
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-[120px_1fr]"
                >
                  <div>
                    <span className="text-sm font-medium text-violet-600">
                      STEP {item.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* AI DEVELOPMENT COST */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Pricing Guide
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              AI Software Development Cost
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              AI development costs vary based on complexity, integrations,
              infrastructure requirements and business objectives.
            </p>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">

              {[
                {
                  title: "AI Chatbot",
                  price: "₹1L - ₹5L"
                },
                {
                  title: "AI Agent",
                  price: "₹3L - ₹15L"
                },
                {
                  title: "Generative AI Platform",
                  price: "₹5L - ₹25L"
                },
                {
                  title: "Enterprise AI System",
                  price: "₹10L - ₹50L+"
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <div className="mt-5 text-3xl font-bold text-violet-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Success Stories
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              AI Solutions Driving Real Results
            </h2>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <h3 className="text-2xl font-semibold">
                  AI Audit Intelligence Platform
                </h3>

                <p className="mt-6 text-slate-600">
                  Developed an AI-powered audit analysis platform capable
                  of identifying risk areas, generating audit insights and
                  improving compliance workflows.
                </p>

                <div className="mt-8 flex gap-8">

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      60%
                    </div>
                    <p className="text-sm text-slate-500">
                      Faster Audits
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      40%
                    </div>
                    <p className="text-sm text-slate-500">
                      Reduced Manual Work
                    </p>
                  </div>

                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <h3 className="text-2xl font-semibold">
                  Enterprise Workflow Automation
                </h3>

                <p className="mt-6 text-slate-600">
                  Implemented AI-powered automation across operations,
                  reducing repetitive tasks and increasing organizational
                  productivity.
                </p>

                <div className="mt-8 flex gap-8">

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      70%
                    </div>
                    <p className="text-sm text-slate-500">
                      Faster Processing
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      3X
                    </div>
                    <p className="text-sm text-slate-500">
                      Productivity Increase
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BUSINESS BENEFITS */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Benefits Of Enterprise AI Adoption
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Reduce Operational Costs",
                "Increase Team Productivity",
                "Improve Customer Experience",
                "Accelerate Decision Making",
                "Enhance Compliance",
                "Unlock Business Insights",
                "Improve Forecast Accuracy",
                "Gain Competitive Advantage"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <CheckCircle2 className="mb-4 h-6 w-6 text-violet-600" />

                  <h3 className="font-medium">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              AI Agents vs Traditional Automation
            </h2>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">

              <div className="grid grid-cols-3 border-b p-6 font-semibold">
                <div>Feature</div>
                <div>Traditional Automation</div>
                <div>AI Agents</div>
              </div>

              {[
                ["Decision Making", "Rule Based", "Context Aware"],
                ["Learning", "No", "Yes"],
                ["Adaptability", "Limited", "High"],
                ["Reasoning", "No", "Advanced"],
                ["Scalability", "Medium", "High"],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-3 border-b p-6"
                >
                  <div>{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* FAQ SECTION */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-center text-4xl font-semibold tracking-[-0.04em]">
              AI Software Development FAQs
            </h2>

            <div className="mt-16 space-y-6">

              {[
                {
                  q: "What AI software solutions can Creonox develop?",
                  a: "We build AI agents, generative AI applications, AI copilots, machine learning systems, enterprise AI platforms, computer vision software and workflow automation solutions."
                },
                {
                  q: "Can AI integrate with existing ERP and CRM systems?",
                  a: "Yes. Our AI solutions integrate with ERP, CRM, HRMS, accounting software, inventory systems, logistics platforms and other enterprise applications."
                },
                {
                  q: "Which AI models do you use?",
                  a: "We work with OpenAI GPT, Google Gemini, Anthropic Claude, Meta Llama and custom machine learning models depending on project requirements."
                },
                {
                  q: "How much does AI software development cost?",
                  a: "AI software development typically ranges from ₹1 lakh for basic AI applications to ₹50 lakh+ for enterprise AI platforms depending on scope and complexity."
                },
                {
                  q: "How long does AI development take?",
                  a: "Most AI projects take between 6 weeks and 6 months depending on integrations, workflows and model complexity."
                },
                {
                  q: "Do you provide AI consulting services?",
                  a: "Yes. We help businesses identify AI opportunities, create implementation roadmaps and build scalable AI strategies."
                }
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-semibold">
                    {faq.q}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Related Services
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Explore More Development Services
            </h2>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/services/custom-software-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Custom Software Development
              </Link>

              <Link
                href="/services/saas-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                SaaS Development
              </Link>

              <Link
                href="/services/custom-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                ERP Development
              </Link>

              <Link
                href="/services/manufacturing-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Manufacturing ERP
              </Link>

              <Link
                href="/services/logistics-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Logistics ERP
              </Link>

              <Link
                href="/services/mobile-app-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Mobile App Development
              </Link>

              <Link
                href="/services/shopify-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Shopify Development
              </Link>

              <Link
                href="/services/white-label-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                White Label Development
              </Link>

            </div>
          </div>
        </section>

        {/* INTERNAL SEO LINKS */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              AI Resources & Insights
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Learn how AI is transforming industries and discover
              practical strategies for implementing artificial intelligence
              within your organization.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <Link
                href="/insights"
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  AI Insights & Articles
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Explore the latest AI trends and best practices.
                </p>
              </Link>

              <Link
                href="/about"
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  About Creonox
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Learn about our team, expertise and vision.
                </p>
              </Link>

              <Link
                href="/products"
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  Our Products
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Discover AI-powered platforms built by Creonox.
                </p>
              </Link>

              <Link
                href="/contact"
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  Contact Us
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Discuss your AI software development project.
                </p>
              </Link>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">

            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 px-10 py-20 text-center text-white">

              <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

              <Cpu className="mx-auto h-16 w-16" />

              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Ready To Build AI-Powered Software?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
                Transform operations, automate workflows and unlock
                new business opportunities with custom AI software
                developed by Creonox.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-medium text-violet-700 transition hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/custom-software-development"
                  className="rounded-xl border border-white/30 px-7 py-4 font-medium text-white"
                >
                  Explore Development Services
                </Link>

              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  );
}

