"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Deep Clean",
    description: "We eliminate the grease, grime, and pathogens your daily crew misses — down to the surface level.",
    image: "/images/Deep_Clean.jpg",
  },
  {
    number: "2",
    title: "Staff Training",
    description: "We empower your team with professional commercial practices to maintain the standard between resets.",
    image: "/images/Staff_Training.jpg",
  },
  {
    number: "3",
    title: "Scheduled Resets",
    description: "We return periodically to restore your facility to peak condition — on your schedule.",
    image: "/images/Schedule_resets.jpg",
  },
];

const reasons = [
  {
    emoji: "🏆",
    title: "30+ Years of Expertise",
    description: "Decades of specialized commercial sanitization and disinfection protocols.",
  },
  {
    emoji: "🛡️",
    title: "Hospital-Grade Safety",
    description: "Advanced systems exceeding healthcare facility requirements — guaranteed safe, clean, and inviting for your customers.",
  },
  {
    emoji: "💲",
    title: "Cost-Effective Resets",
    description: "High-impact specialized resets designed to optimize maintenance costs with long-lasting value.",
  },
];

function StepFlipCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [autoFlipped, setAutoFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoFlipped) return;
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const stagger = index * 300;
          setTimeout(() => setFlipped(true), stagger);
          setTimeout(() => {
            setFlipped(false);
            setAutoFlipped(true);
          }, stagger + 2000);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoFlipped, index]);

  return (
    <div
      ref={cardRef}
      className="cursor-pointer"
      style={{ perspective: "1000px", height: "320px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center gap-4 px-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0"
            style={{ backgroundColor: "#2ABFBF" }}
          >
            {step.number}
          </div>
          <h3 className="text-[#1A202C] font-bold text-xl">{step.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed text-center">{step.description}</p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-3 px-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Image src={step.image} alt={step.title} fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(26, 64, 64, 0.65)" }}
          />
          <h3 className="relative z-10 text-white font-bold text-xl text-center">{step.title}</h3>
          <p className="relative z-10 text-white text-sm leading-relaxed text-center">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <StepFlipCard key={step.number} step={step} index={i} />
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
                <p className="text-gray-500 leading-relaxed text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
