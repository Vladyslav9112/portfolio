import ContentWrapper from "./global/ContentWrapper";

export default function Header() {
  return (
    <section className="w-[1280px] bg-custom-gradient rounded-[100px] mt-10 h-20 flex items-center justify-between text-white px-6 mb-20">
      <div className="bg-black shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[100px] w-[257px] h-[45px] flex justify-center items-center">
        <a href="#">VIEW RESUME</a>
      </div>
      <nav className="gap-15">
        <a href="#" className="mr-15">
          Home
        </a>
        <a href="#" className="mr-15">
          About
        </a>
        <a href="#" className="mr-15">
          Projects
        </a>
        <a href="#" className="mr-15">
          Contacts
        </a>
      </nav>
    </section>
  );
}
