import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-tools-catalog-demo.vercel.app"),
  title: {
    default: "AI Tools Catalog - Discover the Best AI Tools",
    template: "%s | AI Tools Catalog",
  },
  description:
    "Explore our curated collection of cutting-edge AI tools. Find the perfect AI solution for text generation, image creation, code assistance, and more.",
  keywords: [
    "AI tools",
    "artificial intelligence",
    "AI catalog",
    "machine learning",
    "AI directory",
    "generative AI",
    "ChatGPT",
    "Midjourney",
  ],
  authors: [{ name: "AI Tools Catalog" }],
  creator: "AI Tools Catalog",
  publisher: "AI Tools Catalog",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-tools-catalog-demo.vercel.app",
    title: "AI Tools Catalog - Discover the Best AI Tools",
    description:
      "Explore our curated collection of cutting-edge AI tools for every need.",
    siteName: "AI Tools Catalog",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "AI Tools Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Catalog - Discover the Best AI Tools",
    description:
      "Explore our curated collection of cutting-edge AI tools for every need.",
    creator: "@aitoolscatalog",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://ai-tools-catalog-demo.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
