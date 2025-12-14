"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SolutionSection() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 bg-black py-6 md:py-8 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
            <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 md:mt-6 lg:mt-10 text-center'
            >
                The Solution
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 bg-card rounded-2xl p-4 md:p-6  mt-4 md:mt-6 lg:mt-10 w-full max-w-7xl'
            >
                    <Image src="/solution/influencer-card.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />

                <div className='text-white flex flex-col gap-3 md:gap-4 justify-center text-left px-8'>
                    <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                        Verified Influencers/Creators <br /> & AI-Powered Matching
                    </h2>
                    <p className='text-muted-foreground text-sm md:text-base'>every profile backed by decentralized identity, reputation and <br /> real data.our system finds the right creator for the right brand, <br /> at the right time.</p>

                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8      w-full max-w-7xl'
            >
                <div className='bg-card px-6 md:px-8 pt-8 md:pt-10 rounded-2xl flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8'>
                      <div className='space-y-3 md:space-y-4'>
                        <h2 className='text-left text-xl md:text-2xl lg:text-3xl text-white'>
                           Smart Contract-Driven Campaigns
                        </h2>
                        <p className='text-muted-foreground text-sm md:text-base'>payments locked, deliverables verified, trust enforced.</p>

                    </div>
                    <Image src="/solution/pay.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
                  

                </div>
                <div className='text-white bg-contain bg-card p-3 md:p-4 py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4 justify-end text-left'
                    
                >
                    <Image src="/solution/analytics.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
              
                  <div className='flex flex-col gap-4 px-6'>
                      <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                        Real-Time Analytics & Social Intelligence
                    </h2>
                    <p className='text-muted-foreground text-sm md:text-base'>we monitor sentiment, engagement and trends to ensure brands stay ahead. With these pieces combined, brands can launch influencer campaigns that are faster, cheaper, more transparent and far more effective.</p>
                  </div>

                </div>
            </motion.div>


        </div>
    )
}
