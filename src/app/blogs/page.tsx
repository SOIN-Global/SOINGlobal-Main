import { Metadata } from "next"
import { notFound } from "next/navigation"
import { createClient } from "../../../prismicio"
import Image from "next/image"
import Link from "next/link"
import { BlogCard } from "@/components/blog/BlogCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight, Search } from "lucide-react"
import Navbar from "@/components/HomePage/Navbar"
import FooterSection from "@/components/HomePage/FooterSection"

export const metadata: Metadata = {
    title: "Blog Posts | SOIN Global",
    description: "Read the latest articles about Web3, AI-driven influencer marketing, and blockchain technology.",
}

const categories = ["View All", "Product", "Development", "Management", "Leadership"]

export default async function BlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>
}) {
    const client = createClient()
    const { category } = await searchParams

    // Fetch all blog posts
    const blogPosts = await client.getAllByType("blog_post", {
        orderings: [
            { field: "my.blog_post.publish_date", direction: "desc" },
            { field: "document.first_publication_date", direction: "desc" },
        ],
    })

    // Filter by category if provided
    const filteredPosts = category && category !== "View All"
        ? blogPosts.filter(post => post.data.category === category)
        : blogPosts

    // Get featured post (most recent from filtered)
    const featuredPost = filteredPosts[0]
    const otherPosts = filteredPosts.slice(1)

    return (
        <div className="min-h-screen bg-black">

            <div className="flex justify-center">
                <Navbar />

            </div>
            {/* Header Section */}
            <div className="relative overflow-hidden">


                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="text-left space-y-6">
                        <h1 className="text-lg sm:text-xl text-left
             md:text-2xl lg:text-5xl font-normal text-white">
                            Empowering <span className="text-mut">Web3 Services</span>  with AI <br /> Driven Influencer Marketing
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground  mx-auto">
                            Work with real creators. Automate everything. Track on-chain performance.
                        </p>

                        {/* Search Bar */}

                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap gap-3 items-center justify-start">
                    {categories.map((cat) => (
                        <Link
                            key={cat}
                            href={cat === "View All" ? "/blogs" : `/blogs?category=${cat}`}
                            className={`px-6 py-2.5  text-sm font-medium transition-all duration-300 ${(category === cat || (!category && cat === "View All"))
                                    ? "border-b text-primary border-primary"
                                    : "text-muted-foreground hover:text-white border-none hover:border-white/50"
                                }`}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <Link
                        href={`/blogs/${featuredPost.uid}`}
                        className="group block bg-card rounded-2xl overflow-hidden border border-white/5 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {/* Image */}
                            <div className="relative h-64 md:h-full min-h-[300px]">
                                {featuredPost.data.featured_image?.url ? (
                                    <Image
                                        src={featuredPost.data.featured_image.url}
                                        alt={featuredPost.data.featured_image.alt || "Featured blog post"}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-primary/20 to-accent/20" />
                                )}

                                {featuredPost.data.category && (
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
                                            {featuredPost.data.category}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <p className="text-primary font-medium">Featured Post</p>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                                        {(featuredPost.data.title?.[0] && 'text' in featuredPost.data.title[0] ? featuredPost.data.title[0].text : null) || "Untitled Post"}
                                    </h2>
                                </div>

                                {featuredPost.data.excerpt && (
                                    <p className="text-muted-foreground text-base md:text-lg line-clamp-3">
                                        {featuredPost.data.excerpt[0] && 'text' in featuredPost.data.excerpt[0] ? featuredPost.data.excerpt[0].text : ''}
                                    </p>
                                )}

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    {featuredPost.data.publish_date && (
                                        <span>
                                            {new Date(featuredPost.data.publish_date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    )}
                                    {/* {featuredPost.data.author && (
                                        <>
                                            <span>•</span>
                                            <span>{featuredPost.data.author}</span>
                                        </>
                                    )} */}
                                </div>

                                <div className="pt-4">
                                    <p className="text-primary flex items-center gap-1">
                                        Read More <ArrowUpRight size={18} />
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
                    Latest Articles
                </h2>

                {otherPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {otherPosts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No blog posts found.</p>
                    </div>
                )}
            </div>

            {/* Bottom Logo */}
            <FooterSection />
        </div>
    )
}
