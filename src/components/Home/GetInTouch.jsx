import React from "react";

export default function GetInTouch() {
  const questions = [
    "Are your tax lodgements up to date?",
    "Are you looking for a tax agent?",
    "Do you need help with your bookkeeping?",
    "Want a free 15-minute consultation?",
  ];

  return (
    <section className="hidden md:block bg-[#f3efea] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-4xl bg-[#631212] px-10 py-7 text-center text-white shadow-[0_20px_60px_rgba(75,23,23,0.18)]">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-[#7a1616] via-[#631212] to-[#4d0d0d]" />
          <div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-[#d6a248]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <p className="text-md font-semibold uppercase tracking-[0.35em] text-[#d6a248]">
              Get in Touch
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight lg:text-4xl">
              Ready to get your finances sorted?
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-white/70 lg:text-base">
              Whether you need help with tax, bookkeeping, or general accounting
              support, we&apos;re here to make things simpler and less
              stressful.
            </p>

            {/* question cards */}
            <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 gap-3">
              {questions.map((item) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a248]/35 hover:bg-white/12 hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d6a248] shadow-[0_0_14px_rgba(214,162,72,0.55)] transition-transform duration-300 group-hover:scale-125" />
                    <p className="text-[15px] font-medium leading-relaxed text-white/90">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* buttons */}
            <div className="mt-5 flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#d6a248] px-7 py-3.5 text-sm font-semibold text-[#4b1717] shadow-[0_10px_30px_rgba(214,162,72,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Book a Free Consultation
              </a>

              <a
                href="/tax-tips"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/30"
              >
                Browse Tax Tips
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
