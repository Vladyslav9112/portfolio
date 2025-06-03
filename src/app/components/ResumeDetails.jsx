export default function ResumeDetails() {
  return (
    <section className="mb-10 text-white flex">
      <div className="bg-custom-gradient w-[620px] h-[240px] rounded-[15px] p-5 mr-10">
        <h4 className="mb-2">Education</h4>
        <ul className="list-disc list-inside">
          <li>
            Kharkiv National University of Radioelectronics (KNURE) 2021–2025
          </li>
        </ul>
      </div>
      <div className="bg-custom-gradient w-[620px] h-[240px] rounded-[15px] p-5">
        <h4 className="mb-2">Languages</h4>
        <ul className="list-disc list-inside pl-2 marker:text-sm marker:text-gray-400">
          <li>Ukrainian — Native speaker</li>
          <li>English — A1–A2</li>
        </ul>
      </div>
    </section>
  );
}
