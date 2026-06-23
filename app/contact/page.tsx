"use client";

import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to send"
        );
      }

      alert(
        "Message sent successfully!"
      );

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong"
      );
    }

    setLoading(false);
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-40">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[1000px]
            w-[1000px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.06]
            blur-[180px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-violet-600
            "
          >
            Contact
          </p>

          <h1
            className="
              mt-8
              text-6xl
              font-semibold
              tracking-[-0.06em]
              text-slate-950
              md:text-8xl
            "
          >
            Let's build the future
          </h1>

          <h1
            className="
              bg-gradient-to-r
              from-violet-600
              via-fuchsia-500
              to-blue-500
              bg-clip-text
              text-6xl
              font-semibold
              tracking-[-0.06em]
              text-transparent
              md:text-8xl
            "
          >
            together.
          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-slate-600
            "
          >
            Interested in CA IQ, partnerships,
            product feedback or collaboration?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="
                rounded-[32px]
                border
                border-slate-100
                bg-white
                p-8
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
              "
            >
              <Mail
                size={28}
                className="text-violet-600"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                Email Us
              </h3>

              <p className="mt-4 text-slate-600">
                For partnerships, product
                inquiries and general questions.
              </p>

              <p className="mt-6 font-medium">
                hello@creonox.com
              </p>
            </div>

            <div
              className="
                rounded-[32px]
                border
                border-slate-100
                bg-white
                p-8
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
              "
            >
              <MessageSquare
                size={28}
                className="text-violet-600"
              />

              <h3 className="mt-6 text-2xl font-semibold">
                Product Demo
              </h3>

              <p className="mt-4 text-slate-600">
                Learn how CA IQ can transform
                your firm's operations.
              </p>

              <p className="mt-6 font-medium">
                Schedule a conversation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-40">
        <div className="mx-auto max-w-4xl px-6">
          <form
            onSubmit={handleSubmit}
            className="
        rounded-[40px]
        border
        border-slate-100
        bg-white
        p-10
        shadow-[0_20px_80px_rgba(15,23,42,0.05)]
      "
          >
            <h2 className="text-4xl font-semibold tracking-tight">
              Send a message
            </h2>

            <div className="mt-10 grid gap-6">
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="Your Name"
                className="
            h-14
            rounded-xl
            border
            border-slate-200
            px-5
            outline-none
            focus:border-violet-400
          "
              />

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                placeholder="Email Address"
                className="
            h-14
            rounded-xl
            border
            border-slate-200
            px-5
            outline-none
            focus:border-violet-400
          "
              />

              <input
                value={form.company}
                onChange={(e) =>
                  setForm({
                    ...form,
                    company: e.target.value,
                  })
                }
                placeholder="Company"
                className="
            h-14
            rounded-xl
            border
            border-slate-200
            px-5
            outline-none
            focus:border-violet-400
          "
              />

              <textarea
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                placeholder="Tell us about your project, firm or inquiry..."
                className="
            rounded-xl
            border
            border-slate-200
            p-5
            outline-none
            focus:border-violet-400
          "
              />

              <button
                type="submit"
                disabled={loading}
                className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-xl
            bg-slate-950
            px-6
            py-4
            text-white
            transition-all
            hover:bg-slate-800
            disabled:opacity-50
          "
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}

                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-5xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-semibold text-xl">
                Is CA IQ available today?
              </h3>

              <p className="mt-3 text-slate-600">
                Yes. Contact us to learn more
                about access and onboarding.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Can we request a custom demo?
              </h3>

              <p className="mt-3 text-slate-600">
                Absolutely. We'll tailor the
                discussion to your workflow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Do you build custom software?
              </h3>

              <p className="mt-3 text-slate-600">
                Creonox primarily focuses on
                building product ecosystems,
                but we welcome strategic discussions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}