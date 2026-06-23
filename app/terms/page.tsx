"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
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
          Terms of Service
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
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
            prose-headings:text-slate-950
            prose-headings:font-semibold
            prose-p:text-slate-600
            prose-li:text-slate-600
          "
        >
          <h2>Agreement to Terms</h2>

          <p>
            These Terms of Service ("Terms")
            govern your access to and use of
            the websites, products, software,
            applications and services
            provided by Creonox Technologies
            ("Creonox", "we", "our", or
            "us").
          </p>

          <p>
            By accessing or using our
            services, you agree to be bound
            by these Terms. If you do not
            agree with these Terms, you must
            not use our services.
          </p>

          <h2>Eligibility</h2>

          <p>
            You must be at least 18 years of
            age and capable of entering into
            legally binding agreements to use
            our services.
          </p>

          <h2>Use of Services</h2>

          <p>
            You may use our services only in
            accordance with these Terms and
            applicable laws.
          </p>

          <p>You agree not to:</p>

          <ul>
            <li>
              Use services for unlawful
              purposes
            </li>
            <li>
              Attempt to gain unauthorized
              access to systems
            </li>
            <li>
              Disrupt or interfere with
              service operations
            </li>
            <li>
              Reverse engineer or copy our
              software except as permitted by
              law
            </li>
            <li>
              Upload malicious code or
              harmful content
            </li>
          </ul>

          <h2>Accounts</h2>

          <p>
            Certain services may require an
            account. You are responsible for
            maintaining the confidentiality
            of your credentials and for all
            activities occurring under your
            account.
          </p>

          <h2>Intellectual Property</h2>

          <p>
            All content, software, designs,
            trademarks, logos, technology,
            documentation and materials
            provided by Creonox remain the
            exclusive property of Creonox or
            its licensors.
          </p>

          <p>
            Nothing in these Terms grants you
            ownership rights in our
            intellectual property.
          </p>

          <h2>User Content</h2>

          <p>
            You retain ownership of any data,
            content or materials submitted to
            our services.
          </p>

          <p>
            You grant Creonox a limited
            license to process and store such
            content solely for the purpose of
            providing the services.
          </p>

          <h2>Fees & Payments</h2>

          <p>
            Certain products or services may
            require payment. Pricing,
            subscription terms and billing
            conditions will be provided
            separately where applicable.
          </p>

          <p>
            Unless otherwise stated, fees are
            non-refundable.
          </p>

          <h2>Availability of Services</h2>

          <p>
            We strive to maintain reliable
            services but do not guarantee
            uninterrupted availability.
          </p>

          <p>
            Services may be modified,
            suspended or discontinued at any
            time without prior notice.
          </p>

          <h2>Third-Party Services</h2>

          <p>
            Our services may integrate with
            or link to third-party services.
            We are not responsible for the
            content, policies or practices of
            such third parties.
          </p>

          <h2>Disclaimer of Warranties</h2>

          <p>
            Services are provided on an "as
            is" and "as available" basis.
          </p>

          <p>
            To the maximum extent permitted
            by law, Creonox disclaims all
            warranties, whether express,
            implied or statutory, including
            warranties of merchantability,
            fitness for a particular purpose
            and non-infringement.
          </p>

          <h2>Limitation of Liability</h2>

          <p>
            To the fullest extent permitted
            by law, Creonox shall not be
            liable for indirect, incidental,
            consequential, special or
            punitive damages arising from or
            relating to the use of our
            services.
          </p>

          <p>
            Our total liability shall not
            exceed the amount paid by you to
            Creonox during the twelve months
            preceding the claim.
          </p>

          <h2>Indemnification</h2>

          <p>
            You agree to defend, indemnify
            and hold harmless Creonox and its
            affiliates from claims, damages,
            liabilities and expenses arising
            from your use of the services or
            violation of these Terms.
          </p>

          <h2>Termination</h2>

          <p>
            We may suspend or terminate
            access to services at any time if
            you violate these Terms or if
            required by law.
          </p>

          <h2>Privacy</h2>

          <p>
            Your use of our services is also
            governed by our Privacy Policy.
          </p>

          <h2>Changes to Terms</h2>

          <p>
            We may update these Terms from
            time to time. Continued use of
            services after updates become
            effective constitutes acceptance
            of the revised Terms.
          </p>

          <h2>Governing Law</h2>

          <p>
            These Terms shall be governed by
            and interpreted in accordance
            with the laws applicable in the
            jurisdiction where Creonox
            operates, without regard to
            conflict of law principles.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have questions regarding
            these Terms, please contact:
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
