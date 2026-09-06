import type { Member } from "@/types/member";

/**
 * TEMPORARY mock data — replace with a real service call once the
 * backend exposes a members/artisans endpoint. Images are placeholder
 * stock photography (picsum.photos, seeded for consistency), the same
 * approach already used for the Home page mocks.
 */
export const mockMembers: Member[] = [
  {
    id: "member-001",
    name: "Taller Flor de Barro",
    description: "Cerámica tradicional hecha a mano",
    image: "/images/artesanos/taller_flor_barro.jpg",
  },
  {
    id: "member-002",
    name: "Hamacas El Trapiche",
    description: "Tejido artesanal de hamacas",
    image: "/images/artesanos/hamacas_trapiche.jpg",
  },
  {
    id: "member-003",
    name: "Cestería San Juan",
    description: "Cestas y sombreros de fibra natural",
    image: "/images/artesanos/cesteria_san_juan.jpg",
  },
  {
    id: "member-004",
    name: "Madera Viva Nicaragua",
    description: "Tallado en madera decorativo",
    image: "/images/artesanos/madera_viva_nicaragua.jpg",
  },
  {
    id: "member-005",
    name: "Bordados Masaya",
    description: "Textiles bordados a mano",
    image: "/images/artesanos/bordados_masaya.jpg",
  },
];
