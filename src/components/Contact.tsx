"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { contactData } from "@/lib/data";
import { Mail, Phone, Globe, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      action: handleCopyEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactData.phone,
      href: `https://wa.me/${contactData.phone.replace(/\+/g, "")}`,
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: contactData.linkedin,
      href: `https://${contactData.linkedin}`,
    },
    {
      icon: Globe,
      label: "GitHub",
      value: contactData.github,
      href: `https://${contactData.github}`,
    },
    {
      icon: Globe,
      label: "Website",
      value: contactData.website,
      href: `https://${contactData.website}`,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-t border-susu/10">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          description="Open for freelance projects, collaboration, and full-time opportunities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.action ? undefined : link.href}
              target={link.action ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={link.action}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex items-center gap-4 p-4 bg-tetsu/50 border border-susu/10 rounded-sm hover:border-beni/20 transition-all duration-300 cursor-pointer"
            >
              <link.icon size={18} className="text-hai/50 group-hover:text-beni transition-colors shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] text-hai/50 uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm text-shiro group-hover:text-beni transition-colors truncate">
                  {link.value}
                </p>
              </div>
              {link.action && (
                <div className="ml-auto shrink-0">
                  {copied ? (
                    <Check size={14} className="text-take" />
                  ) : (
                    <Copy size={14} className="text-hai/30 group-hover:text-hai/60 transition-colors" />
                  )}
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
