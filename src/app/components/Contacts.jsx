"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuote } from "../context/QuoteContext";

const links = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "vladkryklyvets@gmail.com",
    href: "mailto:vladkryklyvets@gmail.com",
    color: "rgba(108,99,255,0.15)",
    border: "rgba(108,99,255,0.3)",
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    label: "Telegram",
    value: "@kkryklyvets",
    href: "https://t.me/kkryklyvets",
    color: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.3)",
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/vlad-kryklyvets",
    href: "https://www.linkedin.com/in/vlad-kryklyvets-6b9528175/",
    color: "rgba(108,99,255,0.12)",
    border: "rgba(108,99,255,0.25)",
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Vladyslav9112",
    href: "https://github.com/Vladyslav9112",
    color: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.12)",
  },
];

const inp = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: 12,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#e2e8f0",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const { quote } = useQuote();

  useEffect(() => {
    if (!quote) return;
    const extrasLine = quote.extras.length
      ? `\nExtras: ${quote.extras.join(", ")}`
      : "";
    const msg =
      `Project Type: ${quote.type}\n` +
      `Complexity: ${quote.complexity}\n` +
      `Deadline: ${quote.deadline}` +
      extrasLine +
      `\n\nEstimated budget: $${quote.min.toLocaleString()} – $${quote.max.toLocaleString()}\n\n` +
      `[Please describe any additional details about your project here]`;
    setForm((f) => ({ ...f, message: msg }));
  }, [quote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-bold tracking-[0.2em] uppercase mb-3 gradient-text"
      >
        Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-black mb-5"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Let&apos;s Build <span className="gradient-text">Something Great</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-base mb-14 max-w-xl"
        style={{ color: "rgba(226,232,240,0.5)" }}
      >
        Ready to start your project? I typically respond within 24 hours.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 p-8 rounded-2xl flex flex-col gap-5"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                className="block text-xs font-medium mb-2"
                style={{ color: "rgba(226,232,240,0.5)" }}
              >
                Full Name
              </label>
              <input
                style={inp}
                placeholder="John Doe"
                value={form.name}
                required
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(108,99,255,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>
            <div>
              <label
                className="block text-xs font-medium mb-2"
                style={{ color: "rgba(226,232,240,0.5)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                style={inp}
                placeholder="john@example.com"
                value={form.email}
                required
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(108,99,255,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
            </div>
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-2"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Phone{" "}
              <span style={{ color: "rgba(226,232,240,0.3)", fontWeight: 400 }}>
                (optional)
              </span>
            </label>
            <input
              type="tel"
              style={inp}
              placeholder="+1 234 567 8900"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(108,99,255,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-2"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Message
            </label>
            <textarea
              rows={5}
              style={{ ...inp, resize: "vertical" }}
              placeholder="Tell me about your project — what you need, budget, timeline..."
              value={form.message}
              required
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(108,99,255,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          {status === "success" ? (
            <div
              className="py-4 text-center rounded-xl"
              style={{
                background: "rgba(108,99,255,0.1)",
                border: "1px solid rgba(108,99,255,0.3)",
              }}
            >
              <p className="font-semibold gradient-text">
                Message sent! I&apos;ll get back to you within 24h.
              </p>
            </div>
          ) : status === "error" ? (
            <p className="text-center font-semibold text-red-400">
              Something went wrong. Please try again.
            </p>
          ) : (
            <button
              type="submit"
              disabled={status === "sending"}
              className="py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #5a52e0)",
                boxShadow: "0 8px 30px rgba(108,99,255,0.35)",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
          )}
        </motion.form>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 flex flex-col gap-3"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] card-hover"
              style={{ background: l.color, border: `1px solid ${l.border}` }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(226,232,240,0.8)",
                }}
              >
                {l.icon}
              </div>
              <div>
                <p
                  className="text-xs mb-0.5"
                  style={{ color: "rgba(226,232,240,0.4)" }}
                >
                  {l.label}
                </p>
                <p className="text-sm font-semibold text-white">{l.value}</p>
              </div>
              <div
                className="ml-auto"
                style={{ color: "rgba(226,232,240,0.3)" }}
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </a>
          ))}

          {/* Quick CTA card */}
          <div
            className="p-5 rounded-xl mt-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,255,0.07))",
              border: "1px solid rgba(108,99,255,0.25)",
            }}
          >
            <p className="text-sm font-semibold text-white mb-1">
              Ready to discuss?
            </p>
            <p
              className="text-xs mb-3"
              style={{ color: "rgba(226,232,240,0.5)" }}
            >
              Write directly on Telegram for the fastest response.
            </p>
            <a
              href="https://t.me/kkryklyvets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold transition-colors"
              style={{ color: "#a78bfa" }}
            >
              Open Telegram →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
