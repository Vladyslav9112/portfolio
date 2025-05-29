import Image from "next/image";
import Header from "./components/Header";
import ContentWrapper from "./components/global/ContentWrapper";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <Header />
        <HeroSection />
        <AboutMe />
      </ContentWrapper>
    </>
  );
}
