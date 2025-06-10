"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Bycicle",
    img: "/MyProjects/bycicle.jpg",
    github: "https://github.com/Vladyslav9112/Bycicle/",
    demo: "https://vladyslav9112.github.io/Bycicle/",
  },
  {
    title: "Flappy Bird",
    img: "/MyProjects/flappyBird.jpg",
    github: "https://github.com/Vladyslav9112/flappy-bird.git",
    demo: "https://vladyslav9112.github.io/flappy-bird/",
  },
  {
    title: "Tour Plan",
    img: "/MyProjects/tourPlan.jpg",
    github: "https://github.com/Vladyslav9112/tour-plane",
    demo: "https://vladyslav9112.github.io/tour-plane/",
  },
  {
    title: "Calculator",
    img: "/MyProjects/calculator.jpg",
    github: "https://github.com/Vladyslav9112/calc",
    demo: "https://vladyslav9112.github.io/calc/",
  },
  {
    title: "Sales Page",
    img: "/MyProjects/salesPage.jpg",
    github: "https://github.com/Vladyslav9112/sales-page",
    demo: "https://vladyslav9112.github.io/calc/",
  },
];

export default function MyProjects() {
  return (
    <section className="mb-10" id="projects">
      <h3 className="text-white mb-5">My Projects</h3>
      <div className="bg-[#1E1E1E] rounded-2xl p-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          navigation
          pagination={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl bg-custom-gradient flex flex-col items-center text-white w-full p-3 hover:scale-[1.01] transition-transform">
                <h4 className="mb-2">{project.title}</h4>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={450}
                  height={230}
                  className="mb-2 w-full h-[230px] object-cover rounded-xl"
                />
                <div className="flex justify-between w-full">
                  <Link href={project.github} target="_blank">
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub icon"
                      width={25}
                      height={25}
                      className="hover:scale-125 transition-transform"
                    />
                  </Link>
                  <Link href={project.demo} target="_blank">
                    <LinkIcon className="w-[25px] h-[25px] text-white hover:scale-125" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
