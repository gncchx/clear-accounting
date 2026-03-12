"use client";

import { useState } from "react";
import { Phone, Mail, Clock3, MapPin, CheckCircle2 } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "0400 000 000",
    href: "tel:0400000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "abbey@clearaccounting.com.au",
    href: "mailto:abbey@clearaccounting.com.au",
  },
  {
    icon: Clock3,
    label: "Office Hours",
    value: "Monday - Friday • 9:00 AM - 5:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Perth, Australia",
    href: "https://www.google.com/maps/search/Perth+Australia",
    external: true,
  },
];

const inputClass =
  "h-12 w-full rounded-xl border border-black/10 bg-[#f8f5f3] px-4 text-sm text-[#1b1111] outline-none transition placeholder:text-[#b8adad] focus:border-[#8c1d1d]/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(140,29,29,0.08)]";

const textareaClass =
  "w-full rounded-xl border border-black/10 bg-[#f8f5f3] px-4 py-3 text-sm text-[#1b1111] outline-none transition placeholder:text-[#b8adad] focus:border-[#8c1d1d]/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(140,29,29,0.08)]";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdawgkdo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    }
    setIsSubmitting(false);
  }

  return (
    <section className="relative overflow-hidden bg-[#f6f3f1] px-6 pb-8 pt-16 md:px-10 md:pt-24">
      <div className="relative mx-auto mt-16 grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="pt-2">
          <p className="text-[13px] font-semibold tracking-[0.28em] text-[#8c1d1d]">
            GET IN TOUCH
          </p>

          <h1 className="mt-4 max-w-md text-5xl font-black leading-[0.9] tracking-[-0.04em] text-[#140a0a] sm:text-6xl md:text-7xl">
            Let&apos;s make your finances clear.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#7a6f6f] md:text-[15px]">
            Whether you have a question, need a quote, or want to book your free
            15-minute consultation, we would love to hear from you.
          </p>

          <div className="group mt-10 max-w-md rounded-3xl border border-[#8c1d1d]/10 bg-white/70 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(140,29,29,0.08)]">
            <h3 className="text-lg font-semibold text-[#1c0f0f]">
              Contact Details
            </h3>

            <div className="mt-6 space-y-5">
              {contactItems.map(
                ({ icon: Icon, label, value, href, external }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8c1d1d]/10 text-[#8c1d1d]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-[#1c0f0f]">
                        {label}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="text-sm text-[#7a6f6f] transition hover:text-[#8c1d1d]"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#7a6f6f]">{value}</p>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#8c1d1d]/10 blur-[90px]" />

          <div className="relative rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl md:p-8 md:pb-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#140a0a]">
              Send an Enquiry
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="hidden"
                name="_subject"
                value="New Website Enquiry"
              />

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  ["First Name", "firstName", "text", "Harrison"],
                  ["Last Name", "lastName", "text", "Smith"],
                ].map(([label, name, type, placeholder]) => (
                  <div key={name}>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b7d7d]">
                      {label}
                    </label>
                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      className={inputClass}
                      required
                    />
                  </div>
                ))}
              </div>

              {[
                [
                  "Email Address",
                  "email",
                  "email",
                  "hello@yourbusiness.com.au",
                ],
                ["Phone Number", "phone", "tel", "04XX XXX XXX"],
              ].map(([label, name, type, placeholder]) => (
                <div key={name}>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b7d7d]">
                    {label}
                  </label>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={inputClass}
                    required={name === "email"}
                  />
                </div>
              ))}

              {/* service selection */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b7d7d]">
                  How can we help?
                </label>
                <select
                  name="service"
                  className={inputClass}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {[
                    "Bookkeeping",
                    "Accounting Services",
                    "Tax Lodgement",
                    "BAS Preparation",
                    "Tax Planning",
                    "Other",
                  ].map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b7d7d]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your situation..."
                  className={textareaClass}
                  required
                />
              </div>

              <p className="text-xs text-[#9b8f8f]">
                Your details are only used to contact you about your enquiry.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className=" inline-flex h-12 w-full items-center justify-center rounded-xl bg-linear-to-r from-[#7c1520] via-[#8c1d1d] to-[#a32424] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(140,29,29,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(140,29,29,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              <div className="min-h-8">
                {status === "success" && (
                  <div className="fade-in-up-soft text-center rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    <span>
                      Thanks — your enquiry has been sent successfully.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="fade-in-up-soft rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
