"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 border-t border-susu/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          description="Bridging AI/Data Science with modern Software Engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
            >
              <h3 className="text-sm font-semibold text-kin uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 bg-tetsu border border-susu/20 text-hai hover:text-shiro hover:border-beni/30 transition-colors duration-200 rounded-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
