import Image from "next/image";
import IntroSection from "./_components/intro-section";
import AboutSection from "./_components/about-section";
import ServiceSection from "./_components/services-section";
import FootSection from "./_components/footer-section";

export default function Home() {
  return (
    <main className="pt-20 md:pt-18">
      <IntroSection />
      <AboutSection />
      <ServiceSection />
      <FootSection />

    </main>
  );
}
