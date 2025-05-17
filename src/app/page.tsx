'use client'
import Image from "next/image";
import { CardScroller } from "@/components/CardScroller";
import { QualityService } from "@/components/QualityService";
import RoadmapSwiper from "@/components/RoadmapSwiper";
import poweredByImage1 from "@/assets/logos/bnb-chain-logo.png";
import poweredByImage2 from "@/assets/logos/solana-logo.png";
import poweredByImage3 from "@/assets/logos/ethereum-logo.png";
import { useState } from "react";
import ContactModal from "@/components/ContactFormModel";
import AiPowered from "@/components/AiPowered";
import Services from "@/components/Services";
import HowItsWork from "@/components/HowItsWork";
import DiscoverGateway from "@/components/DiscoverGateway";
import Web3Services from "@/components/Web3Services";
import HeroSection from "@/components/HeroSection";


export default function Home() {

  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
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

      {/* Powered by  */}
      <div className="py-10 max-w-screen-xl m-auto">
        <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl font-bold text-center mb-10">Powered by  <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
        <div className="flex justify-evenly items-center gap-6">
          <Image src={poweredByImage1} alt="" quality={100} width={300} height={300} className="w-1/5 max-w-[220px] h-full object-cover" />
          <Image src={poweredByImage2} alt="" quality={100} width={300} height={300} className="w-1/5 max-w-[220px] h-full object-cover drop-shadow-xl" />
          <Image src={poweredByImage3} alt="" quality={100} width={300} height={300} className="w-1/5 max-w-[220px] h-full object-cover" />
        </div>

        {/* contact btn  */}
        <div className="flex justify-center mt-10 h-12">
          <button
            onClick={() => setShowContactModal(true)}
            className="px-10 py-2 text-white dark:text-black font-light rounded-lg cursor-pointer transition-all duration-300 shadow-[0_0_5px_rgba(127,255,212,0.8)] hover:shadow-[0_0_8px_rgba(127,255,212,1)] bg-[#48A3A4] dark:bg-[linear-gradient(131deg,_#98faff,_#9bf5fb,_#6fe7db)]"
          >
            Contact Us
          </button>

          {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
        </div>

      </div>

    </div>
  );
}
