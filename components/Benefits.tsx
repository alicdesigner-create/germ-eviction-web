"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    title: "Kills 99.9% of Germs & Bacteria",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Eliminates Odors at the Source",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h9a3 3 0 100-6M3 16h13a3 3 0 110 6M3 12h16a3 3 0 100-6" />
      </svg>
    ),
  },
  {
    title: "Disinfects High-Touch Surfaces",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12V5a1.5 1.5 0 013 0v6m0-4a1.5 1.5 0 013 0v4m0-2a1.5 1.5 0 013 0v5m0 0v1a6 6 0 01-6 6h-1a6 6 0 01-5-2.7L4 15.5c-.5-.8-.2-1.7.5-2.1.6-.4 1.4-.2 1.9.4L8 15" />
      </svg>
    ),
  },
  {
    title: "Helps Protect Your Reputation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.3l-5.4 3.1 1.4-6.1-4.7-4.1 6.2-.5L12 4l2.5 5.7 6.2.5-4.7 4.1 1.4 6.1z" />
      </svg>
    ),
  },
];

export default function Benefits() {
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
    <section ref={sectionRef} id="benefits" className="bg-white relative overflow-hidden">
      <div ref={contentRef} className="will-change-transform max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#1A202C" }}
          >
            Why It Matters
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C]">
            The Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center gap-4 rounded-2xl p-8 bg-gray-50"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#1A202C", color: "#B6FF3D" }}
              >
                {b.icon}
              </div>
              <h3 className="text-[#1A202C] font-bold text-lg leading-snug">{b.title}</h3>
            </div>
          ))}
        </div>

        {/* Reputation callout */}
        <div
          className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-10 max-w-[480px] mx-auto text-center shadow-sm"
          style={{ transform: "rotate(-1deg)" }}
        >
          <p className="font-bold text-xl text-center mb-3" style={{ color: "#1A202C" }}>
            Don&apos;t let one poor review ruin your business reputation. 👎
          </p>
          <p className="font-bold text-3xl text-center mb-3">
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </p>
          <div className="flex justify-center gap-1 mb-4">
            <span className="text-4xl" style={{ color: "#FBBC05" }}>★</span>
            <span className="text-4xl text-gray-300">★</span>
            <span className="text-4xl text-gray-300">★</span>
            <span className="text-4xl text-gray-300">★</span>
            <span className="text-4xl text-gray-300">★</span>
          </div>
          <p className="font-extrabold text-xl text-center" style={{ color: "#1A202C" }}>
            We fix what your staff can&apos;t.
          </p>
        </div>
      </div>
    </section>
  );
}
