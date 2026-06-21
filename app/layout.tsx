import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Gowtham Reddy Addula | AI Engineer & Generative AI Specialist",
  description:
    "AI Engineer specializing in Generative AI, Prompt Engineering, RAG Systems, and Automation. Transforming ideas into intelligent experiences through AI, automation, and storytelling.",
  keywords: [
    "Gowtham Reddy",
    "AI Engineer",
    "Generative AI",
    "Prompt Engineering",
    "RAG Systems",
    "N8N Automation",
    "Power BI",
    "Machine Learning",
    "Hyderabad",
    "Claude AI",
    "ChatGPT",
  ],
  authors: [{ name: "Gowtham Reddy Addula" }],
  creator: "Gowtham Reddy Addula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gowthamreddy.vercel.app",
    siteName: "Gowtham Reddy Portfolio",
    title: "Gowtham Reddy Addula | AI Engineer & Generative AI Specialist",
    description:
      "Transforming ideas into intelligent experiences through AI, automation, and storytelling.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gowtham Reddy Addula - AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowtham Reddy Addula | AI Engineer",
    description:
      "Transforming ideas into intelligent experiences through AI, automation, and storytelling.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080B12",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-obsidian text-ghost-white antialiased">
        {children}
      </body>
    </html>
  );
}
