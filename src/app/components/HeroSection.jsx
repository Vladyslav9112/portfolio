"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import dynamic from "next/dynamic";

const FloatingSphere = dynamic(() => import("./three/FloatingSphere"), {
  ssr: false,
  loading: () => null,
});

const socials = [
  {
    href: "https://github.com/Vladyslav9112",
    label: "GitHub",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/vlad-kryklyvets-6b9528175/",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://t.me/kkryklyvets",
    label: "Telegram",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "13+", label: "Projects" },
  { value: "6+", label: "Clients" },
];

export default function HeroSection() {
  const springConfig = { stiffness: 60, damping: 20 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handler = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 24);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 14);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full opacity-70">
        <FloatingSphere />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0F1A] to-transparent z-10" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0B0F1A] to-transparent z-10" />
      </div>

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Mobile photo — visible only below lg */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="block lg:hidden flex-shrink-0 select-none"
        >
          <div className="relative w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] mx-auto">
            <div
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(108,99,255,0.22) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(108,99,255,0.25)",
                background: "rgba(108,99,255,0.05)",
              }}
            >
              <Image
                src="/portfolio.png"
                alt="Vlad Kryklyvets"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Left */}
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left"
          style={{ x: mouseX, y: mouseY }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-xs font-semibold tracking-widest"
            style={{
              background: "rgba(108,99,255,0.12)",
              border: "1px solid rgba(108,99,255,0.3)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#6C63FF" }}
            />
            <span style={{ color: "#a78bfa" }}>Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-5 leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Vlad
            <br />
            <span className="gradient-text">Kryklyvets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold mb-4"
            style={{ color: "#94a3b8" }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            style={{ color: "rgba(148,163,184,0.75)" }}
          >
            Building modern web platforms and scalable solutions. Turning
            complex ideas into clean, high-performance digital products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="relative px-8 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6C63FF 0%, #5a52e0 100%)",
                boxShadow: "0 8px 30px rgba(108,99,255,0.4)",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/8 hover:scale-105"
              style={{
                border: "1.5px solid rgba(108,99,255,0.5)",
                color: "#a78bfa",
              }}
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-8 mb-10"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-black gradient-text">{s.value}</p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(148,163,184,0.5)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-purple-500/40"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(148,163,184,0.7)",
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="hidden lg:block relative flex-shrink-0 select-none"
        >
          <div className="relative w-[340px] xl:w-[400px]">
            {/* Glow ring */}
            <div
              className="absolute -inset-6 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(108,99,255,0.2) 0%, transparent 65%)",
              }}
            />
            {/* Card border */}
            <div
              className="relative h-[420px] xl:h-[480px] rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(108,99,255,0.2)",
                background: "rgba(108,99,255,0.05)",
              }}
            >
              <Image
                src="/portfolio.png"
                alt="Vlad Kryklyvets"
                fill
                priority
                className="object-cover object-top"
              />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
