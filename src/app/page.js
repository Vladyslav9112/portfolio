import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Services from "./components/Services";
import PriceCalculator from "./components/PriceCalculator";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ContentWrapper from "./components/global/ContentWrapper";
import { QuoteProvider } from "./context/QuoteContext";

export default function Home() {
  return (
    <ContentWrapper>
      <Header />
      <HeroSection />
      <QuoteProvider>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <AboutMe />
          <MyProjects />
          <Services />
          <PriceCalculator />
          <Contacts />
          <Footer />
        </div>
      </QuoteProvider>
    </ContentWrapper>
  );
}
