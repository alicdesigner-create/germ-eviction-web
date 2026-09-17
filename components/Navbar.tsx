"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#home", label: "Home" },
  { href: "#problem", label: "The Problem" },
  { href: "#services", label: "What We Clean" },
  { href: "#before-after", label: "Before & After" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <Image
              src="/images/GermEvictionWordmark.png"
              alt="Germ Eviction"
              width={383}
              height={63}
              className="object-contain h-9 sm:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[#1A202C] hover:text-gray-600 text-sm font-medium transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-[#B6FF3D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-block text-[#1A202C] px-5 py-2 rounded-full text-sm font-bold transition-colors hover:brightness-90"
              style={{ backgroundColor: "#B6FF3D" }}
            >
              Schedule a Reset
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#1A202C]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-[#1A202C] font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-[#1A202C] px-5 py-2 rounded-full text-sm font-bold text-center mt-2"
            style={{ backgroundColor: "#B6FF3D" }}
          >
            Schedule a Reset
          </a>
        </div>
      )}
    </nav>
  );
}
