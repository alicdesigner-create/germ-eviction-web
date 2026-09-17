"use client";

import { useEffect, useRef } from "react";

const industries = [
  {
    title: "Restaurants",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3v7m0 0v11m0-11H5m2 0h2M7 3a2 2 0 00-2 2v3a2 2 0 002 2m10-7v18m0-11c1.7 0 3-1.6 3-3.5S18.7 3 17 3s-3 1.6-3 3.5.7 3 1.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Gas Stations",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 21V6a2 2 0 012-2h6a2 2 0 012 2v15M4 21h10m-8-9h6M17 10l2.5 2.5a1.5 1.5 0 01.5 1.1V18a1.5 1.5 0 01-3 0v-2a1 1 0 00-1-1h-1" />
      </svg>
    ),
  },
  {
    title: "Retail Stores",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7h12l1 13H5L6 7zM9 7a3 3 0 116 0" />
      </svg>
    ),
  },
  {
    title: "Office Buildings",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="3" width="14" height="18" rx="1" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-4h4v4" />
      </svg>
    ),
  },
  {
    title: "Medical Offices",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];

export default function PerfectFor() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${centerOffset * -0.025}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="perfect-for" className="bg-gray-50 relative overflow-hidden">
      <div ref={contentRef} className="will-change-transform max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#1A202C" }}
          >
            Who We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C]">
            Perfect For
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="flex flex-col items-center text-center gap-3 rounded-2xl p-6 bg-white shadow-sm"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(182,255,61,0.18)", color: "#1A202C" }}
              >
                {ind.icon}
              </div>
              <h3 className="font-bold text-base text-[#1A202C]">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
