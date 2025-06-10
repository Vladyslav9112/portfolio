import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Contacts() {
  return (
    <section className="bg-[#1E1E1E] rounded-2xl p-5" id="contacts">
      <h3 className="text-white text-center mb-10">Contacts</h3>
      <div className="text-white flex justify-around items-center">
        {" "}
        <a href="https://github.com/Vladyslav9112" target="_blank">
          <Image
            src="/icons/github.svg"
            alt="Icon linkedin"
            width={40}
            height={40}
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
          />
        </a>
        <a href="https://t.me/kkryklyvets" target="_blank">
          <Image
            src="/icons/telegram.svg"
            alt="Icon telegram"
            width={40}
            height={40}
          />
        </a>
        <a
          href="mailto:vlad.kryklyvets9@gmail.com"
          className="text-white flex items-center"
        >
          <Mail width={40} height={40} className="text-white mr-2" />
          vlad.kryklyvets9@gmail.com
        </a>
        <a href="tel:+380682700256" className="text-white flex items-center">
          <Phone width={40} height={40} className="text-white mr-2" />
          +38 (068) 27-00-256
        </a>
      </div>
    </section>
  );
}
