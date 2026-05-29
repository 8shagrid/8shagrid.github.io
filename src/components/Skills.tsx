"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { skillGroups } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Tech Stack"
        title="Technical Capabilities"
        description="A practical stack for building scalable web applications, data products, automation, and AI-powered workflows."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: gi * 0.15 }}
          >
            <h3 className="text-sm font-semibold text-kin uppercase tracking-wider mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 bg-tetsu border border-susu/40 text-hai hover:text-shiro hover:border-beni/50 transition-colors duration-200 rounded-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
