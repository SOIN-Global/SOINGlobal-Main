"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight, Globe, Send, Mail } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FooterSection() {
    return (
        <footer className='  flex flex-col gap-8 md:gap-12 py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-black'
            style={{
                backgroundImage: `url('/roadmap/roadmap-bg.png')`,
            }}
        >
            {/* Main Footer Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 w-full max-w-7xl mx-auto'
            >
                {/* Left Section - CTA */}
                <div className='lg:col-span-4 flex flex-col gap-4 md:gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-lg sm:text-xl md:text-2xl font-normal text-white'>
                            Take control of your marketing.
                        </h3>
                        <p className='text-lg sm:text-xl md:text-2xl font-normal text-white'>
                            Start with SOIN
                        </p>
                    </div>
                    <Button className='rounded-full w-fit px-6 py-5 bg-teal-600 hover:bg-teal-700 text-white text-sm md:text-base'>
                        Get started <ArrowRight className='w-4 h-4 md:w-5 md:h-5' />
                    </Button>
                </div>

                {/* Company Links */}
                <div className='lg:col-span-2 flex flex-col gap-3 md:gap-4'>
                    <Link href="#" className='text-sm md:text-base text-muted-foreground hover:text-white transition-colors'>
                        About
                    </Link>
                    <Link href="#service" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        Services
                    </Link>
                    <Link href="#how-it-works" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        How it works
                    </Link>
                </div>

                {/* Resources Links */}
                <div className='lg:col-span-2 flex flex-col gap-3 md:gap-4'>
                    <h4 className='text-sm md:text-base  text-muted-foreground mb-1'>Resources</h4>
                    <Link href="#" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        Documentation
                    </Link>
                    <Link href="#roadmap" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        Roadmap
                    </Link>
                    <Link href="#" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        Tokenomics
                    </Link>
                </div>

                {/* Ecosystem Links */}
                <div className='lg:col-span-2 flex flex-col gap-3 md:gap-4'>
                    <h4 className='text-sm md:text-base  text-muted-foreground mb-1'>Ecosystem</h4>
                    <Link href="#" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        Terms & Conditions
                    </Link>
                    <Link href="#" className='text-sm md:text-base text-white hover:text-white transition-colors'>
                        Cookie Policy
                    </Link>
                </div>

                {/* Social Icons */}
                <div className='lg:col-span-2 flex flex-row lg:flex-col gap-4 md:gap-5 lg:items-end'>
                    <Link href="https://dapp.soinglobal.com/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-white transition-colors'>
                        <Globe className='w-5 h-5 md:w-6 md:h-6' />
                    </Link>
                    <Link href="https://x.com/SOIN_Global" target="_blank" rel="noopener noreferrer" className='text-white hover:text-white transition-colors'>
                        <svg className='w-5 h-5 md:w-6 md:h-6' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                    <Link href="https://t.me/SOINGLOBALAnnoucement" target="_blank" rel="noopener noreferrer" className='text-white hover:text-white transition-colors'>
                        <Send className='w-5 h-5 md:w-6 md:h-6' />
                    </Link>
                    <Link href="https://medium.com/@soinglobalblog" target="_blank" rel="noopener noreferrer" className='text-white hover:text-white transition-colors'>
                        <svg className='w-5 h-5 md:w-6 md:h-6' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                    </Link>
                    <Link href="https://www.linkedin.com/company/soinglobal" target="_blank" rel="noopener noreferrer" className='text-white hover:text-white transition-colors'>
                        <svg className='w-5 h-5 md:w-6 md:h-6' fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </Link>
                </div>
            </motion.div>


            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className=' h-38
                bg-contain bg-no-repeat bg-center
                '
                style={{
                    backgroundImage: `url('/footer/soin-global.png')`, // change path
                }}>

            </motion.div>
        </footer>
    )
}
