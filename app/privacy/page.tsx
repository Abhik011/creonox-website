"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
return ( <main className="relative overflow-hidden bg-white">
{/* Background Glow */} <div
     className="
       absolute
       left-1/2
       top-0
       h-[800px]
       w-[800px]
       -translate-x-1/2
       rounded-full
       bg-violet-500/[0.04]
       blur-[180px]
     "
   />

  <section className="relative py-24 md:py-32">
    <div className="mx-auto max-w-5xl px-5 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="text-center"
      >
        <p
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.35em]
            text-violet-600
          "
        >
          Legal
        </p>

        <h1
          className="
            mt-6
            text-5xl
            font-semibold
            tracking-[-0.06em]
            text-slate-950
            md:text-7xl
          "
        >
          Privacy Policy
        </h1>

        <p
          className="
            mt-6
            text-lg
            text-slate-600
          "
        >
          Last Updated: June 16, 2026
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
        className="
          mt-16
          rounded-[32px]
          border
          border-slate-200
          bg-white/80
          p-8
          md:p-12
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(15,23,42,0.05)]
        "
      >
        <div
          className="
            prose
            prose-slate
            max-w-none
            prose-headings:font-semibold
            prose-headings:text-slate-950
            prose-p:text-slate-600
            prose-li:text-slate-600
          "
        >
          <h2>Introduction</h2>

          <p>
            Welcome to Creonox Technologies
            ("Creonox", "we", "our", or "us").
            We respect your privacy and are
            committed to protecting the
            information you share with us.
          </p>

          <p>
            This Privacy Policy explains how
            we collect, use, disclose and
            safeguard your information when
            you visit our website, use our
            products, communicate with us or
            interact with our services.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>

          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company or firm name</li>
            <li>Business information</li>
            <li>Support requests</li>
            <li>Communications with us</li>
          </ul>

          <h3>
            Information Collected
            Automatically
          </h3>

          <ul>
            <li>IP address</li>
            <li>Browser information</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Usage analytics</li>
            <li>Performance metrics</li>
          </ul>

          <h3>Product Data</h3>

          <p>
            For users of our software
            platforms, including CA IQ, we
            may process operational,
            administrative and workflow data
            necessary to provide our
            services.
          </p>

          <h2>
            How We Use Your Information
          </h2>

          <ul>
            <li>
              Provide and maintain services
            </li>
            <li>
              Create and manage user accounts
            </li>
            <li>
              Process requests and inquiries
            </li>
            <li>
              Improve products and user
              experience
            </li>
            <li>
              Develop new features and
              services
            </li>
            <li>
              Communicate updates and product
              information
            </li>
            <li>
              Monitor security and prevent
              fraud
            </li>
            <li>
              Comply with legal obligations
            </li>
          </ul>

          <h2>Cookies & Analytics</h2>

          <p>
            We may use cookies, analytics
            tools and similar technologies to
            understand website usage, improve
            functionality and measure
            performance.
          </p>

          <h2>Data Sharing</h2>

          <p>
            We do not sell personal
            information.
          </p>

          <p>
            Information may be shared with
            trusted service providers,
            hosting partners, analytics
            providers, payment processors and
            legal authorities when required
            by law.
          </p>

          <h2>Data Security</h2>

          <p>
            We implement reasonable
            administrative, technical and
            organizational safeguards
            designed to protect information
            against unauthorized access,
            disclosure, alteration or
            destruction.
          </p>

          <h2>Data Retention</h2>

          <p>
            Information is retained only for
            as long as necessary to provide
            services, comply with legal
            obligations, resolve disputes and
            enforce agreements.
          </p>

          <h2>Your Rights</h2>

          <p>
            Depending on applicable laws, you
            may have the right to:
          </p>

          <ul>
            <li>
              Access your personal data
            </li>
            <li>
              Correct inaccurate information
            </li>
            <li>
              Request deletion of data
            </li>
            <li>
              Restrict processing
            </li>
            <li>
              Request data portability
            </li>
            <li>
              Withdraw consent where
              applicable
            </li>
          </ul>

          <h2>Third-Party Links</h2>

          <p>
            Our website may contain links to
            third-party websites or services.
            We are not responsible for the
            privacy practices of those third
            parties.
          </p>

          <h2>Children's Privacy</h2>

          <p>
            Our services are not intended for
            children under the age of 13, and
            we do not knowingly collect
            personal information from
            children.
          </p>

          <h2>
            International Data Transfers
          </h2>

          <p>
            Information may be processed or
            stored in jurisdictions outside
            your country of residence where
            permitted by applicable law.
          </p>

          <h2>Changes To This Policy</h2>

          <p>
            We may update this Privacy Policy
            from time to time. Updates will
            be posted on this page with a
            revised effective date.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have questions regarding
            this Privacy Policy, please
            contact us:
          </p>

          <p>
            <strong>
              Creonox Technologies
            </strong>
            <br />
            Email: hello@creonox.com
            <br />
            Website:
            https://creonox.com
          </p>
        </div>
      </motion.div>
    </div>
  </section>
</main>


);
}
