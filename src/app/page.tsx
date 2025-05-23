'use client'
import { CardScroller } from "@/components/CardScroller";
import { QualityService } from "@/components/QualityService";
import RoadmapSwiper from "@/components/RoadmapSwiper";
import AiPowered from "@/components/AiPowered";
import Services from "@/components/Services";
import HowItsWork from "@/components/HowItsWork";
import DiscoverGateway from "@/components/DiscoverGateway";
import Web3Services from "@/components/Web3Services";
import HeroSection from "@/components/HeroSection";
import PoweredBySection from "@/components/PoweredBySection";

export default function Home() {

  return (
    <>
      {/* hero section start  */}
      <HeroSection />

      {/* ai powered  */}
      <AiPowered />

      {/* card scroller start  */}
      <CardScroller />

      {/* web3 services start  */}
      <Web3Services />

      {/* Discover the Gateway */}
      <DiscoverGateway />

      {/* how its work  */}
      <HowItsWork />

      {/* Quality Service */}
      <div className="md:mt-[40px] py-10 max-w-screen-xl m-auto">
        <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl text-center font-bold mb-10">Quality services made simple, fast, and accessible  <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
        <QualityService />
      </div>

      {/* Services  */}
      <Services />

      {/* Swiper  */}
      <div id="Roadmap" className="py-10">
        <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl text-center font-bold mb-10">Roadmap  <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
        <RoadmapSwiper />
      </div>

      {/* powered by section  */}
      <PoweredBySection />

    </>
  );
}
