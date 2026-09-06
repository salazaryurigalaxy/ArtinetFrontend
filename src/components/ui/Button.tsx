import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "outline-light" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-light",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  "outline-light": "border border-white text-white hover:bg-white hover:text-brand-dark",
  ghost: "text-brand hover:bg-brand-mint",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60",
          buttonVariantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
