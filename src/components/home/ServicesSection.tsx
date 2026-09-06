import type { Service } from "@/types/service";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "./ServiceCard";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="w-full bg-brand-dark py-16">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Servicios"
          description="Todo lo que necesitas para comprar y vender arte hecho a mano, con la confianza y calidez de la comunidad artesanal nicaragüense."
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
