import type { Artisan } from "@/types/artisan";
import { mockArtisans } from "@/mocks/artisans";
// import { apiFetch } from "./api"; // uncomment once a real endpoint exists

export async function getArtisans(): Promise<Artisan[]> {
  // TODO: Conectar EndPoint
  return Promise.resolve(mockArtisans);
}

export async function getArtisanById(id: string): Promise<Artisan | undefined> {
  // TODO: Conectar EndPoint
  return Promise.resolve(mockArtisans.find((artisan) => artisan.id === id));
}
