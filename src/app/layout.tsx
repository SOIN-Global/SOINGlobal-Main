import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "SOIN Global | AI-Powered Influencer Marketing for Web3 Brands",
  description:
    "Drive engagement, volume, and reach with SOIN – the first AI-driven influencer platform tailored for Web3, DeFi, and crypto startups.",
  keywords: [
    "free Web3 influencer marketing",
    "crypto influencer platform",
    "AI influencer matching",
    "DeFi influencer campaigns",
    "token volume growth",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SOIN Global",
    description:
      "The first AI influencer marketing platform for crypto and Web3 projects.",
    url: "https://soin.global",
    siteName: "SOIN Global",
    type: "website",
    // images: [
    //   {
    //     url: "https://soin.global/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOIN Global | AI-Powered Influencer Marketing for Web3 Brands",
    description:
      "Drive engagement, volume, and reach with SOIN – the first AI-driven influencer platform tailored for Web3, DeFi, and crypto startups.",
    // images: ["https://soin.global/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#00091a]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
