import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Header from "@/components/layout/navbar";
import Footer from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Creonox | AI-Powered Business Operating Systems",

  description:
    "Creonox builds AI-powered SaaS products and business operating systems that help organizations automate workflows, streamline operations, and scale efficiently. Creator of CA IQ and Audit Hub.",

  keywords: [
    "AI SaaS",
    "business operating system",
    "workflow automation",
    "CA IQ",
    "audit software",
    "audit management platform",
    "AI for CA firms",
    "accounting technology",
    "business automation",
    "enterprise software",
    "compliance software",
    "Creonox",
    "Audit Hub",
    "AI products",
    "software products",
  ],

  authors: [{ name: "Creonox Technologies" }],
  creator: "Creonox Technologies",
  publisher: "Creonox Technologies",

  icons: {
    icon: "/creonoxcolor.svg",
    apple: "/creonoxcolor.svg",
    shortcut: "/creonoxcolor.svg",
  },

  themeColor: "#7C3AED",

  openGraph: {
    title:
      "Creonox | Building AI-Powered Business Operating Systems",
    description:
      "Creonox develops AI-powered software products including CA IQ and Audit Hub to help businesses automate workflows, improve efficiency, and scale operations.",
    url: "https://www.creonox.com",
    siteName: "Creonox",
    images: [
      {
        url: "/creonoxcolor.svg",
        width: 1200,
        height: 630,
        alt: "Creonox",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Creonox | AI-Powered Business Operating Systems",
    description:
      "Building AI-powered SaaS products for modern businesses. Creator of CA IQ and Audit Hub.",
    images: ["/creonoxcolor.svg"],
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

  metadataBase: new URL("https://www.creonox.com"),

  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics/>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
