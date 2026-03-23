"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V9.75m-9 3L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    ),
    title: "Landing Pages",
    description:
      "High-converting landing pages with stunning visuals, fast load times, and clear CTAs. Built to turn visitors into customers.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Fast performance",
      "Lead generation forms",
    ],
    priceFrom: "$300",
    color: "rgba(108,99,255,0.15)",
    glow: "rgba(108,99,255,0.3)",
    gradient: "linear-gradient(135deg, #6C63FF, #a78bfa)",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375M9 17.25h6.375"
        />
      </svg>
    ),
    title: "Business Websites",
    description:
      "Professional multi-page websites for businesses. Clean architecture, content management, and brand identity.",
    features: [
      "Multi-page structure",
      "CMS integration",
      "Contact & booking",
      "Multilingual support",
    ],
    priceFrom: "$500",
    color: "rgba(0,212,255,0.12)",
    glow: "rgba(0,212,255,0.3)",
    gradient: "linear-gradient(135deg, #00d4ff, #0ea5e9)",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Full Stack Web Apps",
    description:
      "Scalable SaaS platforms, dashboards, and business tools. From database design to deployment.",
    features: [
      "Authentication system",
      "Payment integration",
      "Admin panel",
      "REST / GraphQL API",
    ],
    priceFrom: "$1000",
    color: "rgba(255,107,107,0.12)",
    glow: "rgba(255,107,107,0.3)",
    gradient: "linear-gradient(135deg, #ff6b6b, #ffa500)",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    title: "Telegram Mini Apps",
    description:
      "Native-feeling apps inside Telegram. Bots with interactive UI, payments, and user data management.",
    features: [
      "Telegram WebApp API",
      "Bot integration",
      "In-app payments",
      "User management",
    ],
    priceFrom: "$600",
    color: "rgba(108,99,255,0.12)",
    glow: "rgba(108,99,255,0.25)",
    gradient: "linear-gradient(135deg, #6C63FF, #00d4ff)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-bold tracking-[0.2em] uppercase mb-3 gradient-text"
      >
        Services
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-black mb-5"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        What I <span className="gradient-text">Build</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-base mb-14 max-w-xl"
        style={{ color: "rgba(226,232,240,0.55)" }}
      >
        From simple landing pages to complex SaaS platforms — I deliver quality
        code and premium design.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-6 rounded-2xl card-hover flex flex-col"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background: s.color,
                border: `1px solid ${s.glow}`,
                color: "rgba(226,232,240,0.9)",
              }}
            >
              {s.icon}
            </div>

            <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
            <p
              className="text-sm leading-relaxed mb-5 flex-1"
              style={{ color: "rgba(226,232,240,0.55)" }}
            >
              {s.description}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-2 mb-6">
              {s.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "rgba(226,232,240,0.6)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "rgba(108,99,255,0.8)" }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div
              className="pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p
                className="text-xs mb-0.5"
                style={{ color: "rgba(226,232,240,0.35)" }}
              >
                Starting from
              </p>
              <p className="text-xl font-black gradient-text">{s.priceFrom}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
