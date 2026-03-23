import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "src/app");
const comp = join(src, "components");
const glob = join(comp, "global");
const styles = join(src, "styles");

mkdirSync(glob, { recursive: true });

function w(path, content) {
  writeFileSync(path, content, "utf8");
  console.log("✓", path.replace(root + "\\", "").replace(root + "/", ""));
}

// ─── globals.css ────────────────────────────────────────────────────────────
w(
  join(styles, "globals.css"),
  `@import "tailwindcss";

:root {
  --primary: #00ff9c;
  --primary-rgb: 0, 255, 156;
  --secondary: #4fd1c5;
  --bg: #0b0f14;
  --surface: #111827;
}

@layer utilities {
  .bg-custom-gradient {
    background: linear-gradient(267.81deg, rgba(39,39,39,0.83) 59%, rgba(39,39,39,0.83) 59%);
  }
  .glass {
    background: rgba(255,255,255,0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .glow-green {
    box-shadow: 0 0 30px rgba(0,255,156,0.25);
  }
}

section {
  scroll-margin-top: 80px;
}

body {
  overflow-x: hidden;
  scroll-behavior: smooth;
  background: #0b0f14;
  color: #e6f1ff;
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #0b0f14; }
::-webkit-scrollbar-thumb { background: rgba(0,255,156,0.3); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(0,255,156,0.6); }
`,
);

// ─── layout.js ──────────────────────────────────────────────────────────────
w(
  join(src, "layout.js"),
  `import "./styles/globals.css";
import "./styles/animation.css";
import "./styles/font.css";
import ClientLayout from "./ClientLoyout";

export const metadata = {
  title: "PORTFOLIO: Vlad Kryklyvets",
  description: "Vlad Kryklyvets - Full Stack Developer from Ukraine. Portfolio with projects, skills, and contact info.",
  keywords: ["Vlad Kryklyvets", "Full Stack Developer", "portfolio", "React", "Next.js"],
  authors: [{ name: "Vlad Kryklyvets", url: "https://portfolio-omega-gilt-20.vercel.app" }],
  creator: "Vlad Kryklyvets",
  robots: "index, follow",
  icons: { icon: "/icons/favicon.ico" },
  openGraph: {
    title: "PORTFOLIO: Vlad Kryklyvets",
    description: "Vlad Kryklyvets - Full Stack Developer from Ukraine.",
    url: "https://portfolio-omega-gilt-20.vercel.app",
    siteName: "Vlad Kryklyvets Portfolio",
    images: [{ url: "https://i.postimg.cc/3NbpH7Jm/Screenshot-2.jpg", width: 1200, height: 627 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTFOLIO: Vlad Kryklyvets",
    description: "Vlad Kryklyvets - Full Stack Developer from Ukraine.",
    images: ["https://i.postimg.cc/3NbpH7Jm/Screenshot-2.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden" style={{ background: "#0b0f14", color: "#e6f1ff" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
`,
);

// ─── page.js ────────────────────────────────────────────────────────────────
w(
  join(src, "page.js"),
  `import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import Freelance from "./components/Freelance";
import MyProjects from "./components/MyProjects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ContentWrapper from "./components/global/ContentWrapper";
import AnimatedSection from "./components/global/AnimatedSection";

export default function Home() {
  return (
    <ContentWrapper>
      <AnimatedSection direction="top"><Header /></AnimatedSection>
      <AnimatedSection direction="left"><HeroSection /></AnimatedSection>
      <AnimatedSection direction="right"><AboutMe /></AnimatedSection>
      <AnimatedSection direction="left"><Experience /></AnimatedSection>
      <AnimatedSection direction="right"><Freelance /></AnimatedSection>
      <AnimatedSection direction="bottom"><TechnicalSkills /></AnimatedSection>
      <AnimatedSection direction="left"><MyProjects /></AnimatedSection>
      <AnimatedSection direction="top"><Contacts /></AnimatedSection>
      <AnimatedSection direction="bottom"><Footer /></AnimatedSection>
    </ContentWrapper>
  );
}
`,
);

