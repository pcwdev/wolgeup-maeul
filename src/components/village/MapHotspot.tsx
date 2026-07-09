"use client";

import { cn } from "@/lib/utils";

export interface MapHotspotProps {
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  onClick?: () => void;
}

export function MapHotspot({
  label,
  left,
  top,
  width,
  height,
  onClick,
}: MapHotspotProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log(`[월급마을] ${label} 클릭`);
    }
  };

  return (
    <div
      className="group absolute z-20"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: "translate(-50%, 0)",
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "absolute inset-0 w-full h-[calc(100%-30px)]",
          "bg-transparent cursor-pointer rounded-md",
          "transition-transform duration-150",
          "hover:scale-[1.03] active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48C6B] focus-visible:ring-offset-1"
        )}
        aria-label={label}
      />
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2 bottom-0",
          "px-2 py-1 text-xs font-bold whitespace-nowrap",
          "bg-[#FFF1D6] text-[#2B1A10]",
          "border-2 border-[#5B3A1E] rounded-[6px]",
          "shadow-[2px_2px_0_0_#5B3A1E]",
          "transition-transform duration-150 pointer-events-none",
          "group-hover:-translate-y-1 group-active:translate-y-0"
        )}
      >
        {label}
      </span>
    </div>
  );
}
