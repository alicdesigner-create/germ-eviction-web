const steps = [
  {
    number: "1",
    title: "Deep Clean",
    description:
      "We eliminate the grease, grime, and pathogens your daily crew misses.",
  },
  {
    number: "2",
    title: "Staff Training",
    description:
      "We empower your team with professional commercial practices to maintain the standard.",
  },
  {
    number: "3",
    title: "Scheduled Resets",
    description:
      "We return periodically to restore your facility to its peak condition.",
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
      "Advanced systems exceeding healthcare facility requirements to guarantee safe, healthy, inviting environments for your customers.",
  },
  {
    emoji: "💲",
    title: "Cost-Effective Resets",
    description:
      "A smarter investment for budgets that can't support nightly cleaning crews.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Part 1 — 3-Step System */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-2"
            style={{ color: "#E53E3E" }}
          >
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C]">
            Our 3-Step Reset System
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
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
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2 — Why Germ Eviction */}
        <div className="bg-gray-50 rounded-3xl p-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] text-center mb-10">
            Why Germ Eviction?
          </h2>
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
