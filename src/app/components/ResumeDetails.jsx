export default function ResumeDetails() {
  return (
    <section className="mb-10  md:flex font-regular-16">
      <div className="bg-custom-gradient w-full md:w-[620px] h-[240px] rounded-[15px] p-5 md:mr-10 mb-10 md:mb-0 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200">
        <h4 className="mb-2 font-bold-25">Education</h4>
        <ul className="list-disc list-inside">
          <li>
            Kharkiv National University of Radioelectronics (KNURE) 2021–2025
          </li>
        </ul>
      </div>
      <div className="bg-custom-gradient w-full md:w-[620px] h-[240px] rounded-[15px] p-5 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200 ">
        <h4 className="mb-2 font-bold-25">Languages</h4>
        <ul className="list-disc list-inside pl-2 marker:text-sm marker:text-gray-400">
          <li>Ukrainian — Native speaker</li>
          <li>English — A1–A2</li>
        </ul>
      </div>
    </section>
  );
}
