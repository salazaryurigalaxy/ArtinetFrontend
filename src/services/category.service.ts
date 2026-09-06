import type { Category } from "@/types/category";
// import { apiFetch } from "./api"; // uncomment once a real endpoint exists

const mockCategories: Category[] = [
  { id: "cat-001", name: "Cerámica", slug: "ceramica" },
  { id: "cat-002", name: "Textiles", slug: "textiles" },
  { id: "cat-003", name: "Cestería", slug: "cesteria" },
  { id: "cat-004", name: "Madera", slug: "madera" },
];

export async function getCategories(): Promise<Category[]> {
  // TODO: Conectar EndPoint
  return Promise.resolve(mockCategories);
}
