import ContactSection from "@/components/visitor-side/ContactSection/ContactSection";
import Footer from "@/components/visitor-side/Footer/Footer";
import HeroSection from "@/components/visitor-side/HeroSection/HeroSection";
import ImageSection from "@/components/visitor-side/ImageSection/ImageSection";
import PortFolioSection from "@/components/visitor-side/PortfolioSection/PortFolioSection";
import TechnologiesSection from "@/components/visitor-side/TechnologiesSection/TechnologiesSection";
import WhatIDoSection from "@/components/visitor-side/WhatIDoSection/WhatIDoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <ImageSection imageLink={`/img/photo/notebook.jpg`} />
      <PortFolioSection />
      <ImageSection imageLink={`/img/photo/code.jpg`} />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
