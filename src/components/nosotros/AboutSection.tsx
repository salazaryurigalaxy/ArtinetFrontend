import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-container px-4 pt-10 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-3xl bg-brand-dark sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 px-6 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">¿Quienes somos?</h2>
          <p className="text-sm leading-relaxed text-white/85 sm:text-base">
            Somos una comunidad que conecta a artesanos nicaragüenses con
            personas que valoran el arte hecho a mano. Nacimos en Masaya, cuna
            de la artesanía nacional, con la misión de preservar las técnicas
            tradicionales y darles a nuestros artistas un espacio digital donde
            mostrar y vender su trabajo directamente, sin intermediarios.
          </p>
        </div>

        <div className="relative min-h-[240px] sm:min-h-full">
          <Image
            src="/images/nosotros/somos.jpg"
            alt="Cerámica pintada a mano"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
