import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dirga Halim Susilo — AI-Native Full-Stack Developer & Tech Entrepreneur",
  description:
    "S1 Data Science (GPA 3.77). Freelance developer & data specialist. Built 4 digital products including enterprise ERP. Based in Medan, Indonesia.",
  keywords: [
    "Dirga Halim Susilo",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Data Scientist",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Dirga Halim Susilo" }],
  openGraph: {
    title: "Dirga Halim Susilo — Full-Stack Developer & Tech Entrepreneur",
    description:
      "Building AI-powered products and digital businesses. S1 Data Science (GPA 3.77).",
    type: "website",
    locale: "en_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-sumi text-shiro font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
