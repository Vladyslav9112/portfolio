import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-[1280px] flex justify-between text-white mb-10">
      <div className="flex flex-col justify-center">
        <h1 className="mb-9">VLAD KRYKLYVETS</h1>
        <p className="mb-20 w-[461px]">
          I am from Ukraine, Poltava. I have experience in developing dynamic
          web projects with adaptive layout
        </p>
        <button className="bg-custom-gradient mb-24 w-[168px] h-[47px] border border-[rgba(217,217,217,0.13)] rounded-[5px]">
          <a href="#">Hire Me</a>
        </button>
        <div className="flex gap-[89px]">
          <a href="#">
            <Image
              src="/icons/github.svg"
              alt="Icon linkedin"
              width={40}
              height={40}
            />
          </a>
          <a href="#">
            <Image
              src="/icons/linkedin.svg"
              alt="Icon linkedin"
              width={40}
              height={40}
            />
          </a>
          <a href="#">
            <Image
              src="/icons/telegram.svg"
              alt="Icon telegram"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div className="relative w-[552px] h-[551px] rounded-full">
        {/* Помірно помітний розмитий градієнт навколо фото */}
        <div className="absolute -inset-4 rounded-full bg-[linear-gradient(180deg,#363636_5%,#5a5a5a_115%)] opacity-70 blur-[18px]"></div>

        {/* Чітке фото */}
        <Image
          src="/Me.jpg"
          alt="Photo of me"
          width={551}
          height={551}
          priority
          className="relative w-full h-full rounded-full object-cover"
        />
      </div>
    </section>
  );
}
