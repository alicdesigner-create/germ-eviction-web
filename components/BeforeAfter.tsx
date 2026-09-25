"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${centerOffset * -0.025}px)`;
      }
      if (blobRef.current) {
        blobRef.current.style.transform = `translateY(${centerOffset * 0.07}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="before-after"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1A202C" }}
    >
      {/* Parallax decorative blob */}
      <div
        ref={blobRef}
        className="absolute -right-40 top-1/3 w-[420px] h-[420px] rounded-full will-change-transform pointer-events-none"
        style={{ backgroundColor: "#B6FF3D", opacity: 0.06 }}
        aria-hidden="true"
      />

      <div ref={contentRef} className="relative will-change-transform max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: "#B6FF3D" }}
          >
            See The Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Before &amp; After
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            What you see with the naked eye isn&apos;t the whole story. A
            blacklight reveals what routine cleaning leaves behind.
          </p>
        </div>

        {/* Blacklight reveal — centerpiece */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 max-w-3xl mx-auto">
          <Image
            src="/images/hero-blacklight.jpg"
            alt="Toilet under normal light next to the same toilet under blacklight, revealing hidden contamination"
            width={1489}
            height={2110}
            className="w-full h-auto"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 text-[#1A202C] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              What You See
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span
              className="text-[#1A202C] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "#B6FF3D" }}
            >
              What&apos;s Really There
            </span>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mb-12">
          Same toilet, same fixture — normal light on the left, blacklight on the right.
        </p>

      </div>
    </section>
  );
}
