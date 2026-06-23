
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "What is ERP development?",
    answer:
      "ERP development is the process of designing and building enterprise resource planning software that centralizes business operations such as finance, inventory, procurement, sales, HR, and reporting into a single platform.",
  },
  {
    question: "Why should a business invest in custom ERP development?",
    answer:
      "Custom ERP development enables businesses to automate workflows, reduce manual tasks, improve operational visibility, and create software tailored to their unique processes.",
  },
  {
    question: "How much does ERP development cost?",
    answer:
      "ERP development costs vary based on modules, integrations, users, workflows, and project complexity. Custom ERP projects can range from ₹5 lakh to ₹50 lakh or more.",
  },
  {
    question: "How long does ERP software development take?",
    answer:
      "Most ERP projects take between 3 and 12 months depending on the number of modules, integrations, and customization requirements.",
  },
  {
    question: "What modules can be included in an ERP system?",
    answer:
      "ERP software can include CRM, Finance, Inventory, Procurement, Warehouse Management, Fleet Management, Manufacturing, HR, Payroll, Analytics, and Reporting modules.",
  },
  {
    question: "Do you provide logistics ERP development services?",
    answer:
      "Yes. Creonox develops logistics ERP systems including fleet management, dispatch planning, route optimization, trip management, invoicing, POD tracking, and transport analytics.",
  },
  {
    question: "Can ERP software integrate with existing systems?",
    answer:
      "Absolutely. ERP systems can integrate with accounting software, CRMs, payment gateways, eCommerce platforms, warehouse systems, IoT devices, and third-party APIs.",
  },
  {
    question: "Is cloud ERP better than on-premise ERP?",
    answer:
      "Cloud ERP provides better scalability, accessibility, and lower infrastructure costs, while on-premise ERP offers greater control and may be preferred for strict compliance requirements.",
  },
  {
    question: "Which industries benefit from ERP development?",
    answer:
      "ERP software is widely used across logistics, transportation, manufacturing, retail, healthcare, education, warehousing, construction, and professional services industries.",
  },
  {
    question: "Why choose Creonox as your ERP development company?",
    answer:
      "Creonox builds modern ERP solutions focused on automation, scalability, integrations, and user experience. Our systems are designed around real business workflows and long-term growth.",
  },
];

export default function ERPFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/20 to-white" />

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-600">
            ERP FAQ
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.05em] text-slate-950">
            Frequently asked
            <br />
            questions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to know about ERP development,
            implementation, integrations and enterprise software.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "ERP Development",
              "Custom ERP",
              "ERP Software",
              "Logistics ERP",
              "Manufacturing ERP",
              "CRM + ERP",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-violet-100
                  bg-violet-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-violet-700
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Cards */}

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqItems.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    rounded-[32px]
                    
                    bg-white
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "shadow-[0_20px_60px_rgba(124,58,237,0.08)]"
                        : "hover:border-violet-200"
                    }
                  `}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? null : index
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-8
                      py-8
                      text-left
                    "
                  >
                    <h3
                      className="
                        pr-8
                        text-lg
                        md:text-lg
                        font-semibold
                        tracking-tight
                        text-slate-950
                      "
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-violet-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }
                      `}
                    >
                      {isOpen ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-out
                      ${
                        isOpen
                          ? "max-h-[400px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        border-t
                        border-slate-100
                        px-8
                        py-8
                      "
                    >
                      <p
                        className="
                          max-w-3xl
                          text-base
                          leading-8
                          text-slate-600
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

