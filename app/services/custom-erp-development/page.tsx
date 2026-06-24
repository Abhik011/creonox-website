
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Database,
  BarChart3,
  Workflow,
  CheckCircle2,
  Factory,
  Truck,
  Layers3,
     
} from "lucide-react";
import ERPWorkflowHorizontalScroll from "@/components/sections/ERPWorkflowHorizontalScroll";
export const metadata: Metadata = {
  metadataBase: new URL("https://creonox.com"),

  title:
    "ERP Development Company | Custom ERP Software Development Services",

  description:
    "Creonox is an ERP development company building custom ERP software, logistics ERP systems, manufacturing ERP platforms, inventory management solutions and enterprise resource planning software tailored to business workflows.",

  keywords: [
    "ERP Development Company",
    "Custom ERP Development",
    "ERP Software Development",
    "Enterprise Resource Planning",
    "ERP Development Services",
    "Logistics ERP Development",
    "Manufacturing ERP Development",
    "Inventory Management Software",
    "Custom ERP Software",
    "Enterprise ERP Solutions",
    "ERP Company India",
    "Business Process Automation",
    "Supply Chain ERP",
    "Fleet Management ERP",
    "Warehouse Management ERP",
  ],

  alternates: {
    canonical:
      "https://creonox.com/services/custom-erp-development",
  },

  openGraph: {
    title:
      "ERP Development Company | Custom ERP Development Services",

    description:
      "Build ERP software tailored to your operations, workflows and industry requirements.",

    url:
      "https://creonox.com/services/custom-erp-development",

    siteName: "Creonox",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ERP Development Company",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ERP Development Company | Creonox",
    description:
      "Custom ERP software development for logistics, manufacturing and enterprise businesses.",
    images: ["/og-image.png"],
  },
};

/* ===================================================
   SCHEMA
=================================================== */

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  name: "ERP Development Services",

  serviceType:
    "Custom ERP Software Development",

  provider: {
    "@type": "Organization",
    name: "Creonox Technologies",
    url: "https://creonox.com",
  },

  areaServed: "Worldwide",

  description:
    "ERP development company building custom ERP software for logistics, manufacturing, retail, warehousing and enterprise businesses.",
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
      name: "ERP Development",
      item:
        "https://creonox.com/services/custom-erp-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is ERP software?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "ERP software centralizes business operations including finance, inventory, procurement, sales, production and reporting into a single platform.",
      },
    },
    {
      "@type": "Question",
      name: "How much does ERP development cost?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "ERP development costs depend on modules, integrations and business complexity. Projects typically range from ₹5 lakh to ₹75 lakh+.",
      },
    },
    {
      "@type": "Question",
      name: "Can ERP integrate with existing software?",

      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. ERP systems can integrate with CRM platforms, accounting software, warehouse systems, payment gateways and third-party applications.",
      },
    },
  ],
};

const highlights = [
  "Inventory Management",
  "Finance & Accounting",
  "Warehouse Management",
  "Fleet Operations",
  "CRM Integration",
  "Business Analytics",
];

const benefits = [
  {
    icon: Database,
    title: "Centralized Operations",
    description:
      "Manage all departments from a single integrated platform.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automate repetitive workflows and reduce manual effort.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description:
      "Access dashboards and reports for better decisions.",
  },
  {
    icon: Building2,
    title: "Business Scalability",
    description:
      "Support growth with a scalable ERP architecture.",
  },
];

