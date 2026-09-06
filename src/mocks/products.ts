import type { Product } from "@/types/product";

/**
 * TEMPORARY mock data.
 * Once the backend is connected, replace usages of this file with
 * `getProducts()` from `@/services/product.service`. Components never
 * import this file directly — they receive products as props.
 *
 * Images are placeholder stock photography (picsum.photos, seeded for
 * consistency) standing in for real product photography until the
 * backend returns actual image URLs.
 */
export const mockProducts: Product[] = [
  {
    id: "prod-001",
    name: "Hamaca de algodón tradicional",
    description:
      "Tejida a mano por artesanos de Masaya con hilo de algodón resistente.",
    price: 45,
    image: "/images/productos/hamaca_algodon_tradicional.jpg",
    category: "textiles",
  },
  {
    id: "prod-002",
    name: "Jarrón de cerámica pintado",
    description: "Pieza única moldeada y pintada a mano con motivos florales.",
    price: 28,
    image: "/images/productos/jarron_ceramica_pintado.jpg",
    category: "ceramica",
  },
  {
    id: "prod-003",
    name: "Canasta de mimbre tejida",
    description: "Cestería fina elaborada con fibras naturales de la región.",
    price: 18,
    image: "/images/productos/cesta_mimbre_tejida.jpg",
    category: "cesteria",
  },
  {
    id: "prod-004",
    name: "Bolso bordado nicaragüense",
    description:
      "Bordado artesanal con hilos de colores y detalles tradicionales.",
    price: 22,
    image: "/images/productos/bolso_bordado_nica.jpg",
    category: "textiles",
  },
  {
    id: "prod-005",
    name: "Máscara de madera tallada",
    description:
      "Tallada a mano en madera de cedro, inspirada en la tradición local.",
    price: 35,
    image: "/images/productos/mascara_madera_tallada.jpg",
    category: "madera",
  },
  {
    id: "prod-006",
    name: "Bolso de cuero",
    description: "Bolso de cuero con acabado natural.",
    price: 15,
    image: "/images/productos/bolso_cuero.jpg",
    category: "ceramica",
  },
  {
    id: "prod-007",
    name: "Sombrero de palma tejido",
    description: "Elaborado a mano con palma seleccionada, ligero y duradero.",
    price: 20,
    image: "/images/productos/sombrero_tejido.jpg",
    category: "cesteria",
  },
  {
    id: "prod-008",
    name: "Figura decorativa de madera",
    description:
      "Escultura pequeña tallada a mano, ideal para decoración del hogar.",
    price: 32,
    image: "/images/productos/figura_madera_decorativa.jpg",
    category: "madera",
  },
];
