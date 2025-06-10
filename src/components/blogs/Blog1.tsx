import Image from "next/image";
import blogImg1 from "@/assets/blog/revolution.webp";

export default function Blog1() {
    return (
        <div className="text-lg max-w-none text-black dark:text-white/90">
            <h2 className="font-bold text-2xl mb-3 mt-10">Introducing SOIN</h2>
            <p>
                If you’ve run even a single influencer campaign recently, you know the feeling — excited brief, promising creators, decent engagement… but at the end of the month, you’re left wondering.
                <br />
                <br />
                <strong>
                    Did this actually move the needle?
                </strong>
            </p>

            <div className="my-8">
                <Image
                    src={blogImg1}
                    alt="SupraNova"
                    className="rounded-lg"
                    width={800}
                    height={400}
                />
            </div>

            <p>The truth is, the influencer marketing world still relies on surface metrics. Likes, impressions, maybe some click-throughs if you’re lucky. But what if you could go deeper — much deeper?
                <br />
                <br />
                That’s where <strong>SOIN</strong> comes in.
            </p>

            <h2 className="font-bold text-2xl mb-3 mt-10">The Shift: From Guesswork to Precision</h2>

            <p>Let’s be honest: today’s digital landscape moves fast. Meme coins go viral overnight. Call groups pump unknown tokens with unexpected force. In this chaos, brand marketers and growth leads need one thing more than ever — clarity.
                <br />
                <br />
                SOIN was born out of this need. It’s a platform that uses on-chain data, AI-powered analytics, and real-time KOL behavior to tell you what’s actually working.
                <br />
                <br />
                Not based on assumptions. Based on data you can track, verify, and act on.
            </p>

            <h2 className="font-bold text-2xl mb-3 mt-10">Say You’re Launching a Crypto Product</h2>

            <p>You’re targeting U.S.-based Gen Z users with a $5K influencer budget. Normally, you’d hunt down creators, check their profiles manually, guess their reach, and roll the dice.
                <br />
                <br />

                With SOIN Global, you input your goal, your budget, and your target audience. The system scans on-chain engagement patterns, real influencer performance (not just followers), and recommends who to work with — along with expected impact.
                <br />
                <br />

                It’s not a marketplace. It’s not a directory.
                It’s your growth assistant.
            </p>

            <h2 className="font-bold text-2xl mb-3 mt-10">Real-World Relevance: Why Now?</h2>

            <p>In 2024 and beyond, we’re seeing a few hard shifts:
                <br /><br />

                Performance-based marketing is replacing awareness-based marketing.
                <br /><br />
                Creators want proof they’re delivering value.
                <br /><br />
                Brands need tools that prove ROI — not vibes.
                <br /><br />
                The rise of Web3 marketing has only made the gap wider. So many campaigns run without clear outcomes or validated results.
                SOIN bridges this gap. It blends AI, blockchain signals, and real-time tracking into a system both creators and brands can trust.
                <br /><br />
                More to come soon — from how SOIN handles service delivery on-chain, to how it builds reputation over time.
                For now, one thing is clear, influencer marketing is entering its intelligent era.
                <br /><br />
                And SOIN is leading that charge.</p>

            <h2 className="font-bold text-2xl mb-3 mt-10">About SOIN GLOBAL</h2>

            <p>SOIN Global is redefining how brands and creators collaborate by combining AI-driven insights with blockchain transparency. It’s not just another influencer platform — it’s a data-first, on-chain intelligence layer for marketing LLM.</p>
        </div>
    );
}