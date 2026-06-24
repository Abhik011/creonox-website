
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Users,
  TrendingUp,
  CheckCircle2,
  Database,
  Workflow,
  Target,
  PhoneCall,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://creonox.com"),

  title:
    "CRM Development Company | Custom CRM Software Development Services",

  description:
    "Creonox is a CRM development company building custom CRM software, sales automation systems, customer management platforms, lead management solutions and enterprise CRM applications that improve customer relationships and increase revenue.",

  keywords: [
    "CRM Development Company",
    "Custom CRM Development",
    "CRM Software Development",
    "CRM Development Services",
    "Customer Relationship Management Software",
    "Sales CRM Development",
    "Lead Management Software",
    "Enterprise CRM Development",
    "Custom CRM Platform",
    "CRM Application Development",
    "CRM Software Company",
    "CRM Development India",
  ],

  alternates: {
    canonical:
      "https://creonox.com/services/crm-development",
  },

  openGraph: {
    title:
      "CRM Development Company | Custom CRM Software Development",

    description:
      "Build CRM software tailored to your sales process, customer lifecycle and business workflows.",

    url:
      "https://creonox.com/services/crm-development",

    siteName: "Creonox",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CRM Development Company",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "CRM Development Company | Creonox",
    description:
      "Custom CRM software development services for growing businesses.",
    images: ["/og-image.png"],
  },
};

/* ===================================================
   SCHEMA
=================================================== */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "CRM Development Services",

  serviceType:
    "Customer Relationship Management Software Development",

  provider: {
    "@type": "Organization",
    name: "Creonox Technologies",
    url: "https://creonox.com",
  },

  areaServed: "Worldwide",

  description:
    "Custom CRM software development company helping businesses automate sales, manage leads and improve customer engagement.",
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
      name: "CRM Development",
      item:
        "https://creonox.com/services/crm-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is CRM software?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "CRM software helps businesses manage customer relationships, leads, sales pipelines and customer interactions from a centralized platform.",
      },
    },

    {
      "@type": "Question",
      name: "Can CRM integrate with ERP systems?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. CRM software can integrate with ERP, accounting software, HR systems, marketing platforms and third-party business applications.",
      },
    },

    {
      "@type": "Question",
      name: "How much does CRM development cost?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "CRM development costs vary depending on features, integrations and customization requirements.",
      },
    },
  ],
};

/* ===================================================
   DATA
=================================================== */

const highlights = [
  "Lead Management",
  "Sales Automation",
  "Customer Portal",
  "Workflow Automation",
  "Analytics",
  "Mobile CRM",
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description:
      "Improve lead conversion and sales performance with automated workflows.",
  },

  {
    icon: Users,
    title: "Customer Visibility",
    description:
      "Access complete customer information from a single platform.",
  },

  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automate repetitive tasks and improve team productivity.",
  },

  {
    icon: Database,
    title: "Centralized Data",
    description:
      "Keep customer records, interactions and activities organized.",
  },
];

/* ===================================================
   PAGE
=================================================== */

