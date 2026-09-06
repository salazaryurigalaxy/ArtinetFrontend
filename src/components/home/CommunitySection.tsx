"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Artisan } from "@/types/artisan";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CarouselDots } from "@/components/ui/CarouselDots";
import { useItemsPerView } from "@/lib/useItemsPerView";
import { CommunityCard } from "./CommunityCard";

interface CommunitySectionProps {
  artisans: Artisan[];
}

export function CommunitySection({ artisans }: CommunitySectionProps) {
  const itemsPerView = useItemsPerView(4);
  const pageCount = Math.max(1, Math.ceil(artisans.length / itemsPerView));
  const [page, setPage] = useState(0);
  const currentPage = Math.min(page, pageCount - 1);

  const visibleArtisans = useMemo(() => {
    const start = currentPage * itemsPerView;
    return artisans.slice(start, start + itemsPerView);
  }, [artisans, currentPage, itemsPerView]);

  return (
    <section className="w-full bg-brand-mint py-16">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Comunidad Artinet" />

        <div className="mt-12 grid grid-cols-1 gap-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {visibleArtisans.map((artisan) => (
            <CommunityCard key={artisan.id} artisan={artisan} />
          ))}
        </div>

        <CarouselDots count={pageCount} activeIndex={currentPage} onSelect={setPage} />

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light"
          >
            Descubre las últimas tendencias en la comunidad
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
