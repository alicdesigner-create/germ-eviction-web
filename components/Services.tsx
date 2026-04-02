const services = [
  {
    title: "Restroom Reset",
    description:
      "Total elimination of odors and bacteria at the source. We go beyond surface cleaning to restore hygiene at a cellular level.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zM3 7l9-4 9 4" />
      </svg>
    ),
  },
  {
    title: "Commercial Kitchens",
    description:
      "Deep degreasing of floors, equipment, and exhaust systems. Hospital-grade sanitation for food-safe environments.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v3m4 0h2" />
      </svg>
    ),
  },
  {
    title: "Gas Stations & Retail",
    description:
      "High-traffic area sterilization. We disinfect every touchpoint your customers contact daily.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Tile & Grout",
    description:
      "Professional-grade restoration and scale removal. We bring surfaces back to their original condition.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#1A202C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-2"
            style={{ color: "#2ABFBF" }}
          >
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Deep Cleaning &amp; Specialty Resets
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            One visit is all it takes. We deliver a surgical-level reset your
            regular crew simply can&apos;t match.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group rounded-2xl p-8 border border-transparent hover:border-[#2ABFBF] transition-all duration-300"
              style={{ backgroundColor: "#2D3748" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(42,191,191,0.15)", color: "#2ABFBF" }}
              >
                {svc.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{svc.title}</h3>
              <p className="text-gray-400 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[#E53E3E] hover:bg-red-700 text-white px-10 py-4 rounded-full text-base font-semibold transition-colors"
          >
            Get a Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
