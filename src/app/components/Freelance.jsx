export default function Freelance() {
  return (
    <section className="w-[1280px] h-auto p-5 text-white bg-custom-gradient rounded-[15px] mb-10 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200">
      <div>
        <h4 className="mb-4 text-bold">Freelance Front-End Developer</h4>
        <ul className="list-disc pl-5 text-white text-sm space-y-1 mb-3">
          <li>
            Developed a fully responsive landing page layout using HTML and SCSS
          </li>
          <li>
            Implemented mobile-first design using variables, mixins and BEM
          </li>
          <li>Added animations and JavaScript validation for all forms</li>
          <li>Integrated forms with CRM system using PHP</li>
          <li>Optimized site performance and improved load time</li>
        </ul>
        <p className="text-white text-sm italic mt-2">
          Tech stack: HTML, SCSS, JavaScript, PHP, CRM integration
        </p>
      </div>
    </section>
  );
}
