import { ChevronRight } from "lucide-react";

interface ValuesCardProps {
  values: string[];
}

export function ValuesCard({ values }: ValuesCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-brand-dark px-6 py-8 text-white">
      <h3 className="text-xl font-semibold">Valores</h3>
      <ul className="mt-5 space-y-3">
        {values.map((value, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-white/90">
            <ChevronRight className="h-4 w-4 shrink-0 text-brand-light" aria-hidden="true" />
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
