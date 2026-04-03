"use client";

import { useState } from "react";

const serviceOptions = [
  "Restroom Reset",
  "Commercial Kitchen",
  "Gas Station & Retail",
  "Tile & Grout",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: "#2ABFBF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Schedule Your{" "}
            <span style={{ color: "#1A202C" }}>Deep Reset</span> Today
          </h2>
          <p className="text-white/80 text-base">
            One visit. Total disinfection. Let&apos;s get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
                  style={{ backgroundColor: "#2ABFBF" }}
                >
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1A202C]">Request Sent!</h3>
                <p className="text-gray-500 text-base">
                  We&apos;ll be in touch shortly to schedule your Deep Reset.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ABFBF]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company / Business <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ABFBF]"
                      placeholder="Business name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ABFBF]"
                      placeholder="(303) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ABFBF]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ABFBF] bg-white"
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ABFBF] resize-none"
                    placeholder="Tell us about your facility and what you need…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E53E3E] hover:bg-red-700 text-white py-3.5 rounded-full font-semibold transition-colors text-base"
                >
                  Send My Request
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-9 text-white">
            <div className="flex items-start gap-5">
              <span className="text-2xl mt-0.5">📞</span>
              <div>
                <p className="font-semibold text-white/60 text-xs uppercase tracking-widest mb-1.5">
                  Phone
                </p>
                <a href="tel:3036659757" className="text-2xl font-bold hover:underline">
                  (303) 665-9757
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="text-2xl mt-0.5">✉️</span>
              <div>
                <p className="font-semibold text-white/60 text-xs uppercase tracking-widest mb-1.5">
                  Email
                </p>
                <a
                  href="mailto:debbie@germeviction.com"
                  className="text-xl font-bold hover:underline break-all"
                >
                  debbie@germeviction.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="text-2xl mt-0.5">📍</span>
              <div>
                <p className="font-semibold text-white/60 text-xs uppercase tracking-widest mb-1.5">
                  Location
                </p>
                <p className="text-xl font-bold leading-snug">
                  11005 Dover St., Unit 200
                  <br />
                  Westminster, CO 80021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