// ─── ClientLoyout.jsx ────────────────────────────────────────────────────────
w(
  join(src, "ClientLoyout.jsx"),
  `"use client";
import { useEffect } from "react";

export default function ClientLayout({ children }) {
  useEffect(() => {
    const container = document.querySelector(".glows-container");
    if (!container) return;
    container.innerHTML = "";
    const sw = window.innerWidth;
    let n = sw < 640 ? 5 : sw < 768 ? 8 : sw < 1024 ? 12 : 20;
    for (let i = 0; i < n; i++) {
      const g = document.createElement("div");
      g.className = "glow";
      g.style.top = Math.random() * 100 + "vh";
      g.style.left = Math.random() * 100 + "vw";
      const size = 80 + Math.random() * 40;
      g.style.width = size + "px";
      g.style.height = size + "px";
      const dur = 2 + Math.random() * 3;
      g.style.setProperty("--move-x", (Math.random() - 0.5) * 40 + "vw");
      g.style.setProperty("--move-y", (Math.random() - 0.5) * 80 + "vh");
      g.style.animation = \`moveGlow \${dur}s ease-in-out infinite alternate\`;
      g.style.animationDelay = Math.random() * dur + "s";
      container.appendChild(g);
    }
  }, []);

  return (
    <>
      <div className="glows-container fixed top-0 left-0 w-full h-full pointer-events-none -z-10" />
      {children}
    </>
  );
}
`,
);

// ─── global/ContentWrapper.jsx ────────────────────────────────────────────────
w(
  join(glob, "ContentWrapper.jsx"),
  `export default function ContentWrapper({ children }) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
`,
);

// ─── global/AnimatedSection.jsx ──────────────────────────────────────────────
w(
  join(glob, "AnimatedSection.jsx"),
  `"use client";
import { useEffect, useRef } from "react";

const dirMap = {
  top:    "translate-y-[-40px] opacity-0",
  bottom: "translate-y-[40px] opacity-0",
  left:   "translate-x-[-40px] opacity-0",
  right:  "translate-x-[40px] opacity-0",
};

export default function AnimatedSection({ children, direction = "bottom" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(...dirMap[direction].split(" "), "transition-all", "duration-700");
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.remove(...dirMap[direction].split(" "));
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction]);
  return <div ref={ref}>{children}</div>;
}
`,
);

// ─── Header.jsx ──────────────────────────────────────────────────────────────
w(
  join(comp, "Header.jsx"),
  `"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
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
      className={\`sticky top-0 z-50 transition-all duration-300 \${
        scrolled ? "backdrop-blur-md border-b border-white/10" : ""
      }\`}
      style={{ background: scrolled ? "rgba(11,15,20,0.85)" : "transparent" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-wider" style={{ color: "#00ff9c" }}>
          VK<span className="text-white/50 font-normal text-sm">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 lineUnderText">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-80"
            style={{ background: "#00ff9c", color: "#0b0f14" }}>
            Hire Me
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 text-white/70 hover:text-white">
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" style={{ transform: open ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-current transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-white/10"
          style={{ background: "rgba(11,15,20,0.97)" }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white py-2 text-sm border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="text-sm font-semibold px-5 py-2 rounded-full mt-2 text-center"
            style={{ background: "#00ff9c", color: "#0b0f14" }}>
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
`,
);