export default function CRMDevelopmentCompanyPage() {
  return (
    <>
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

        {/* Background */}

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute right-0 top-[600px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* HERO */}

        <section className="relative pt-28 pb-28">
          <div className="mx-auto max-w-7xl px-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700">
              <Users size={14} />
              CRM Development Company
            </div>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">

              CRM Software Built
              <br />

              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                To Drive Revenue &
                Customer Growth.
              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Creonox develops custom CRM software that helps
              businesses manage leads, automate sales processes,
              improve customer engagement and increase revenue
              through streamlined customer relationship management.
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
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-medium text-white"
              >
                Book CRM Consultation
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

        {/* BENEFITS */}

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {benefits.map((item) => {
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

        {/* BUSINESS CHALLENGES */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Business Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Problems CRM Software Helps Solve
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              Businesses often struggle with fragmented customer data,
              inconsistent follow-ups and lack of visibility into sales
              performance. CRM software centralizes customer information
              and enables teams to deliver better customer experiences.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Lost Leads",
                "Manual Follow-Ups",
                "Disconnected Customer Data",
                "Poor Sales Visibility",
                "Missed Opportunities",
                "Inefficient Processes",
                "Customer Retention Issues",
                "Lack Of Reporting",
              ].map((problem) => (
                <div
                  key={problem}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <Target className="mb-4 h-6 w-6 text-violet-600" />

                  <h3 className="font-medium">
                    {problem}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CRM FEATURES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              CRM Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Powerful CRM Features For Modern Businesses
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Our CRM platforms are designed to help businesses manage the
              complete customer lifecycle from lead acquisition and sales
              opportunities to customer retention and long-term relationship
              management.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Lead Management",
                  description:
                    "Capture, organize and nurture leads from multiple channels."
                },
                {
                  title: "Sales Pipeline",
                  description:
                    "Track opportunities through every stage of the sales process."
                },
                {
                  title: "Contact Management",
                  description:
                    "Maintain a complete customer database with interaction history."
                },
                {
                  title: "Workflow Automation",
                  description:
                    "Automate repetitive tasks and sales processes."
                },
                {
                  title: "Customer Portal",
                  description:
                    "Provide customers with self-service access and support."
                },
                {
                  title: "Task Management",
                  description:
                    "Assign activities and monitor team productivity."
                },
                {
                  title: "Email Integration",
                  description:
                    "Connect CRM with email platforms for communication tracking."
                },
                {
                  title: "Analytics & Reporting",
                  description:
                    "Generate real-time business intelligence and sales reports."
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <PhoneCall className="h-10 w-10 text-violet-600" />

                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM MODULES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              CRM Modules
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              CRM Modules We Build
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Every business has unique customer management requirements.
              We develop modular CRM solutions that can be customized to
              match your business workflows and growth objectives.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3">

              {[
                "Lead Management",
                "Contact Management",
                "Sales Pipeline",
                "Task Automation",
                "Customer Portal",
                "Marketing Automation",
                "Sales Forecasting",
                "Quotation Management",
                "Activity Tracking",
                "Support Ticketing",
                "Customer Success",
                "Analytics Dashboard",
              ].map((module) => (
                <div
                  key={module}
                  className="rounded-3xl border border-slate-200 bg-white p-6 text-center font-medium transition hover:border-violet-300"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM USE CASES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              CRM Use Cases
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              CRM Solutions For Every Customer Journey
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Sales Management",
                "Lead Tracking",
                "Customer Support",
                "Marketing Automation",
                "Field Sales Tracking",
                "Partner Management",
                "Account Management",
                "Customer Success",
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

            <div className="mt-16 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  Sales CRM Software
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Track leads, opportunities, quotations, follow-ups and
                  customer communications from a centralized platform.
                  Sales teams gain complete visibility into pipelines,
                  conversion rates and revenue performance.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  Customer Service CRM
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Improve customer experiences through support ticket
                  management, communication tracking, service history
                  and automated customer engagement workflows.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CRM INTEGRATIONS */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Integrations
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Connect CRM With Your Business Ecosystem
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              We integrate CRM platforms with existing business tools,
              accounting software, ERP systems, communication platforms
              and payment gateways.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">

              {[
                "WhatsApp",
                "Google Workspace",
                "Microsoft 365",
                "QuickBooks",
                "Xero",
                "SAP",
                "Zoho",
                "Stripe",
                "Razorpay",
                "HubSpot",
              ].map((integration) => (
                <div
                  key={integration}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center font-medium"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Industries
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              CRM Solutions For Every Industry
            </h2>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  CRM For Logistics Companies
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Manage leads, transport inquiries, customer accounts,
                  quotations and contract renewals from a centralized CRM.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  CRM For Manufacturers
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Track distributors, dealers, sales opportunities and
                  customer interactions throughout the sales cycle.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  CRM For Real Estate
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Manage property inquiries, site visits, follow-ups,
                  customer communication and deal closures.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  CRM For Professional Services
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Manage clients, proposals, projects and long-term
                  customer relationships with complete visibility.
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
              Why Businesses Choose Creonox For CRM Development
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              A CRM system is more than a contact database. It becomes the
              operational backbone of your sales, marketing and customer
              success teams. Creonox develops CRM platforms that align with
              your business processes and scale as your organization grows.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Custom CRM Development",
                  description:
                    "Built specifically around your business workflows and processes.",
                },
                {
                  title: "Cloud Architecture",
                  description:
                    "Scalable cloud infrastructure for growing businesses.",
                },
                {
                  title: "Mobile CRM Apps",
                  description:
                    "Access customer information from anywhere on any device.",
                },
                {
                  title: "Enterprise Integrations",
                  description:
                    "Connect CRM with ERP, accounting and business systems.",
                },
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

        {/* CRM DEVELOPMENT PROCESS */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              CRM Development Process
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Our CRM Development Methodology
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              We follow a structured development approach to ensure your
              CRM platform is scalable, user-friendly and aligned with
              business objectives.
            </p>

            <div className="mt-16 space-y-6">

              {[
                {
                  step: "01",
                  title: "Discovery & Business Analysis",
                  description:
                    "Understand sales processes, customer journeys and operational requirements.",
                },
                {
                  step: "02",
                  title: "CRM Architecture Planning",
                  description:
                    "Define modules, workflows, permissions and system architecture.",
                },
                {
                  step: "03",
                  title: "UI/UX Design",
                  description:
                    "Create intuitive dashboards and customer-centric interfaces.",
                },
                {
                  step: "04",
                  title: "Development",
                  description:
                    "Build CRM modules, workflows, integrations and automation.",
                },
                {
                  step: "05",
                  title: "Testing & Quality Assurance",
                  description:
                    "Validate functionality, security and performance.",
                },
                {
                  step: "06",
                  title: "Deployment & Training",
                  description:
                    "Launch the CRM platform and train teams for adoption.",
                },
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

        {/* CRM PRICING */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              CRM Pricing
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              CRM Development Cost
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              CRM software pricing depends on modules, integrations,
              automation requirements and deployment complexity.
            </p>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">

              {[
                {
                  title: "Starter CRM",
                  price: "₹1L - ₹3L",
                },
                {
                  title: "SME CRM",
                  price: "₹3L - ₹10L",
                },
                {
                  title: "Enterprise CRM",
                  price: "₹10L - ₹25L+",
                },
                {
                  title: "Custom CRM Platform",
                  price: "₹25L+",
                },
              ].map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >
                  <h3 className="text-xl font-semibold">
                    {plan.title}
                  </h3>

                  <div className="mt-5 text-3xl font-bold text-violet-600">
                    {plan.price}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* CRM BENEFITS */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Business Benefits Of CRM Software
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Increase Lead Conversion",
                "Improve Customer Retention",
                "Automate Follow-Ups",
                "Improve Team Productivity",
                "Increase Revenue",
                "Centralize Customer Data",
                "Better Sales Forecasting",
                "Stronger Customer Relationships",
              ].map((benefit) => (
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

        {/* CASE STUDIES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Success Stories
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              CRM Solutions Delivering Results
            </h2>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <h3 className="text-2xl font-semibold">
                  Logistics CRM Platform
                </h3>

                <p className="mt-6 text-slate-600">
                  Built a CRM solution for a logistics business to
                  manage leads, quotations, follow-ups and customer
                  communication.
                </p>

                <div className="mt-8 flex gap-8">

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      35%
                    </div>

                    <p className="text-sm text-slate-500">
                      Increase In Conversions
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      50%
                    </div>

                    <p className="text-sm text-slate-500">
                      Faster Follow-Ups
                    </p>
                  </div>

                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <h3 className="text-2xl font-semibold">
                  Manufacturing CRM
                </h3>

                <p className="mt-6 text-slate-600">
                  Centralized dealer management, customer support and
                  opportunity tracking for a growing manufacturing company.
                </p>

                <div className="mt-8 flex gap-8">

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      40%
                    </div>

                    <p className="text-sm text-slate-500">
                      Better Customer Retention
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      2X
                    </div>

                    <p className="text-sm text-slate-500">
                      Sales Productivity
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CRM VS SPREADSHEET */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              CRM Software vs Spreadsheets
            </h2>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">

              <div className="grid grid-cols-3 border-b p-6 font-semibold">
                <div>Feature</div>
                <div>Spreadsheet</div>
                <div>CRM Software</div>
              </div>

              {[
                ["Lead Tracking", "Manual", "Automated"],
                ["Customer History", "Limited", "Complete"],
                ["Follow-Ups", "Manual", "Automated"],
                ["Reports", "Basic", "Advanced"],
                ["Scalability", "Low", "High"],
                ["Team Collaboration", "Limited", "Excellent"],
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
              CRM Development FAQs
            </h2>

            <div className="mt-16 space-y-6">

              {[
                {
                  q: "What is CRM software?",
                  a: "CRM software helps businesses manage customer relationships, track leads, automate sales processes and improve customer engagement from a centralized platform.",
                },
                {
                  q: "How much does CRM software development cost?",
                  a: "CRM development costs typically range from ₹1 lakh for starter systems to ₹25 lakh+ for enterprise CRM platforms depending on features and integrations.",
                },
                {
                  q: "Can CRM integrate with ERP software?",
                  a: "Yes. We integrate CRM platforms with ERP systems, accounting software, inventory management solutions, HRMS and third-party applications.",
                },
                {
                  q: "Can CRM integrate with WhatsApp?",
                  a: "Yes. CRM platforms can integrate with WhatsApp Business, email systems and communication platforms for centralized customer communication.",
                },
                {
                  q: "Do you build CRM mobile applications?",
                  a: "Yes. We develop CRM mobile applications for Android and iOS to help sales teams access customer information on the go.",
                },
                {
                  q: "How long does CRM development take?",
                  a: "Most CRM projects take between 6 and 20 weeks depending on customization, integrations and business complexity.",
                },
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
              Explore More Business Software Solutions
            </h2>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/services/custom-software-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Custom Software Development
              </Link>

              <Link
                href="/services/custom-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                ERP Development
              </Link>

              <Link
                href="/services/ai-software-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                AI Software Development
              </Link>

              <Link
                href="/services/mobile-app-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Mobile App Development
              </Link>

              <Link
                href="/services/saas-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                SaaS Development
              </Link>

              <Link
                href="/services/logistics-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Logistics ERP
              </Link>

              <Link
                href="/services/manufacturing-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 transition hover:border-violet-300 hover:text-violet-600"
              >
                Manufacturing ERP
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

        {/* INTERNAL SEO CONTENT */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Modern CRM Software For Growing Businesses
            </h2>

            <div className="mt-10 max-w-5xl space-y-6 text-lg leading-8 text-slate-600">

              <p>
                Customer Relationship Management software has become an
                essential component of modern business operations. Companies
                that rely on spreadsheets and disconnected tools often
                struggle to manage customer interactions effectively,
                resulting in missed opportunities and reduced productivity.
              </p>

              <p>
                A custom CRM platform provides complete visibility into
                customer relationships, sales pipelines, support requests
                and account activity. Teams can collaborate more efficiently,
                automate repetitive processes and make data-driven decisions.
              </p>

              <p>
                Creonox develops CRM solutions tailored to the unique needs
                of logistics companies, manufacturers, healthcare providers,
                financial institutions, educational organizations and
                professional service businesses. Our CRM platforms are
                designed to scale alongside your organization and support
                long-term growth.
              </p>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">

            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 px-10 py-20 text-center text-white">

              <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

              <Users className="mx-auto h-16 w-16" />

              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Ready To Build A CRM Platform That Scales?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
                Transform customer relationships, automate sales processes
                and increase revenue with a custom CRM platform built by
                Creonox.
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

