"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Roadmap data
const roadmapData = [
  {
    quarter: "Q3 (2024)",
    title: "Technical Roadmap",
    items: [
      "Finalized system architecture integrating blockchain networks using smart contract languages (Solidity/Move) and robust API endpoints.",
      "Built initial prototypes for decentralized identity verification and campaign creation modules with direct blockchain node connectivity.",
      "Simulated multi-payment transactions to ensure seamless processing."
    ]
  },
  {
    quarter: "Q4 (2024)",
    title: "Technical Roadmap",
    items: [
      "Refined core features like Partnership Place and Customizable KOL Quests based on internal and beta testing feedback.",
      "Enhanced for real-time analytics using advanced neural network models and a streaming data pipeline ",
      "Fortified the multi-payment system with cross-chain interoperability protocols for seamless fiat and crypto transactions."
    ]
  },
  {
    quarter: "Q1 (2025)",
    title: "MVP & Core Development",
    items: [
      "Finalize MVP with core features: SONai (AI engine), Partnership Place, Customizable KOL Quests, and Smart Contract Payouts.",
      "Complete rigorous security testing and audits.",
      "Develop user guides and developer documentation for seamless onboarding."
    ]
  },
  {
    quarter: "Q2 (2025)",
    title: "Private Beta & Iteration",
    items: [
      "Launch a closed beta for select brands, influencers, and creators.",
      "Fix bugs and refine features based on feedback.",
      "Collect feedback and iterate to refine UX and feature functionality.",
      "Expand features with enhanced analytics and multi-payment support."
    ]
  },
  {
    quarter: "Q3 (2025)",
    title: "Public Launch & Market Penetration",
    items: [
      "Integrate beta feedback; finalize and polish the core platform features.",
      "Open the platform globally to all users.",
      "Execute targeted marketing campaigns and PR initiatives.",
      "Onboard strategic partners and early adopters to build network effects."
    ]
  },
  {
    quarter: "Q4 (2025)",
    title: "Scaling & Monetisation",
    items: [
      "Introduce premium features like subscription models and advanced monetization tools.",
      "Scale infrastructure and expand into high-growth regions.",
      "Optimise user acquisition strategies and platform performance based on real-time data."
    ]
  },
  {
    quarter: "Beyond 2025",
    title: "Continuous Innovation",
    items: [
      "Enhance AI with predictive analytics and deeper recommendations.",
      "Broaden the service portfolio and pursue cross-industry partnerships.",
      "Continuously optimize the platform for scalability, user satisfaction, and long-term success."
    ]
  }
];

const RoadmapSwiper = () => (
  <div className="roadmap-swiper-bg max-w-screen-xl m-auto">
    <Swiper
      effect="coverflow"
      // grabCursor={true}
      centeredSlides={true}
      modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel]}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 3,
        slideShadows: false
      }}
      keyboard={{ enabled: true }}
      // mousewheel={{ thresholdDelta: 70 }}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true
      }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        1560: { slidesPerView: 3 },
        2060: { slidesPerView: 3 }
      }}
      className="roadmap-swiper"
    >
      {roadmapData.map((item, index) => (
        <SwiperSlide key={index}>
          {/* css is in global.css  */}
          <div className="roadmap-card gradient-border rounded-3xl w-4/5 h-[500px] md:w-auto ">
            <div className="bg-gradient-to-b from-[#ffffff] via-[#F9FEFE] to-[#ECFAFA] dark:bg-[rgb(18,28,48)] dark:bg-none w-full h-full rounded-3xl p-8">
              <h2 className="roadmap-quarter text-[#48A3A4] dark:text-[#C6EFEF]">{item.quarter}</h2>
              <h3 className="roadmap-title text-[#5B4A9A] dark:text-[#CFBEFF]">{item.title}</h3>
              <ul className="roadmap-list text-black/70 dark:text-white/90">
                {item.items.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>

          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next text-black dark:text-white"></div>
      <div className="swiper-button-prev text-black dark:text-white"></div>
      <div className="swiper-pagination"></div>
    </Swiper>
  </div>
);

export default RoadmapSwiper;