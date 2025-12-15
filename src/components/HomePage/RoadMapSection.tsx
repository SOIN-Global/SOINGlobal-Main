"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface RoadmapPhase {
    id: string
    year: string
    title: string
    subtitle: string
    items: string[]
}

export default function RoadMapSection() {
    const roadmapPhases: RoadmapPhase[] = [
        {
            id: 'q1-2025',
            year: 'Q1',
            title: 'Q1 2025 (MVP & Core Development)',
            subtitle: '',
            items: [
                'Full-Stack Dev Onboard: To Go → AI Engine Framework, ML Pipelines (Feeds, KOL Graphs, Smart Contract Research, Prep Key Report',
                'Community-curated audit & onboarding documentation',
            ]
        },
        {
            id: 'q2-2025',
            year: 'Q2',
            title: 'Q2 - Private Beta & Iteration',
            subtitle: '',
            items: [
                'Invite select brands & KOLs for closed testing (product refinement)',
                'Bug fixes, feedback loops, enhancements (AI & UX emphasis)',
            ]
        },
        {
            id: 'q3-2025',
            year: 'Q3',
            title: 'Q3 - Public Launch & Market Penetration',
            subtitle: '',
            items: [
                'Online platform goes live',
                'Activate creator onboarding campaigns & community growth loops',
                'Execute marketing campaigns',
            ]
        },
        {
            id: 'q4-2025',
            year: 'Q4',
            title: 'Q4 - Scaling & Monetization',
            subtitle: '',
            items: [
                'Onboard premium tools (subscriptions, transaction fees, enhancements, marketplace)',
                'Ecosystem high-growth regions',
                'Boost data performance-predictive AI & user-adjusted funding',
            ]
        },
        {
            id: '2026',
            year: '2026',
            title: '2026: Ecosystem Expansion & Token Utility Growth',
            subtitle: '',
            items: [
                'Platform Governance Launch: Allow token holders to stake on key decisions',
                'Token Utility Expansion: Staking referrals rewards (benefits for SECON holders)',
                'Cross-Chain Integration: Integrate with other chains (e.g. Ethereum/Solana) and assets',
                'Marketplace Growth: Facilitate secondary KOL listing across more active campaigns',
                'International Rollout: Localize API (media campaign with other analytics tools so innovative inside',
                'International Rollout: Collaborations with LI & partners mapping DOAs, on-AI-data journalists',
            ]
        },
        {
            id: '2027',
            year: '2027',
            title: '2027 - Global Scale & AI Dominance in Web3 Marketing',
            subtitle: '',
            items: [
                'Industry Standard: Platform becomes the benchmark for verified Web3 influencer campaigns, setting standards across industry Boeings',
                'Decentralized Marketing: Full support for on-chain peer-to-peer automated settings (smart-case testing)',
                'Enterprise Adoption: Launch Enterprise tools with API access for major Web3 brands and exchanges',
                'Community-Owned Network: Transition toward a fully decentralized setting giving more control to well-staked DAO & participation incentives for peer education',
                'Tech-Driven AI Innovation: Integrate tools for sentiment analysis and real-time prediction enabling SOINs ecosystem',
                'KOLs with DAO support: Launch incubation for KOLs with DAO grants, funded on DAO grants',
            ]
        },
    ]

    // Map year labels to correct image filenames
    const getYearImage = (year: string) => {
        const imageMap: Record<string, string> = {
            'Q1': 'Q1.png',
            'Q2': 'Q2.png',
            'Q3': 'Q3.png',
            'Q4': 'Q4.png',
            '2026': '2026.png',
            '2027': '2027.png'
        }
        return imageMap[year] || 'Q1.png'
    }

    return (
        <div id="roadmap" className='flex flex-col items-center justify-center gap-4 py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-black'
            style={{
                backgroundImage: `url('/roadmap/roadmap-bg.png')`,
            }}
        >
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 md:mt-6 lg:mt-10 text-center mb-8 md:mb-12 lg:mb-16'
            >
                Roadmap
            </motion.h2>

            <div className='w-full max-w-7xl flex flex-col gap-8 md:gap-12 lg:gap-16'>
                {roadmapPhases.map((phase, index) => (
                    <motion.div 
                        key={phase.id} 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className='relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8'
                    >
                        {/* Content Section */}
                        <div className='lg:col-span-9 flex flex-col gap-3 md:gap-4'>
                            {/* Title */}
                            <h3 className='text-lg sm:text-xl md:text-2xl font-normal text-white'>
                                {phase.title}
                            </h3>

                            {/* Bullet Points */}
                            <ul className='flex flex-col gap-2 md:gap-3'>
                                {phase.items.map((item, index) => (
                                    <li key={index} className='flex items-center justify-start gap-2 md:gap-3 text-muted-foreground'>
                                        <span className=' '>•</span>
                                        <span className='text-xs sm:text-base md:text-sm  leading-relaxed'>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Year Badge */}
                        <div className='lg:col-span-3 flex items-start justify-start lg:justify-end'>
                            <div className='relative w-20 h-12 '>
                                <Image
                                    src={`/roadmap/${getYearImage(phase.year)}`}
                                    alt={phase.year}
                                    fill
                                    className=''
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
