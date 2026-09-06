'use client'

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Globe, Search, ShoppingBag, ShoppingCart, User } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-brand-mint-light">
      <div className="mx-auto flex max-w-container flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo/artinet-logo.jpeg"
            alt="ARTINET — Hecho en Masaya, hecho con el alma"
            width={44}
            height={44}
            className="rounded-full object-cover"
            priority
          />
          <span className="text-xl font-bold text-brand-dark">ArtiNet</span>
        </Link>

        <form
          role="search"
          className="order-3 flex w-full items-center overflow-hidden rounded-full border border-brand/20 bg-white sm:order-none sm:max-w-md"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="site-search" className="sr-only">
            Buscar en Artinet
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Buscar Artinet"
            className="w-full bg-transparent px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Buscar"
            className="flex h-full items-center bg-brand px-4 py-2.5 text-white transition-colors hover:bg-brand-light"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="flex items-center justify-between gap-5 text-sm text-navy sm:justify-end">
          <Link href="/carrito" className="flex items-center gap-1.5 hover:text-brand">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden lg:inline">Mi carrito</span>
          </Link>
          <Link href="/mis-compras" className="flex items-center gap-1.5 hover:text-brand">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden lg:inline">Mis compras</span>
          </Link>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full border border-brand/20 px-2.5 py-1.5 hover:border-brand"
          >
            <User className="h-4 w-4" />
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full border border-brand/20 px-2.5 py-1.5 hover:border-brand"
            aria-label="Cambiar idioma"
          >
            <Globe className="h-4 w-4" />
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
