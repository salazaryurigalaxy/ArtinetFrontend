import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import type { Artisan } from "@/types/artisan";

interface CommunityCardProps {
  artisan: Artisan;
}

export function CommunityCard({ artisan }: CommunityCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-brand-dark shadow-card">
      <div className="relative aspect-[4/3] w-full bg-white/40">
        <Image
          src={artisan.image}
          alt={artisan.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        {artisan.avatar && (
          <span className="absolute -bottom-6 left-5 h-12 w-12 overflow-hidden rounded-full border-4 border-brand-dark">
            <Image src={artisan.avatar} alt="" fill sizes="48px" className="object-cover" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-9 text-white">
        <h3 className="font-semibold">{artisan.name}</h3>
        <p className="flex items-center gap-1.5 text-sm text-white/70">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {artisan.location}
        </p>
        <button
          type="button"
          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/60 px-4 py-2 text-xs font-medium transition-colors hover:bg-white hover:text-brand-dark"
        >
          Ver más...
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
