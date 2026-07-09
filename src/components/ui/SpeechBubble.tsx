import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpeechBubbleTail = "left" | "bottom" | "right";
type SpeechBubbleVariant = "default" | "thought";

interface SpeechBubbleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tail?: SpeechBubbleTail;
  variant?: SpeechBubbleVariant;
  animate?: boolean;
}

const tailStyles: Record<SpeechBubbleTail, string> = {
  left: "before:left-4 before:-bottom-2 before:border-l-[8px] before:border-r-[8px] before:border-t-[8px] before:border-l-transparent before:border-r-transparent before:border-t-brown-700 after:left-[17px] after:-bottom-[6px] after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:border-l-transparent after:border-r-transparent after:border-t-cream-50",
  bottom:
    "before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:border-l-[8px] before:border-r-[8px] before:border-t-[8px] before:border-l-transparent before:border-r-transparent before:border-t-brown-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-[6px] after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:border-l-transparent after:border-r-transparent after:border-t-cream-50",
  right:
    "before:right-4 before:-bottom-2 before:border-l-[8px] before:border-r-[8px] before:border-t-[8px] before:border-l-transparent before:border-r-transparent before:border-t-brown-700 after:right-[17px] after:-bottom-[6px] after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:border-l-transparent after:border-r-transparent after:border-t-cream-50",
};

export function SpeechBubble({
  children,
  tail = "bottom",
  variant = "default",
  animate = false,
  className,
  ...props
}: SpeechBubbleProps) {
  return (
    <div className={cn("relative", animate && "animate-float")}>
      <div
        className={cn(
          "relative bg-cream-50 pixel-border px-3 py-2",
          "text-pixel-sm text-brown-600 font-body",
          "before:absolute before:content-['']",
          "after:absolute after:content-['']",
          variant === "default" && tailStyles[tail],
          className
        )}
        {...props}
      >
        {children}
      </div>
      {variant === "thought" && (
        <div className="flex gap-1 mt-1 ml-4">
          <span className="w-1.5 h-1.5 bg-brown-700 rounded-full opacity-60" />
          <span className="w-1 h-1 bg-brown-700 rounded-full opacity-40" />
          <span className="w-0.5 h-0.5 bg-brown-700 rounded-full opacity-20" />
        </div>
      )}
    </div>
  );
}
