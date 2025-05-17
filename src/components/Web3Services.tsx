import Image from 'next/image'
import React from 'react'
import serviceImage1 from "@/assets/services/ai_pwr1.webp";
import serviceImage2 from "@/assets/services/ai_pwr2.webp";
import serviceImage3 from "@/assets/services/ai_pwr3.webp";
import serviceImage4 from "@/assets/services/ai_pwr4.webp";


const Web3Services = () => {
    return (
        <div className="text-center py-10 max-w-screen-xl m-auto px-4">
            <h2 className="text-black dark:text-[#C6EFEF] text-4xl font-bold mb-6">Innovating the Future of Web3 Services <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
            {/* cards  */}
            <div className="flex justify-center items-center flex-wrap gap-4 mt-6 md:m-0">
                <div className="w-[46%] md:w-[22%] md:mt-[200px]">
                    <Image src={serviceImage1} alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="w-[46%] md:w-[22%] ">
                    <Image src={serviceImage2} alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="w-[46%] md:w-[22%] md:mt-[200px]">
                    <Image src={serviceImage3} alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="w-[46%] md:w-[22%]">
                    <Image src={serviceImage4} alt="ai-powered-social-intelligence" quality={100} width={400} height={400} className="w-full h-full object-cover" />
                </div>

            </div>
        </div>
    )
}

export default Web3Services