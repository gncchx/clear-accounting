"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const images = ["/brisbane1.png", "/brisbane2.jpg", "/brisbane3.png"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[78vh] min-h-140 w-full overflow-hidden sm:h-[82vh] md:h-[88vh] lg:h-screen flex items-center justify-center text-center">
      {/* images */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Brisbane"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center scale-100 md:scale-105 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* overlays */}
      <div className="absolute inset-0 bg-[#2a0d0d]/30" />
      <div className="absolute inset-0 bg-linear-to-r from-[#4b1717]/90 via-[#4b1717]/70 via-50% to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[90%] sm:max-w-2xl lg:max-w-3xl px-6 py-20 md:py-24">
        <p className="text-[11px] sm:text-[12px] md:text-[15px] font-semibold tracking-[0.25em] uppercase text-[#f2c27b]/90">
          BOOKING & ACCOUNTING
        </p>

        <h1 className="mt-4 font-serif font-bold text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Honest accounting you can trust
        </h1>

        <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
          Clear Accounting provides professional bookkeeping, accounting, and
          tax services for small businesses in Perth. We care about your numbers
          so you can focus on what you do best.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#d6a248] px-5 py-3 text-xs sm:text-sm font-medium text-[#3b1414] shadow-lg shadow-black/20 transition hover:brightness-110"
          >
            Free 15-Min Consultation
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-xs sm:text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
