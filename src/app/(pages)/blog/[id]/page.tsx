"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Blog1 from "@/components/blogs/Blog1";
import Blog2 from "@/components/blogs/Blog2";
import Blog3 from "@/components/blogs/Blog3";
import blogImg1 from "@/assets/blog/revolution.webp"
import blogImg2 from "@/assets/blog/hela.png";
import blogImg3 from "@/assets/blog/development.png";


const blogs = [
  {
    id: 1,
    title: "Revolutionizing Influencer Marketing with On-Chain Intelligence",
    date: "May 26, 2025",
    image: blogImg1,
    component: Blog1
  },
  {
    id: 2,
    title: "SOIN Global & HeLa Forge Strategic Partnership to Power Personalized AI & Sustainable Yields in Web3 Marketing",
    date: "May 31, 2025",
    image: blogImg2,
    component: Blog2
  },
  {
    id: 3,
    title: "SOIN Global now taps directly into an AI Agent marketplace—so you still get to build on our Growth Intelligence Engine, but with an extra layer of on-demand AI talent at your fingertips.",
    date: "Jun 05, 2025",
    image: blogImg3,
    component: Blog3,
  }
];


export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));
  const recentPosts = blogs.filter((b) => b.id !== Number(id));

  if (!blog) return <div className="text-center py-20 text-xl">Blog not found.</div>;

  const BlogComponent = blog.component;

  return (
    <div className="min-h-screen bg-white dark:bg-[#00091a] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Main Blog Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-[#C6EFEF] mb-2 font-jakarta">
              {blog.title}
            </h1>
            <span className="text-sm text-gray-500 mb-2 block">{blog.date} • 2 min read</span>
          </div>

          {/* Render the specific blog component */}
          <BlogComponent />
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