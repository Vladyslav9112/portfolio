import Image from "next/image";

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
