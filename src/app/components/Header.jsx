"use client";
import { useState } from "react";
import ContentWrapper from "./global/ContentWrapper";
import { Menu, X } from "lucide-react";
import "../styles/animation.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="z-50 scroll-auto sticky top-0">
      <section className="bg-custom-gradient rounded-[100px] h-20 flex items-center justify-between px-6 mb-10 md:mb-15 lg:mb-20 font-regular-16">
        <a
          href="https://drive.google.com/file/d/1PzA30Nk7wqVgQpLwaYO5vCiYvMqs4Dhs/view?usp=sharing"
          target="_blank"
          className="bg-black shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[100px] w-[180px] lg:w-[257px] h-[45px] flex justify-center items-center hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-105 transition duration-200"
        >
          <p>VIEW RESUME</p>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          {["home", "about", "projects", "contacts"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="mr-10 lg:mr-15 lineUnderText capitalize"
            >
              {id}
            </a>
          ))}
        </nav>

        {/* Burger Icon */}
        <button
          className="md:hidden  z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </section>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-md flex justify-center items-center transition-all duration-300">
          <nav className="flex flex-col space-y-6 text-center">
            {["home", "about", "projects", "contacts"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleLinkClick}
                className="hover:underline"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