export default function ERPDevelopmentPage() {
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

      <main className="relative overflow-hidden bg-[#f8f8fc]">

        {/* Background Effects */}

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="absolute right-0 top-[700px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* HERO */}

        <section className="relative pt-28 pb-28">
          <div className="mx-auto max-w-7xl px-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700">
              <Layers3 size={14} />
              ERP Development Company
            </div>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">

              ERP Software Built
              <br />

              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                Around Your Business Operations.
              </span>

            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Creonox develops custom ERP software that unifies finance,
              inventory, procurement, operations, warehousing, logistics
              and reporting into one intelligent business platform.
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
                Start ERP Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services/logistics-erp-development"
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-medium"
              >
                Explore ERP Solutions
              </Link>

            </div>

          </div>
        </section>

        {/* ERP BENEFITS */}

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

        {/* BUSINESS PROBLEMS */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Business Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Problems ERP Software Helps Solve
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
              Many businesses still operate using spreadsheets,
              disconnected applications and manual processes.
              This creates data silos, operational inefficiencies
              and poor visibility across departments.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Disconnected Systems",
                "Manual Operations",
                "Inventory Inaccuracy",
                "Poor Reporting",
                "Data Silos",
                "Delayed Decisions",
                "Operational Bottlenecks",
                "Lack Of Visibility",
              ].map((problem) => (
                <div
                  key={problem}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <CheckCircle2 className="mb-4 h-6 w-6 text-violet-600" />

                  <h3 className="font-medium">
                    {problem}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERP MODULES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Modules
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Comprehensive ERP Modules For Every Department
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Our ERP solutions integrate every critical business function
              into a single platform, eliminating data silos and enabling
              seamless collaboration across departments.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Finance & Accounting",
                "Inventory Management",
                "CRM & Sales",
                "Procurement",
                "Warehouse Management",
                "Fleet Management",
                "HR & Payroll",
                "Business Intelligence",
                "Production Planning",
                "Asset Management",
                "Quality Control",
                "Document Management",
              ].map((module) => (
                <div
                  key={module}
                  className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold">
                    {module}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">
                    Fully integrated with your ERP ecosystem.
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ERP FEATURES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Features Designed For Operational Excellence
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Modern businesses need more than basic record keeping.
              Our ERP software delivers automation, visibility,
              analytics and operational control across the organization.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Real-Time Dashboards",
                "Workflow Automation",
                "Role-Based Access",
                "Document Management",
                "Mobile Accessibility",
                "Multi-Location Support",
                "Advanced Reporting",
                "Third-Party Integrations",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <CheckCircle2 className="mb-4 h-6 w-6 text-violet-600" />

                  <h3 className="font-medium">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ERP WORKFLOW */}

 <ERPWorkflowHorizontalScroll/>
        {/* ERP USE CASES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Solutions
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              ERP Systems For Different Business Models
            </h2>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <Factory className="h-12 w-12 text-violet-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  Manufacturing ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Streamline production planning, procurement,
                  inventory control, quality management and factory
                  operations through a centralized ERP platform.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <Truck className="h-12 w-12 text-violet-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  Logistics ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Manage fleets, dispatch planning, POD tracking,
                  customer billing and transportation operations
                  from a unified logistics ERP solution.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <Database className="h-12 w-12 text-violet-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  Warehouse ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Improve inventory accuracy, stock visibility,
                  warehouse operations and fulfillment efficiency.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <Building2 className="h-12 w-12 text-violet-600" />

                <h3 className="mt-6 text-2xl font-semibold">
                  Enterprise ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Connect finance, operations, procurement,
                  human resources and analytics across multiple
                  business units and locations.
                </p>
              </div>

            </div>

          </div>
        </section>
       
        {/* INDUSTRIES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Industries We Serve
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              ERP Solutions Tailored For Industry-Specific Operations
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Every industry has unique workflows, compliance requirements
              and operational challenges. Our ERP development approach
              focuses on building systems that align with real-world
              business operations rather than forcing businesses to adapt
              to generic software.
            </p>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  Logistics & Transportation ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Manage fleet operations, dispatch planning, route
                  optimization, trip tracking, POD management, billing,
                  fuel monitoring and driver performance from a centralized
                  logistics ERP platform. Transportation companies gain
                  complete visibility across operations while improving
                  service quality and profitability.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  Manufacturing ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Streamline procurement, production planning, quality
                  control, inventory management, machine utilization and
                  factory operations. Manufacturing ERP software helps
                  businesses improve production efficiency while reducing
                  operational costs and waste.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  Warehouse & Distribution ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Improve warehouse efficiency through inventory tracking,
                  barcode management, stock movement control, inbound and
                  outbound logistics, order fulfillment and supply chain
                  visibility.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">
                <h3 className="text-2xl font-semibold">
                  Retail & Ecommerce ERP
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Manage inventory synchronization, order processing,
                  customer management, POS integration, procurement and
                  financial reporting across multiple sales channels.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ERP DEVELOPMENT PROCESS */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Development Process
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Our ERP Implementation Methodology
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Successful ERP implementation requires more than software
              development. We follow a structured process that ensures
              business alignment, user adoption and long-term scalability.
            </p>

            <div className="mt-16 space-y-6">

              {[
                {
                  step: "01",
                  title: "Discovery & Process Mapping",
                  description:
                    "Analyze business operations, workflows and system requirements."
                },
                {
                  step: "02",
                  title: "ERP Architecture Planning",
                  description:
                    "Design ERP modules, workflows, integrations and system structure."
                },
                {
                  step: "03",
                  title: "UI/UX Design",
                  description:
                    "Create intuitive dashboards and user-friendly interfaces."
                },
                {
                  step: "04",
                  title: "Development",
                  description:
                    "Build ERP modules, automations and business workflows."
                },
                {
                  step: "05",
                  title: "Integration",
                  description:
                    "Connect ERP with third-party applications and existing systems."
                },
                {
                  step: "06",
                  title: "Testing & Validation",
                  description:
                    "Ensure performance, security and operational reliability."
                },
                {
                  step: "07",
                  title: "Deployment",
                  description:
                    "Launch ERP software and migrate business data."
                },
                {
                  step: "08",
                  title: "Support & Optimization",
                  description:
                    "Provide continuous enhancements and long-term support."
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

        {/* ERP PRICING */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Pricing
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Custom ERP Development Cost
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              ERP development costs vary depending on business size,
              module requirements, integrations and implementation scope.
            </p>

            <div className="mt-16 grid gap-6 lg:grid-cols-4">

              {[
                {
                  title: "Starter ERP",
                  price: "₹5L - ₹10L",
                },
                {
                  title: "SME ERP",
                  price: "₹10L - ₹25L",
                },
                {
                  title: "Enterprise ERP",
                  price: "₹25L - ₹75L",
                },
                {
                  title: "Multi-Location ERP",
                  price: "₹75L+",
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

        {/* CASE STUDIES */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Success Stories
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              ERP Systems Delivering Measurable Results
            </h2>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <h3 className="text-2xl font-semibold">
                  Logistics ERP Platform
                </h3>

                <p className="mt-6 text-slate-600">
                  Built a logistics ERP system integrating fleet
                  management, dispatch planning, POD tracking and
                  customer billing into a unified platform.
                </p>

                <div className="mt-8 flex gap-8">

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      50%
                    </div>

                    <p className="text-sm text-slate-500">
                      Faster Operations
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      35%
                    </div>

                    <p className="text-sm text-slate-500">
                      Reduced Costs
                    </p>
                  </div>

                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-10">

                <h3 className="text-2xl font-semibold">
                  Manufacturing ERP
                </h3>

                <p className="mt-6 text-slate-600">
                  Centralized procurement, inventory and production
                  planning into one integrated ERP platform.
                </p>

                <div className="mt-8 flex gap-8">

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      40%
                    </div>

                    <p className="text-sm text-slate-500">
                      Better Inventory Accuracy
                    </p>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-violet-600">
                      2X
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

        {/* ERP BENEFITS */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Business Benefits Of ERP Software
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                "Reduce Operational Costs",
                "Improve Productivity",
                "Automate Processes",
                "Centralize Business Data",
                "Real-Time Reporting",
                "Improve Customer Service",
                "Better Inventory Control",
                "Faster Decision Making",
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

        {/* ERP VS SPREADSHEETS */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              ERP Comparison
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              ERP Software vs Spreadsheets
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Many businesses start with spreadsheets because they are
              simple and inexpensive. However, as operations grow,
              spreadsheets become difficult to manage and often create
              data inconsistencies, reporting delays and operational
              inefficiencies.
            </p>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">

              <div className="grid grid-cols-3 border-b p-6 font-semibold">
                <div>Feature</div>
                <div>Spreadsheets</div>
                <div>ERP Software</div>
              </div>

              {[
                ["Data Accuracy", "Manual Updates", "Real-Time"],
                ["Reporting", "Limited", "Advanced"],
                ["Automation", "No", "Yes"],
                ["Collaboration", "Difficult", "Centralized"],
                ["Scalability", "Low", "High"],
                ["Visibility", "Limited", "Complete"],
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

        {/* ERP VS OFF THE SHELF */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Custom ERP vs Off-The-Shelf ERP Software
            </h2>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">

              <div className="grid grid-cols-3 border-b p-6 font-semibold">
                <div>Feature</div>
                <div>Off-The-Shelf ERP</div>
                <div>Custom ERP</div>
              </div>

              {[
                ["Business Fit", "Generic", "Tailored"],
                ["Customization", "Limited", "Unlimited"],
                ["Scalability", "Moderate", "High"],
                ["Integrations", "Restricted", "Flexible"],
                ["Ownership", "Vendor Controlled", "Business Owned"],
                ["Competitive Advantage", "Low", "High"],
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

        {/* WHY CHOOSE CREONOX */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Why Creonox
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Why Businesses Choose Creonox For ERP Development
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              We don't build generic ERP software. We build ERP systems
              around your business processes, industry requirements and
              long-term growth objectives. Every ERP platform is designed
              to improve operational efficiency, increase visibility and
              create a foundation for scalable business growth.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Industry Expertise",
                  description:
                    "Deep understanding of logistics, manufacturing and enterprise workflows.",
                },
                {
                  title: "Custom Development",
                  description:
                    "ERP systems designed specifically around your operations.",
                },
                {
                  title: "Scalable Architecture",
                  description:
                    "Cloud-ready platforms built for long-term growth.",
                },
                {
                  title: "Long-Term Partnership",
                  description:
                    "Continuous support, optimization and feature expansion.",
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

        {/* RELATED SERVICES */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-4xl font-semibold tracking-[-0.04em]">
              Related Services
            </h2>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/services/logistics-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3"
              >
                Logistics ERP Development
              </Link>

              <Link
                href="/services/manufacturing-erp-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3"
              >
                Manufacturing ERP Development
              </Link>

              <Link
                href="/services/crm-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3"
              >
                CRM Development
              </Link>

              <Link
                href="/services/ai-software-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3"
              >
                AI Software Development
              </Link>

              <Link
                href="/services/custom-software-development"
                className="rounded-full border border-slate-200 bg-white px-6 py-3"
              >
                Custom Software Development
              </Link>

            </div>

          </div>
        </section>

        {/* FAQ */}

        {/* FAQ */}

<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-5xl px-6">

    <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
      Frequently Asked Questions
    </span>

    <h2 className="mt-4 text-center text-4xl font-semibold tracking-[-0.04em]">
      ERP Development FAQs
    </h2>

    <div className="mt-16 space-y-6">

      {[
        {
          q: "What is ERP software?",
          a: "ERP software centralizes finance, inventory, procurement, sales, operations and reporting into one platform."
        },
        {
          q: "How much does ERP development cost?",
          a: "ERP development typically ranges from ₹5 lakh to ₹75 lakh+ depending on modules, integrations and business requirements."
        },
        {
          q: "Can ERP integrate with CRM software?",
          a: "Yes. ERP systems can integrate with CRM, HRMS, accounting software, warehouse systems and third-party applications."
        },
        {
          q: "How long does ERP development take?",
          a: "Most ERP projects take between 3 and 12 months depending on complexity."
        },
        {
          q: "Do you build cloud-based ERP systems?",
          a: "Yes. We develop cloud-native ERP platforms that support multi-location and remote operations."
        },
        {
          q: "Can ERP support multiple branches?",
          a: "Yes. Our ERP solutions support multi-company, multi-branch and multi-location operations."
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

        {/* FINAL CTA */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">

            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 px-10 py-20 text-center text-white">

              <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

              <Building2 className="mx-auto h-16 w-16" />

              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Ready To Build Your ERP Platform?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
                Replace disconnected systems with a unified ERP solution
                designed around your business operations, workflows and
                long-term growth strategy.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-medium text-violet-700 transition hover:scale-105"
                >
                  Schedule ERP Consultation
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/logistics-erp-development"
                  className="rounded-xl border border-white/30 px-7 py-4 font-medium text-white"
                >
                  Explore ERP Solutions
                </Link>

              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}

