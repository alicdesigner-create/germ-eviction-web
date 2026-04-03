import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#problem", label: "The Problem" },
  { href: "#services", label: "The Solution" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A202C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Logo + links */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <Image
              src="/images/Germevictionlogo.png"
              alt="Germ Eviction"
              width={160}
              height={48}
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <nav className="flex flex-wrap justify-center lg:justify-start gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Address + phone */}
          <div className="text-center lg:text-right text-gray-400 text-sm space-y-1">
            <p className="text-white font-semibold">Germ Eviction</p>
            <p>11005 Dover St., Unit 200</p>
            <p>Westminster, CO 80021</p>
            <p className="mt-2">
              <a href="tel:3036659757" className="hover:text-white transition-colors">
                (303) 665-9757
              </a>
            </p>
            <p>
              <a
                href="mailto:debbie@germeviction.com"
                className="hover:text-white transition-colors"
              >
                debbie@germeviction.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm space-y-1">
          <p>© 2026 Germ Eviction. All rights reserved.</p>
          <p>
            Created and designed by{" "}
            <a
              href="https://tesographics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              tesographics.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
