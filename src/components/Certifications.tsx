"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-susu/10">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Professional Certifications"
          description="Continuous learning validated by industry leaders."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group bg-tetsu/50 border border-susu/10 rounded-sm p-5 hover:border-kin/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <Award size={16} className="text-kin shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-shiro group-hover:text-kin transition-colors duration-200 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-hai mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] text-hai/50">{cert.date}</span>
                    {cert.credentialId && (
                      <span className="text-[10px] text-hai/30 font-mono">
                        {cert.credentialId.slice(0, 12)}...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
