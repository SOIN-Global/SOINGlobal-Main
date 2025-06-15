import { notFound } from "next/navigation";
import Blog1 from "@/components/blogs/Blog1";
import Blog2 from "@/components/blogs/Blog2";
import Blog3 from "@/components/blogs/Blog3";
import Blog4 from "@/components/blogs/Blog4";
import Image from "next/image";
import Link from "next/link";
import blogImg1 from "@/assets/blog/revolution.webp"
import blogImg2 from "@/assets/blog/hela.png";
import blogImg3 from "@/assets/blog/development.png";
import blogImg4 from "@/assets/blog/web3-support.png";

const blogs = [
  {
    id: 1,
    title: "Revolutionizing Influencer Marketing with On-Chain Intelligence",
    date: "May 26, 2025",
    slug: "revolutionizing-influencer-marketing",
    desc: "If you've run even a single influencer campaign recently, you know the feeling — excited brief, promising creators, decent engagement… but at the end of the month, you're left wondering.",
    image: blogImg1,
    component: Blog1
  },
  {
    id: 2,
    title: "SOIN Global & HeLa Forge Strategic Partnership to Power Personalized AI & Sustainable Yields in Web3 Marketing",
    date: "May 31, 2025",
    slug: "soin-global-hela-partnership",
    desc: "In today's rapidly evolving Web3 landscape, projects must blend cutting-edge technology with real-world utility to stand out. The convergence of artificial intelligence and blockchain is reshaping everything from decentralized finance to marketing",
    image: blogImg2,
    component: Blog2
  },
  {
    id: 3,
    title: "SOIN Global now taps directly into an AI Agent marketplace—so you still get to build on our Growth Intelligence Engine, but with an extra layer of on-demand AI talent at your fingertips.",
    date: "Jun 05, 2025",
    slug: "soin-global-ai-marketplace",
    desc: "Last week, we quietly rolled out a new integration that's going to change the way you harness AI for your Web3 campaigns. SOIN Global now taps directly into an AI Agent marketplace—so you still get to build on our Growth Intelligence Engine, but with an extra layer of on-demand AI talent at your fingertips.",
    image: blogImg3,
    component: Blog3,
  },
  {
    id: 4,
    title: "Revolutionizing Web3 Support & Growth: SOIN Global Partners with Ring AI",
    date: "Jun 11, 2025",
    slug: "revolutionizing-web3-support",
    desc: "In today's fast-paced Web3 ecosystem, projects need more than just flashy launches — they need 24/7, high-touch customer support and sales pipelines that scale with global communities. Enter Ring AI, an autonomous, voice-driven platform designed to transform how teams engage users.",
    image: blogImg4,
    component: Blog4,
  }
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.desc,
    openGraph: {
      title: blog.title,
      description: blog.desc,
      url: `https://www.soinglobal.com/${blog.slug}.png`,
      images: [blog.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.desc,
      images: [blog.image],
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  const recentPosts = blogs.filter((b) => b.slug !== slug);

  if (!blog) return notFound();
  const BlogComponent = blog.component;

  return (
    <div className="min-h-screen bg-white dark:bg-[#00091a] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Blog Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-black dark:text-[#C6EFEF] mb-2">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500 mb-2">{blog.date} • 2 min read</p>
          </div>
          <BlogComponent />
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <h3 className="text-lg font-bold text-black dark:text-[#C6EFEF] mb-4">Recent Posts</h3>
          <div className="flex flex-col gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="flex items-center gap-3 bg-[#EFF3EF] dark:bg-[#262B35] rounded-lg p-2 hover:shadow-md"
              >
                <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black dark:text-white line-clamp-2">{post.title}</h4>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}