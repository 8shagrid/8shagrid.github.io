"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-susu/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-shiro tracking-wide">
            DIRGA<span className="text-beni">.</span>
          </span>
          <span className="text-xs text-hai/40">Halim Susilo</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-hai/40">
          © {new Date().getFullYear()} Dirga Halim Susilo. Built with Next.js & Tailwind.
        </p>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/8shagrid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hai/40 hover:text-shiro transition-colors text-xs font-medium"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dirgahalimsusilo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hai/40 hover:text-shiro transition-colors text-xs font-medium"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:halimdirga8@gmail.com"
            className="text-hai/40 hover:text-shiro transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
