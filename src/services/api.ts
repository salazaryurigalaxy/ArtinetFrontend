/**
 * Base API client.
 *
 * The backend already exists and lives at NEXT_PUBLIC_API_URL. Nothing
 * in this file assumes a specific endpoint shape — individual services
 * (product.service.ts, artisan.service.ts, etc.) own that.
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  if (!API_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not set. Falling back to mock data is expected during frontend-only development."
    );
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new ApiError(res.status, `Request to ${endpoint} failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}
