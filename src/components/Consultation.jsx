import { Phone } from "lucide-react";

export default function Consultation() {
  return (
    <section className="bg-[#f5f2ef] px-6 py-10 md:py-18">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl px-10 py-12 text-white">
          {/* BG gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-[#5c0f0f] via-[#851c1c] to-[#8c1d1d]" />

          {/* glow */}
          <div className="absolute -top-20 -right-20 w-75 h-75 bg-[#d6a248]/20 blur-[120px]" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d6a248]">
                Not sure where to start?
              </p>

              <h2 className="mt-3 text-3xl md:text-2xl font-semibold">
                Book a free 15-minute consultation
              </h2>

              <p className="mt-4 text-white/80 text-sm leading-relaxed">
                Tell us a bit about your business and we will tailor our
                services to what you actually need. No obligation, just a
                friendly chat.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <button className="flex items-center gap-2 bg-[#d6a248] text-[#4b1717] px-7 py-3 rounded-lg font-medium hover:brightness-110 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
