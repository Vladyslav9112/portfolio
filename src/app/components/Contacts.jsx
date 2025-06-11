import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Contacts() {
  return (
    <section
      className="bg-[#1E1E1E] rounded-2xl p-5 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition duration-200 mb-10 min-h-[200px] flex flex-col justify-center font-regular-16"
      id="contacts"
    >
      <h3 className="font-bold-25 text-center mb-10">Contacts:</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-0">
        {/* Блок з іконками */}
        <div className="flex gap-10 lg:gap-15 mr-0 lg:mr-15">
          <a href="https://github.com/Vladyslav9112" target="_blank">
            <Image
              src="/icons/github.svg"
              alt="Icon github"
              width={40}
              height={40}
              className="filter transition duration-200 hover:opacity-50 w-[30px] h-[30px] lg:w-9 lg:h-9"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vlad-kryklyvets-6b9528175/"
            target="_blank"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="Icon linkedin"
              width={40}
              height={40}
              className="filter transition duration-200 hover:opacity-50 w-[30px] h-[30px] lg:w-9 lg:h-9"
            />
          </a>
          <a href="https://t.me/kkryklyvets" target="_blank">
            <Image
              src="/icons/telegram.svg"
              alt="Icon telegram"
              width={40}
              height={40}
              className="filter transition duration-200 hover:opacity-50 w-[30px] h-[30px] lg:w-9 lg:h-9"
            />
          </a>
        </div>

        {/* Блок з поштою і телефоном */}
        <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-15">
          <a
            href="mailto:vlad.kryklyvets9@gmail.com"
            className=" flex items-center filter transition duration-200 hover:opacity-50"
          >
            <Mail
              width={40}
              height={40}
              className=" mr-2 object-cover w-[30px] h-[30px] lg:w-9 lg:h-9"
            />
            vlad.kryklyvets9@gmail.com
          </a>
          <a
            href="tel:+380682700256"
            className=" flex items-center filter transition duration-200 hover:opacity-50"
          >
            <Phone
              width={40}
              height={40}
              className=" mr-2 w-[30px] h-[30px] lg:w-9 lg:h-9"
            />
            +38 (068) 27-00-256
          </a>
        </div>
      </div>
    </section>
  );
}
