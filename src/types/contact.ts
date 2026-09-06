import type { LucideIcon } from "lucide-react";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export interface ContactInfoItem {
  id: string;
  icon: LucideIcon;
  label: string;
  href?: string;
}
