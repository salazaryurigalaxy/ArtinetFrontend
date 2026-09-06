"use client";

import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/types/product";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CarouselDots } from "@/components/ui/CarouselDots";
import { useItemsPerView } from "@/lib/useItemsPerView";
import { ProductCard } from "./ProductCard";

interface PopularProductsProps {
  products: Product[];
}

export function PopularProducts({ products }: PopularProductsProps) {
  const itemsPerView = useItemsPerView(4);
  const pageCount = Math.max(1, Math.ceil(products.length / itemsPerView));
  const [page, setPage] = useState(0);

  const currentPage = Math.min(page, pageCount - 1);

  const visibleProducts = useMemo(() => {
    const start = currentPage * itemsPerView;
    return products.slice(start, start + itemsPerView);
  }, [products, currentPage, itemsPerView]);

  function goToNextPage() {
    setPage((prev) => (prev + 1) % pageCount);
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Productos populares"
          description="Descubre las piezas favoritas de nuestra comunidad, elaboradas a mano por artesanos nicaragüenses."
        />

        <div className="mt-12 flex items-center gap-4">
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {pageCount > 1 && (
            <button
              type="button"
              onClick={goToNextPage}
              aria-label="Ver más productos"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white sm:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        <CarouselDots count={pageCount} activeIndex={currentPage} onSelect={setPage} />
      </div>
    </section>
  );
}
