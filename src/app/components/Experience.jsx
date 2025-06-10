import Image from "next/image";

export default function Experience() {
  return (
    <section className="w-[1280px] h-auto p-5 text-white bg-custom-gradient rounded-[15px] mb-10 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200">
      <h3 className="mb-6">Experience</h3>
      <div className="flex gap-5 w-[620]">
        <Image
          src="/icons/logoSoftUa.svg"
          alt="Logo Soft Ua"
          width={130}
          height={40}
        />
        <div>
          <h5 className="mb-2">Name company: SOFT UA</h5>
          <p>
            Working with GraphQL queries and developing both static and dynamic
            pages using Next.js and React. Mentoring an intern by assisting with
            tasks and conducting code reviews. Occasionally involved in
            debugging and resolving issues related to Docker and application
            code.
          </p>
        </div>
      </div>
    </section>
  );
}
