"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ArrowRight, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const chipBadges = [
    { 
        label: 'Blocked', 
        gradient: 'linear-gradient(90deg, rgba(47, 22, 18, 0.5) 0%, rgba(233, 68, 39, 0.5) 100%)',
        textColor: '#EB9B98',
        xBg: '#D42620'
    },
    { 
        label: 'Waiting', 
        gradient: 'linear-gradient(90deg, rgba(61, 61, 61, 0.5) 0%, rgba(202, 202, 202, 0.5) 100%)',
        textColor: '#E4E4E4',
        xBg: '#E4E4E4'
    },
    { 
        label: 'In view', 
        gradient: 'linear-gradient(90deg, rgba(50, 39, 2, 0.5) 0%, rgba(255, 195, 0, 0.5) 100%)',
        textColor: '#FFC300',
        xBg: '#FFC300'
    },
    { 
        label: 'On Hold', 
        gradient: 'linear-gradient(90deg, rgba(8, 74, 103, 0.5) 0%, rgba(39, 190, 255, 0.5) 100%)',
        textColor: '#38C3FF',
        xBg: '#27BEFF'
    },
    { 
        label: 'Fiat', 
        gradient: 'linear-gradient(90deg, rgba(8, 74, 103, 0.5) 0%, rgba(39, 190, 255, 0.5) 100%)',
        textColor: '#38C3FF',
        xBg: '#27BEFF'
    },
    { 
        label: 'Payment in progress', 
        gradient: '#1D5F6080',
        textColor: '#00FFDF',
        xBg: '#00FFDF'
    },
    { 
        label: 'Coin', 
        gradient: 'linear-gradient(90deg, rgba(29, 1, 31, 0.5) 0%, rgba(201, 67, 222, 0.5) 100%)',
        textColor: '#D760FF',
        xBg: '#D760FF'
    },
    { 
        label: 'Rework', 
        gradient: 'linear-gradient(90deg, rgba(104, 42, 31, 0.5) 0%, rgba(253, 130, 108, 0.5) 100%)',
        textColor: '#EB9B98',
        xBg: '#EB9B98'
    },
    { 
        label: 'Crypto', 
        gradient: 'linear-gradient(90deg, rgba(23, 25, 44, 0.5) 0%, rgba(77, 86, 178, 0.5) 100%)',
        textColor: '#ACB4FD',
        xBg: '#ACB4FD'
    },
];

