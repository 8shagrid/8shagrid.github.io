"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import { contactData } from "@/lib/data";
import { Mail, Phone, Globe, Copy, Check, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useRef, type FormEvent } from "react";
import { viewportOnce } from "@/lib/animations";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
    setFormStatus("sent");
    form.reset();
    setTimeout(() => setFormStatus("idle"), 3000);
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
      icon: FaLinkedinIn,
      label: "LinkedIn",
      value: contactData.linkedin,
      href: `https://${contactData.linkedin}`,
    },
    {
      icon: SiGithub,
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
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Build Something Useful"
        description="Available for freelance projects, AI implementation, dashboard development, ERP systems, and full-time software engineering roles."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Links */}
        <div className="space-y-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.action ? undefined : link.href}
              target={link.action ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={link.action}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group flex items-center gap-4 p-4 bg-tetsu/50 border border-susu/10 rounded-sm hover:border-beni/20 transition-all duration-300 cursor-pointer"
            >
              <link.icon
                size={18}
                className="text-hai/50 group-hover:text-beni transition-colors shrink-0"
              />
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
                    <Copy
                      size={14}
                      className="text-hai/30 group-hover:text-hai/60 transition-colors"
                    />
                  )}
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Quick Message Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-tetsu/50 border border-susu/10 rounded-sm p-5 flex flex-col gap-4"
        >
          <p className="text-xs text-hai/60 uppercase tracking-wider">
            Quick Message
          </p>

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-sumi border border-susu/20 rounded-sm px-3 py-2.5 text-sm text-shiro placeholder:text-hai/40 focus:outline-none focus:border-beni/50 transition-colors"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-sumi border border-susu/20 rounded-sm px-3 py-2.5 text-sm text-shiro placeholder:text-hai/40 focus:outline-none focus:border-beni/50 transition-colors"
          />

          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message..."
            className="w-full bg-sumi border border-susu/20 rounded-sm px-3 py-2.5 text-sm text-shiro placeholder:text-hai/40 focus:outline-none focus:border-beni/50 transition-colors resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-beni text-shiro font-medium text-sm rounded-sm hover:bg-beni-light transition-colors duration-200"
          >
            {formStatus === "sent" ? (
              <>
                <Check size={14} />
                Sent!
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>

          <p className="text-[10px] text-hai/40 text-center">
            Opens your email client to send
          </p>
        </motion.form>
      </div>
    </Section>
  );
}
