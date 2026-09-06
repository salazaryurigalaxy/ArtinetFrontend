# ARTINET — Frontend

Frontend desarrollado con Next.js, React, TypeScript y Tailwind CSS para el marketplace ARTINET, dedicado a la comercialización de productos artesanales y la promoción de artesanos de Nicaragua.

## Antes de correr el codigo

El codigo fue escrito en Next.js 14 / React 18 / Tailwind 3 APIs.

## Iniciar el Frontend

```bash
npm install
npm run dev
```

Abrir http://localhost:3000.

## Que esta implementado

- **Diseño compartido** (`Header`, `Navbar`, `Footer`) — utilizado por todas las rutas,
  definido una sola vez en `src/app/layout.tsx`. Nunca duplicado.
- **Home (`/`)** — completamente construido: Hero, Servicios, Productos populares
  (carousel), Comunidad Artinet (carousel).
- **Nosotros (`/nosotros`)** — complemente construido: banner para el titulo de la pagina
  (`PageBanner`), "¿Quienes somos?", Misión/Visión/Valores
  (`InfoCard`/`ValuesCard`), y "Miembros de Artinet" (`MemberCard`,
  dato de ejemplo en `src/mocks/members.ts`).
- **Contactanos (`/contactanos`)** — completamente construido: banner para el titulo de pagina
  (igual `PageBanner` componente como Nosotros), validacion en el formulario
  (`ContactForm`, componente del cliente, sin backend aun conectado), informacion de contacto
  (`ContactInformation`), y una seccion "Visítanos" con el logo de ARTINET
  y un mapa embebido de Google Maps (sin API key requerido).
- **`/tienda`, `/artesanos`** — Aun pendiente de desarrollar.

## Fromulario de contacto

`src/components/contactanos/ContactForm.tsx` valida nombre, email,
telefono, y mensaje del lado del cliente antes de llamar
`sendContactMessage()` desde `src/services/contact.service.ts`.

## Mapa

El mapa "Visítanos" es un mapa de Google `output=embed` iframe centrado
en la direccion de Masaya — no requiere de una API key.

## Arquitectura

```
src/
├── app/                 # Next.js App Router pages (route = folder)
├── components/
│   ├── layout/           # Header, Navbar, Footer — globales, compartidos
│   ├── ui/                # Primitivos reusables (Button, SectionTitle, ...)
│   └── home/              # Home-page- con secciones especificas
├── services/             # API layer — un archivo por recurso
├── types/                 # TypeScript interfaces
├── mocks/                 # Datos temporales (separado de los compoentes)
└── lib/                   # Pequeños hooks/utilities compartidas
```

Cada componete recibe un data **props**.
