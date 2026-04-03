"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Deep Clean",
    description:
      "We eliminate the grease, grime, and pathogens your daily crew misses — down to the surface level.",
  },
  {
    number: "2",
    title: "Staff Training",
    description:
      "We empower your team with professional commercial practices to maintain the standard between resets.",
  },
  {
    number: "3",
    title: "Scheduled Resets",
    description:
      "We return periodically to restore your facility to peak condition — on your schedule.",
  },
];

const reasons = [
  {
    emoji: "🏆",
    title: "30+ Years of Expertise",
    description:
      "Decades of specialized commercial sanitization and disinfection protocols.",
  },
  {
    emoji: "🛡️",
    title: "Hospital-Grade Safety",
    description:
      "Advanced systems exceeding healthcare facility requirements — guaranteed safe, clean, and inviting for your customers.",
  },
  {
    emoji: "💲",
    title: "Cost-Effective Resets",
    description:
      "A smarter investment for budgets that can&apos;t support nightly cleaning crews.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !blobRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      blobRef.current.style.transform = `translateY(${centerOffset * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="bg-white relative overflow-hidden">
      {/* Subtle parallax decoration */}
      <div
        ref={blobRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#2ABFBF", opacity: 0.03 }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Part 1 — 3-Step System */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#E53E3E" }}
          >
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C]">
            The 3-Step Reset System
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-24">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0"
                style={{ backgroundColor: "#2ABFBF" }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="text-[#1A202C] font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2 — Why Germ Eviction */}
        <div className="bg-gray-50 rounded-3xl px-10 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] mb-2">
              Why Germ Eviction?
            </h2>
            <p className="text-gray-500 text-base">
              Experience, precision, and a standard that lasts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl">{reason.emoji}</span>
                <h3 className="text-[#1A202C] font-bold text-lg">{reason.title}</h3>
                <p
                  className="text-gray-500 leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: reason.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
