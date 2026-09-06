import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const compraSegura = [
  { label: "¿Cómo Comprar?", href: "/contactanos" },
  { label: "¿Por qué es seguro?", href: "/contactanos" },
  { label: "¿Por qué es cómodo?", href: "/contactanos" },
  { label: "¿Por qué es rápido?", href: "/contactanos" },
];

const politicas = [
  { label: "Términos y condiciones", href: "/contactanos" },
  { label: "Devolución y cambios", href: "/contactanos" },
  { label: "Políticas generales", href: "/contactanos" },
  { label: "Tipos de pagos", href: "/contactanos" },
];

const ayuda = [
  { label: "AYUDA", href: "/contactanos" },
  { label: "MI CUENTA", href: "/contactanos" },
  { label: "BLOG", href: "/contactanos" },
  { label: "TIENDA", href: "/tienda" },
  { label: "CONTÁCTANOS", href: "/contactanos" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Email", href: "mailto:artenicagua20@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 text-sm text-white/85">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              Dirección: Sector El Arenal, Iglesia Magdalena, 4 cuadras al Oeste, Masaya.
            </p>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" />
            <p>Teléfono: 2523 0530</p>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-0.5 h-4 w-4 shrink-0" />
            <p>Email: artenicagua20@gmail.com</p>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" />
            <p>WhatsApp: 84473517</p>
          </div>
        </div>

        <FooterColumn title="Compra Segura" links={compraSegura} />
        <FooterColumn title="Políticas" links={politicas} />

        <div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold">
            {ayuda.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-brand-mint">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm font-semibold">Síguenos</p>
          <div className="mt-3 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-brand-dark"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        Copyright © ARTINCA 2023
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-brand-mint">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
