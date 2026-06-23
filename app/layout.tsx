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
  metadataBase: new URL("https://creonox.com"),

  title: {
    default: "Creonox | AI-Powered Business Systems",
    template: "%s | Creonox",
  },

  description:
    "Creonox builds AI-powered ERP, CRM, SaaS, compliance, audit and business operating systems that help organizations automate workflows, improve efficiency and scale faster.",

  keywords: [
    "Creonox",
    "AI Software Development",
    "ERP Development",
    "CRM Development",
    "SaaS Development",
    "Business Operating System",
    "Workflow Automation",
    "Audit Management Software",
    "Compliance Software",
    "AI ERP",
    "AI CRM",
    "Custom Software Development",
    "Enterprise Software",
    "CA IQ",
    "Audit Hub",
    "Business Automation",
    "Logistics ERP",
    "Manufacturing ERP",
  ],

  authors: [
    {
      name: "Creonox Technologies",
      url: "https://creonox.com",
    },
  ],

  creator: "Creonox Technologies",
  publisher: "Creonox Technologies",

  alternates: {
    canonical: "https://creonox.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/creonoxcolor.svg",
  },

  openGraph: {
    title: "Creonox | AI-Powered Business Systems",

    description:
      "AI-powered ERP, CRM, SaaS, compliance and audit software built for modern businesses.",

    url: "https://creonox.com",

    siteName: "Creonox",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creonox - AI-Powered Business Systems",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Creonox | AI-Powered Business Systems",

    description:
      "AI-powered ERP, CRM, SaaS, compliance and audit software built for modern businesses.",

    images: ["/og-image.png"],

    creator: "@creonox",
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

  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="msvalidate.01" content="B4BBDCB128E597B3970CABAD89CE2FC4" />
      </head>
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
