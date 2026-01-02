"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import ForBrandsSection from './ForBrandsSection'
import ForCreatorsSection from './ForCreatorsSection'
import { motion } from 'framer-motion'

export default function HowItWorksSection() {
    return (
        <div id="how-it-works" className='flex flex-col items-center justify-center   py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'
            style={{
                backgroundImage: `url('/works/works-bg.png')`, // change path
            }}
        >
            <motion.h2 
                initial={{ opacity: 0, rotateX: -15 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 md:mt-6 lg:mt-10 text-center mb-10'
            >
                How It Works
            </motion.h2>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-6 lg:gap-8  rounded-2xl pb-0! p-4 md:p-6 pt-6 md:pt-8 lg:pt-10  w-full max-w-7xl'
            >
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='bg-card h-fit p-3 md:p-4 pt-4 md:pt-12 rounded-2xl flex flex-col items-center justify-center gap-3 md:gap-4'
                >
                    <Image src="/works/cards.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
                    <Image src="/works/average.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />

                </motion.div>
                    <ForBrandsSection />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 lg:grid-cols-2 pt-0! items-center gap-4 md:gap-6 lg:gap-8  rounded-2xl p-4 md:p-6  w-full max-w-7xl'
            >
                    <ForCreatorsSection />
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='text-white bg-contain bg-card   py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4 justify-end text-left'
                >
                    <Image src="/works/cards-2.png" alt="Problem 1" className="w-full h-auto px-4" width={1000} height={1000} />
                    <Image src="/works/average-2.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />


                </motion.div>
            </motion.div>


        </div>
    )
}
