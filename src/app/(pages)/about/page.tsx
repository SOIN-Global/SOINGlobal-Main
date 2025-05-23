"use client"
import React from 'react'
import { CardScroller } from '@/components/CardScroller'

const about = () => {
    return (
        <>
            <div className="text-center py-10 max-w-screen-xl m-auto px-4">
                {/* header section  */}
                <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl font-bold mb-10">About Us <span className="mt-2 block w-24 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
                <p className='text-left text-black dark:text-white md:text-lg max-w-screen-lg m-auto'>SOIN Global is a decentralized platform that streamlines Web3 collaborations by directly connecting brands with service providers. Using blockchain and smart contracts, we ensure secure transactions, transparency, and trust. Our ecosystem eliminates intermediaries, enabling seamless project execution and fair payments. With SOIN, Web3 businesses can collaborate efficiently and scale effortlessly.
                    <br /> <br />
                    SOIN Global empowers brands and creators with AI-driven insights and automated workflows for smarter collaborations. Whether you&apos;re seeking services or offering expertise, our platform ensures efficiency, security, and success in the Web3 space.
                </p>

                {/* review card section  */}
                <div className="mt-20 ">
                    <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-3xl font-bold mb-10">As initiative in creating scam free web3 space</h2>
                    <CardScroller />
                </div>

                {/* our team section  */}
                {/* <div className="py-10">
                    <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl font-bold mb-10">Our Team <span className="mt-2 block w-24 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-black/70 dark:text-white/70 ">
                        <div className="flex flex-col items-center gap-4 border-black/10 dark:border-white/20 border w-full rounded-3xl bg-gradient-to-b from-[#C6EFEF]/30  to-[#8EE0E0]/60 dark:from-[#8EE0E0]/0 dark:via-[#0C1526] dark:to-[#0C1526]/0 p-7">
                            <div className="border border-black/40 dark:border-white/70 w-[80px] h-[80px] rounded-[100%]"></div>
                            <div className="">
                                <h6 className='font-bold'>Name</h6>
                                <p className='text-sm'>Managing Director</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4 border-black/10 dark:border-white/20 border w-full rounded-3xl bg-gradient-to-b from-[#C6EFEF]/30  to-[#8EE0E0]/60 dark:from-[#8EE0E0]/0 dark:via-[#0C1526] dark:to-[#0C1526]/0 p-7">
                            <div className="border border-black/40 dark:border-white/70 w-[80px] h-[80px] rounded-[100%]"></div>
                            <div className="">
                                <h6 className='font-bold'>Name</h6>
                                <p className='text-sm'>Managing Director</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4 border-black/10 dark:border-white/20 border w-full rounded-3xl bg-gradient-to-b from-[#C6EFEF]/30  to-[#8EE0E0]/60 dark:from-[#8EE0E0]/0 dark:via-[#0C1526] dark:to-[#0C1526]/0 p-7">
                            <div className="border border-black/40 dark:border-white/70 w-[80px] h-[80px] rounded-[100%]"></div>
                            <div className="">
                                <h6 className='font-bold'>Name</h6>
                                <p className='text-sm'>Managing Director</p>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}
export default about