import { ShieldCheck, Truck, HandHeart } from "lucide-react";
import type { Service } from "@/types/service";

/**
 * TEMPORARY mock data. Replace with a real endpoint later if the
 * backend exposes one; for now this content is static/marketing copy.
 */
export const mockServices: Service[] = [
  {
    id: "srv-001",
    title: "Compra segura",
    description:
      "Cada transacción está protegida para que compres con total confianza en cada artesano de la comunidad.",
    icon: ShieldCheck,
  },
  {
    id: "srv-002",
    title: "Envíos a todo el país",
    description:
      "Llevamos las piezas hechas a mano directamente desde el taller del artesano hasta la puerta de tu casa.",
    icon: Truck,
  },
  {
    id: "srv-003",
    title: "Apoya el arte local",
    description:
      "Cada compra impulsa directamente el trabajo de artistas y artesanos nicaragüenses.",
    icon: HandHeart,
  },
];
