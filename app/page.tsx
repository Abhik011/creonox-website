import Hero from "@/components/sections/hero";
import ProductPreview from "@/components/sections/product-preview";
import BentoFeatures from "@/components/sections/bento-features";
import VisionReveal from "@/components/sections/vision-reveal";
import ProductStack from "@/components/sections/product-stack";
import Founder from "@/components/sections/founder";
import Insights from "@/components/sections/Insights"
import Cta from "@/components/sections/cta"
import Reveal from "@/components/animations/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.creonox.com"),
  title: {
    default: "Creonox | Custom ERP, CRM & AI Software Development",
    template: "%s | Creonox",
  },
  description:
    "Creonox builds custom ERP, CRM, and AI-powered software for manufacturing, logistics, accounting, and business automation. Replace spreadsheets with intelligent systems built to scale.",
  keywords: [
    "custom ERP development",
    "ERP development company",
    "ERP development services",
    "custom software development",
    "CRM development company",
    "CRM development services",
    "AI-powered software development",
    "workflow automation software",
    "business automation software",
    "enterprise software development",
    "inventory management software",
    "accounting automation software",
    "logistics software development",
    "manufacturing software development",
    "white-label software development",
  ],
  authors: [{ name: "Creonox Technologies", url: "https://www.creonox.com" }],
  creator: "Creonox Technologies",
  publisher: "Creonox Technologies",
  alternates: {
    canonical: "https://www.creonox.com",
  },
  openGraph: {
    title: "Creonox | Custom ERP, CRM & AI Software Development",
    description:
      "Creonox builds custom ERP, CRM, and AI-powered software for manufacturing, logistics, accounting, and business automation.",
    url: "https://www.creonox.com",
    siteName: "Creonox",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/creonoxcolor.svg",
        width: 1200,
        height: 630,
        alt: "Creonox Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creonox | Custom ERP, CRM & AI Software Development",
    description:
      "Custom ERP, CRM, and AI-powered software for manufacturing, logistics, accounting, and business automation.",
    images: ["/creonoxcolor.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export default function HomePage() {
  return (
    <main className="">
      <Hero />
      <ProductPreview />
      <ProductStack />
      <VisionReveal />
      <BentoFeatures />
      <Founder variant="home" />
      <Insights />
      <Cta variant="home" />
    </main>
  );
}