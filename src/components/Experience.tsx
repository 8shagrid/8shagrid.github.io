"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { experiences } from "@/lib/data";
import { viewportOnce } from "@/lib/animations";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        label="Experience"
        title="Professional Experience"
        description="Hands-on experience across freelance software development, data science, HR analytics, and academic research."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-susu/30 hidden md:block" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[-4.5px] top-2 w-[9px] h-[9px] rounded-full bg-beni border-2 border-sumi" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                <span className="text-xs text-beni font-medium whitespace-nowrap font-mono">
                  {exp.period}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-shiro">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-hai">
                    {exp.company} · {exp.location}
                  </p>
                </div>
              </div>

              <ul className="mt-2 space-y-1.5">
                {exp.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-hai/70 leading-relaxed flex gap-2"
                  >
                    <span className="text-beni/40 mt-1 shrink-0">—</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
