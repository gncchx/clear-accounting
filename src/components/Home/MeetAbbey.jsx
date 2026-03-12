import Image from "next/image";
import Link from "next/link";

export default function MeetAbbey() {
  return (
    <section className="bg-[#f6f1ea]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-18">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div
              className="
                relative overflow-hidden rounded-2xl
                w-75 h-105
                sm:w-90 sm:h-125
                md:w-105 md:h-140
                shadow-[0_18px_40px_rgba(0,0,0,0.16)]
              "
            >
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
              <Image
                src="/abbey.png"
                alt="Abbey"
                fill
                priority
                className="object-cover"
                sizes="(max-width:640px) 300px, (max-width:768px) 360px, 420px"
              />
            </div>
          </div>

          {/* Information*/}
          <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
            <p className="text-[19px] tracking-[0.22em] font-bold text-emerald-700/80">
              MEET ABBEY
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#2d1f16] sm:text-4xl md:text-[46px] md:leading-[1.05]">
              Your local accountant
              <br className="hidden md:block" />
              who genuinely cares
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#4b3a2f]/80">
              <p>
                I started Clear Accounting because I believe every small
                business owner deserves honest, transparent, and caring
                financial support. My approach is simple: treat every client
                like family, and make sure they always understand their numbers.
              </p>

              <p>
                Whether you need help with your BAS, tax lodgement, or just want
                someone to keep your books in order, I am here to help you feel
                confident about your finances.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#7a2a1c] hover:opacity-80"
            >
              Learn more about Abbey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
