import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creonox Technologies | ERP, FinTech, Logistics & Mobile App Development Company",
  description:
    "Creonox Technologies builds custom ERP systems, FinTech platforms, logistics software, e-commerce backends and mobile applications for scalable businesses. Code ownership. No SaaS limits.",

  keywords: [
    "custom ERP development",
    "logistics ERP software",
    "fintech software development",
    "mobile app development company",
    "custom software development India",
    "ecommerce backend development",
    "SaaS product development",
    "Creonox Technologies",
  ],

  authors: [{ name: "Creonox Technologies" }],
  creator: "Creonox Technologies",
  publisher: "Creonox Technologies",

  /* ✅ USE clogo.svg EVERYWHERE */
  icons: {
    icon: "/clogo.svg",
    apple: "/clogo.svg",
    shortcut: "/clogo.svg",
  },

  themeColor: "#A78BFA",

  openGraph: {
    title: "Creonox Technologies | ERP, FinTech & Mobile Apps",
    description:
      "Custom-built ERP, FinTech systems, logistics software and mobile apps designed for scale, accuracy and ownership.",
    url: "https://www.Creonox.in",
    siteName: "Creonox Technologies",
    images: [
      {
        url: "/clogo.svg",
        width: 512,
        height: 512,
        alt: "Creonox Technologies Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Creonox Technologies | Custom ERP & FinTech Development",
    description:
      "Enterprise-grade ERP, logistics, FinTech & mobile app development company.",
    images: ["/clogo.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
