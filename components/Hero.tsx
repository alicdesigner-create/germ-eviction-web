"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1A202C" }}
    >
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 py-28">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/Germevictionlogo.png"
            alt="Germ Eviction"
            width={1536}
            height={786}
            className="w-80 sm:w-[26rem] lg:w-[32rem] h-auto"
            priority
          />
        </div>

        {/* Label */}
        <p
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-5"
          style={{ color: "#B6FF3D" }}
        >
          Commercial Restroom Deep Cleaning
        </p>

        {/* H1 */}
        <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold leading-tight mb-5">
          One Visit.
          <br />
          <span style={{ color: "#B6FF3D" }} className="lg:whitespace-nowrap">Total Restroom Disinfection!</span>
        </h1>

        {/* Subline */}
        <p className="text-xl sm:text-2xl font-medium text-gray-200 mb-12">
          When basic cleaning isn&apos;t enough, we go deeper.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="text-[#1A202C] px-9 py-4 rounded-full text-base font-bold uppercase tracking-wide transition-all hover:brightness-90"
            style={{ backgroundColor: "#B6FF3D" }}
          >
            Schedule Your Deep Reset
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
