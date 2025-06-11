import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center text-white mb-20">
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start mb-5 lg:mb-0">
        <h1 className="mb-9">VLAD KRYKLYVETS</h1>
        <p className="mb-20 max-w-[461px]">
          I am from Ukraine, Poltava. I have experience in developing dynamic
          web projects with adaptive layout
        </p>
        <a
          href="#message"
          className="bg-custom-gradient mb-24 w-[168px] h-[47px] border border-[rgba(217,217,217,0.13)] rounded-[5px] flex items-center justify-center animate-pulse transition duration-200"
        >
          Hire Me
        </a>
        <div className="flex gap-10 md:gap-[89px]">
          <a href="https://github.com/Vladyslav9112" target="_blank">
            <Image
              src="/icons/github.svg"
              alt="Icon linkedin"
              width={40}
              height={40}
              className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-115 rounded-full transition duration-200"
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
              className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-115 rounded-full transition duration-200"
            />
          </a>
          <a href="https://t.me/kkryklyvets" target="_blank">
            <Image
              src="/icons/telegram.svg"
              alt="Icon telegram"
              width={40}
              height={40}
              className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-115 rounded-full transition duration-200"
            />
          </a>
        </div>
      </div>
      <div className="relative max-w-[552px] max-h-[551px] sm:rounded-full rounded-15px items">
        <div className="absolute -inset-4 rounded-full bg-[linear-gradient(180deg,#363636_5%,#5a5a5a_115%)] opacity-70 blur-[18px]"></div>
        <Image
          src="/Me.jpg"
          alt="Photo of me"
          width={551}
          height={551}
          priority
          className="w-[551px] max-h-[551px] relative rounded-full object-cover"
        />
      </div>
    </section>
  );
}
