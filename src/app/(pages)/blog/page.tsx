"use client";
import Image from "next/image";
import Link from "next/link";
import blogImg1 from "@/assets/services/quality-service-1.png"
import blogImg2 from "@/assets/services/quality-service-2.png";
import blogImg3 from "@/assets/services/quality-service-3.png";

const blogs = [
  {
    id: 1,
    title: "SupraNova is Live on Public Testnet: The First Truly Bridgeless Cross-Chain Messaging",
    date: "22 days ago",
    image: blogImg1,
    tags: ["Announcements", "DeFi"],
    excerpt:
      "SupraNova is now live on public testnet, enabling the first truly bridgeless cross-chain messaging between Supra and Ethereum's Goerli testnet. Say goodbye to risky bridges and fragmented liquidity—here's what you need to know.",
  },
  {
    id: 2,
    title: "Supra Automation is Live on Public Testnet, Starting the AutoFi Revenue Engine",
    date: "1 month ago",
    image: blogImg2,
    tags: ["Announcements", "DeFi", "Use Cases"],
    excerpt:
      "Supra's system-level automation is about to go live on the public testnet, enabling blockchains to self-execute DeFi processes like arbitrage and liquidations. This marks the beginning of AutoFi—an automation-powered revenue model that could replace fees and emissions in the next era of crypto.",
  },
  {
    id: 3,
    title: "Introducing the $SUPRA Token: Tokenomics and Utility",
    date: "5 months ago",
    image: blogImg3,
    tags: ["Announcements", "Articles", "Tutorials/Overviews", "Use Cases"],
    excerpt:
      "Supra prioritizes its community and ecosystem, reflected in $SUPRA's thoughtfully designed tokenomics. With no team tokens unlocked at TGE and gradual releases planned, $SUPRA drives long-term growth and utility within Supra's MultiVM Layer 1 ecosystem.",
  },
];

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#00091a] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl text-center font-bold mb-10">Blog & Announcements<span className="mt-2 block w-60 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="w-full md:w-[31%] bg-[#EFF3EF] dark:bg-[#262B35] rounded-xl shadow-md hover:shadow-lg transition-shadow border border-[#C6EFEF] dark:border-[#262B35] flex flex-col overflow-hidden group"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2 py-1 rounded bg-[#C6EFEF] dark:bg-[#5B4A9A] text-[#5B4A9A] dark:text-[#C6EFEF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-bold text-black dark:text-white mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <span className="text-xs text-gray-500 mb-2">{blog.date}</span>
                <p className="text-sm text-black/70 dark:text-white/80 line-clamp-3 mb-4">{blog.excerpt}</p>
                <span className="mt-auto text-[#5B4A9A] dark:text-[#C6EFEF] font-semibold text-sm">Read More &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 