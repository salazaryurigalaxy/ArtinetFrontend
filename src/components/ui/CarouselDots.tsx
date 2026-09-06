"use client";

import { cn } from "@/lib/cn";

interface CarouselDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}

export function CarouselDots({ count, activeIndex, onSelect, className }: CarouselDotsProps) {
  if (count <= 1) return null;

  return (
    <div className={cn("mt-6 flex items-center justify-center gap-2", className)} role="tablist">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Ir a la página ${index + 1}`}
          onClick={() => onSelect(index)}
          className={cn(
            "h-1.5 rounded-full transition-all",
            index === activeIndex ? "w-6 bg-brand" : "w-3 bg-brand/25 hover:bg-brand/40"
          )}
        />
      ))}
    </div>
  );
}
