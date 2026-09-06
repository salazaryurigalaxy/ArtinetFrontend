import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-brand px-6 py-8 text-center text-white">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-light/60">
        <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-white/85">{description}</p>
    </div>
  );
}
