"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4 }}
        className="text-beni text-xs font-medium uppercase tracking-[0.2em]"
      >
        {label}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mt-3 mb-4 font-[family-name:var(--font-heading)]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-hai max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      {/* Red divider */}
      <div className="mt-6 w-12 h-[2px] bg-beni/40" />
    </div>
  );
}
