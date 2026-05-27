"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { heroData, cvData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle pattern bg */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f0ece4 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red accent line */}
      <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-beni/20 hidden md:block" />

      <div className="relative max-w-3xl mx-auto px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-beni font-medium text-sm tracking-[0.2em] uppercase mb-6"
        >
          {heroData.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 font-[family-name:var(--font-heading)]"
        >
          {heroData.name.split(" ").map((word, i) => (
            <span key={i}>
              {word}{" "}
              {i === 1 && <br className="hidden md:block" />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-hai mb-3 max-w-xl mx-auto leading-relaxed"
        >
          {heroData.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-hai/70 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          {heroData.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
        >
          {heroData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-kin font-[family-name:var(--font-heading)]">
                {stat.value}
              </div>
              <div className="text-xs text-hai/60 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-beni text-shiro font-medium text-sm rounded-sm hover:bg-beni-light transition-colors duration-200"
          >
            View My Work
            <ChevronDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-susu text-shiro font-medium text-sm rounded-sm hover:border-beni/50 transition-colors duration-200"
          >
            Get in Touch
          </a>
          <a
            href={cvData.url}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-kin/30 text-kin font-medium text-sm rounded-sm hover:bg-kin/10 transition-colors duration-200"
          >
            <Download size={16} />
            {cvData.label}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-hai/30"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
