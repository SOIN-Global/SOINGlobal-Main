"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ArrowRight, MapPin, Star, MessageCircle, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const influencers = [
    {
        id: 1,
        name: "Brass high",
        role: "Influencer",
        avatar: "/solution/Brass-high.png",
        location: "UK",
        rating: 4.5,
        verified: true,
        description: "Brass high is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for delivering high-quality content that educates and engages audiences across multiple platforms.",
        shortDesc: "Brass high is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for deli...",
        tags: ["#DeFi Influencer", "#Crypto Educator", "#NFT Artist"]
    },
    {
        id: 2,
        name: "Nft prince",
        role: "Influencer",
        avatar: "/solution/kilo-ben.png",
        location: "NG",
        rating: 5,
        verified: true,
        description: "Nft prince is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for delivering high-quality content that educates and engages audiences across multiple platforms.",
        shortDesc: "Nft prince is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for deli...",
        tags: ["#DeFi Influencer", "#Crypto Educator", "#NFT Artist"]
    },
    {
        id: 3,
        name: "crypto sage",
        role: "Influencer",
        avatar: "/solution/crypto sage.png",
        location: "GER",
        rating: 5,
        verified: true,
        description: "Crypto sage is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for delivering high-quality content that educates and engages audiences across multiple platforms.",
        shortDesc: "Crypto sage is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for deli...",
        tags: ["#DeFi Influencer", "#Crypto Educator", "#NFT Artist"]
    },
    {
        id: 4,
        name: "Kilo ben",
        role: "Influencer",
        avatar: "/solution/john-doe.png",
        location: "USA",
        rating: 5,
        verified: true,
        description: "Kilo ben is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for delivering high-quality content that educates and engages audiences across multiple platforms.",
        shortDesc: "Kilo ben is a verified Web3 content creator with a strong voice in the crypto and NFT space. Known for deli...",
        tags: ["#DeFi Influencer", "#Crypto Educator", "#NFT Artist"]
    }
];

const InfluencerCard = ({ influencer, index }: any) => {
    return (
        <div className="bg-[#0D0D0D] rounded-xl p-3 border border-transparent hover:border-primary/20 hover:scale-105 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300 ease-out">
            <div className="space-y-1.5">
                {/* Header */}
                <div className='flex justify-between gap-2'>
                    <div className="relative flex-shrink-0 flex items-start gap-2">
                        <Image
                            src={influencer.avatar}
                            alt={influencer.name}
                            className="w-8 h-8 rounded-full object-cover"
                            width={1000}
                            height={1000}
                        />
                        <div>
                            <h3 className="text-white font-semibold text-xs">{influencer.name}</h3>
                            <p className="text-gray-400 text-[10px]">{influencer.role}</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                        <Image
                            src='/solution/status.png'
                            alt={influencer.name}
                            className="w-auto h-3 rounded-full"
                            width={1000}
                            height={1000}
                        />

                        <div className="flex items-center gap-1 text-[10px] text-gray-400 flex-shrink-0">
                            <MapPin className="w-2.5 h-2.5" />
                            <span>{influencer.location}</span>
                            <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                            <span>{influencer.rating}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-[10px] leading-relaxed w-full">
                    {influencer.shortDesc}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-1 w-full">
                    <Badge className="text-gray-500 transition-colors font-medium bg-[#131313] text-[9px] px-1.5 py-0">
                        #DeFi
                    </Badge>
                    <Badge className="text-gray-500 transition-colors font-medium bg-[#131313] text-[9px] px-1.5 py-0">
                        #Crypto
                    </Badge>
                    <Badge className="text-gray-500 transition-colors font-medium bg-[#131313] text-[9px] px-1.5 py-0">
                        #NFT
                    </Badge>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-1.5">
                    <Button
                        variant="outline2"
                        size="sm"
                        className="flex-1 rounded-full text-[10px] h-7 px-2"
                    >
                        <Briefcase className="w-3 h-3" />
                        Campaign
                    </Button>
                    <Button
                        size="sm"
                        className="flex-1 rounded-full text-[10px] h-7 px-2"
                    >
                        <MessageCircle className="w-3 h-3" />
                        Chat
                    </Button>
                </div>
            </div>
        </div>
    );
};

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
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 bg-card rounded-2xl p-4 md:p-6 mt-4 md:mt-6 lg:mt-10 w-full max-w-7xl items-center'
            >
                {/* Influencer Cards Section */}
                <div className="w-full h-full flex items-center">
                    <div className="grid gap-3 w-full grid-cols-2">
                        {influencers.map((influencer, index) => (
                            <InfluencerCard
                                key={influencer.id}
                                influencer={influencer}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <div className='text-white flex flex-col gap-3 md:gap-4 justify-center text-left px-4 md:px-8'>
                    <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                        Verified Influencers/Creators <br /> & AI-Powered Matching
                    </h2>
                    <p className='text-muted-foreground text-sm md:text-base'>every profile backed by decentralized identity, reputation and real data. our system finds the right creator for the right brand, at the right time.</p>
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
