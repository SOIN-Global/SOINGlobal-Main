import React, { useState } from 'react';
type Service = {
    title: string;
    desc: string;
};


const Services = () => {
    const [showMoreService, setShowMoreService] = useState(false);

    const defaultServices = [
        { title: 'AI-Powered Influencer Discovery', desc: 'Find the best KOLs with real-time analytics.' },
        { title: 'KOL Campaign Management', desc: 'Seamlessly manage influencer marketing campaigns.' },
        { title: 'Smart Matchmaking', desc: 'AI-driven brand & influencer pairing for maximum impact.' },
        { title: 'Free Social Analytics Dashboard', desc: 'Track audience growth & engagement insights.' },
        { title: 'Trend & Sentiment Analysis', desc: 'AI-powered tracking of market trends & audience sentiment.' }
    ];

    const extraServices = [
        { title: 'Custom Quest & Campaigns', desc: 'Drive engagement with task-based incentives.' },
        { title: 'Airdrop & Giveaway Management', desc: 'Fully automated contest hosting & payouts.' },
        { title: 'Twitter & Telegram Call', desc: 'Tracking Analyze engagement & campaign effectiveness.' },
        { title: 'On-Chain Social Identity', desc: 'Blockchain-backed influencer credibility.' },
        { title: 'P2P Payments & Multi-Chain', desc: 'Support Secure crypto, Accept stables & tokens.' },
        { title: 'Automated Rewards & Payouts', desc: 'Smart contract-driven fair payments.' },
        { title: 'SDKs & APIs for Marketing Automation', desc: 'Easy Web3 business integrations.' },
        { title: 'TVL & Engagement', desc: 'Metrics Track campaign effectiveness & user engagement.' },
        { title: 'Partnership Hub', desc: 'A dedicated space to connect with leading Web3 brands.' },
        { title: 'Content Calendar & Scheduling', desc: 'Plan, organize, and automate social media campaigns.' }
    ];

    const renderServiceCard = ({ title, desc }: Service, index: number) => (
        <div className="md:w-2/3 gradient-border rounded-xl m-auto" key={index}>
            <p className="w-full py-3 px-2 md:pl-6 m-auto rounded-xl bg-[#EAF8F8] dark:bg-[#171d33] text-black dark:text-white/90">
                <strong>{title} : </strong>{desc}
            </p>
        </div>
    );

    return (
        <div id="services" className="py-10 text-center max-w-screen-xl m-auto px-4">
            <h2 className="text-black dark:text-[#C6EFEF] text-4xl font-bold mb-10">
                Services
                <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span>
            </h2>

            <div className="flex flex-col gap-3">
                {defaultServices.map(renderServiceCard)}
            </div>

            {showMoreService && (
                <div className="flex flex-col gap-3 mt-3">
                    {extraServices.map(renderServiceCard)}
                </div>
            )}

            {!showMoreService && (
                <button
                    onClick={() => setShowMoreService(true)}
                    className="mt-10 cursor-pointer px-2 py-2 border-b border-[#5B4A9A] text-[#5B4A9A] font-medium"
                >
                    View All
                </button>
            )}
        </div>
    );
};

export default Services;
