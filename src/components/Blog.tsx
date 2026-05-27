"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { blogPosts } from "@/lib/data";
import { PenLine } from "lucide-react";

export default function Blog() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-susu/10">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Blog"
          title="Articles & Thoughts"
          description="Writing about AI, software engineering, and building digital products."
        />

        <div className="space-y-3">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-start gap-4 p-5 bg-tetsu/50 border border-susu/10 rounded-sm hover:border-beni/20 transition-all duration-300"
            >
              <PenLine size={18} className="text-hai/40 shrink-0 mt-0.5 group-hover:text-beni/60 transition-colors" />
              <div>
                <h4 className="text-sm font-semibold text-shiro group-hover:text-beni transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-hai mt-1">{post.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
