import type { Artisan } from "@/types/artisan";

/**
 * TEMPORARY mock data. Replace usages with `getArtisans()` from
 * `@/services/artisan.service` once the backend is connected.
 */
export const mockArtisans: Artisan[] = [
  {
    id: "art-001",
    name: "Taller Flor de Barro",
    location: "Masaya, Nicaragua",
    description:
      "Familia dedicada a la cerámica tradicional desde hace tres generaciones.",
    image: "/images/artesanos/taller_flor_barro.jpg",
    avatar: "https://picsum.photos/seed/artinet-avatar-1/100/100",
  },
  {
    id: "art-002",
    name: "Hamacas El Trapiche",
    location: "Masaya, Nicaragua",
    description: "Especialistas en tejido de hamacas con técnicas ancestrales.",
    image: "/images/artesanos/hamacas_trapiche.jpg",
    avatar: "https://picsum.photos/seed/artinet-avatar-2/100/100",
  },
  {
    id: "art-003",
    name: "Cestería San Juan",
    location: "Masatepe, Nicaragua",
    description:
      "Cestas y sombreros elaborados con fibras naturales de la zona.",
    image: "/images/artesanos/cesteria_san_juan.jpg",
    avatar: "https://picsum.photos/seed/artinet-avatar-3/100/100",
  },
  {
    id: "art-004",
    name: "Madera Viva Nicaragua",
    location: "Catarina, Nicaragua",
    description: "Talladores de madera especializados en piezas decorativas.",
    image: "/images/artesanos/madera_viva_nicaragua.jpg",
    avatar: "https://picsum.photos/seed/artinet-avatar-4/100/100",
  },
];
