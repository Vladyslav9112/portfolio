"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#calculator", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b" : ""
      }`}
      style={{
        background: scrolled ? "rgba(11,15,26,0.88)" : "transparent",
        borderColor: scrolled ? "rgba(108,99,255,0.15)" : "transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-black text-lg tracking-wider"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="gradient-text">VK</span>
          <span
            style={{
              color: "rgba(226,232,240,0.4)",
              fontWeight: 400,
              fontSize: "0.85rem",
            }}
          >
            .dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-white lineUnderText"
              style={{ color: "rgba(226,232,240,0.55)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6C63FF, #5a52e0)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(108,99,255,0.35)",
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-white/70 hover:text-white"
        >
          <span
            className="block w-5 h-0.5 bg-current mb-1.5 transition-all"
            style={{ transform: open ? "rotate(45deg) translateY(8px)" : "" }}
          />
          <span
            className="block w-5 h-0.5 bg-current mb-1.5 transition-all"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 bg-current transition-all"
            style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "" }}
          />
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t"
          style={{
            background: "rgba(11,15,26,0.97)",
            borderColor: "rgba(108,99,255,0.15)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm border-b"
              style={{
                color: "rgba(226,232,240,0.65)",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-bold px-5 py-2 rounded-full mt-2 text-center"
            style={{
              background: "linear-gradient(135deg, #6C63FF, #5a52e0)",
              color: "#fff",
            }}
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
