import { useScrollProgress } from "@/hooks/useScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import VisibilityProblem from "@/components/VisibilityProblem";
import WhatWeDo from "@/components/WhatWeDo";
import IndiaMap from "@/components/IndiaMap";
import VisionSection from "@/components/VisionSection";
import RoadmapJourney from "@/components/RoadmapJourney";
import CoFounders from "@/components/CoFounders";
import FAQSection from "@/components/FAQSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <VisibilityProblem />
        <WhatWeDo />
        <IndiaMap />
        <VisionSection />
        <RoadmapJourney />
        <CoFounders />
        <Partners />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
