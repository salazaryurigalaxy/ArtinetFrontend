import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-card">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-mint text-brand">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy">{service.title}</h3>
      <p className="mt-3 text-sm text-navy/70">{service.description}</p>
    </div>
  );
}
