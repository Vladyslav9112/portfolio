import Image from "next/image";
import Header from "./components/Header";
import ContentWrapper from "./components/global/ContentWrapper";

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <Header />
      </ContentWrapper>
    </>
  );
}
