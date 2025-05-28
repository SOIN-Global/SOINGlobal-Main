import Image from 'next/image'
import React from 'react'
import gatewayImage from "@/assets/discover-image.png";

const DiscoverGateway = () => {
    return (
        <div className="overflow-hidden my-6">
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 p-8 bg-[#210F53] rounded-lg md:h-[400px] my-22 md:border border-none dark:border-white/30 max-w-screen-xl m-auto mx-4 md:mx-auto">
                <div className="w-full md:w-1/2 text-white/80">
                    <p className="text-xl"><span className="font-bold text-[#CFBEFF]">Discover the Gateway:</span> Earn crypto rewards on your Web3 journey. Engage with your favorite communities and boost your portfolio with our AI agent strategies—powered by real-time sentiment and data intelligence.</p>
                    <div className="gradient-border mt-6 w-fit rounded-lg">
                        <button className=" px-12 py-2 rounded-lg bg-[#210F53] border-[#EFF] text-white font-medium transition">
                            AI-Agent
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-[400px] md:h-full">
                    <Image src={gatewayImage} alt="ai-powered-social-intelligence" quality={100} width={820} height={450} className="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:-right-[370px] w-fit h-full md:h-fit object-cover" />
                </div>
            </div>
        </div>
    )
}

export default DiscoverGateway