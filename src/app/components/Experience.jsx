import Image from "next/image";

export default function Experience() {
  return (
    <section className=" h-auto p-5  bg-custom-gradient rounded-[15px] mb-10 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200 font-regular-16">
      <h3 className="mb-6 font-bold-25">Experience</h3>
      <div className="md:flex gap-5">
        <Image
          src="/icons/logoSoftUa.svg"
          alt="Logo Soft Ua"
          width={130}
          height={40}
          className="mb-4 md:mb-0"
        />
        <div>
          <h5 className="mb-2">
            Name company: <span className="font-bold-18">SOFT UA</span>
          </h5>
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
