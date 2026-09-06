import type { Product } from "@/types/product";
import { mockProducts } from "@/mocks/products";


export async function getProducts(): Promise<Product[]> {
  // TODO: Replace with real backend endpoint, e.g.:
  // return apiFetch<Product[]>("/products");
  return Promise.resolve(mockProducts);
}

export async function getPopularProducts(): Promise<Product[]> {
  // TODO: Conectar EndPoint
  return Promise.resolve(mockProducts);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // TODO: Conectar EndPoint
  return Promise.resolve(mockProducts.find((product) => product.id === id));
}
