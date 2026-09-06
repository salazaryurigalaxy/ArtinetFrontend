import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { buttonVariantClasses, type ButtonVariant } from "./Button";

interface LinkButtonProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

export function LinkButton({ className, variant = "primary", children, ...props }: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
        buttonVariantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
