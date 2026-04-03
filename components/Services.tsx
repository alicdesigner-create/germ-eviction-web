"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Restroom Reset",
    description:
      "Total elimination of odors and bacteria at the source. We go beyond surface cleaning to restore hygiene at a cellular level.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zM3 7l9-4 9 4" />
      </svg>
    ),
  },
  {
    title: "Commercial Kitchens",
    description:
      "Deep degreasing of floors, equipment, and exhaust systems. Hospital-grade sanitation for food-safe environments.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3m4 0h2" />
      </svg>
    ),
  },
  {
    title: "Gas Stations & Retail",
    description:
      "High-traffic area sterilization. We disinfect every touchpoint your customers contact daily.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Tile & Grout",
    description:
      "Professional-grade restoration and scale removal. We bring surfaces back to their original condition.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${centerOffset * -0.025}px)`;
      }
      if (bgImgRef.current) {
        bgImgRef.current.style.transform = `translateY(${centerOffset * 0.12}px) scale(1.1)`;
      }
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translateY(${centerOffset * 0.09}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translateY(${centerOffset * -0.06}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden">
      {/* Parallax background image */}
      <div
        ref={bgImgRef}
        className="absolute inset-0 scale-110 will-change-transform origin-center"
        aria-hidden="true"
      >
        <Image
          src="/images/modern-stainless-steel-kitchen.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 32, 44, 0.88)" }}
      />

      {/* Parallax decorative orbs */}
      <div
        ref={blob1Ref}
        className="absolute -left-24 top-1/4 w-72 h-72 rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#2ABFBF", opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        ref={blob2Ref}
        className="absolute -right-20 bottom-1/4 w-96 h-96 rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#2ABFBF", opacity: 0.04 }}
        aria-hidden="true"
      />

      <div ref={contentRef} className="relative will-change-transform max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#2ABFBF" }}
          >
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Deep Cleaning &amp; Specialty Resets
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            One visit is all it takes. We deliver a surgical-level reset your
            regular crew simply can&apos;t match.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-2xl p-8 border border-transparent hover:border-[#2ABFBF] transition-all duration-300"
              style={{ backgroundColor: "#2D3748" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(42,191,191,0.15)", color: "#2ABFBF" }}
              >
                {svc.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">{svc.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[#E53E3E] hover:bg-red-700 text-white px-10 py-4 rounded-full text-base font-semibold transition-colors mb-3"
          >
            Get a Free Assessment
          </a>
          <p className="text-gray-500 text-sm mt-3">No obligation. No contracts.</p>
        </div>
      </div>
    </section>
  );
}
