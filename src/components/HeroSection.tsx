import React, { useState } from 'react'
import { BackgroundBeams } from "@/components/ui/background-beams";
import FormModal from "@/components/FormModel";
import TypewriterInput from "@/components/TypewriterInput";

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="relative z-5 bannersec max-w-4xl m-auto h-[90vh] max-h-[600px] flex justify-center flex-col items-center text-center space-y-4 md:space-y-8">

                <h1
                    className="text-4xl md:text-5xl font-bold text-transparent"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #4EA9A9 0%, #4EA9A9 19%, #A1920E 43%, #A1920E 63%, #5B4A9A 82%, #5B4A9A 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                    }}
                >
                    Tokenising Web3 Services
                </h1>

                <p className="text-xl md:text-3xl text-black dark:text-white/80 capitalize px-4 md:p-0">a safe Platform to trade your services on-chain with advanced AI and Data Intelligence</p>
                <button onClick={() => setShowModal(true)} className="px-4 py-2 text-white dark:text-black font-light rounded-lg cursor-pointer transition-all duration-300 shadow-[0_0_5px_rgba(127,255,212,0.8)] hover:shadow-[0_0_8px_rgba(127,255,212,1)] bg-[#48A3A4] dark:bg-[linear-gradient(131deg,_#98faff,_#9bf5fb,_#6fe7db)] text-xl z-10">
                    Get Early Access
                </button>
                <TypewriterInput />
            </div>
            {showModal && <FormModal onClose={() => setShowModal(false)} />}
            {/* hero bg animation  */}
            <BackgroundBeams />
        </>
    )
}

export default HeroSection