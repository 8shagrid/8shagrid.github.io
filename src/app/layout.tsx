import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d12",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dirga.dev"),
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
    siteName: "Dirga Halim Susilo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dirga Halim Susilo — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirga Halim Susilo — Full-Stack Developer & Tech Entrepreneur",
    description:
      "Building AI-powered products and digital businesses. S1 Data Science (GPA 3.77).",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dirga Halim Susilo",
  jobTitle: "AI-Native Full-Stack Developer & Tech Entrepreneur",
  url: "https://dirga.dev",
  sameAs: [
    "https://github.com/8shagrid",
    "https://linkedin.com/in/dirgahalimsusilo",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Data Science",
    "Full-Stack Development",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} ${notoSerifJP.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-sumi text-shiro font-[family-name:var(--font-body)]">
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-beni focus:text-shiro focus:rounded-sm focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