// ─── HeroSection.jsx ─────────────────────────────────────────────────────────
w(
  join(comp, "HeroSection.jsx"),
  `"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const socials = [
  { href: "https://github.com/Vladyslav9112", icon: "/icons/github.svg", label: "GitHub" },
  { href: "https://www.linkedin.com/in/vlad-kryklyvets-6b9528175/", icon: "/icons/linkedin.svg", label: "LinkedIn" },
  { href: "https://t.me/kkryklyvets", icon: "/icons/telegram.svg", label: "Telegram" },
];

const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "13+", label: "Projects" },
  { value: "6+", label: "Clients" },
];

const roles = ["Full Stack Developer", "React / Next.js", "Node.js / APIs"];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[90vh] flex items-center py-16">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* ── Left ── */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
            style={{ background: "rgba(0,255,156,0.1)", border: "1px solid rgba(0,255,156,0.25)", color: "#00ff9c" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c] animate-pulse" />
            Available for work
          </div>

          <h1 className="text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight">
            Vlad<br />
            <span style={{ color: "#00ff9c" }}>Kryklyvets</span>
          </h1>

          <div className="h-8 mb-6 overflow-hidden">
            <p className="text-xl font-semibold transition-all duration-400"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-12px)",
                color: "#4fd1c5",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}>
              {roles[roleIdx]}
            </p>
          </div>

          <p className="text-white/60 leading-relaxed mb-8 max-w-md">
            I build scalable web applications, SaaS platforms, and Telegram Mini Apps.
            Based in Ukraine — open to remote work worldwide.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <a href="#projects"
              className="px-7 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:opacity-85 hover:scale-105"
              style={{ background: "#00ff9c", color: "#0b0f14" }}>
              View Projects
            </a>
            <a href="#contact"
              className="px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/10"
              style={{ border: "1.5px solid rgba(0,255,156,0.35)", color: "#00ff9c" }}>
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 justify-center lg:justify-start mb-10">
            {socials.map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity duration-200 hover:scale-110">
                <Image src={s.icon} alt={s.label} width={26} height={26} />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0">
            {stats.map(s => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-2xl font-black" style={{ color: "#00ff9c" }}>{s.value}</p>
                <p className="text-xs text-white/40 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="relative flex-shrink-0">
          {/* Spinning gradient ring */}
          <div className="absolute -inset-3 rounded-full animate-spin"
            style={{
              background: "conic-gradient(from 0deg, #00ff9c, #4fd1c5, #0b0f14, #00ff9c)",
              animationDuration: "8s",
              opacity: 0.7,
            }}
          />
          {/* Glow blur */}
          <div className="absolute -inset-6 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,255,156,0.2) 0%, transparent 70%)" }}
          />
          <div className="relative rounded-full overflow-hidden"
            style={{ width: 380, height: 380, border: "3px solid rgba(0,255,156,0.2)" }}>
            <Image
              src="/portfolio.png"
              alt="Vlad Kryklyvets"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
`,
);

