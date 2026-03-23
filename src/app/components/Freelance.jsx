const services = [
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
