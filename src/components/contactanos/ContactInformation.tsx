import { Mail, MapPin, Phone } from "lucide-react";
import type { ContactInfoItem } from "@/types/contact";

const contactItems: ContactInfoItem[] = [
  {
    id: "address",
    icon: MapPin,
    label: "Sector El Arenal, Iglesia Magdalena, 4 cuadras al Oeste, Masaya.",
  },
  {
    id: "phone",
    icon: Phone,
    label: "+ 505 2523 0530",
    href: "tel:+50525230530",
  },
  {
    id: "whatsapp",
    icon: Phone,
    label: "+ 505 8447 3517",
    href: "https://wa.me/50584473517",
  },
  {
    id: "email",
    icon: Mail,
    label: "artenicagua20@gmail.com",
    href: "mailto:artenicagua20@gmail.com",
  },
];

export function ContactInformation() {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-brand-mint px-6 py-10 sm:px-10">
      <h2 className="text-xl font-semibold text-navy">Contactanos con nosotros</h2>
      <span className="mt-2 h-0.5 w-14 bg-brand" aria-hidden="true" />

      <ul className="mt-8 space-y-6">
        {contactItems.map(({ id, icon: Icon, label, href }) => (
          <li key={id} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            {href ? (
              <a href={href} className="text-sm text-navy/85 hover:text-brand" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {label}
              </a>
            ) : (
              <p className="text-sm text-navy/85">{label}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
