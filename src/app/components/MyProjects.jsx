"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Compass Roofing",
    subtitle: "Business Website",
    description:
      "Business website for roofing company with modern UI and lead generation form.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    url: "https://compass-roofing.vercel.app/",
    image: "/MyProjects/compass-roofing.jpg",
    color: "rgba(108,99,255,0.15)",
    borderColor: "rgba(108,99,255,0.3)",
  },
  {
    title: "AvenEzer Catalog",
    subtitle: "Full Stack Platform",
    description:
      "Full-stack business directory platform with authentication, payments, admin panel, and multilingual support.",
    tags: ["Next.js", "PostgreSQL", "PayPal API", "i18n"],
    url: "https://avenezer-catalog.ink/",
    image: "/MyProjects/aven-ezer-catalog.jpg",
    color: "rgba(0,212,255,0.1)",
    borderColor: "rgba(0,212,255,0.28)",
  },
  {
    title: "AvenEzer Corporate",
    subtitle: "Corporate Website",
    description:
      "Corporate website with structured content, localization, and contact system.",
    tags: ["React", "i18n", "SEO", "Tailwind"],
    url: "https://avenezer-corporative.vercel.app/",
    image: "/MyProjects/aven-ezer-corporative.jpg",
    color: "rgba(108,99,255,0.12)",
    borderColor: "rgba(108,99,255,0.28)",
  },
  {
    title: "Boris Ski Rent",
    subtitle: "Rental Service Website",
    description:
      "Rental service website with clean UI and booking-focused layout.",
    tags: ["Next.js", "Tailwind", "Booking System"],
    url: "https://boris-ski-rent.vercel.app/",
    image: "/MyProjects/boris-ski-rent.jpg",
    color: "rgba(255,107,107,0.1)",
    borderColor: "rgba(255,107,107,0.25)",
  },
  {
    title: "Finance Planner App",
    subtitle: "Finance Dashboard",
    description:
      "Full-stack finance management application for tracking cash flow, expenses, and business operations. Focused on internal finance workflows, speed, and simplicity.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    url: null,
    image: "/MyProjects/calculator.jpg",
    color: "rgba(255,107,107,0.12)",
    borderColor: "rgba(255,107,107,0.3)",
  },
  {
    title: "Peony Flowers Finance",
    subtitle: "Finance Tracking App",
    description:
      "Finance tracking app for cash and expense accounting, built for simple daily business operations with fast input flows.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    url: "https://peony-flowers.vercel.app/",
    image: "/MyProjects/peony-flowers.jpg",
    color: "rgba(0,212,255,0.1)",
    borderColor: "rgba(0,212,255,0.28)",
  },
];

export default function MyProjects() {
  return (
    <section id="projects" className="py-28 relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-bold tracking-[0.2em] uppercase mb-3 gradient-text"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-black mb-14"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Featured <span className="gradient-text">Work</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden card-hover"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Preview image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/40 to-transparent" />

              {/* Live link badge */}
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(11,15,26,0.9)",
                    border: "1px solid rgba(108,99,255,0.4)",
                    color: "#a78bfa",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Live
                </a>
              ) : (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: "rgba(11,15,26,0.9)",
                    border: "1px solid rgba(255,107,107,0.35)",
                    color: "rgba(255,107,107,0.85)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Private
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6">
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: "rgba(226,232,240,0.4)" }}
              >
                {p.subtitle}
              </p>
              <h3 className="text-lg font-black text-white mb-2">{p.title}</h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(226,232,240,0.6)" }}
              >
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: p.color,
                      border: `1px solid ${p.borderColor}`,
                      color: "rgba(226,232,240,0.8)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: "#a78bfa" }}
                >
                  View Live
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "rgba(255,107,107,0.7)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Private / In Development
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
