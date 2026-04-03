"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const problemCards = [
  {
    label: "Embedded Pathogens",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2M12 19v2M3 12h2M19 12h2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414" />
      </svg>
    ),
  },
  {
    label: "Limescale Buildup",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8 8 5 12 5 16a7 7 0 0014 0c0-4-3-8-7-14z" />
      </svg>
    ),
  },
  {
    label: "Industrial Grease",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
      </svg>
    ),
  },
];

export default function TheProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translateY(${centerOffset * 0.07}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translateY(${centerOffset * -0.05}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} id="problem" className="bg-gray-50 relative overflow-hidden">
      {/* Parallax decorative blobs */}
      <div
        ref={blob1Ref}
        className="absolute -right-40 top-10 w-[480px] h-[480px] rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#2ABFBF", opacity: 0.04 }}
        aria-hidden="true"
      />
      <div
        ref={blob2Ref}
        className="absolute -left-32 bottom-20 w-80 h-80 rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#E53E3E", opacity: 0.04 }}
        aria-hidden="true"
      />

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#E53E3E" }}
          >
            The Reality
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] mb-5">
            Your staff maintains. We Deep Reset.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Nightly janitorial cleaning is designed for the surface — germs live
            in the depths. Over time, standard maintenance can&apos;t stop the
            buildup of industrial grease, limescale, and embedded pathogens.
          </p>
        </div>

        {/* Icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {problemCards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center gap-4 bg-white rounded-2xl p-9 shadow-sm"
            >
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "#E53E3E", color: "#E53E3E" }}
              >
                {card.icon}
              </div>
              <p className="font-semibold text-[#1A202C] text-center text-base">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Teal callout */}
        <div
          className="rounded-2xl px-8 py-7 text-center text-white"
          style={{ backgroundColor: "#2ABFBF" }}
        >
          <p className="font-bold text-xl tracking-wide">
            Surgical-level deep clean that removes what shouldn&apos;t be there.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A202C] mb-3">
            When basic cleaning{" "}
            <span style={{ color: "#E53E3E" }}>isn&apos;t enough</span>
          </h3>
          <p className="text-gray-500 text-base">
            Real facilities. Real buildup. Real consequences.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div
              key={n}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={`/images/${n}.jpeg`}
                alt={`Facility condition ${n}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Warning card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-xl mx-auto text-center shadow-sm">
          <p className="text-gray-700 font-medium text-base mb-3">
            Don&apos;t let one bad review define your facility&apos;s reputation.
          </p>
          <div className="flex justify-center gap-1 mb-4">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-gray-300 text-xl">★</span>
            <span className="text-gray-300 text-xl">★</span>
            <span className="text-gray-300 text-xl">★</span>
            <span className="text-gray-300 text-xl">★</span>
          </div>
          <p className="font-extrabold text-lg" style={{ color: "#E53E3E" }}>
            We fix what your staff can&apos;t.
          </p>
        </div>
      </div>
    </section>
  );
}
