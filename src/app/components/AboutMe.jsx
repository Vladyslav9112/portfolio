"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const techStack = [
  {
    label: "Next.js",
    color: "rgba(108,99,255,0.15)",
    border: "rgba(108,99,255,0.35)",
  },
  {
    label: "React",
    color: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.3)",
  },
  {
    label: "TypeScript",
    color: "rgba(108,99,255,0.12)",
    border: "rgba(108,99,255,0.3)",
  },
  {
    label: "Tailwind",
    color: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.25)",
  },
  {
    label: "Prisma",
    color: "rgba(108,99,255,0.12)",
    border: "rgba(108,99,255,0.3)",
  },
  {
    label: "PostgreSQL",
    color: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.25)",
  },
  {
    label: "PayPal API",
    color: "rgba(255,107,107,0.12)",
    border: "rgba(255,107,107,0.3)",
  },
  {
    label: "Telegram Mini Apps",
    color: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.25)",
  },
  {
    label: "Node.js",
    color: "rgba(108,99,255,0.12)",
    border: "rgba(108,99,255,0.3)",
  },
  {
    label: "Docker",
    color: "rgba(0,212,255,0.1)",
    border: "rgba(0,212,255,0.25)",
  },
];

const stats = [
  { n: "3+", label: "Years of Experience", desc: "Building production apps" },
  { n: "13+", label: "Projects Completed", desc: "From MVPs to full SaaS" },
  { n: "6+", label: "Happy Clients", desc: "Across 2 countries" },
  { n: "100%", label: "Remote Ready", desc: "Open to worldwide work" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function Counter({ value }) {
  // value like "3+", "20+", "100%"
  const num = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="py-28 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left — Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3 gradient-text"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Turning ideas into
            <br />
            <span className="gradient-text">digital products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="leading-relaxed mb-8 text-[15px]"
            style={{ color: "rgba(226,232,240,0.65)" }}
          >
            I am a Full Stack Developer specializing in building modern web
            applications, business platforms, and Telegram Mini Apps. I focus on
            clean architecture, scalability, and high-quality UI. Based in
            Ukraine — open to remote work worldwide.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/10 mb-10"
            style={{
              border: "1.5px solid rgba(108,99,255,0.4)",
              color: "#a78bfa",
            }}
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-xs tracking-[0.15em] uppercase mb-3"
            style={{ color: "rgba(226,232,240,0.3)" }}
          >
            Tech Stack
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t, i) => (
              <motion.span
                key={t.label}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: t.color,
                  border: `1px solid ${t.border}`,
                  color: "rgba(226,232,240,0.8)",
                }}
              >
                {t.label}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right — Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl card-hover"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-3xl font-black mb-1 gradient-text">
                <Counter value={c.n} />
              </p>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "rgba(226,232,240,0.85)" }}
              >
                {c.label}
              </p>
              <p className="text-xs" style={{ color: "rgba(226,232,240,0.4)" }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
