"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, cvData } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const sectionId = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300",
        scrolled
          ? "bg-sumi/90 backdrop-blur-md border-b border-susu/30"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-lg font-bold text-shiro tracking-wide group-hover:text-beni transition-colors duration-200">
            DIRGA<span className="text-beni">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-beni after:transition-all",
                  isActive
                    ? "text-shiro after:w-full"
                    : "text-hai hover:text-shiro after:w-0 hover:after:w-full",
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={cvData.url}
            download
            className="text-sm px-4 py-2 border border-beni/50 text-beni hover:bg-beni hover:text-shiro transition-all duration-200 rounded-sm"
          >
            {cvData.label}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-hai hover:text-shiro transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-sumi/95 backdrop-blur-md border-b border-susu/30 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto py-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleMobileNav(e, link.href)}
                    className={cn(
                      "text-sm py-2 transition-colors",
                      isActive ? "text-shiro" : "text-hai hover:text-shiro",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={cvData.url}
                download
                onClick={() => setIsOpen(false)}
                className="text-sm px-4 py-2 border border-beni/50 text-beni text-center rounded-sm mt-2"
              >
                {cvData.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
