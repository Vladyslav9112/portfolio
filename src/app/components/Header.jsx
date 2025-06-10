import ContentWrapper from "./global/ContentWrapper";
import animation from "../styles/animation.css";

export default function Header() {
  return (
    <section
      className="w-[1280px] bg-custom-gradient rounded-[100px] mt-10 h-20 flex items-center justify-between text-white px-6 mb-20"
      id="home"
    >
      <a
        href="https://drive.google.com/file/d/1PzA30Nk7wqVgQpLwaYO5vCiYvMqs4Dhs/view?usp=sharing"
        target="_blank"
        className="bg-black shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[100px] w-[257px] h-[45px] flex justify-center items-center hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-105 transition duration-200"
      >
        <p>VIEW RESUME</p>
      </a>
      <nav className="gap-15 ">
        <a href="#home" className="mr-15 lineUnderText">
          Home
        </a>
        <a href="#about" className="mr-15 lineUnderText">
          About
        </a>
        <a href="#projects" className="mr-15 lineUnderText">
          Projects
        </a>
        <a href="#contacts" className="mr-15 lineUnderText">
          Contacts
        </a>
      </nav>
    </section>
  );
}
