import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Store,
  CreditCard,
  Package,
  BarChart3,
  Smartphone,
  Globe,
  Truck,
} from "lucide-react";

export const metadata = {
  title:
    "Ecommerce Development Company | Custom Ecommerce Website Development",
  description:
    "Custom Ecommerce Development Company. Build scalable B2B, B2C and Multi Vendor ecommerce platforms with payment integration, inventory management, order processing, analytics and mobile commerce solutions.",
  keywords: [
    "Ecommerce Development Company",
    "Custom Ecommerce Development",
    "Ecommerce Website Development",
    "B2B Ecommerce Development",
    "B2C Ecommerce Development",
    "Online Store Development",
    "Shopify Development Company",
    "WooCommerce Development",
    "Magento Development",
    "Ecommerce App Development",
  ],
  alternates: {
    canonical: "https://creonox.com/services/ecommerce-development",
  },
};

const features = [
  "Custom Storefront",
  "Product Management",
  "Inventory Management",
  "Payment Gateway Integration",
  "Order Management",
  "Multi Vendor Marketplace",
  "Mobile Commerce",
  "Analytics Dashboard",
];

const modules = [
  {
    icon: Store,
    title: "Store Management",
    description:
      "Manage products, categories, pricing, promotions and customer experiences from a centralized dashboard.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track stock levels, warehouses, product variants and inventory movements in real-time.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Integrate Razorpay, Stripe, PayPal and other payment gateways for secure online transactions.",
  },
  {
    icon: Truck,
    title: "Order Fulfillment",
    description:
      "Manage orders, shipping, returns, delivery tracking and logistics operations efficiently.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description:
      "Deliver seamless shopping experiences across mobile applications and responsive web platforms.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Monitor sales performance, customer behavior, conversion rates and business KPIs.",
  },
];

const benefits = [
  "Increase online sales",
  "Improve customer experience",
  "Automate order processing",
  "Reduce operational workload",
  "Scale business faster",
  "Real-time inventory visibility",
  "Better customer retention",
  "Data-driven decision making",
];

const platforms = [
  "Custom Ecommerce Development",
  "Shopify Development",
  "WooCommerce Development",
  "Magento Development",
  "Headless Commerce",
  "Marketplace Development",
];

export default function EcommerceDevelopmentPage() {
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
            Ecommerce Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Ecommerce Solutions
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Built To Scale Online Businesses.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Creonox develops high-performance ecommerce websites and applications
            for B2B, B2C and multi-vendor businesses. We help brands streamline
            online sales, automate operations and deliver exceptional shopping
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Start Your Project
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
              Ecommerce Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
              Problems We Help Ecommerce Businesses Solve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Many ecommerce businesses struggle with inventory management,
              abandoned carts, disconnected systems, poor customer experience
              and inefficient order fulfillment processes. We build solutions
              that solve these operational bottlenecks.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Low Conversion Rates",
              "Inventory Issues",
              "Order Processing Delays",
              "Poor Customer Experience",
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
              Ecommerce Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Ecommerce Platform Features
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Everything required to build, manage and scale a modern ecommerce
              business.
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
                    <ShoppingCart size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {feature}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Designed to help businesses grow online revenue and customer engagement.
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
            Ecommerce Modules
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
            Core Ecommerce Modules
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

   <section className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="max-w-3xl">
      <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
        Development Process
      </span>

      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
        From Idea To Revenue-Generating Store
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        We don't just build ecommerce websites. We design complete commerce
        systems focused on conversion, operations, fulfillment and long-term
        scalability.
      </p>
    </div>

    <div className="mt-20 space-y-8">
      {[
        {
          title: "Business & Commerce Discovery",
          description:
            "Understand products, margins, logistics workflows, customer journey, fulfilment process and growth goals before any design or development begins.",
        },
        {
          title: "Store Architecture & User Experience",
          description:
            "Define category structure, product pages, checkout experience, search, filtering and customer flows to maximize conversions.",
        },
        {
          title: "Platform Development",
          description:
            "Build the ecommerce platform, admin panel, inventory workflows, payment integrations, shipping systems and business automations.",
        },
        {
          title: "Testing & Operational Readiness",
          description:
            "Validate payments, taxes, shipping rules, inventory accuracy, mobile responsiveness and platform performance.",
        },
        {
          title: "Go Live & Scale",
          description:
            "Deploy infrastructure, monitor performance, track conversions and continuously optimize the platform as sales volume grows.",
        },
      ].map((step, index) => (
        <div
          key={step.title}
          className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 lg:grid-cols-[120px_1fr]"
        >
          <div>
            <span className="text-sm font-medium text-violet-600">
              STEP {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-950">
              {step.title}
            </h3>

            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              {step.description}
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
          <h2 className="text-4xl font-semibold">
            Platforms & Technologies
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <Globe className="h-8 w-8 text-violet-600" />
                <h3 className="mt-4 font-semibold">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-950">
              Business Benefits
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

      {/* FAQ */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="mt-16 space-y-8">
            {[
              {
                q: "How much does ecommerce development cost?",
                a: "The cost depends on features, integrations, design complexity and business requirements.",
              },
              {
                q: "Do you build custom ecommerce platforms?",
                a: "Yes. We develop custom ecommerce websites, marketplaces and enterprise commerce solutions.",
              },
              {
                q: "Can you integrate payment gateways?",
                a: "Yes. We integrate Razorpay, Stripe, PayPal and other global payment providers.",
              },
              {
                q: "Do you provide ecommerce mobile apps?",
                a: "Yes. We develop Android, iOS and cross-platform ecommerce applications.",
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
            <Link
              href="/services/custom-software-development"
              className="rounded-full border px-5 py-3"
            >
              Custom Software Development
            </Link>

            <Link
              href="/services/crm-development"
              className="rounded-full border px-5 py-3"
            >
              CRM Development
            </Link>

            <Link
              href="/services/custom-erp-development"
              className="rounded-full border px-5 py-3"
            >
              ERP Development
            </Link>

            <Link
              href="/services/mobile-app-development"
              className="rounded-full border px-5 py-3"
            >
              Mobile App Development
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em]">
            Ready To Launch Your Ecommerce Platform?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Build a scalable ecommerce website or marketplace that increases
            sales, improves customer experience and supports long-term growth.
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