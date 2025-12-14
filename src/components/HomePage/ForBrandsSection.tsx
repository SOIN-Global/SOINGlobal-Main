"use client"

import Image from "next/image"
import React from "react"

interface BrandFeature {
    id: string
    icon: string
    description: string
}

export default function ForBrandsSection() {
    const features: BrandFeature[] = [
        {
            id: "brand-1",
            icon: "/works/security-safe.png",
            description: "Create a campaign: Set goals, choose your audience, and define deliverables."
        },
        {
            id: "brand-2",
            icon: "/works/cpu-charge.png",
            description: "Lock payment in a smart contract: Funds stay secure until results are verified — no upfront risk."
        },
        {
            id: "brand-3",
            icon: "/works/status-up.png",
            description: "AI monitors campaign progress: Performance, sentiment, and engagement tracked in real time."
        },
        {
            id: "brand-4",
            icon: "/works/status-up.png",
            description: "Deliverables verified. Payment released: Creators are paid instantly once their work is validated."
        },
        {
            id: "brand-5",
            icon: "/works/status-up.png",
            description: "Gain insights instantly: Dashboards show trend shifts, sentiment, performance, and ROI across platforms."
        }
    ]

    return (
        <section
            className="w-full py-12 md:py-16 lg:py-24 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 "
        >
            <div className="w-full max-w-7xl">
                {/* Heading */}
                <h2 className="text-md sm:text-lg md:text-xl lg:text-4xl font-normal text-white mb-8 ">
                    For Brands
                </h2>

                {/* Features List */}
                <div className="flex flex-col gap-6 ">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="flex items-start gap-4 md:gap-6 relative"
                        >
                            {/* Left Border Line */}
                            {/* Icon Container */}
                            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 relative 0 rounded-lg  flex-shrink-0 z-10">
                                <Image
                                    src={feature.icon}
                                    alt={`Brand feature ${index + 1}`}
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>





                            {/* Description */}
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed ">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
