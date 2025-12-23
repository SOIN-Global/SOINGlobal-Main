'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const walletIconRef = useRef<HTMLImageElement>(null);
  const campaignIconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero background fade in
      gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Heading animation - split words and animate
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.6,
          ease: 'power2.out',
        });
      }

      // Dashboard image animation
      if (dashboardRef.current) {
        gsap.from(dashboardRef.current, {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1.2,
          delay: 0.9,
          ease: 'power3.out',
        });
      }

      // Floating icons animation
      if (walletIconRef.current) {
        gsap.from(walletIconRef.current, {
          opacity: 0,
          x: 50,
          rotation: 15,
          duration: 1,
          delay: 1.2,
          ease: 'back.out(1.7)',
        });

        // Continuous floating animation
        gsap.to(walletIconRef.current, {
          y: -15,
          rotation: 5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (campaignIconRef.current) {
        gsap.from(campaignIconRef.current, {
          opacity: 0,
          x: -50,
          rotation: -15,
          duration: 1,
          delay: 1.2,
          ease: 'back.out(1.7)',
        });

        // Continuous floating animation
        gsap.to(campaignIconRef.current, {
          y: -20,
          rotation: -5,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen  bg-cover bg-center w-full relative flex flex-col items-center justify-center pb-10"
     style={{
        backgroundImage: `url('/hero/hero-bg.png')`, // change path
      }}
    >
      <div className='flex flex-col gap-3 md:gap-4 items-center justify-center mt-28 md:mt-36 lg:mt-44 relative px-4'>

        <h1 
          ref={headingRef}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center max-w-4xl'
        >
          Empowering Web3 Services with AI Driven Influencer Marketing
        </h1>
        <p 
          ref={subtitleRef}
          className='text-sm md:text-base lg:text-lg text-center text-muted max-w-2xl'
        >
          Work with real creators. Automate everything. Track on-chain performance.
        </p>
        {/* <Button className='w-fit bg-black text-white rounded-full py-3 px-6 md:py-5 md:px-8 text-sm md:text-base'>Get Started <ArrowRight className='w-4 h-4 md:w-5 md:h-5' /></Button> */}

        <Image 
          ref={walletIconRef}
          src="/hero/connect-wallet.svg" 
          alt="Partners" 
          className="w-24 lg:w-20  xl:w-32  h-full absolute -bottom-20 lg:-bottom-26 right-0 xl-right-12 xl:-right-40 " 
          width={1000} 
          height={1000} 
        />
        <Image 
          ref={campaignIconRef}
          src="/hero/create-campaign.svg" 
          alt="Partners" 
          className="w-24 lg:w-20 xl:w-32  h-full absolute top-14 md:top-0 left-0 lg:-left-10 xl:-left-40 " 
          width={1000} 
          height={1000} 
        />
      </div>
      <div 
        ref={dashboardRef}
        className='h-60 sm:h-80 md:h-96 lg:h-120 bg-contain bg-no-repeat bg-center w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4'
        style={{
          backgroundImage: `url('/hero/dashboard.png')`, // change path
        }}
      >

      </div>
    </div>
  );
}
