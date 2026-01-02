"use client"

import Image from "next/image"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface DeliveryFeature {
    id: string
    icon: string
    title: string
    description: string
}

export default function SoinDeliversSection() {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Animate heading
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, filter: "blur(10px)" },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 80%",
                        once: true
                    }
                }
            )
        }

        // Animate cards
        if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.feature-card')
            gsap.fromTo(
                cards,
                { opacity: 0, rotateY: 15, transformOrigin: "center" },
                {
                    opacity: 1,
                    rotateY: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 75%",
                        once: true
                    }
                }
            )
        }
    }, [])

    const features: DeliveryFeature[] = [
        {
            id: "feature-1",
            icon: "/delvery/button-1.png",
            title: "AI-Powered Influencer <br/> Discovery",
            description: "Verified identity, real engagement, authentic audiences — discover KOLs who can actually deliver."
        },
        {
            id: "feature-2",
            icon: "/delvery/button-2.png",
            title: "Smart <br/>  Matchmaking",
            description: "Our AI engine matches brands and creators based on data, not guesswork — optimizing alignment and results."
        },
        {
            id: "feature-3",
            icon: "/delvery/button-3.png",
            title: "Social Intelligence <br/>  Dashboard",
            description: "Understand audience behavior, trends, and sentiment across platforms in real time — free for all users."
        },
        {
            id: "feature-4",
            icon: "/delvery/button-4.png",
            title: "Unified Campaign <br/>  Management",
            description: "Plan, execute, track, and manage KOL campaigns in one place. No spreadsheets, no Telegram chaos."
        },
        {
            id: "feature-5",
            icon: "/delvery/button-5.png",
            title: "Community Trend & <br/>  Sentiment Insights",
            description: "See what communities are talking about, what's trending, and what narrative shifts are happening — all powered by AI."
        },
        {
            id: "feature-6",
            icon: "/delvery/button-6.png",
            title: "Reputation & <br/>  Trust Scoring",
            description: "Creators and brands get on-chain reputation scores based on real performance and verified history."
        }
    ]

    return (
        <section
            id="service"
            className="w-full py-12 md:py-16 lg:py-24 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12"
            style={{
                backgroundImage: `url('/hero/hero-bg.png')`,
            }}
        >
            <div className="w-full max-w-7xl">
                {/* Heading */}
                <h2 ref={headingRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-muted text-center mb-8 md:mb-12 lg:mb-16">
                    What SOIN Delivers
                </h2>

                {/* Features Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="feature-card flex flex-col items-start gap-3 md:gap-4 p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative  rounded-lg ">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="text-base sm:text-lg md:text-xl font-normal text-foreground"
                                dangerouslySetInnerHTML={{ __html: feature.title }}
                            />

                            {/* Description */}
                            <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
