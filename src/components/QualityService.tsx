import Image from "next/image";
import qualityStepImage from "@/assets/services/serline1.png";
import qualityServiceImage1 from "@/assets/services/quality-service-1.png";
import qualityServiceImage2 from "@/assets/services/quality-service-2.png";
import qualityServiceImage3 from "@/assets/services/quality-service-3.png";

export function QualityService() {
    return (
        <div className="relative py-6 md:py-12 px-4 md:my-[170px]">

            <Image src={qualityStepImage} alt="quality-service" width={500} height={500} className="hidden md:block m-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]" />

            <div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col gap-6 md:gap-28 text-black/80 dark:text-white/80 ">
                <div className="flex flex-col gap-1 md:gap-4 justify-center bg-[#C6EFEF] dark:bg-[#0C1526] w-full md:w-[600px] lg:w-[700px] md:h-[350px] md:ml-[200px] lg:ml-[300px] rounded-lg p-6 border-white/20 border m-auto">
                    <h3 className="text-[#09C2B8] dark:text-white text-3xl font-bold">Analyze</h3>
                    <div className="flex items-center flex-col md:flex-row gap-4">
                        <p>SOIN scans real-time data across social channels, measuring market trends, engagement, and sentiment. This deep analysis provides brands with clear, actionable insights, ensuring every decision is backed by hard data.
                        </p>
                        <Image src={qualityServiceImage1} alt="quality-service" width={250} height={250} className="w-auto" />
                    </div>
                    <h3 className="hidden md:block absolute -left-12 lg:-left-0 text-[#4EA9A9] dark:text-[#C6EFEF] text-4xl font-bold">DISCOVER</h3>
                </div>
                <div className="flex flex-col gap-1 md:gap-4 justify-center bg-[#C6EFEF] dark:bg-[#0C1526] w-full md:w-[600px] lg:w-[700px] md:h-[350px] rounded-lg p-6 border-white/20 border m-auto md:m-0">
                    <h3 className="text-[#09C2B8] dark:text-white text-2xl font-bold">Match</h3>
                    <div className="flex items-center flex-col-reverse md:flex-row gap-4">
                        <Image src={qualityServiceImage2} alt="quality-service" width={250} height={250} className="w-auto" />
                        <p>SOIN&apos;s intelligent algorithms connect you with the most relevant, Our unified platform seamlessly connects brands with verified influencers and service providers using intelligent AI insights, making collaboration effortless.</p>
                    </div>
                    <h3 className="hidden md:block absolute -right-2 md:-right-10 lg:right-10 text-[#A1920E] dark:text-[#C6EFEF] text-4xl font-bold ">OPTIMIZE</h3>
                </div>
                <div className="flex flex-col gap-1 md:gap-4 justify-center bg-[#C6EFEF] dark:bg-[#0C1526] w-full md:w-[600px] lg:w-[700px] md:h-[350px] md:ml-[200px] lg:ml-[300px] rounded-lg p-6 border-white/20 border m-auto">
                    <h3 className="text-[#09C2B8] dark:text-white text-2xl font-bold">Amplify</h3>
                    <div className="flex items-center flex-col md:flex-row gap-4">
                        <p>SOIN amplifies your message, boosting engagement and maximizing ROI.</p>
                        <Image src={qualityServiceImage3} alt="quality-service" width={250} height={250} className="w-auto" />
                    </div>
                    <h3 className="hidden md:block absolute left-2 lg:left-16 text-[#5B4A9A] dark:text-[#C6EFEF] text-4xl font-bold">SCALE</h3>
                </div>
            </div>
        </div>
    )
}