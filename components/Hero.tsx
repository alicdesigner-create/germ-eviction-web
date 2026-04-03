"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 will-change-transform origin-center"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-blacklight.jpg"
          alt="Commercial facility background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 32, 44, 0.72)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 py-28">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/Germevictionlogo.png"
            alt="Germ Eviction"
            width={220}
            height={66}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            priority
          />
        </div>

        {/* Label */}
        <p
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-5"
          style={{ color: "#2ABFBF" }}
        >
          Deep Cleaning &amp; Specialty Resets
        </p>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
          One Visit.
          <br />
          <span style={{ color: "#E53E3E" }}>Total Disinfect.</span>
        </h1>

        {/* Subline */}
        <p className="text-xl sm:text-2xl font-medium text-gray-200 mb-5">
          Stop letting germs renew their lease.
        </p>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Your nightly crew handles the surface — we go deeper. Surgical-level
          disinfection that removes what shouldn&apos;t be there.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#E53E3E] hover:bg-red-700 text-white px-9 py-4 rounded-full text-base font-semibold transition-colors"
          >
            Schedule Your Deep Reset
          </a>
          <a
            href="#services"
            className="border-2 px-9 py-4 rounded-full text-base font-semibold transition-colors hover:bg-white hover:text-[#1A202C]"
            style={{ borderColor: "#2ABFBF", color: "#2ABFBF" }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
