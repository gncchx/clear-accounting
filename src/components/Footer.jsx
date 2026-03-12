"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Abbey", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tax Tips", href: "/tax-tips" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Bookkeeping",
  "Accounting",
  "Tax Lodgement",
  "BAS Preparation",
  "Tax Planning",
];

const contactInfo = [
  { label: "Perth, WA" },
  {
    label: "abbey@clearaccounting.com.au",
    href: "mailto:abbey@clearaccounting.com.au",
  },
  {
    label: "0400 000 000",
    href: "tel:0400000000",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-[#6f1414] text-[#f4e7df]/70">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-8">
        <div className="grid gap-4 md:gap-9 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <h2 className="font-anton text-3xl font-bold leading-tight text-[#f4e7df]/80">
              Clear Accounting
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#f4e7df]/90">
              Professional bookkeeping and accounting services in Perth. Helping
              small businesses thrive.
            </p>
          </div>

          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition hover:text-[#d8a35d]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in Touch">
            {contactInfo.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="transition hover:text-[#d8a35d]"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="my-5 hidden h-px w-full bg-white/15 md:block" />

        <div className="mt-5 flex flex-col gap-3 text-xs text-[#f4e7df]/75 md:mt-0 md:flex-row md:items-center md:justify-between">
          <p>Registered Tax Agent • Membership No. 12345678</p>

          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-[#d8a35d]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p>© 2026 Clear Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pt-2 pb-4 md:border-b-0 md:pb-0">
      {/* dropdown button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left md:hidden"
      >
        <span className="font-anton text-sm font-bold uppercase tracking-[0.14em] text-[#f4e7df]/80">
          {title}
        </span>

        <ChevronDown
          className={`h-4 w-4 text-[#f4e7df]/70 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <h3 className="hidden font-anton text-sm font-bold uppercase tracking-[0.14em] text-[#f4e7df]/80 md:block">
        {title}
      </h3>

      {/* dropdown content */}
      <ul
        className={`overflow-hidden text-sm transition-all duration-300 md:hidden ${
          open ? "mt-4 max-h-96 space-y-3" : "max-h-0"
        }`}
      >
        {children}
      </ul>

      {/* desktop content */}
      <ul className="mt-5 hidden space-y-3 text-sm md:block">{children}</ul>
    </div>
  );
}
