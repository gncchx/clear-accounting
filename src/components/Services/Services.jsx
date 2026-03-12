import {
  BookOpen,
  Calculator,
  FileText,
  BadgeDollarSign,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Bookkeeping",
    description:
      "Stay on top of your day-to-day finances with accurate, timely bookkeeping. We manage your accounts payable, accounts receivable, bank reconciliations, and financial record-keeping so your books are always in order.",
    icon: BookOpen,
  },
  {
    title: "Accounting Services",
    description:
      "From financial statements to year-end accounts, we provide a full picture of your business health.",
    icon: Calculator,
  },
  {
    title: "Tax Lodgement",
    description:
      "Never worry about missing a tax deadline again. We prepare and lodge your individual and business tax returns accurately and on time, ensuring you claim every deduction you are entitled to.",
    icon: FileText,
  },
  {
    title: "BAS Preparation",
    description:
      "Let us take the stress out of your Business Activity Statements. We prepare and lodge your BAS quarterly or monthly, ensuring compliance and accuracy every time.",
    icon: BadgeDollarSign,
  },
  {
    title: "Payroll",
    description:
      "Single touch payroll, superannuation and employee records managed with care and precision.",
    icon: Users,
  },
  {
    title: "Tax Planning & Advice",
    description:
      "Proactive tax planning strategies to help you structure your affairs efficiently. We look ahead to minimise your tax liability while keeping everything above board.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section className="bg-[#f5f2ef] px-6 pt-20">
      <div className="max-w-7xl mx-auto mt-18">
        <h2 className="text-5xl font-bold text-[#1f1a17]">
          Services built around your business
        </h2>
        <p className="mt-5 text-[#6f6a66] max-w-xl">
          Whether youre a sole trader or a growing team, we offer tailored
          bookkeeping and accounting solutions.
        </p>

        {/* Services */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#d8d1cb] rounded-xl overflow-hidden">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative border border-[#e1dbd6] p-8 bg-[#f8f5f2] hover:bg-[#f1e9e4] transition-colors duration-300"
            >
              {/* top border */}
              <span className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#4b0f0f] via-[#7a1717] to-[#f0b04a] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#f3ece8] border border-[#dccfc9]">
                <Icon className="w-5 h-5 text-[#7a1717]" />
              </div>

              <h3 className="mt-6 text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm text-[#6f6a66] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
