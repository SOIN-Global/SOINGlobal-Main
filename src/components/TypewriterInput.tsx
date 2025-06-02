'use client';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

const suggestions = [
    'Best Twitter influencers for a meme coin launch',
    'Where should I promote a Solana token this week?',
    'Which call groups drive the most trading volume?',
    'Top Telegram shillers for a $10K campaign',
    'How to get 100K volume with a $5K budget?',
    'Trending KOLs in the DeFi space right now',
    'Best platforms to promote my new NFT-less token',
    'Find top crypto voices in the U.S. for token hype',
    'Suggest micro-influencers for an IDO promo',
    'Who’s leading engagement for GameFi this week?',
    'Suggest some game streamers to promote our game',
    'Find top Instagram influencers for skincare in the U.S.',
    'Best-performing TikTok trends for beauty products in May',
    'Top YouTubers for finance app promotions',
    'Suggest Twitch streamers for mobile shooter games',
    'How to reach 100K impressions with a $2K ad budget?',
    'Suggest micro-influencers for productivity apps on Instagram',
    'Who’s trending in sustainable lifestyle content this week?'
];


export default function TypewriterInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = suggestions[wordIndex];

        if (charIndex < currentWord.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentWord.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, 100);

            return () => clearTimeout(typingTimeout);
        } else {
            const pauseTimeout = setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setWordIndex((prev) => (prev + 1) % suggestions.length);
            }, 2000); // pause before next word

            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, wordIndex]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollLeft = inputRef.current.scrollWidth;
        }
    }, [displayText]);


    return (
        <div className="pt-4 w-11/12 md:max-w-2xl mx-auto gradient-border rounded-full">
            <div className="flex bg-[#111827]/10 dark:bg-[#111827] bg-white rounded-full px-4 py-3">
                <input
                    ref={inputRef}
                    type="text"
                    value={displayText}
                    readOnly
                    className="flex-grow bg-transparent outline-none text-black/90 dark:text-white placeholder:text-gray-400 text-lg overflow-x-auto whitespace-nowrap"
                />

                <button className="flex justify-center items-center ml-4 md:text-3xl bg-purple-400 dark:bg-purple-600 text-white h-8 w-8 rounded-full hover:bg-purple-700 transition">
                    ∞
                </button>
            </div>
        </div>
    );
}
