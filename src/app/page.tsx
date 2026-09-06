import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PopularProducts } from "@/components/home/PopularProducts";
import { CommunitySection } from "@/components/home/CommunitySection";
import { getPopularProducts } from "@/services/product.service";
import { getArtisans } from "@/services/artisan.service";
import { mockServices } from "@/mocks/services";

export default async function HomePage() {
  const [products, artisans] = await Promise.all([getPopularProducts(), getArtisans()]);

  return (
    <>
      <Hero />
      <ServicesSection services={mockServices} />
      <PopularProducts products={products} />
      <CommunitySection artisans={artisans} />
    </>
  );
}
