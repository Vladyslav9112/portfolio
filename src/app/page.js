import Image from "next/image";
import Header from "./components/Header";
import ContentWrapper from "./components/global/ContentWrapper";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ResumeDetails from "./components/ResumeDetails";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import Freelance from "./components/Freelance";
import MyProjects from "./components/MyProjects";
import Messages from "./components/Messages";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import AnimatedSection from "./components/global/AnimatedSection";

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <AnimatedSection direction="top">
          <Header />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <AboutMe />
        </AnimatedSection>
        <AnimatedSection direction="bottom">
          <ResumeDetails />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <Experience />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <Freelance />
        </AnimatedSection>
        <AnimatedSection direction="bottom">
          <TechnicalSkills />
        </AnimatedSection>
        <AnimatedSection direction="left">
          <MyProjects />
        </AnimatedSection>
        <AnimatedSection direction="right">
          <Messages />
        </AnimatedSection>
        <AnimatedSection direction="top">
          <Contacts />
        </AnimatedSection>
        <AnimatedSection direction="bottom">
          <Footer />
        </AnimatedSection>
      </ContentWrapper>
    </>
  );
}
