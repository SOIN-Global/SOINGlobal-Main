import { Metadata } from "next"
import { notFound } from "next/navigation"
import { createClient } from "../../../../prismicio"
import { PrismicRichText, PrismicText } from "@prismicio/react"
import { asText } from "@prismicio/client"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/HomePage/Navbar"
import FooterSection from "@/components/HomePage/FooterSection"

type Params = { uid: string }

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const { uid } = await params
    const client = createClient()

    try {
        const page = await client.getByUID("blog_post", uid)

        return {
            title: page.data.meta_title || asText(page.data.title) || "Blog Post",
            description: page.data.meta_description || asText(page.data.excerpt) || "",
            openGraph: {
                images: page.data.meta_image?.url || page.data.featured_image?.url || "",
            },
        }
    } catch (error) {
        return {
            title: "Blog Post Not Found",
        }
    }
}

export async function generateStaticParams() {
    const client = createClient()
    const pages = await client.getAllByType("blog_post")

    return pages.map((page) => {
        return { uid: page.uid }
    })
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
    const { uid } = await params
    const client = createClient()

    try {
        const page = await client.getByUID("blog_post", uid)
        const { data } = page

        // Fetch related posts
        const relatedPosts = await client.getAllByType("blog_post", {
            limit: 4,
            orderings: [
                { field: "my.blog_post.publish_date", direction: "desc" },
            ],
        })

        // Filter out current post
        const filteredRelatedPosts = relatedPosts.filter(post => post.id !== page.id).slice(0, 3)

        return (
            <div className="min-h-screen bg-black">

                <div className="flex justify-center">
                    <Navbar />

                </div>
                {/* Header with Featured Image */}

                <div className=" p-6 md:p-12 lg:p-16">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {data.category && (
                            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-full">
                                {data.category}
                            </span>
                        )}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            <PrismicText field={data.title} />
                        </h1>
                    </div>
                </div>
                <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] mt-40">
                    {data.featured_image?.url ? (
                        <>
                            <Image
                                src={data.featured_image.url}
                                alt={data.featured_image.alt || "Blog post cover"}
                                fill
                                className="object-cover"
                                priority
                            />
                        </>
                    ) : (
                        <div className="w-full h-full bg-linear-to-br from-primary/20 to-accent/20" />
                    )}



                    {/* Title Overlay */}

                </div>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 pb-8 border-b border-white/10 mb-8">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span className="text-sm md:text-base">{data.author || "Anonymous"}</span>
                        </div>

                        {data.publish_date && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm md:text-base">
                                    {new Date(data.publish_date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        )}

                        {/* Share Buttons */}
                        <div className="ml-auto flex items-center gap-3">
                            <span className="text-sm text-muted-foreground hidden sm:block">Share:</span>
                            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <Twitter className="w-4 h-4 text-muted-foreground hover:text-white" />
                            </button>
                            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-white" />
                            </button>
                            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <Facebook className="w-4 h-4 text-muted-foreground hover:text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Excerpt */}
                    {data.excerpt && (
                        <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                            <PrismicRichText field={data.excerpt} />
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
            prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ul:mb-6
            prose-ol:text-muted-foreground prose-ol:mb-6
            prose-li:mb-2
            prose-img:rounded-xl prose-img:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
            prose-code:text-primary prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
            prose-pre:bg-card prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4
          ">
                        <PrismicRichText field={data.content} />
                    </div>

                    {/* Tags */}
                    {data.tags && data.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
                            <span className="text-muted-foreground mr-2">Tags:</span>
                            {data.tags.map((item: any, i: number) => (
                                item.tag && (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 text-muted-foreground text-sm rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        #{item.tag}
                                    </span>
                                )
                            ))}
                        </div>
                    )}
                </article>

                {/* Related Posts */}
                {filteredRelatedPosts.length > 0 && (
                    <div className="bg-card/30 py-16 md:py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
                                Related Articles
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {filteredRelatedPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blogs/${post.uid}`}
                                        className="group bg-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/5"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            {post.data.featured_image?.url ? (
                                                <Image
                                                    src={post.data.featured_image.url}
                                                    alt={post.data.featured_image.alt || "Related post"}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-linear-to-br from-primary/20 to-accent/20" />
                                            )}
                                        </div>

                                        <div className="p-5 space-y-2">
                                            {post.data.category && (
                                                <span className="text-xs text-primary font-medium">
                                                    {post.data.category}
                                                </span>
                                            )}
                                            <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-primary transition-colors">
                                                {asText(post.data.title)}
                                            </h3>
                                            {post.data.publish_date && (
                                                <p className="text-xs text-muted-foreground">
                                                    {new Date(post.data.publish_date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <FooterSection />
            </div>
        )
    } catch (error) {
        notFound()
    }
}
