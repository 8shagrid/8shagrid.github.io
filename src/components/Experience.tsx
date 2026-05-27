"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 border-t border-susu/10">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          description="Freelancing, internships, and academic contributions."
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
                viewport={{ once: true, margin: "-50px" }}
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
      </div>
    </section>
  );
}
