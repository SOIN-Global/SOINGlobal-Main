"use client"

import { PrismicRichText } from "@prismicio/react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  post: any
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  const { data } = post
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/5"
    >
      <Link href={`/blogs/${post.uid}`} className="block">
        {/* Featured Image */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          {data.featured_image?.url ? (
            <Image
              src={data.featured_image.url}
              alt={data.featured_image.alt || "Blog post image"}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          
          {/* Category Badge */}
          {data.category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                {data.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 space-y-4 flex flex-col h-full">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-white line-clamp-2 group-hover:text-primary transition-colors">
            <PrismicRichText field={data.title} />
          </h3>

          {/* Excerpt */}
          {data.excerpt && (
            <div className="text-sm text-muted-foreground line-clamp-3 flex-grow">
              <PrismicRichText field={data.excerpt} />
            </div>
          )}

          {/* Read Post Button */}
           <div className="pt-4">
                                    <p className="text-primary flex items-center gap-1">
                                        Read More <ArrowUpRight size={18} />
                                    </p>

                                </div>
        </div>
      </Link>
    </motion.div>
  )
}
