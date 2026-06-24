import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.creonox.com";
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const services = [
    "ai-software-development",
    "custom-erp-development",
    "custom-software-development",
    "ecommerce-development",
    "erp-development-company",
    "logistics-erp-development",
    "manufacturing-erp-development",
    "mobile-app-development",
    "saas-development",
    "shopify-development",
    "web-development",
    "white-label-development",
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified,
    changeFrequency: "weekly",
    priority:
      service === "shopify-development" ||
      service === "white-label-development"
        ? 0.8
        : 0.9,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...corePages,
    ...servicePages,
    ...legalPages,
  ];
}