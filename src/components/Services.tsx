import React from 'react'
import { useState } from "react";

const Services = () => {
    const [showMoreService, setShowMoreService] = useState(false);


    return (
        <>
            <div id='services' className="py-10 text-center max-w-screen-xl m-auto px-4">
                <h2 className="text-black dark:text-[#C6EFEF] text-4xl font-bold mb-10">Services  <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
                <div className="flex flex-col gap-3 text-black dark:text-white/90">
                    <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]"><strong>AI-Powered Influencer Discovery : </strong>Find the best KOLs with real-time analytics.</p>
                    <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]"><strong>KOL Campaign Management : </strong>Seamlessly manage influencer marketing campaigns.</p>
                    <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]"><strong>Smart Matchmaking : </strong>AI-driven brand & influencer pairing for maximum impact.</p>
                    <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]"><strong>Free Social Analytics Dashboard : </strong>Track audience growth & engagement insights.</p>
                    <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]"><strong>Trend & Sentiment Analysis : </strong>AI-powered tracking of market trends & audience sentiment.</p>
                </div>
                {/* show more service  */}
                {
                    showMoreService && (
                        <div className="flex flex-col gap-3 text-black dark:text-white/90 mt-3">
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]"><strong>Custom Quest & Campaigns : </strong>Drive engagement with task-based incentives.</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>Airdrop & Giveaway Management : </strong>Fully automated contest hosting & payouts..</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>Twitter & Telegram Call : </strong>Tracking Analyze engagement & campaign effectiveness.</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>On-Chain Social Identity : </strong>Blockchain-backed influencer credibility..</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>P2P Payments & Multi-Chain : </strong>Support Secure crypto, Accept stables & tokens.</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>Automated Rewards & Payouts : </strong>Smart contract-driven fair payments..</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>SDKs & APIs for Marketing Automation : </strong>Easy Web3 business integrations.</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>TVL & Engagement : </strong>Metrics Track campaign effectiveness & user engagement.</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>Partnership Hub : </strong>A dedicated space to connect with leading Web3 brands.</p>
                            <p className="md:w-2/3 py-3 px-2 md:pl-6 m-auto rounded-xl border-[#C6EFEF] dark:border-[#171d33] border bg-[#C6EFEF] dark:bg-[#171d33]">
                                <strong>Content Calendar & Scheduling : </strong>Plan, organize, and automate social media campaigns.</p>

                        </div>
                    )
                }
                {!showMoreService && (
                    <button onClick={() => setShowMoreService(true)} className="mt-10 cursor-pointer px-2 py-2 border-b border-[#5B4A9A] text-[#5B4A9A] font-medium">
                        View All
                    </button>
                )}
            </div>
        </>
    )
}

export default Services