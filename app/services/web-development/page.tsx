import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Code2,
    Smartphone,
    ShoppingCart,
    Shield,
    Rocket,
    Search,
    Palette,
    MonitorSmartphone,
    Server,
    ShieldCheck,
    LayoutDashboard,
    Users,
} from "lucide-react";


export const metadata = {
    title:
        "Web Development Company | Custom Website Development Services",
    description:
        "Creonox is a web development company offering custom website development, business websites, eCommerce stores, web applications, portals and enterprise web development services.",
    keywords: [
        "web development company",
        "website development company",
        "custom website development",
        "web application development",
        "business website development",
        "ecommerce website development",
        "enterprise web development",
        "nextjs development company",
        "react development company",
        "website developers india",
    ],
    alternates: {
        canonical:
            "https://creonox.com/services/web-development",
    },
};

const features = [
    "Business Website Development",
    "Custom Web Applications",
    "Corporate Websites",
    "E-commerce Development",
    "CMS Development",
    "SEO Optimized Websites",
    "API Integrations",
    "Website Maintenance",
];

const websiteTypes = [
    "Corporate Websites",
    "Business Websites",
    "E-commerce Stores",
    "ERP Dashboards",
    "CRM Portals",
    "SaaS Platforms",
    "Marketplace Platforms",
    "Educational Portals",
    "Healthcare Portals",
];

const technologies = [
    "Next.js",
    "React.js",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "TypeScript",
];

const industries = [
    "Healthcare",
    "Logistics",
    "Manufacturing",
    "Retail",
    "Education",
    "Real Estate",
    "Finance",
    "Travel",
];

