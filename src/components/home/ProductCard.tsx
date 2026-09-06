import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-brand-dark shadow-card">
      <div className="relative aspect-[4/3] w-full bg-brand-mint">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5 text-white">
        <h3 className="font-semibold text-brand-light">{product.name}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-white/70">{product.description}</p>
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        <Button variant="outline-light" className="mt-2 w-full justify-center text-white">
          Añadir al carrito
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
