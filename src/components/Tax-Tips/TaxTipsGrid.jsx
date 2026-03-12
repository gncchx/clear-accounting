import React from "react";

const taxTips = [
  {
    number: "01",
    category: "Deadlines",
    title: "Key Tax Dates for Australian Small Businesses",
    description:
      "Stay on top of important ATO deadlines throughout the financial year.",
    points: [
      "BAS is due 28 days after the end of each quarter.",
      "Annual tax returns for individuals are due 31 October.",
      "PAYG payment summaries must be provided to employees by 14 July.",
      "Superannuation guarantee contributions are due 28 days after each quarter.",
    ],
  },
  {
    number: "02",
    category: "Deductions",
    title: "Common Tax Deductions You Might Be Missing",
    description:
      "Many small business owners miss out on legitimate deductions.",
    points: [
      "Home office expenses including electricity and internet.",
      "Motor vehicle expenses for business-related travel.",
      "Professional development costs such as courses and seminars.",
      "Depreciation on business assets like computers and equipment.",
    ],
  },
  {
    number: "03",
    category: "BAS",
    title: "Understanding Your BAS: A Simple Guide",
    description:
      "The BAS system can feel overwhelming, but it does not have to be.",
    points: [
      "BAS reports GST collected and GST paid.",
      "Employers must also report PAYG withholding.",
      "Keep accurate records throughout the quarter.",
      "Consider lodging monthly if your turnover is high.",
    ],
  },
  {
    number: "04",
    category: "Compliance",
    title: "Avoiding Common ATO Audit Triggers",
    description:
      "Nobody wants to be audited, but understanding triggers can help reduce risk.",
    points: [
      "Ensure your income matches ATO third-party data.",
      "Avoid unusually high deductions for your industry.",
      "Lodge all returns and BAS on time.",
      "Keep records and receipts for at least five years.",
    ],
  },
  {
    number: "05",
    category: "Record Keeping",
    title: "Record Keeping Tips for Small Business Owners",
    description: "Good record keeping is the foundation of a healthy business.",
    points: [
      "Use cloud accounting software like Xero or MYOB.",
      "Scan and store receipts digitally.",
      "Reconcile bank accounts monthly.",
      "Separate personal and business finances.",
    ],
  },
  {
    number: "06",
    category: "Instalments",
    title: "How PAYG Instalments Work",
    description:
      "If the ATO puts you on PAYG instalments, here is what it means.",
    points: [
      "PAYG instalments are based on your most recent tax return.",
      "They help avoid a large tax bill at year-end.",
      "You can vary instalments if income drops.",
      "Instalments are reported and paid through BAS.",
    ],
  },
];

export default function TaxTipsGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f5f2ef] px-6 pt-24 ">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl mt-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1e120f]">
            Tax Tips & Basics
          </h1>
          <p className="mt-6 text-[#6f6a66] max-w-xl">
            Use these as a starting point. Always consult a registered tax agent
            for advice specific to your situation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {taxTips.map((tip) => (
            <div
              key={tip.number}
              className="group relative overflow-hidden rounded-2xl border border-[#e6ded9] bg-[#faf8f7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a248] hover:shadow-lg"
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#7a1717]/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#d6a248]/10 blur-2xl" />
              </div>

              {/* hover line */}
              <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-linear-to-r from-[#7a1717] to-[#d6a248] opacity-0 group-hover:opacity-100 transition" />

              {/* numbers */}
              <span className="absolute top-5 left-6 text-[64px] font-black text-[#ece3e1] transition-colors duration-300 group-hover:text-[#e1c7bf]">
                {tip.number}
              </span>

              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#521712]">
                  {tip.category}
                </p>

                <h3 className="mt-9 text-lg font-semibold text-[#2c1f1b]">
                  {tip.title}
                </h3>

                <p className="mt-2 text-sm text-[#7f746f]">{tip.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-[#6f6661]">
                  {tip.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d6a248]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-[#e6ded9] pt-4">
          <p className="text-xs text-[#8b837f] l">
            Disclaimer: The tax tips provided on this page are intended as
            general guidance only. They may not apply to your specific
            circumstances. For personalised tax advice, please consult a
            registered tax agent or qualified professional.
          </p>
        </div>
      </div>
    </section>
  );
}