// ─── AboutMe.jsx ──────────────────────────────────────────────────────────────
w(
  join(comp, "AboutMe.jsx"),
  `import Image from "next/image";

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Three.js",
  "Docker", "AWS", "Telegram API", "Framer Motion",
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#00ff9c" }}>About Me</p>
          <h2 className="text-4xl font-black mb-6 leading-tight">
            Turning ideas into<br />
            <span style={{ color: "#00ff9c" }}>digital products</span>
          </h2>
          <p className="text-white/65 leading-relaxed mb-4">
            I&apos;m a Full Stack Developer based in Ukraine, specialized in building high-performance web
            applications and SaaS platforms. My passion is crafting products that combine excellent UX
            with solid architecture.
          </p>
          <p className="text-white/65 leading-relaxed mb-8">
            I work across the full stack — from React/Next.js frontends to Node.js backends, databases,
            and cloud deployments. I&apos;ve built international business platforms, corporate websites,
            Telegram Mini Apps, and SaaS products.
          </p>

          <a href="/resume.pdf" download
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/10 mb-8"
            style={{ border: "1.5px solid rgba(0,255,156,0.35)", color: "#00ff9c" }}>
            Download Resume
          </a>

          <p className="text-xs tracking-[0.12em] uppercase text-white/35 mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map(t => (
              <span key={t}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ border: "1px solid rgba(0,255,156,0.2)", background: "rgba(0,255,156,0.04)", color: "rgba(230,241,255,0.7)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "3+", label: "Years of Experience", desc: "Building production apps" },
            { n: "13+", label: "Projects Completed", desc: "Ranging from MVPs to full SaaS" },
            { n: "6+", label: "Happy Clients", desc: "Across 2 countries" },
            { n: "∞", label: "Coffee Cups", desc: "Fueling every late-night session" },
          ].map(c => (
            <div key={c.label}
              className="p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-3xl font-black mb-1" style={{ color: "#00ff9c" }}>{c.n}</p>
              <p className="text-sm font-semibold text-white/80 mb-1">{c.label}</p>
              <p className="text-xs text-white/40">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
);

// ─── Experience.jsx ───────────────────────────────────────────────────────────
w(
  join(comp, "Experience.jsx"),
  `const experiences = [
  {
    period: "2023 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    desc: "Building custom web applications, SaaS platforms, and Telegram Mini Apps for international clients. Sole developer from architecture to deployment.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2022 — 2023",
    role: "Front-End Developer",
    company: "AvenEzer",
    desc: "Developed corporate websites and the AvenEzer Catalog platform. Led front-end architecture for a multi-language B2B marketplace.",
    tags: ["React", "Tailwind", "i18n", "REST API"],
  },
  {
    period: "2021 — 2022",
    role: "Junior Developer",
    company: "Self-study & Projects",
    desc: "Built first production projects, learned the full stack, and started taking freelance orders.",
    tags: ["HTML/CSS", "JavaScript", "React", "Firebase"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#00ff9c" }}>Career</p>
      <h2 className="text-4xl font-black mb-12">
        Work <span style={{ color: "#00ff9c" }}>Experience</span>
      </h2>
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "rgba(0,255,156,0.15)" }} />
        <div className="flex flex-col gap-10 pl-8">
          {experiences.map((e, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full" style={{ background: "#00ff9c" }} />
              <p className="text-xs text-white/40 tracking-wider mb-1">{e.period}</p>
              <h3 className="text-lg font-bold text-white mb-0.5">{e.role}</h3>
              <p className="text-sm font-medium mb-2" style={{ color: "#4fd1c5" }}>{e.company}</p>
              <p className="text-sm text-white/60 leading-relaxed mb-3">{e.desc}</p>
              <div className="flex flex-wrap gap-2">
                {e.tags.map(t => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded-full"
                    style={{ background: "rgba(0,255,156,0.07)", border: "1px solid rgba(0,255,156,0.18)", color: "#00ff9c" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
);

// ─── Freelance.jsx ────────────────────────────────────────────────────────────
w(
  join(comp, "Freelance.jsx"),
  `const services = [
  { icon: "🌐", title: "Web Applications", desc: "Full-featured apps built with Next.js, React, and Node.js. From MVPs to production-ready SaaS products." },
  { icon: "🤖", title: "Telegram Mini Apps", desc: "Custom Telegram bots and Mini Apps deeply integrated with the Telegram ecosystem and Web App API." },
  { icon: "🏢", title: "Corporate Websites", desc: "Modern, fast, SEO-optimized corporate websites with multi-language support and CMS integration." },
  { icon: "☁️", title: "Backend & APIs", desc: "RESTful APIs, microservices, database design, and cloud deployments on AWS / VPS." },
];

export default function Freelance() {
  return (
    <section id="services" className="py-24">
      <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#00ff9c" }}>What I Do</p>
      <h2 className="text-4xl font-black mb-12">
        Freelance <span style={{ color: "#00ff9c" }}>Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map(s => (
          <div key={s.title}
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-bold text-white mb-2">{s.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
);

// ─── TechnicalSkills.jsx ──────────────────────────────────────────────────────
w(
  join(comp, "TechnicalSkills.jsx"),
  `import Image from "next/image";

const skills = [
  { name: "React", icon: "/icons/TechnicalSkills/React.svg", level: 95 },
  { name: "Next.js", icon: "/icons/TechnicalSkills/Next.js.svg", level: 92 },
  { name: "TypeScript", icon: "/icons/TechnicalSkills/TypeScript.svg", level: 85 },
  { name: "Node.js", icon: "/icons/TechnicalSkills/Node.js.svg", level: 88 },
  { name: "PostgreSQL", icon: "/icons/TechnicalSkills/PostgreSQL.svg", level: 80 },
  { name: "MongoDB", icon: "/icons/TechnicalSkills/MongoDB.svg", level: 78 },
  { name: "Docker", icon: "/icons/TechnicalSkills/Docker.svg", level: 72 },
  { name: "Tailwind", icon: "/icons/TechnicalSkills/Tailwind CSS.svg", level: 95 },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-24">
      <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#00ff9c" }}>Technical Skills</p>
      <h2 className="text-4xl font-black mb-12">
        Tech <span style={{ color: "#00ff9c" }}>Stack</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map(s => (
          <div key={s.name}
            className="p-4 rounded-2xl text-center transition-all duration-300 hover:border-white/20"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-12 h-12 mx-auto mb-3 relative">
              <Image src={s.icon} alt={s.name} fill className="object-contain" />
            </div>
            <p className="text-sm font-semibold text-white mb-2">{s.name}</p>
            <div className="h-1 rounded-full w-full" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="h-1 rounded-full transition-all duration-700"
                style={{ width: s.level + "%", background: "linear-gradient(90deg, #00ff9c, #4fd1c5)" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
);

// ─── MyProjects.jsx ───────────────────────────────────────────────────────────
w(
  join(comp, "MyProjects.jsx"),
  `const projects = [
  {
    title: "AvenEzer Catalog",
    subtitle: "International Business Platform",
    description: "Full-scale international platform for freelancers, companies, and business partnerships. Authentication, payments, real-time data.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "PayPal"],
    url: "https://avenezercatalog.com",
    features: ["Full Stack Architecture", "Authentication System", "PayPal Payments", "Admin Panel"],
  },
  {
    title: "AvenEzer Corporate",
    subtitle: "Corporate Website & Ecosystem",
    description: "Corporate website and brand ecosystem with multi-language support, modern UI, and seamless user experience.",
    tags: ["React", "i18n", "SEO", "Tailwind"],
    url: "https://avenezer.com",
    features: ["Multi-language (i18n)", "SEO Optimized", "Performance 95+", "Responsive Design"],
  },
];

const others = [
  { title: "Telegram Mini App", desc: "TMA with Telegram WebApp API integration", tags: ["React", "TMA", "Node.js"] },
  { title: "SaaS Dashboard", desc: "Analytics dashboard with real-time data", tags: ["Next.js", "Prisma", "Chart.js"] },
  { title: "E-commerce Platform", desc: "Custom shopping platform with payments", tags: ["React", "Stripe", "MongoDB"] },
  { title: "Portfolio Generator", desc: "Auto-generate portfolios from GitHub data", tags: ["Next.js", "GitHub API"] },
];

export default function MyProjects() {
  return (
    <section id="projects" className="py-24">
      <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#00ff9c" }}>Projects</p>
      <h2 className="text-4xl font-black mb-12">
        Featured <span style={{ color: "#00ff9c" }}>Products</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {projects.map(p => (
          <div key={p.title}
            className="p-6 rounded-2xl flex flex-col transition-all duration-300 hover:border-white/20"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{p.subtitle}</p>
            <h3 className="text-xl font-black text-white mb-2">{p.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2.5 py-0.5 rounded-full"
                  style={{ background: "rgba(0,255,156,0.07)", border: "1px solid rgba(0,255,156,0.2)", color: "#00ff9c" }}>
                  {t}
                </span>
              ))}
            </div>
            <ul className="flex flex-col gap-1.5 mb-5">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/65">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#00ff9c" }} />
                  {f}
                </li>
              ))}
            </ul>
            <a href={p.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#00ff9c" }}>
              View Live →
            </a>
          </div>
        ))}
      </div>

      <p className="text-xs tracking-[0.12em] uppercase text-white/35 mb-4">Other Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {others.map(p => (
          <div key={p.title}
            className="p-4 rounded-xl transition-all duration-300 hover:border-white/20"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h4 className="font-bold text-white mb-1">{p.title}</h4>
            <p className="text-xs text-white/50 mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-1">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded"
                  style={{ background: "rgba(0,255,156,0.06)", color: "rgba(0,255,156,0.8)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`,
);

// ─── Contacts.jsx ─────────────────────────────────────────────────────────────
w(
  join(comp, "Contacts.jsx"),
  `"use client";
import { useState } from "react";

const links = [
  { icon: "📧", label: "Email", value: "vladkryklyvets@gmail.com", href: "mailto:vladkryklyvets@gmail.com" },
  { icon: "💬", label: "Telegram", value: "@kkryklyvets", href: "https://t.me/kkryklyvets" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/vlad-kryklyvets", href: "https://www.linkedin.com/in/vlad-kryklyvets-6b9528175/" },
  { icon: "🐙", label: "GitHub", value: "github.com/Vladyslav9112", href: "https://github.com/Vladyslav9112" },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async e => {
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

  const inp = {
    width: "100%", padding: "0.7rem 1rem", borderRadius: 10,
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#e6f1ff", fontSize: "0.9rem", outline: "none",
  };

  return (
    <section id="contact" className="py-24">
      <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "#00ff9c" }}>Contact</p>
      <h2 className="text-4xl font-black mb-12">
        Let&apos;s Build <span style={{ color: "#00ff9c" }}>Something Great</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Full Name</label>
              <input style={inp} placeholder="John Doe" value={form.name} required
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "rgba(0,255,156,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label className="block text-xs text-white/50 mb-1.5">Email Address</label>
              <input type="email" style={inp} placeholder="john@example.com" value={form.email} required
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "rgba(0,255,156,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
          </div>
          <div>
            <label className="block text-xs text-white/50 mb-1.5">Message</label>
            <textarea rows={5} style={{ ...inp, resize: "vertical" }}
              placeholder="Tell me about your project..."
              value={form.message} required
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              onFocus={e => e.target.style.borderColor = "rgba(0,255,156,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
          </div>
          {status === "success" ? (
            <p className="text-center font-semibold" style={{ color: "#00ff9c" }}>Message sent! I'll get back to you soon.</p>
          ) : status === "error" ? (
            <p className="text-center font-semibold text-red-400">Something went wrong. Please try again.</p>
          ) : (
            <button type="submit" disabled={status === "sending"}
              className="py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-85"
              style={{ background: "#00ff9c", color: "#0b0f14", opacity: status === "sending" ? 0.7 : 1 }}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          )}
        </form>

        {/* Links */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:border-white/20"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-2xl">{l.icon}</span>
              <div>
                <p className="text-xs text-white/40 mb-0.5">{l.label}</p>
                <p className="text-sm font-semibold text-white">{l.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
`,
);

// ─── Footer.jsx ───────────────────────────────────────────────────────────────
w(
  join(comp, "Footer.jsx"),
  `export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 mt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/35">
        <p>© {year} Vlad Kryklyvets. All rights reserved.</p>
        <p>Built with <span style={{ color: "#00ff9c" }}>Next.js</span> & <span style={{ color: "#4fd1c5" }}>Tailwind CSS</span></p>
      </div>
    </footer>
  );
}
`,
);

console.log("\n✅ All files written successfully!");