// Animated Graph Component
const AnimatedGraph = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const dotsRef = useRef<SVGGElement>(null);

    // Generate smooth wave path data
    const generatePath = () => {
        const points = [
            { x: 0, y: 85 },
            { x: 40, y: 50 },
            { x: 80, y: 70 },
            { x: 120, y: 30 },
            { x: 160, y: 60 },
            { x: 200, y: 25 },
            { x: 240, y: 55 },
            { x: 280, y: 40 },
            { x: 320, y: 65 },
            { x: 360, y: 20 },
            { x: 400, y: 45 },
            { x: 440, y: 35 },
            { x: 480, y: 55 },
            { x: 520, y: 15 },
            { x: 560, y: 30 }
        ];

        return { points, path: points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') };
    };

    const { points, path } = generatePath();

    useEffect(() => {
        if (pathRef.current && dotsRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            
            // Animate path drawing
            gsap.fromTo(pathRef.current,
                {
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                },
                {
                    strokeDashoffset: 0,
                    duration: 2.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: pathRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                }
            );

            // Animate dots with stagger
            const dots = dotsRef.current.querySelectorAll('circle');
            gsap.fromTo(dots,
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: dotsRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    delay: 1
                }
            );

            // Continuous floating animation for dots
            gsap.to(dots, {
                y: '+=5',
                duration: 2,
                stagger: 0.1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }, []);

    return (
        <svg 
            viewBox="0 0 560 100" 
            className="w-full h-auto"
            style={{ overflow: 'visible' }}
        >
            {/* Animated Path */}
            <path
                ref={pathRef}
                d={path}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            
            {/* Dots */}
            <g ref={dotsRef}>
                {points.map((point, idx) => (
                    <circle
                        key={idx}
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#6B7280"
                        className="drop-shadow-lg"
                    />
                ))}
            </g>

            {/* Gradient Definition */}
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4B5563" />
                    <stop offset="50%" stopColor="#6B7280" />
                    <stop offset="100%" stopColor="#9CA3AF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const row3Ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation - smooth and simple
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out',
                });
            }

            // First card with smooth stagger animation
            if (card1Ref.current) {
                gsap.from(card1Ref.current, {
                    scrollTrigger: {
                        trigger: card1Ref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.9,
                    ease: 'power2.out',
                });

                // Animate children of first card with stagger
                const card1Children = card1Ref.current.querySelectorAll('.card-child');
                if (card1Children.length > 0) {
                    gsap.from(card1Children, {
                        scrollTrigger: {
                            trigger: card1Ref.current,
                            start: 'top 75%',
                            toggleActions: 'play none none none',
                        },
                        opacity: 0,
                        y: 20,
                        stagger: 0.2,
                        duration: 0.7,
                        delay: 0.2,
                        ease: 'power2.out',
                    });
                }
            }

            // Bottom cards - fade in with scale and slide from sides
            if (card2Ref.current) {
                gsap.from(card2Ref.current, {
                    scrollTrigger: {
                        trigger: card2Ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: -40,
                    scale: 0.95,
                    duration: 0.8,
                    ease: 'power2.out',
                });
            }

            if (card3Ref.current) {
                gsap.from(card3Ref.current, {
                    scrollTrigger: {
                        trigger: card3Ref.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    opacity: 0,
                    x: 40,
                    scale: 0.95,
                    duration: 0.8,
                    delay: 0.1,
                    ease: 'power2.out',
                });
            }

            // Marquee animations for chip rows - seamless infinite loop
            if (row1Ref.current) {
                gsap.set(row1Ref.current, { x: 0 });
                gsap.to(row1Ref.current, {
                    x: '-33.333%',
                    duration: 15,
                    ease: 'none',
                    repeat: -1,
                    modifiers: {
                        x: (x) => `${parseFloat(x) % 33.333}%`
                    }
                });
            }

            if (row2Ref.current) {
                gsap.set(row2Ref.current, { x: '-33.333%' });
                gsap.to(row2Ref.current, {
                    x: '0%',
                    duration: 15,
                    ease: 'none',
                    repeat: -1,
                    modifiers: {
                        x: (x) => {
                            const val = parseFloat(x);
                            return `${val > 0 ? val - 33.333 : val}%`;
                        }
                    }
                });
            }

            if (row3Ref.current) {
                gsap.set(row3Ref.current, { x: 0 });
                gsap.to(row3Ref.current, {
                    x: '-33.333%',
                    duration: 15,
                    ease: 'none',
                    repeat: -1,
                    modifiers: {
                        x: (x) => `${parseFloat(x) % 33.333}%`
                    }
                });
            }
            
            // Button animations
            if (buttonRef.current) {
                // Floating animation
                gsap.to(buttonRef.current, {
                    y: -8,
                    duration: 2,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true
                });
                
                // Arrow sliding animation
                const arrow = buttonRef.current.querySelector('svg');
                if (arrow) {
                    gsap.to(arrow, {
                        x: 5,
                        duration: 0.8,
                        ease: 'power1.inOut',
                        repeat: -1,
                        yoyo: true
                    });
                }
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 bg-black py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40'>
            <h2 
                ref={titleRef}
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-4 md:mt-6 lg:mt-10 text-center'
            >
                The Problem
            </h2>

            <div 
                ref={card1Ref}
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 bg-card rounded-2xl p-4 md:p-6 py-6 md:py-8 lg:py-10 mt-4 md:mt-6 lg:mt-10 w-full max-w-7xl'
            >
                <div className='card-child bg-popover p-3 md:p-4 py-4 md:py-6 rounded-4xl flex flex-col items-center justify-center gap-3 md:gap-4'>
                    <Image src="/problem/influencers.png" alt="Problem 1" className="w-full h-auto" width={1000} height={1000} />
                    <Button ref={buttonRef} className='rounded-full text-sm md:text-base'>Get Verified <ArrowRight className='w-4 h-4 md:w-5 md:h-5' /></Button>

                </div>
                <div className='card-child text-white flex flex-col gap-3 md:gap-4 justify-center text-left'>
                    <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                        Trusted influencers? Hard to <br /> find. Campaigns lack <br /> transparency.
                    </h2>
                    <p className='text-muted-foreground text-sm md:text-base'>Too many "KOLs" are unverified, overhyped, or simply don't <br /> deliver.</p>

                    <p className='text-muted-foreground text-sm md:text-base'>Brands pay upfront, but results are unclear — and middlemen inflate costs instead of performance.</p>
                </div>
            </div>

            <div 
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8  rounded-2xl    w-full max-w-7xl'
            >
                <div ref={card2Ref} className='bg-card p-5 md:p-4 py-4 md:py-12 rounded-2xl flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 overflow-hidden'>
                    {/* Animated Chip Badges */}
                    <div className="w-full space-y-3 md:space-y-4">
                        {/* Row 1 - Left to Right */}
                        <div className="overflow-hidden">
                            <div ref={row1Ref} className="flex gap-2 md:gap-3 whitespace-nowrap">
                                {[...chipBadges.slice(0, 3), ...chipBadges.slice(0, 3), ...chipBadges.slice(0, 3)].map((chip, idx) => (
                                    <div
                                        key={`row1-${idx}`}
                                        className="inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full flex-shrink-0"
                                        style={{ background: chip.gradient }}
                                    >
                                        <span className="text-xs md:text-sm font-medium whitespace-nowrap" style={{ color: chip.textColor }}>
                                            {chip.label}
                                        </span>
                                        <div 
                                            className="rounded-full p-0.5 md:p-1 flex-shrink-0"
                                            style={{ backgroundColor: chip.xBg }}
                                        >
                                            <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-black" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - Right to Left */}
                        <div className="overflow-hidden">
                            <div ref={row2Ref} className="flex gap-2 md:gap-3 whitespace-nowrap">
                                {[...chipBadges.slice(3, 6), ...chipBadges.slice(3, 6), ...chipBadges.slice(3, 6)].map((chip, idx) => (
                                    <div
                                        key={`row2-${idx}`}
                                        className="inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full  flex-shrink-0"
                                        style={{ background: chip.gradient }}
                                    >
                                        <span className="text-xs md:text-sm font-medium whitespace-nowrap" style={{ color: chip.textColor }}>
                                            {chip.label}
                                        </span>
                                        <div 
                                            className="rounded-full p-0.5 md:p-1 flex-shrink-0"
                                            style={{ backgroundColor: chip.xBg }}
                                        >
                                            <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-black" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 3 - Left to Right */}
                        <div className="overflow-hidden">
                            <div ref={row3Ref} className="flex gap-2 md:gap-3 whitespace-nowrap">
                                {[...chipBadges.slice(6, 9), ...chipBadges.slice(6, 9), ...chipBadges.slice(6, 9)].map((chip, idx) => (
                                    <div
                                        key={`row3-${idx}`}
                                        className="inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full  flex-shrink-0"
                                        style={{ background: chip.gradient }}
                                    >
                                        <span className="text-xs md:text-sm font-medium whitespace-nowrap" style={{ color: chip.textColor }}>
                                            {chip.label}
                                        </span>
                                        <div 
                                            className="rounded-full p-0.5 md:p-1 flex-shrink-0"
                                            style={{ backgroundColor: chip.xBg }}
                                        >
                                            <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-black" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className='space-y-3 md:space-y-4'>
                        <h2 className='text-left text-xl md:text-2xl lg:text-3xl text-white'>
                            Upfront payments drain budgets before results even exist.
                        </h2>
                        <p className='text-muted-foreground text-sm md:text-base'>You pay before anything happens and most of that money never
                            returns real users. Upfront models make marketing a gamble instead of a strategy.</p>

                    </div>

                </div>
                <div 
                    ref={card3Ref}
                    className='text-white bg-contain bg-card py-4 md:py-6 rounded-2xl flex flex-col gap-3 md:gap-4 justify-end text-left'
                >
                    <div className='w-full px-4 md:px-8 py-6 md:py-10'>
                        <AnimatedGraph />
                    </div>
                    <div className='flex flex-col gap-4 p-4'>
                        <h2 className='text-left text-xl md:text-2xl lg:text-3xl'>
                            Analytics? Delayed or completely missing.
                        </h2>
                        <p className='text-muted-foreground text-sm md:text-base'>Most projects have no real-time understanding of what their community actually thinks or does.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
