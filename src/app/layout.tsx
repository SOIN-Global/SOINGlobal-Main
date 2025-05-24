import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOIN Global | AI-Powered Influencer Marketing for Web3 Brands",
  description:
    "Drive engagement, volume, and reach with SOIN – the first AI-driven influencer platform tailored for Web3, DeFi, and crypto startups.",
  keywords:
    "free Web3 influencer marketing, crypto influencer platform, AI influencer matching, free Web3 marketing tool, crypto brand promotion, DeFi influencer campaigns, free blockchain marketing platform, token volume growth, AI-driven campaign planner",
  authors: [{ name: "Soin Global", url: "https://www.soinglobal.com" }],
  creator: "SOIN Global",
  publisher: "SOIN Global",
  metadataBase: new URL("https://www.soinglobal.com"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "SOIN Global",
    description:
      "The first AI influencer marketing platform for crypto and Web3 projects.",
    url: "https://www.soinglobal.com",
    siteName: "SOIN Global",
    type: "website",
    images: [
      {
        url: "https://www.soinglobal.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOIN Global Open Graph Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SOIN Global | AI-Powered Influencer Marketing for Web3 Brands",
    description:
      "Drive engagement, volume, and reach with SOIN – the first AI-driven influencer platform tailored for Web3, DeFi, and crypto startups.",
    images: ["https://www.soinglobal.com/og-image.png"],
    creator: "@SoinGlobal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Google Ads Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17106757545"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17106757545');
            `,
          }}
        />
      </Head>
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
