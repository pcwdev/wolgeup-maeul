import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type PixelButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type PixelButtonSize = "sm" | "md" | "lg";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PixelButtonVariant;
  size?: PixelButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<PixelButtonVariant, string> = {
  primary:
    "bg-accent-orange text-brown-800 hover:brightness-105 active:brightness-95",
  secondary:
    "bg-cream-200 text-brown-700 hover:bg-beige-300 active:bg-cream-200",
  ghost:
    "bg-transparent text-brown-600 hover:bg-cream-200 active:bg-cream-100",
  danger:
    "bg-accent-red text-cream-50 hover:brightness-105 active:brightness-95",
};

const sizeStyles: Record<PixelButtonSize, string> = {
  sm: "px-3 py-1.5 text-pixel-xs",
  md: "px-4 py-2 text-pixel-sm",
  lg: "px-6 py-3 text-pixel-base",
};

export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "font-display pixel-border shadow-pixel-sm",
          "transition-all duration-100",
          "hover:-translate-y-px hover:shadow-pixel",
          "active:translate-y-px active:shadow-none",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-pixel-sm",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = "PixelButton";
