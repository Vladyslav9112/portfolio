import Image from "next/image";
import Header from "./components/Header";
import ContentWrapper from "./components/global/ContentWrapper";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ResumeDetails from "./components/ResumeDetails";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import Freelance from "./components/Freelance";

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <Header />
        <HeroSection />
        <AboutMe />
        <ResumeDetails />
        <Experience />
        <Freelance />
        <TechnicalSkills />
      </ContentWrapper>
    </>
  );
}
