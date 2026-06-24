import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Store,
  Palette,
  CreditCard,
  Package,
  Smartphone,
  BarChart3,
  ShoppingBag,
  Truck,
} from "lucide-react";

export const metadata = {
  title:
    "Shopify Development Company | Shopify Store Development Services",
  description:
    "Professional Shopify development services. Build high-converting Shopify stores, Shopify Plus solutions, custom themes and ecommerce experiences that drive sales and business growth.",
  keywords: [
    "Shopify Development Company",
    "Shopify Store Development",
    "Shopify Experts",
    "Shopify Plus Development",
    "Custom Shopify Development",
    "Shopify Theme Development",
    "Shopify Ecommerce Development",
    "Shopify Store Design",
    "Shopify Agency",
    "Shopify Website Development",
  ],
  alternates: {
    canonical:
      "https://www.creonox.com/services/shopify-development",
  },
};

const features = [
  "Custom Shopify Themes",
  "Shopify Plus",
  "Store Migration",
  "Payment Integration",
  "Inventory Management",
  "Mobile Optimization",
  "SEO Optimization",
  "App Integrations",
];

const modules = [
  {
    icon: Store,
    title: "Custom Store Design",
    description:
      "Unique Shopify storefronts designed around your brand identity and customer journey.",
  },
  {
    icon: Palette,
    title: "Theme Development",
    description:
      "Custom Shopify themes optimized for performance, user experience and conversions.",
  },
  {
    icon: CreditCard,
    title: "Checkout Optimization",
    description:
      "Improve conversion rates with streamlined checkout experiences and payment integrations.",
  },
  {
    icon: Package,
    title: "Product Management",
    description:
      "Manage products, variants, inventory, collections and pricing from a centralized platform.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description:
      "Responsive shopping experiences designed for mobile-first customers.",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description:
      "Track customer behavior, sales trends and business performance metrics.",
  },
];

const benefits = [
  "Increase online sales",
  "Improve conversion rates",
  "Faster store performance",
  "Better customer experience",
  "Scalable ecommerce infrastructure",
  "Mobile-first shopping",
  "SEO-friendly architecture",
  "Streamlined operations",
];

export default function ShopifyDevelopmentPage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7fb]">
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="absolute right-0 top-[800px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* HERO */}

      <section className="relative pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Shopify Development Company
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
            Shopify Stores
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Built To Increase Sales.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Creonox develops high-performance Shopify stores for brands,
            retailers and growing ecommerce businesses. From custom storefronts
            to Shopify Plus implementations, we build commerce experiences that
            drive conversions and long-term growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Book Consultation
            </Link>

            <Link
              href="/services/ecommerce-development"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium"
            >
              View Ecommerce Services
            </Link>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Ecommerce Challenges
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
              Problems We Help Shopify Brands Solve
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Many ecommerce brands struggle with low conversion rates,
              abandoned carts, poor mobile experiences and limited scalability.
              We help businesses optimize their Shopify stores for performance,
              growth and customer satisfaction.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Low Conversion Rates",
              "Slow Store Performance",
              "Cart Abandonment",
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

      {/* FEATURES */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
              Shopify Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Shopify Development Features
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Everything required to launch, optimize and scale a modern
              Shopify store.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white">
                  <ShoppingBag size={22} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Built to improve ecommerce performance and customer experience.
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
            Shopify Services
          </span>

          <h2 className="mt-4 text-4xl font-semibold">
            Shopify Development Solutions
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
              From Store Concept To Growth
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "Business & Product Discovery",
              "Store Architecture & UX Design",
              "Shopify Development & Integrations",
              "Testing & Performance Optimization",
              "Launch & Growth Support",
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
              Why Choose Shopify
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
              "Fashion",
              "Beauty",
              "Electronics",
              "Food & Beverage",
              "Furniture",
              "Jewelry",
              "Healthcare",
              "Lifestyle Brands",
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

      {/* FAQ, Related Services & CTA sections can follow exactly the same structure as your Manufacturing ERP template */}
    </section>
  );
}