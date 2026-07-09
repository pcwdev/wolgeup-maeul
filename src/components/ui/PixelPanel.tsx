import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PixelPanelProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: string;
}

export function PixelPanel({
  title,
  icon,
  className,
  children,
  ...props
}: PixelPanelProps) {
  return (
    <div
      className={cn("bg-cream-200 pixel-border-inset p-4", className)}
      {...props}
    >
      {title && (
        <h3 className="font-display text-pixel-sm text-brown-700 mb-3 flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
