import React from "react";
import Image from "next/image";

function AboutAbbey() {
  return (
    <>
      <section className="bg-white px-6 pt-12 md:pt-20 pb-10 md:pb-15">
        <div className="mx-auto mt-20 max-w-5xl text-center">
          <h1 className="mt-6 font-serif text-5xl leading-none text-[#1f1a17] md:text-7xl">
            Built on trust,
            <br />
            driven by care
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5b4a42]">
            Clear Accounting was founded with a simple mission: to provide
            honest, reliable accounting services that small business owners can
            truly count on.
          </p>
        </div>
      </section>

      {/* About Abbey*/}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5 md:py-14">
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

            {/* Information */}
            <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#2d1f16] sm:text-4xl md:text-[46px] md:leading-[1.05]">
                Hi, I am Abbey
              </h2>

              <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#4b3a2f]/80">
                <p>
                  I am a registered tax agent and the founder of Clear
                  Accounting, based right here in Perth. After years of working
                  in the accounting industry, I decided to start my own practice
                  because I wanted to do things differently.
                </p>

                <p>
                  I saw too many small business owners struggling with their
                  finances, feeling overwhelmed by the jargon, and not getting
                  the personal attention they deserved. That is why I started
                  Clear Accounting — to offer a service that is warm, honest,
                  and genuinely helpful.
                </p>

                <p>
                  When I am not crunching numbers, you will find me exploring
                  Brisbane or grabbing a coffee at my local. I believe that good
                  accounting should feel like having a trusted friend who
                  happens to be really good with numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutAbbey;
