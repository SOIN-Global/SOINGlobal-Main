"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProblemSection() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 bg-black py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 md:mt-6 lg:mt-10 text-center'
            >
                The Problem
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 bg-card rounded-2xl p-4 md:p-6 py-6 md:py-8 lg:py-10 mt-4 md:mt-6 lg:mt-10 w-full max-w-7xl'
            >
                <div className='bg-popover p-3 md:p-4 py-4 md:py-6 rounded-4xl flex flex-col items-center justify-center gap-3 md:gap-4'>
                    <Image src="/problem/influencers.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
                    <Button className='rounded-full text-sm md:text-base'>Get Verified <ArrowRight className='w-4 h-4 md:w-5 md:h-5' /></Button>

                </div>
                <div className='text-white flex flex-col gap-3 md:gap-4 justify-center text-left'>
                    <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                        Trusted influencers? Hard to <br /> find. Campaigns lack <br /> transparency.
                    </h2>
                    <p className='text-muted-foreground text-sm md:text-base'>Too many "KOLs" are unverified, overhyped, or simply don't <br /> deliver.</p>

                    <p className='text-muted-foreground text-sm md:text-base'>Brands pay upfront, but results are unclear — and middlemen inflate costs instead of performance.</p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8  rounded-2xl    w-full max-w-7xl'
            >
                <div className='bg-card p-5 md:p-4 py-4 md:py-12 rounded-2xl flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8'>
                    <Image src="/problem/chips.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
                    <div className='space-y-3 md:space-y-4'>
                        <h2 className='text-left text-xl md:text-2xl lg:text-3xl text-white'>
                            Upfront payments drain budgets before results even exist.
                        </h2>
                        <p className='text-muted-foreground text-sm md:text-base'>You pay before anything happens and most of that money never
                            returns real users. Upfront models make marketing a gamble instead of a strategy.</p>

                    </div>

                </div>
                <div className='text-white bg-contain bg-card   py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4 justify-end text-left'

                >
                    <Image src="/problem/graph2.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
                    <div className='flex flex-col gap-4 p-4'>
                        <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                            Analytics? Delayed or completely missing.
                        </h2>
                        <p className='text-muted-foreground text-sm md:text-base'>Most projects have no real-time understanding of what their community actually thinks or does.</p>
                    </div>


                </div>
            </motion.div>


        </div>
    )
}
