"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const problemCards = [
  {
    label: "Embedded Pathogens",
    description: "Bacteria survive deep in surfaces long after routine cleaning.",
    image: "/images/germs_microscope.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2M12 19v2M3 12h2M19 12h2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414" />
      </svg>
    ),
  },
  {
    label: "Limescale Buildup",
    description: "Mineral deposits corrode fixtures and breed harmful microorganisms.",
    image: "/images/Limescale_Buildup.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8 8 5 12 5 16a7 7 0 0014 0c0-4-3-8-7-14z" />
      </svg>
    ),
  },
  {
    label: "Grease",
    description: "Grease penetrates floors and grout, attracting bacteria and creating persistent hazards.",
    image: "/images/Grease.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
      </svg>
    ),
  },
];

function ThreatCard({ card }: { card: typeof problemCards[0] }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group" style={{ height: "280px" }}>
      {/* Background image — zooms on hover */}
      <div className="absolute inset-0 transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.08]">
        <Image src={card.image} alt={card.label} fill className="object-cover" />
      </div>

      {/* Base gradient — lightens slightly on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-[600ms] ease-in-out group-hover:opacity-80"
        style={{
          background: "linear-gradient(to bottom, rgba(16,27,46,0.15) 0%, rgba(16,27,46,0.80) 100%)",
        }}
      />

      {/* Icon top-center + label + description bottom */}
      <div className="absolute inset-0 flex flex-col items-center justify-between px-5 py-6">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-full border-2 flex items-center justify-center mt-2"
          style={{ borderColor: "#B6FF3D", color: "#B6FF3D" }}
        >
          {card.icon}
        </div>

        {/* Label + description pinned to bottom */}
        <div className="text-center">
          <p className="text-white font-bold text-lg tracking-wide drop-shadow-md mb-1">
            {card.label}
          </p>
          <p className="text-white text-sm leading-snug drop-shadow-md opacity-90">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TheProblem() {
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
        style={{ backgroundColor: "#B6FF3D", opacity: 0.06 }}
        aria-hidden="true"
      />
      <div
        ref={blob2Ref}
        className="absolute -left-32 bottom-20 w-80 h-80 rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#1A202C", opacity: 0.05 }}
        aria-hidden="true"
      />

      <div ref={contentRef} className="will-change-transform max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#1A202C" }}
          >
            The Reality
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] mb-5">
            When Basic Cleaning Isn&apos;t Enough
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Regular cleaning maintains the surface — but grime settles into
            grout lines, mineral deposits build up on fixtures, and bacteria
            collect in the hard-to-reach corners routine cleaning was never
            designed to reach. Over time, that buildup becomes visible. And it
            starts to smell.
          </p>
        </div>

        {/* Fade cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {problemCards.map((card) => (
            <ThreatCard key={card.label} card={card} />
          ))}
        </div>

        {/* Callout */}
        <div
          className="rounded-2xl px-8 py-7 text-center"
          style={{ backgroundColor: "#B6FF3D" }}
        >
          <p className="font-bold text-xl tracking-wide text-[#1A202C]">
            Regular cleaning maintains. Germ Eviction delivers the deep reset.
          </p>
        </div>
      </div>
    </section>
  );
}
