"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tax Tips", href: "/tax-tips" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-3xl border-b border-white/20 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 relative">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={34} height={34} />
          <span className="text-lg md:text-xl font-bold text-[#5a2b2b] tracking-[0.01em]">
            Clear Accounting
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[14px] font-medium transition ${
                      active
                        ? "text-[#6b1e1e]"
                        : "text-[#6b1e1e]/70 hover:text-[#6b1e1e]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="bg-[#6b1e1e] text-white px-5 py-3 rounded-lg text-xs font-semibold hover:bg-[#551515] transition"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg border border-[#e6d9cf] text-[#5a2b2b] transition hover:bg-white/40"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "rotate-90 scale-110" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-[#e6d9cf] bg-[#f6f1ea]/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          open
            ? "max-h-125 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;

              return (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: open ? `${index * 70}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg font-semibold transition ${
                      active
                        ? "text-[#6b1e1e]"
                        : "text-[#6b1e1e]/80 hover:text-[#6b1e1e]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: open ? "280ms" : "0ms" }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-7 bg-[#6b1e1e] text-white text-center px-5 py-4 rounded-lg text-base font-semibold hover:bg-[#551515] transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
