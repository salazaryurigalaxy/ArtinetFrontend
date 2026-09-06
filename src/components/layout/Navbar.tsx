"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/tienda" },
  { label: "Artesanos", href: "/artesanos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contactanos", href: "/contactanos" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav className="w-full bg-brand-dark text-white">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex items-center gap-2 py-3 text-sm font-medium sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          Menú
        </button>

        <ul className="hidden sm:flex sm:items-center sm:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-block border-b-2 border-transparent py-3.5 text-sm font-medium transition-colors hover:text-white",
                  isActive(item.href) ? "border-white text-white" : "text-white/70"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul id="mobile-nav" className="flex flex-col border-t border-white/10 px-4 pb-3 sm:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2.5 text-sm font-medium",
                  isActive(item.href) ? "text-white" : "text-white/70"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
