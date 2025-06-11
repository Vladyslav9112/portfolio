import Image from "next/image";

export default function TechnicalSkills() {
  const skills = [
    { name: "HTML", icon: "/icons/TechnicalSkills/HTML.svg" },
    { name: "CSS", icon: "/icons/TechnicalSkills/CSS.svg" },
    { name: "SCSS", icon: "/icons/TechnicalSkills/SASS.svg" },
    { name: "Tailwind", icon: "/icons/TechnicalSkills/Tailwind.svg" },
    { name: "JavaScript", icon: "/icons/TechnicalSkills/JavaScript.svg" },
    { name: "TypeScript", icon: "/icons/TechnicalSkills/TypeScript.svg" },
    { name: "React", icon: "/icons/TechnicalSkills/React.svg" },
    { name: "Next.js", icon: "/icons/TechnicalSkills/Nextjs.svg" },
    { name: "GraphQL", icon: "/icons/TechnicalSkills/GraphQL.svg" },
    { name: "Postman", icon: "/icons/TechnicalSkills/Postman.svg" },
    { name: "Docker", icon: "/icons/TechnicalSkills/Docker.svg" },
    { name: "Git", icon: "/icons/github.svg" },
    { name: "Vite", icon: "/icons/TechnicalSkills/Vite.svg" },
    { name: "Figma", icon: "/icons/TechnicalSkills/Figma.svg" },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="w-full h-[162px] bg-[#1E1E1E] rounded-2xl shadow-md flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            width={62}
            height={62}
            className="mb-2 object-cover"
          />
          <p className="text-white text-sm font-medium">{skill.name}</p>
        </div>
      ))}
    </section>
  );
}
