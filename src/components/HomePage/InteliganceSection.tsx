"use client"

import Image from 'next/image'
import { Badge } from '../ui/badge'
import { motion } from 'framer-motion'

export default function InteliganceSection() {
    return (
        <div className='flex flex-col  items-center justify-center gap-4 md:gap-6 lg:gap-8 bg-black py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
            <motion.h2 
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 md:mt-6 lg:mt-10 text-center'
            >
                The Intelligence Layer Behind  <br />Every Alpha Call
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='mt-4 md:mt-6 lg:mt-10 w-full max-w-7xl flex flex-col justify-center items-center'
            >
               
                <Badge variant="primary" className='pr-4'>
                    <Image src="/inteligance/orbit.png" alt="Problem 1" className="inline-block w-6 h-6  p-1" width={1000} height={1000} />
                    Web3 Orbit
                </Badge>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8   p-4 md:p-6  '>

                    <div className='text-white bg-card rounded-2xl flex flex-col gap-4 md:gap-8 justify-center text-left pt-8'>
                        <div className='flex flex-col gap-4 px-6'>
                            <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                                Data-Backed Alpha Network
                            </h2>
                            <p className='text-muted-foreground text-sm md:text-base'>We track every whisper, spike and shift across Telegram and on-chain. <br />Callers get the fastest intelligence. Brands get real results</p>
                        </div>

                        <Image src="/inteligance/stats.png" alt="Problem 1" className=" rounded-2xl w-full h-full" width={1000} height={1000} />


                    </div>


                    <div className='text-white bg-contain bg-card p-3 md:p-4 py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4 justify-end text-left'

                    >
                        <Image src="/inteligance/coins.png" alt="Problem 1" className="max-w-48 h-auto" width={1000} height={1000} />
                        <Image src="/inteligance/profile.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />

                        <div className='flex flex-col gap-4 px-6'>
                            <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                                Caller Profiles, <br />
                                Verified by Data
                            </h2>
                            <p className='text-muted-foreground text-sm md:text-base'>Influencers don't self-report here — their performance does.Authenticity, accuracy, and ROI are displayed transparently for brands and users</p>
                        </div>

                    </div>

                </div>

            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='mt-4 md:mt-6 lg:mt-10 w-full max-w-7xl flex flex-col justify-center items-center'
            >
                <Badge variant="primary" className='pr-4'>
                    <Image src="/inteligance/treanches.png" alt="Problem 1" className="inline-block w-6 h-6  p-1" width={1000} height={1000} />
                    Trenches
                </Badge>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8   p-4 md:p-6   w-full max-w-7xl'>
                    <div className='text-white  bg-card p-3 md:p-4 py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4  text-left'>
                        <div className='space-y-3 md:space-y-4'>
                            <h2 className='text-left text-xl md:text-2xl lg:text-3xl text-white'>
                                Live Performance Metrics
                            </h2>
                            <p className='text-muted-foreground text-sm md:text-base'>See which calls outperformed the market. <br /> Track returns, success ratios, and signal strength with instant data visualizations.</p>

                        </div>
                        <Image src="/inteligance/performance.png" alt="Problem 1" className="w-full flex-1 h-auto" width={1000} height={1000} />


                    </div>
                    <div className='text-white bg-contain bg-card p-3 md:p-4 py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4 justify-end text-left'

                    >
                        <div className='flex flex-col gap-4 px-6'>
                            <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                                Positive & Negative Returns <br /> Dashboard
                            </h2>
                            <p className='text-muted-foreground text-sm md:text-base'>Every caller's wins and losses, exposed. <br /> No inflated stats. No screenshots from 2021. Just real numbers, updated live.</p>
                        </div>
                        <Image src="/inteligance/returns.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />



                    </div>
                </div>
            </motion.div>


        </div>
    )
}
