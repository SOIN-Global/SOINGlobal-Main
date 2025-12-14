"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

interface IconPosition {
    id: string
    x: string
    y: string
    floatOffset: number
}

export function AiIntegrationsSection() {
    // Fixed positions for icons distributed around corners and edges
    const initialPositions: Omit<IconPosition, 'floatOffset'>[] = [
        // Top row
        { id: "icon-1", x: "8%", y: "8%" },
        { id: "icon-2", x: "25%", y: "4%" },
        { id: "icon-3", x: "50%", y: "2%" },
        { id: "icon-4", x: "75%", y: "5%" },
        { id: "icon-5", x: "92%", y: "10%" },
        
        // Middle sides
        { id: "icon-6", x: "5%", y: "35%" },
        { id: "icon-7", x: "95%", y: "40%" },
        
        // Bottom row
        { id: "icon-8", x: "10%", y: "75%" },
        { id: "icon-9", x: "28%", y: "85%" },
        { id: "icon-10", x: "52%", y: "88%" },
        { id: "icon-11", x: "72%", y: "82%" },
        { id: "icon-12", x: "90%", y: "75%" },
    ]

    const [icons, setIcons] = useState<IconPosition[]>(
        initialPositions.map(pos => ({
            ...pos,
            floatOffset: Math.random() * Math.PI * 2,
        }))
    )

    // Floating animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIcons(prev =>
                prev.map(icon => ({
                    ...icon,
                    floatOffset: (icon.floatOffset + 0.02) % (Math.PI * 2),
                }))
            )
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            className="w-full py-12 md:py-16 lg:py-24 flex flex-col items-center px-4"
            style={{
                backgroundImage: `url('/hero/hero-bg.png')`,
            }}
        >
            <div className="relative w-full max-w-7xl h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center">

                {/* Scattered floating icons */}
                {icons.map((icon, index) => {
                    const floatY = Math.sin(icon.floatOffset) * 12

                    return (
                        <div
                            key={icon.id}
                            className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-26 lg:h-26"
                            style={{
                                left: icon.x,
                                top: icon.y,
                                transform: `translate(-50%, calc(-50% + ${floatY}px))`,
                            }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={`/solution/coin-${index + 1}.png`}
                                    alt={`Coin ${index + 1}`}
                                    fill
                                    className="object-contain rounded-xl drop-shadow-lg"
                                />
                            </div>
                        </div>
                    )
                })}

                {/* Center content */}
                <div className="absolute flex flex-col items-center text-center px-4 max-w-3xl">
                    <h3 className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic tracking-wide text-muted mb-4 md:mb-6">
                        Artificial Intelligence Marketing Advisor
                    </h3>
                    <Button size="lg" className="rounded-full px-6 md:px-8 text-sm md:text-base">
                        SOIN AI <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                </div>

            </div>

         
        </section>
    )
}
