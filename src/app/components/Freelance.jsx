export default function Freelance() {
  return (
    <section className=" h-auto p-5  bg-custom-gradient rounded-[15px] mb-10 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200 font-regular-16">
      <h4 className="mb-8 font-bold-25 text-center">
        Freelance Front-End Developer
      </h4>
      <div className="md:flex md:justify-between">
        <div className="md:w-1/2 md:pr-4 mb-8 md:mb-0">
          <h4 className="font-bold-20 mb-2">Sales Page</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Developed a fully responsive landing page layout using HTML and
              SCSS
            </li>
            <li>
              Implemented mobile-first design using variables, mixins and BEM
            </li>
            <li>Added animations and JavaScript validation for all forms</li>
            <li>Integrated forms with CRM system using PHP</li>
            <li>Optimized site performance and improved load time</li>
          </ul>
          <p className="italic mt-2">
            Tech stack: HTML, SCSS, JavaScript, PHP, CRM integration
          </p>
        </div>
        <div className="md:w-1/2 md:pr-4">
          <h4 className="font-bold-20 mb-2">Auto-Help — Ticket System</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>
              Developed a web app for purchasing digital stickers with automatic
              ticket generation
            </li>
            <li>
              Integrated LiqPay payment system for secure online transactions
            </li>
            <li>
              Implemented automatic ticket delivery via email using Nodemailer
            </li>
            <li>Set up Telegram notifications through Telegram Bot API</li>
            <li>Stored orders and payments in a MySQL database</li>
            <li>
              Built UI with Tailwind CSS and React hooks (useState, useEffect,
              useRef)
            </li>
          </ul>
          <p className="italic mt-2">
            Tech stack: Next.js (App Router), MySQL, LiqPay API, Telegram Bot
            API, Nodemailer, Tailwind CSS, React
          </p>
        </div>
      </div>
    </section>
  );
}
