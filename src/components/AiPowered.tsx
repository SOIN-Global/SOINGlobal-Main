'use client'
import React, { useEffect, useState } from 'react'
import profileImage from "@/assets/profile.png";
import profileImage3 from "@/assets/profile2.png";
import profileImage2 from "@/assets/profile3.png";
import channelImage from "@/assets/connect-channel.png";
import OrderImage from "@/assets/order-status.png";
import profileLightImage from "@/assets/light-progile.png";
import profileLightImage2 from "@/assets/light-progile2.png";
import profileLightImage3 from "@/assets/light-progile3.png";
import channelLightImage from "@/assets/light-connect-channel.png";
import OrderLightImage from "@/assets/light-order-status.png";
import Image from 'next/image';
import { useTheme } from 'next-themes';

const AiPowered = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

    return (
        <>
            {/* ai powered social intelligence start  */}
            <div className="text-center py-10 max-w-screen-xl m-auto px-4">
                <h2 className="text-black dark:text-[#C6EFEF] text-4xl font-bold mb-10">AI-Powered Social Intelligence  <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
                <div className="flex flex-wrap justify-center gap-4 md:text-lg">
                    <span className="px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full dark:text-[#CFBEFF] hover:bg-white/20 transition-all duration-300">Smarter Influencer Marketing</span>
                    <span className="px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full dark:text-[#CFBEFF] hover:bg-white/20 transition-all duration-300">Maximized Engagement</span>
                    <span className="px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full dark:text-[#CFBEFF] hover:bg-white/20 transition-all duration-300">Better ROI</span>
                    <span className="px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full dark:text-[#CFBEFF] hover:bg-white/20 transition-all duration-300">Say goodbye to guesswork</span>
                </div>
                <div className="flex justify-center items-center gap-5 flex-wrap py-10">
                    <div className="w-full md:w-[42%]">
                        <Image src={resolvedTheme === 'dark' ? profileImage : profileLightImage}
                         alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-[42%]">
                        <Image src={resolvedTheme === 'dark' ? profileImage2 : profileLightImage2}
                        alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-[28%]">
                        <Image src={resolvedTheme === 'dark' ? profileImage3 : profileLightImage3}
                        alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-[28%]">
                        <Image src={resolvedTheme === 'dark' ? channelImage : channelLightImage}
                        alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-[28%]">
                        <Image src={resolvedTheme === 'dark' ? OrderImage : OrderLightImage}
                        alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default AiPowered