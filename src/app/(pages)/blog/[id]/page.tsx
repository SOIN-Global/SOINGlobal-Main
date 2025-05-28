"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import blogImg1 from "@/assets/services/quality-service-1.png"
import blogImg2 from "@/assets/services/quality-service-2.png";
import blogImg3 from "@/assets/services/quality-service-3.png";

const blogs = [
  {
    id: 1,
    title: "SupraNova is Live on Public Testnet: The First Truly Bridgeless Cross-Chain Messaging",
    date: "May 05, 2025",
    image: blogImg1,
    tags: ["Announcements", "DeFi"],
    content:
      "Chains are silos. Liquidity is fragmented. Data is locked behind bridges that introduce new points of failure. Today, we break through those walls with SupraNova, a truly bridgeless cross-chain communication protocol, now live on Supra's public testnet. With this release, SupraNova enables seamless messaging between Supra and Ethereum's Goerli testnet. Say goodbye to risky bridges and fragmented liquidity—here's what you need to know...",
    excerpt:
      "SupraNova is now live on public testnet, enabling the first truly bridgeless cross-chain messaging between Supra and Ethereum's Goerli testnet. Say goodbye to risky bridges and fragmented liquidity—here's what you need to know.",
  },
  {
    id: 2,
    title: "Supra Automation is Live on Public Testnet, Starting the AutoFi Revenue Engine",
    date: "Apr 01, 2025",
    image: blogImg2,
    tags: ["Announcements", "DeFi", "Use Cases"],
    content:
      "Supra's system-level automation is about to go live on the public testnet, enabling blockchains to self-execute DeFi processes like arbitrage and liquidations. This marks the beginning of AutoFi—an automation-powered revenue model that could replace fees and emissions in the next era of crypto. Here's what you need to know...",
    excerpt:
      "Supra's system-level automation is about to go live on the public testnet, enabling blockchains to self-execute DeFi processes like arbitrage and liquidations. This marks the beginning of AutoFi—an automation-powered revenue model that could replace fees and emissions in the next era of crypto.",
  },
  {
    id: 3,
    title: "Introducing the $SUPRA Token: Tokenomics and Utility",
    date: "Jan 01, 2025",
    image: blogImg3,
    tags: ["Announcements", "Articles", "Tutorials/Overviews", "Use Cases"],
    content:
      "Supra prioritizes its community and ecosystem, reflected in $SUPRA's thoughtfully designed tokenomics. With no team tokens unlocked at TGE and gradual releases planned, $SUPRA drives long-term growth and utility within Supra's MultiVM Layer 1 ecosystem. Here's what you need to know...",
    excerpt:
      "Supra prioritizes its community and ecosystem, reflected in $SUPRA's thoughtfully designed tokenomics. With no team tokens unlocked at TGE and gradual releases planned, $SUPRA drives long-term growth and utility within Supra's MultiVM Layer 1 ecosystem.",
  },
];

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));
  const recentPosts = blogs.filter((b) => b.id !== Number(id));

  if (!blog) return <div className="text-center py-20 text-xl">Blog not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-[#00091a] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Main Blog Content */}
        <div className="flex-1">
          <div className="mb-6">
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
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-[#C6EFEF] mb-2 font-jakarta">
              {blog.title}
            </h1>
            <span className="text-sm text-gray-500 mb-2 block">{blog.date} • 2 min read</span>
          </div>
          <div className="w-full h-64 md:h-96 relative mb-8 rounded-xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-contain "
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="prose prose-lg max-w-none text-black dark:text-white/90">
            <p>{blog.content}</p>
            {/* Add more paragraphs or sections as needed */}
          </div>
        </div>
        {/* Sidebar: Recent Posts & Search */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-black dark:text-[#C6EFEF] mb-4">Recent Posts</h3>
            <div className="flex flex-col gap-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="flex gap-3 items-center bg-[#EFF3EF] dark:bg-[#262B35] rounded-lg p-2 hover:shadow-md transition"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-black dark:text-white line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-[#EFF3EF] dark:bg-[#262B35] rounded-lg p-4">
            <h4 className="text-base font-semibold text-black dark:text-[#C6EFEF] mb-2">Search</h4>
            <input
              type="text"
              placeholder="Search blog..."
              className="w-full px-3 py-2 rounded border border-[#C6EFEF] dark:border-[#262B35] bg-white dark:bg-[#1a2233] text-black dark:text-white focus:outline-none"
            />
            <button className="mt-3 w-full py-2 rounded bg-[#5B4A9A] dark:bg-[#C6EFEF] text-white dark:text-[#5B4A9A] font-semibold transition">SEARCH</button>
          </div>
        </aside>
      </div>
    </div>
  );
} 