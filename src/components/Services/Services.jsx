"use client";

import { useEffect } from "react";
import {
  BookOpen,
  Calculator,
  FileText,
  BadgeDollarSign,
  Users,
  Lightbulb,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Bookkeeping",
    slug: "bookkeeping",
    description:
      "Accurate bookkeeping is the foundation of every well-run business. We keep your financial records organised, current, and easy to understand so you can make informed decisions with confidence.",
    icon: BookOpen,
    points: [
      "Recording daily transactions",
      "Accounts payable and receivable",
      "Bank and card reconciliations",
      "Organised financial record-keeping",
    ],
    note: "Ideal for sole traders, small businesses, and growing teams.",
  },
  {
    title: "Accounting Services",
    slug: "accounting-services",
    description:
      "Our accounting services give you a clearer view of your business performance. From reporting to year-end preparation, we help you stay informed, compliant, and ready for the next stage of growth.",
    icon: Calculator,
    points: [
      "Financial statements and reports",
      "Year-end accounts preparation",
      "Cash flow and performance insights",
      "Support for business decision-making",
    ],
    note: "Designed to give you clarity, not just numbers.",
  },
  {
    title: "Tax Lodgement",
    slug: "tax-lodgement",
    description:
      "We prepare and lodge tax returns accurately and on time, helping reduce stress around deadlines while making sure you meet your obligations properly and claim what you are entitled to.",
    icon: FileText,
    points: [
      "Individual tax returns",
      "Business tax return preparation",
      "ATO-compliant lodgement",
      "Support with allowable deductions",
    ],
    note: "Reliable tax support with attention to detail.",
  },
  {
    title: "BAS Preparation",
    slug: "bas-preparation",
    description:
      "Business Activity Statements can be time-sensitive and overwhelming. We prepare and lodge your BAS with care, helping you stay compliant and confident in your reporting obligations.",
    icon: BadgeDollarSign,
    points: [
      "Monthly or quarterly BAS preparation",
      "GST calculation and reporting",
      "Accurate review of business figures",
      "Timely lodgement support",
    ],
    note: "Helps reduce admin pressure and compliance risk.",
  },
  {
    title: "Payroll",
    slug: "payroll",
    description:
      "We help streamline payroll so your employees are paid correctly and your records stay up to date. From wages to superannuation, we handle payroll with precision and care.",
    icon: Users,
    points: [
      "Single Touch Payroll support",
      "Wages and salary processing",
      "Superannuation management",
      "Employee record maintenance",
    ],
    note: "Consistent payroll support that keeps things running smoothly.",
  },
  {
    title: "Tax Planning & Advice",
    slug: "tax-planning",
    description:
      "Good tax planning is about being proactive, not reactive. We provide tailored advice to help you prepare ahead, improve efficiency, and avoid unwanted surprises throughout the year.",
    icon: Lightbulb,
    points: [
      "Practical year-round tax planning",
      "Advice tailored to your business structure",
      "Forward-looking financial guidance",
      "Strategies to improve tax efficiency",
    ],
    note: "Best for businesses wanting smarter long-term planning.",
  },
];

export default function Services() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const card = document.getElementById(hash);
    if (!card) return;

    const scrollTimer = setTimeout(() => {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      card.classList.add("service-highlight");
    }, 200);

    const highlightTimer = setTimeout(() => {
      card.classList.remove("service-highlight");
    }, 2500);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(highlightTimer);
      card.classList.remove("service-highlight");
    };
  }, []);

  return (
    <section className="bg-[#f5f2ef] px-6 pt-20">
      <div className="mx-auto mt-17 max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1f1a17] md:text-5xl">
            Services built around <br /> your business
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#6f6a66]">
            Whether you&apos;re a sole trader, a growing business, or simply
            looking for reliable support, we offer practical accounting and
            bookkeeping services designed to keep your finances organised,
            compliant, and easier to manage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(
            ({ title, slug, description, icon: Icon, points, note }) => (
              <div
                id={slug}
                key={slug}
                className="service-card group relative overflow-hidden rounded-[22px] border border-[#ddd4cd] bg-[#faf7f4] p-8 shadow-[0_8px_30px_rgba(44,24,14,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d7c2b3] hover:bg-[#f8f1eb] hover:shadow-[0_20px_45px_rgba(44,24,14,0.09)]"
              >
                <span className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-linear-to-r from-[#4b0f0f] via-[#7a1717] to-[#f0b04a] transition-transform duration-300 group-hover:scale-x-100 service-highlight-bar" />

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d6a248]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 service-highlight-glow" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e4d8d1] bg-linear-to-br from-[#f8efea] to-[#f2e7e1] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#dcc6b6]">
                  <Icon className="h-5 w-5 text-[#7a1717] transition-colors duration-300 group-hover:text-[#b77921]" />
                </div>

                <h3 className="mt-6 text-[22px] font-semibold leading-snug text-[#1f1a17]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6f6a66]">
                  {description}
                </p>

                <div className="mt-6 space-y-3 border-t border-[#e8dfd9] pt-5">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="mt-0.75 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4e4d0]">
                        <Check className="h-3.5 w-3.5 text-[#7a1717]" />
                      </div>
                      <p className="text-sm leading-6 text-[#4f4945]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#eadfd6] bg-white/55 px-4 py-3">
                  <p className="text-[13px] leading-6 text-[#6a5b50]">{note}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
