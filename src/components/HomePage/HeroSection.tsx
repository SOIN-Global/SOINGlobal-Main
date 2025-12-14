import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div
      className="min-h-screen  bg-cover bg-center w-full relative flex flex-col items-center justify-center pb-10"
     style={{
        backgroundImage: `url('/hero/hero-bg.png')`, // change path
      }}
    >
      <div className='flex flex-col gap-3 md:gap-4 items-center justify-center mt-28 md:mt-36 lg:mt-44 relative px-4'>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-center max-w-4xl'>Empowering Web3 Services with AI Driven Influencer Marketing</h1>
        <p className='text-sm md:text-base lg:text-lg text-center text-muted max-w-2xl'>Work with real creators. Automate everything. Track on-chain performance.</p>
        {/* <Button className='w-fit bg-black text-white rounded-full py-3 px-6 md:py-5 md:px-8 text-sm md:text-base'>Get Started <ArrowRight className='w-4 h-4 md:w-5 md:h-5' /></Button> */}

        <Image src="/hero/connect-wallet.svg" alt="Partners" className="w-24 lg:w-20  xl:w-32  h-full absolute -bottom-20 lg:-bottom-26 right-0 xl-right-12 xl:-right-40 " width={1000} height={1000} />
        <Image src="/hero/create-campaign.svg" alt="Partners" className="w-24 lg:w-20 xl:w-32  h-full absolute top-14 md:top-0 left-0 lg:-left-10 xl:-left-40 " width={1000} height={1000} />
      </div>
      <div className='h-60 sm:h-80 md:h-96 lg:h-120 bg-contain bg-no-repeat bg-center w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4'
        style={{
          backgroundImage: `url('/hero/dashboard.png')`, // change path
        }}
      >

      </div>
    </div>
  );
}
