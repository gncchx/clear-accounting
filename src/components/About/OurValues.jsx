import { Heart, User, BadgeCheck, Clock } from "lucide-react";

export default function OurValues() {
  const values = [
    {
      icon: Heart,
      title: "Genuine Care",
      description:
        "Every client is treated with the same level of care and attention. Your finances matter to us personally.",
    },
    {
      icon: BadgeCheck,
      title: "Honesty First",
      description:
        "We believe in transparent, upfront communication. No hidden fees, no surprises, just clear advice.",
    },
    {
      icon: User,
      title: "Personal Touch",
      description:
        "We are not a big corporate firm. You will always work directly with Abbey and know exactly who is looking after your books.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Deadlines matter. Your BAS, tax returns, and reports will always be lodged on time, every time.",
    },
  ];

  return (
    <section className="bg-[#f5f2ef] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-md font-semibold uppercase tracking-[0.25em] text-[#2f8f8b]">
            Our Values
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#2d1f16] sm:text-5xl">
            What sets Clear Accounting apart
          </h2>
        </div>

        {/* Values Grid */}
        <div className="mt-10 md:mt-16 grid gap-7 md:grid-cols-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-5">
              <div className="flex h-12 w-18 items-center justify-center rounded-xl bg-[#efe6da] text-[#b8903c]">
                <Icon size={22} strokeWidth={2} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#2d1f16]">
                  {title}
                </h3>

                <p className="mt-2 text-[15px] leading-7 text-[#5b4a42]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
