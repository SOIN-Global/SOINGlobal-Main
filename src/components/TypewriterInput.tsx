'use client';
import { useEffect, useState } from 'react';

const suggestions = [
    'Make a Twitter post',
    'Build a website',
    'Launch your idea',
    'Grow your brand',
];

export default function TypewriterInput() {
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

    return (
        <div className="pt-4 w-11/12 md:max-w-2xl mx-auto">
            <div className="flex bg-[#111827]/10 dark:bg-[#111827] border-purple-200 border dark:border-purple-500 rounded-full px-4 py-3">
                <input
                    type="text"
                    value={displayText}
                    readOnly
                    className="flex-grow bg-transparent outline-none text-black/90 dark:text-white placeholder:text-gray-400 text-lg"
                    placeholder=""
                />
                <button className="flex justify-center items-center ml-4 md:text-3xl bg-purple-400 dark:bg-purple-600 text-white h-8 w-8 rounded-full hover:bg-purple-700 transition">
                    ∞
                </button>
            </div>
        </div>
    );
}
