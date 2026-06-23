import ProductHero from "@/components/products/product-hero";
import ProductPhilosophy from "@/components/products/product-philosophy";
import ProductShowcase from "@/components/products/product-showcase";
import ProductModules from "@/components/products/product-modules";
import ProductRoadmap from "@/components/products/product-roadmap";
import CTA from "@/components/sections/cta";

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <ProductHero />
      <ProductPhilosophy />
      <ProductShowcase />
      <ProductModules />
      <ProductRoadmap />
      <CTA variant="products" />
    </main>
  );
}