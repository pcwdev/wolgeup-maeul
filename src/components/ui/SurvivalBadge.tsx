import { cn } from "@/lib/utils";
import type { SurvivalGrade } from "@/lib/mock-data";

type BadgeSize = "sm" | "md";

interface SurvivalBadgeProps {
  grade: SurvivalGrade;
  size?: BadgeSize;
  showLabel?: boolean;
  className?: string;
}

const gradeColors: Record<SurvivalGrade, string> = {
  S: "bg-accent-green text-cream-50",
  A: "bg-accent-blue text-cream-50",
  B: "bg-accent-orange text-brown-800",
  C: "bg-accent-pink text-brown-800",
  D: "bg-accent-red text-cream-50",
};

const gradeDescriptions: Record<SurvivalGrade, string> = {
  S: "여유",
  A: "양호",
  B: "보통",
  C: "빡빡",
  D: "위기",
};

const sizeStyles: Record<BadgeSize, { badge: string; label: string }> = {
  sm: { badge: "text-pixel-xs px-1.5 py-0.5", label: "text-pixel-xs" },
  md: { badge: "text-pixel-sm px-2 py-1", label: "text-pixel-sm" },
};

export function SurvivalBadge({
  grade,
  size = "md",
  showLabel = true,
  className,
}: SurvivalBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      {showLabel && (
        <span
          className={cn(
            "text-brown-500 font-body",
            sizeStyles[size].label
          )}
        >
          생존등급
        </span>
      )}
      <span
        className={cn(
          "font-display pixel-border inline-flex items-center gap-1",
          gradeColors[grade],
          sizeStyles[size].badge
        )}
      >
        <span>{grade}</span>
        <span className="font-body opacity-80">· {gradeDescriptions[grade]}</span>
      </span>
    </div>
  );
}
