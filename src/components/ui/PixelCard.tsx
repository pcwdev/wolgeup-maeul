import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PixelCardVariant = "default" | "highlight" | "danger";
type PixelCardPadding = "none" | "sm" | "md";

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: PixelCardVariant;
  padding?: PixelCardPadding;
  interactive?: boolean;
}

const variantStyles: Record<PixelCardVariant, string> = {
  default: "bg-cream-100",
  highlight: "bg-cream-100 border-l-4 border-l-accent-yellow",
  danger: "bg-cream-100 border-l-4 border-l-accent-red",
};

const paddingStyles: Record<PixelCardPadding, string> = {
  none: "",
  sm: "p-2",
  md: "p-3",
};

export function PixelCard({
  variant = "default",
  padding = "md",
  interactive = false,
  className,
  children,
  ...props
}: PixelCardProps) {
  return (
    <div
      className={cn(
        "pixel-border",
        variantStyles[variant],
        paddingStyles[padding],
        interactive &&
          "cursor-pointer transition-colors hover:bg-cream-200 active:bg-beige-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
