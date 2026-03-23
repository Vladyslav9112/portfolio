const experiences = [
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
