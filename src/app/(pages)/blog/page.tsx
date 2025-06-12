"use client";
import Image from "next/image";
import Link from "next/link";
import blogImg1 from "@/assets/blog/revolution.webp"
import blogImg2 from "@/assets/blog/hela.png";
import blogImg3 from "@/assets/blog/development.png";
import blogImg4 from "@/assets/blog/web3-support.png";

let blogs = [
  {
    id: 1,
    title: "Revolutionizing Influencer Marketing with On-Chain Intelligence",
    date: "May 26, 2025",
    image: blogImg1,
    slug: "revolutionizing-influencer-marketing",
    excerpt:
      "If you've run even a single influencer campaign recently, you know the feeling — excited brief, promising creators, decent engagement… but at the end of the month, you're left wondering.",
  },
  {
    id: 2,
    title: "SOIN Global & HeLa Forge Strategic Partnership to Power Personalized AI & Sustainable Yields in Web3 Marketing",
    date: "May 31, 2025",
    image: blogImg2,
    slug: "soin-global-hela-partnership",
    excerpt:
      "In today's rapidly evolving Web3 landscape, projects must blend cutting-edge technology with real-world utility to stand out. The convergence of artificial intelligence and blockchain is reshaping everything from decentralized finance to marketing, yet many protocols still struggle with inconsistent yields and fragmented data sources.",
  },
  {
    id: 3,
    title: "SOIN Global now taps directly into an AI Agent marketplace",
    date: "Jun 05, 2025",
    image: blogImg3,
    slug: "soin-global-ai-marketplace",
    excerpt:
      "Last week, we quietly rolled out a new integration that's going to change the way you harness AI for your Web3 campaigns. SOIN Global now taps directly into an AI Agent marketplace—so you still get to build on our Growth Intelligence Engine, but with an extra layer of on-demand AI talent at your fingertips.",
  },
  {
    id: 3,
    title: "Revolutionizing Web3 Support & Growth: SOIN Global Partners with Ring AI",
    date: "Jun 11, 2025",
    image: blogImg4,
    slug: "revolutionizing-web3-support",
    excerpt:
      "In today’s fast-paced Web3 ecosystem, projects need more than just flashy launches — they need 24/7, high-touch customer support and sales pipelines that scale with global communities.",
  },
];

blogs = blogs.reverse()

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#00091a] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black font-jakarta dark:text-[#C6EFEF] text-4xl text-center font-bold mb-10">Blog & Announcements<span className="mt-2 block w-60 bg-[#5B4A9A] dark:bg-[#C6EFEF] h-1 rounded-xl m-auto"></span></h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
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