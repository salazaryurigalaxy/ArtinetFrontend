import { cn } from "@/lib/cn";

interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className={cn("text-3xl font-bold sm:text-4xl", light ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-sm sm:text-base", light ? "text-white/85" : "text-navy/70")}>
          {description}
        </p>
      )}
    </div>
  );
}
