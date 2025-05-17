import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import userImg1 from "@/assets/review/user-1.png";
import userImg2 from "@/assets/review/user-2.png";
import userImg3 from "@/assets/review/user-3.png";
import userImg4 from "@/assets/review/user-4.png";
import userImg5 from "@/assets/review/user-5.png";
import userImg6 from "@/assets/review/user-6.png";

const reviews = [
    {
        body: "We have identified a scammer: #Scammer spotted. We paid him, but he doesn’t respond anymore. #scam",
        img: userImg1,
    },
    {
        body: "Got Scammed multiple times this week by fake ‘callers’ with fake call group’. Please tag some actual reliable callers and kol’s that I can count on with my projects.",
        img: userImg2,
    },
    {
        body: "Yesterday, I got f**ked by a KOL when I thought he was going to help me grow the community for a new NFT collection",
        img: userImg3,
    },
    {
        body: "Got Scammed by KOL’ s again, down bad but not giving up! Need SOL to keep clicking!",
        img: userImg4,
    },
    {
        body: "So many fake “KOL” larp accounts on X scamming people Honestly sad to see so many newcomers losing their hard-earned money",
        img: userImg5,
    },
    {
        body: "Bro, just got scammed by a guy who claimed to be a KOL. I am getting sick and tired of this space with so many scammers",
        img: userImg6,
    },
    {
        body: "There are plenty of fake KOL’s who’d gladly help you with your-people who care more about their pockets han their community. Gp knock on their door, not mine",
        img: userImg6,
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    body,
}: {
    img: StaticImageData;
    body: string;
}) => {
    // Highlight hashtags in the body text
    const formattedBody = body.split(/(#[a-zA-Z0-9_]+)/g).map((part, i) =>
        part.startsWith('#') ? (
            <span key={i} style={{ color: '#5DB9F6' }}>{part}</span>
        ) : (
            part
        )
    );
    return (
        <figure
            className={cn(
                // Card background and border
                "relative flex h-full w-96 cursor-pointer overflow-hidden rounded-sm dark:border border-[#262B35] bg-[#EFF3EF] dark:bg-[#262B35] p-6 dark:shadow-lg",
                // Text color
                "text-black/70 dark:text-white",
                // Hover effect
                "dark:hover:bg-[#232730] transition-colors duration-200"
            )}
        >
            <div className="flex gap-4 items-center">
                <Image className="rounded-full border-2 border-[#5DB9F6]" width={40} height={40} alt="" src={img} />
                <blockquote className="mt-2 text-sm text-left">{formattedBody}</blockquote>
            </div>
        </figure>
    );
};

export function CardScroller() {
    return (
        <div className="py-10 text-center max-w-screen-2xl m-auto">
            <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl font-bold mb-10">Together, We Build a Scam-Free Future! <span className="mt-2 block w-40 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((review, idx) => (
                        <ReviewCard key={idx} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {secondRow.map((review, idx) => (
                        <ReviewCard key={idx} {...review} />
                    ))}
                </Marquee>
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
            </div>
        </div>
    );
}
