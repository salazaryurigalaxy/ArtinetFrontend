import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";

// Temporary stock photography standing in for real Nicaraguan craft
// photography until the backend/marketing team provides final assets.
const collageImages = [
  { src: "/images/portada/articulos_cuero.jpg", alt: "Articulos de cuero nicaragüense" },
  { src: "/images/portada/muebles_mimbre.jpg", alt: "Textiles tejidos a mano" },
  { src: "/images/portada/bordatos_artesanales.jpg", alt: "Bolsos artesanales bordados" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid min-h-[520px] grid-cols-1 sm:grid-cols-2">
        <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
          <Image
            src={collageImages[0].src}
            alt={collageImages[0].alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

          <div className="relative z-10 max-w-lg text-white">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              ¡Bienvenido a <span className="text-brand-light">Artinet</span>!
            </h1>
            <p className="mt-5 text-sm text-white/90 sm:text-base">
              Celebramos el arte auténtico de Nicaragua. Conectamos a talentosos
              artistas y artesanos nicaragüenses con amantes del arte. ¡Descubre
              cómo podemos lograrlo juntos!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/contactanos" variant="primary">
                Obtén ayuda, ahora
                <ArrowIcon />
              </LinkButton>
              <LinkButton href="/tienda" variant="outline-light">
                Visita la tienda
                <ArrowIcon />
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2">
          <div className="relative">
            <Image
              src={collageImages[1].src}
              alt={collageImages[1].alt}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={collageImages[2].src}
              alt={collageImages[2].alt}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-2">
            <Image
              src="/images/portada/ceramica_artesanal_nicaraguense.jpg"
              alt="Colección de artesanías nicaragüenses"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
