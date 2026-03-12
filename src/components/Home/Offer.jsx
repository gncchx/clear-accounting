import Link from "next/link";
import { BookOpen, FileText, ClipboardList, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Bookkeeping",
    description:
      "Accurate and timely bookkeeping to keep your financial records organised and up to date.",
    Icon: ClipboardList,
  },
  {
    title: "Tax Lodgement",
    description:
      "Ensure your tax returns are lodged correctly and on time. No stress, no hassle.",
    Icon: FileText,
  },
  {
    title: "BAS Preparation",
    description:
      "Let us handle your Business Activity Statements so you can focus on running your business.",
    Icon: BookOpen,
  },
  {
    title: "Tax Planning",
    description:
      "Proactive tax strategies to help you minimise your tax liability and maximise your returns.",
    Icon: ShieldCheck,
  },
];

export default function Offer() {
  return (
    <section className="bg-[#efe9df]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-[19px] font-semibold tracking-[0.25em] text-emerald-700">
            WHAT WE OFFER
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-[#1f1a17] leading-tight">
            Accounting services <br className="hidden sm:block" />
            tailored to your needs
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-[#6b625c]">
            From day-to-day bookkeeping to complex tax planning, Clear
            Accounting provides a full range of services to keep your business
            finances in order.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-3 md:gap-6 lg:gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group grid grid-cols-[48px_1fr] gap-x-3 gap-y-2 rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-[#f1e9e4]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 transition-all duration-300 group-hover:bg-[#6b1e1e]">
                <Icon className="h-5 w-5 text-emerald-700 transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="self-center text-base font-semibold text-[#1f1a17] transition-colors duration-300 group-hover:text-[#6b1e1e]">
                {title}
              </h3>

              <p className="col-span-2 text-sm leading-relaxed text-[#6b625c]">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5a2b2b] hover:opacity-80"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