export default function WebDevelopmentPage() {
    return (
        <section className="relative overflow-hidden bg-[#f7f7fb]">
            {/* Background */}

            <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

            <div className="absolute right-0 top-[700px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

            {/* Hero */}

            <section className="relative pt-24 pb-24">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                        Web Development Company
                    </p>

                    <h1 className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 md:text-7xl">
                        Modern Websites
                        <br />
                        <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                            Built To Scale Your Business.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                        Creonox develops high-performance websites, web applications,
                        eCommerce platforms and enterprise solutions that help businesses
                        attract customers, streamline operations and drive growth.
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

            {/* Problems */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-4xl">
                        <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                            Business Challenges
                        </span>

                        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
                            Why Businesses Invest In Web Development
                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            A website is often the first interaction customers have with your
                            business. Slow websites, outdated designs and poor user
                            experiences can lead to lost opportunities. We build websites
                            designed to convert visitors into customers.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            "Poor Online Presence",
                            "Low Conversions",
                            "Slow Website Performance",
                            "Outdated Design",
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

            {/* Services */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-14 text-center pb-24">
                        <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                            Web Development Services
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight">
                            Web Solutions For Every Business
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                            From business websites to enterprise web applications, we build
                            scalable digital experiences tailored to your goals.
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
                                        <Globe size={22} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-semibold">
                                        {feature}
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-600">
                                        Designed for performance, scalability and growth.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Website Types */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                        Websites & Platforms We Build
                    </h2>

                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {websiteTypes.map((item) => (
                            <div
                                key={item}
                                className="rounded-3xl border border-slate-200 bg-white p-6"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}

            <section className="bg-slate-50 py-24">
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

            {/* Process */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <section className="py-24">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center">
                                <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                                    Development Process
                                </span>


                                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                                    From Idea To Launch
                                </h2>

                                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                                    A proven development process that ensures quality, scalability,
                                    performance and successful project delivery.
                                </p>
                            </div>

                            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                                            <Search className="h-7 w-7 text-violet-600" />
                                        </div>

                                        <span className="text-5xl font-bold text-slate-100">
                                            01
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Discovery & Planning
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Understand business goals, requirements, workflows and project scope.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                                            <Palette className="h-7 w-7 text-blue-600" />
                                        </div>

                                        <span className="text-5xl font-bold text-slate-100">
                                            02
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        UI/UX Design
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Create intuitive user experiences and visually engaging interfaces.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                                            <MonitorSmartphone className="h-7 w-7 text-green-600" />
                                        </div>

                                        <span className="text-5xl font-bold text-slate-100">
                                            03
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Frontend Development
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Build fast, responsive and modern user interfaces.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                                            <Server className="h-7 w-7 text-orange-600" />
                                        </div>

                                        <span className="text-5xl font-bold text-slate-100">
                                            04
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Backend Development
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Develop APIs, databases and business logic for scalable systems.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
                                            <ShieldCheck className="h-7 w-7 text-red-600" />
                                        </div>

                                        <span className="text-5xl font-bold text-slate-100">
                                            05
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Testing & QA
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Ensure reliability, security, performance and bug-free deployment.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100">
                                            <Rocket className="h-7 w-7 text-purple-600" />
                                        </div>

                                        <span className="text-5xl font-bold text-slate-100">
                                            06
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Launch & Support
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Deploy, monitor and continuously improve your digital product.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </section>

                </div>
            </section>

            {/* Why Creonox */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <section className="py-24 bg-slate-50">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center">
                                <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                                    Why Creonox
                                </span>


                                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                                    We Build Websites That
                                    <br />
                                    Drive Real Business Growth
                                </h2>

                                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                                    Beyond beautiful designs, we focus on performance, conversions,
                                    scalability and long-term business value. Every website is built to
                                    help your company attract more customers and grow faster.
                                </p>
                            </div>

                            <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                                        <Code2 className="h-7 w-7 text-violet-600" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Modern Technology
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Built with Next.js, React, TypeScript and modern cloud
                                        infrastructure for speed and reliability.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                                        <Shield className="h-7 w-7 text-violet-600" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Secure By Design
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Enterprise-grade security practices protect your business,
                                        customer data and digital assets.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                                        <Search className="h-7 w-7 text-violet-600" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        SEO Ready
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Optimized structure, fast loading speeds and technical SEO
                                        foundations built from day one.
                                    </p>
                                </div>

                                <div className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl ">
                                        <LayoutDashboard className="h-7 w-7 text-violet-600" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-slate-950">
                                        Scalable Solutions
                                    </h3>

                                    <p className="mt-3 text-slate-600">
                                        Designed to grow with your business, from startup websites
                                        to enterprise-grade platforms.
                                    </p>
                                </div>
                            </div>




                        </div>
                    </section>

                </div>
            </section>

            {/* Industries */}

            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
                            Why Businesses Choose Creonox
                        </span>

                        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
                            More Than Just A Website.
                            <br />
                            We Build Digital Growth Engines.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Every website we build is designed to generate leads, improve
                            conversions, strengthen your brand, and support long-term business
                            growth.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[32px] border border-slate-200 bg-white p-10">
                            <Rocket className="h-10 w-10 text-violet-600" />

                            <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                                Built For Business Growth
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                We don't just create attractive websites. We build platforms
                                focused on lead generation, customer acquisition, and measurable
                                business outcomes.
                            </p>
                        </div>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-10">
                            <Search className="h-10 w-10 text-violet-600" />

                            <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                                SEO-Ready Architecture
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Fast-loading pages, clean code structure, schema markup, and
                                technical SEO foundations help improve visibility on search engines.
                            </p>
                        </div>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-10">
                            <Shield className="h-10 w-10 text-violet-600" />

                            <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                                Enterprise-Grade Security
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Secure authentication, data protection, role-based access control,
                                and modern security practices ensure your business remains protected.
                            </p>
                        </div>

                        <div className="rounded-[32px] border border-slate-200 bg-white p-10">
                            <Code2 className="h-10 w-10 text-violet-600" />

                            <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                                Future-Proof Technology
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Built using modern technologies like Next.js, React, Node.js and
                                cloud infrastructure that can scale as your business grows.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 rounded-[40px] border border-slate-200 bg-white p-10">
                        <div className="grid gap-8 text-center md:grid-cols-4">
                            <div>
                                <div className="text-4xl font-bold text-slate-950">
                                    100%
                                </div>
                                <p className="mt-2 text-slate-600">
                                    Custom Development
                                </p>
                            </div>

                            <div>
                                <div className="text-4xl font-bold text-slate-950">
                                    Mobile
                                </div>
                                <p className="mt-2 text-slate-600">
                                    Responsive Design
                                </p>
                            </div>

                            <div>
                                <div className="text-4xl font-bold text-slate-950">
                                    SEO
                                </div>
                                <p className="mt-2 text-slate-600">
                                    Optimized Structure
                                </p>
                            </div>

                            <div>
                                <div className="text-4xl font-bold text-slate-950">
                                    Fast
                                </div>
                                <p className="mt-2 text-slate-600">
                                    Performance Focused
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-center text-4xl font-semibold">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-16 space-y-6">
                        {[
                            {
                                q: "How much does website development cost?",
                                a: "Website development costs vary based on project scope, features and integrations. Projects typically start from ₹25,000.",
                            },
                            {
                                q: "Do you build custom web applications?",
                                a: "Yes. We develop custom portals, SaaS platforms, ERP systems, CRM systems and enterprise applications.",
                            },
                            {
                                q: "Will my website be SEO friendly?",
                                a: "Yes. We follow SEO best practices including page speed optimization, structured content and technical SEO.",
                            },
                            {
                                q: "Do you provide website maintenance?",
                                a: "Yes. We offer ongoing maintenance, updates, security monitoring and performance optimization.",
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

            {/* Internal Links */}

           <section className="py-24 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center">
      <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm font-medium text-violet-700">
        Related Services
      </span>


  <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
    Explore More Solutions
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
    Looking for more than a website? We help businesses build scalable
    software, mobile applications, ERP systems and digital platforms.
  </p>
</div>

<div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <Link
    href="/services/mobile-app-development"
    className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
  >
    <Smartphone className="h-10 w-10 text-violet-600" />

    <h3 className="mt-6 text-xl font-semibold text-slate-950">
      Mobile App Development
    </h3>

    <p className="mt-3 text-slate-600">
      Native and cross-platform mobile applications for Android and iOS.
    </p>

    <span className="mt-6 inline-flex items-center gap-2 font-medium text-violet-600">
      Learn More
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </span>
  </Link>

  <Link
    href="/services/custom-software-development"
    className="group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
  >
    <Code2 className="h-10 w-10 text-violet-600" />

    <h3 className="mt-6 text-xl font-semibold text-slate-950">
      Custom Software Development
    </h3>

    <p className="mt-3 text-slate-600">
      Tailor-made software solutions designed around your business processes.
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
    <ShoppingCart className="h-10 w-10 text-violet-600" />

    <h3 className="mt-6 text-xl font-semibold text-slate-950">
      Ecommerce Development
    </h3>

    <p className="mt-3 text-slate-600">
      High-converting online stores with secure payments and inventory management.
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
      Manage leads, customers and sales pipelines from one centralized platform.
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
    <LayoutDashboard className="h-10 w-10 text-violet-600" />

    <h3 className="mt-6 text-xl font-semibold text-slate-950">
      ERP Development
    </h3>

    <p className="mt-3 text-slate-600">
      Enterprise resource planning solutions that streamline operations.
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
      Let's discuss your project requirements and build the right solution.
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

            <section className="py-24">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                        Ready To Build Your Website?
                    </h2>

                    <p className="mt-6 text-lg text-slate-600">
                        Launch a high-performance website designed to attract customers,
                        improve conversions and grow your business.
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