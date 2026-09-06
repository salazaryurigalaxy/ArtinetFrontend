import type { ContactFormData } from "@/types/contact";

// import { apiFetch } from "./api"; // uncomment once a real endpoint exists

export async function sendContactMessage(data: ContactFormData): Promise<void> {
  // TODO: Conectar EndPoint
  console.warn(
    "sendContactMessage is a placeholder — no backend endpoint configured yet.",
    data,
  );
  return Promise.resolve();
}
