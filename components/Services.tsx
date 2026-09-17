"use client";

import { useEffect, useRef } from "react";

const items = [
  {
    title: "Tile & Grout",
    subtitle: "Floors & Walls",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "Sinks",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11h18M12 11V6m0 0h2m-2 0H9m10 5v3a5 5 0 01-5 5h-4a5 5 0 01-5-5v-3" />
        <circle cx="12" cy="18" r="0.5" fill="currentColor" strokeWidth={1} />
      </svg>
    ),
  },
  {
    title: "Toilets",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4h8v4H7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 8h12c.6 4-1 7-2.5 8.5S12 19 12 19s-2 .5-3.5-2.5S5.4 12 6 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v1a1 1 0 001 1h4a1 1 0 001-1v-1" />
      </svg>
    ),
  },
  {
    title: "Showers",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4a3 3 0 016 0v3H9V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 7h14M8 12v.01M12 12v.01M16 12v.01M8 16v.01M12 16v.01M16 16v.01M8 20v.01M12 20v.01M16 20v.01" />
      </svg>
    ),
  },
  {
    title: "Mirrors",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18" />
      </svg>
    ),
  },
  {
    title: "Fixtures",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a3 3 0 10-4.4 4.4L4 17v3h3l6.3-6.3a3 3 0 004.4-4.4l-2.1 2.1-2-2 2.1-2.1z" />
      </svg>
    ),
  },
  {
    title: "Dispensers",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="7" y="8" width="10" height="13" rx="1.5" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 8V5a2 2 0 012-2 2 2 0 012 2M15 12h3v3h-3" />
      </svg>
    ),
  },
  {
    title: "Urinals",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6v3a2 2 0 002 2v3c0 5-2.5 6-3 8.5a2 2 0 01-2 1.5 2 2 0 01-2-1.5C9.5 17 7 16 7 11V8a2 2 0 002-2V3z" />
      </svg>
    ),
  },
  {
    title: "Vents",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="14" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9h12M6 12.5h12M6 16h12" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-white">
      {/* Parallax decorative orbs */}
      <div
        ref={blob1Ref}
        className="absolute -left-24 top-1/4 w-72 h-72 rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#B6FF3D", opacity: 0.08 }}
        aria-hidden="true"
      />
      <div
        ref={blob2Ref}
        className="absolute -right-20 bottom-1/4 w-96 h-96 rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#1A202C", opacity: 0.04 }}
        aria-hidden="true"
      />

      <div ref={contentRef} className="relative will-change-transform max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#1A202C" }}
          >
            What We Cover
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] mb-5">
            We Deep Clean It All!
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed font-medium">
            One visit. Every surface. Every fixture.
          </p>
        </div>

        {/* 3x3 icon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center text-center gap-3 rounded-2xl p-6 sm:p-8 border-2 border-transparent hover:border-[#B6FF3D] bg-white shadow-sm transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#1A202C", color: "#B6FF3D" }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1A202C]">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
