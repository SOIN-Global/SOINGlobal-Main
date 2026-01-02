import HeroSection from "@/components/HomePage/HeroSection";
import ProblemSection from "@/components/HomePage/ProblemSection";
import SolutionSection from "@/components/HomePage/SolutionSection";
import { AiIntegrationsSection } from "@/components/HomePage/AiIntegrationsSection";
import Image from "next/image";
import SoinDeliversSection from "@/components/HomePage/SoinDeliversSection";
import HowItWorksSection from "@/components/HomePage/HowItWorksSection";
import InteliganceSection from "@/components/HomePage/InteliganceSection";
import RoadMapSection from "@/components/HomePage/RoadMapSection";
import FooterSection from "@/components/HomePage/FooterSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Navbar from "@/components/HomePage/Navbar";

export default function Home() {
  return (
    <div className="relative w-full bg-black font-sans overflow-x-hidden">
      {/* Fixed Navbar - always stays on top */}
      <div className="flex justify-center">
        <Navbar />

      </div>

      {/* Sticky Hero Section - stays in place */}
      <div id="hero" className="sticky top-0 lg:-top-40 z-0 overflow-x-hidden">
        <HeroSection />
      </div>

      {/* Sliding sections - each sticks and then gets replaced by the next */}
      <div className="relative z-10">
        <section className="relative">
          <div className="sticky top-0 bg-black">
            <ProblemSection />
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 bg-black">
            <SolutionSection />
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 bg-black">
            <SoinDeliversSection />
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 bg-black">
            <HowItWorksSection />
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 bg-black">
            <AiIntegrationsSection />
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 bg-black">
            <InteliganceSection />
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 bg-black">
            <RoadMapSection />
          </div>
        </section>

        <div className="relative z-20 bg-black">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
