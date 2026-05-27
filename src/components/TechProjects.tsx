"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

export default function TechProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-t border-susu/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Tech Projects"
          title="AI & Engineering Projects"
          description="From machine learning research to full-stack applications."
        />

        <div className="space-y-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 p-5 bg-tetsu/50 border border-susu/10 rounded-sm hover:border-beni/20 hover:bg-tetsu transition-all duration-300">
                {/* Left accent line */}
                <div className="hidden md:block w-[2px] self-stretch bg-beni/0 group-hover:bg-beni/30 transition-colors duration-300 rounded-full" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-sm font-semibold text-shiro">
                      {project.title}
                    </h3>
                    {project.comingSoon && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 bg-kin/10 text-kin border border-kin/20 rounded-sm">
                        <Clock size={10} />
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-hai/70 mb-2">{project.type}</p>
                  <p className="text-sm text-hai/80 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 bg-sumi border border-susu/20 text-hai/60 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs text-beni hover:text-beni-light transition-colors"
                  >
                    {project.linkLabel}
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
