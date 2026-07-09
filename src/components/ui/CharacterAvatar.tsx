import { cn } from "@/lib/utils";
import type { CharacterMood } from "@/lib/mock-data";

type AvatarSize = "sm" | "md" | "lg";

interface CharacterAvatarProps {
  mood?: CharacterMood;
  size?: AvatarSize;
  showHp?: boolean;
  hp?: number;
  className?: string;
}

const sizeMap: Record<AvatarSize, number> = {
  sm: 32,
  md: 48,
  lg: 64,
};

const moodColors: Record<CharacterMood, { skin: string; shirt: string; accent?: string }> = {
  happy: { skin: "#F5D6B8", shirt: "#6B9B5E" },
  normal: { skin: "#F5D6B8", shirt: "#5B8FB9" },
  tired: { skin: "#E8C4A8", shirt: "#A67C52", accent: "#E8A838" },
  crisis: { skin: "#E8B4A0", shirt: "#D4574A", accent: "#4A3728" },
};

function PixelCharacterSvg({
  mood,
  pixelSize,
}: {
  mood: CharacterMood;
  pixelSize: number;
}) {
  const colors = moodColors[mood];
  const scale = pixelSize / 16;

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 16 16"
      style={{ imageRendering: "pixelated" }}
      className="block"
    >
      {/* Hair */}
      <rect x="5" y="2" width="6" height="2" fill="#4A3728" />
      <rect x="4" y="3" width="8" height="1" fill="#4A3728" />

      {/* Face */}
      <rect x="5" y="4" width="6" height="5" fill={colors.skin} />
      <rect x="4" y="5" width="1" height="3" fill={colors.skin} />
      <rect x="11" y="5" width="1" height="3" fill={colors.skin} />

      {/* Eyes */}
      {mood === "crisis" ? (
        <>
          <rect x="6" y="5" width="1" height="2" fill="#4A3728" />
          <rect x="9" y="5" width="1" height="2" fill="#4A3728" />
          <rect x="6" y="8" width="1" height="1" fill="#5B8FB9" />
          <rect x="9" y="8" width="1" height="1" fill="#5B8FB9" />
        </>
      ) : mood === "tired" ? (
        <>
          <rect x="6" y="6" width="2" height="1" fill="#4A3728" />
          <rect x="8" y="6" width="2" height="1" fill="#4A3728" />
        </>
      ) : (
        <>
          <rect x="6" y="5" width="1" height="2" fill="#4A3728" />
          <rect x="9" y="5" width="1" height="2" fill="#4A3728" />
        </>
      )}

      {/* Mouth */}
      {mood === "happy" && <rect x="7" y="7" width="2" height="1" fill="#D4574A" />}
      {mood === "normal" && <rect x="7" y="8" width="2" height="1" fill="#A67C52" />}
      {mood === "tired" && <rect x="7" y="8" width="2" height="1" fill="#6B4F2A" />}
      {mood === "crisis" && (
        <>
          <rect x="7" y="7" width="2" height="1" fill="#4A3728" />
          <rect x="6" y="8" width="1" height="1" fill="#4A3728" />
          <rect x="9" y="8" width="1" height="1" fill="#4A3728" />
        </>
      )}

      {/* Body */}
      <rect x="5" y="9" width="6" height="4" fill={colors.shirt} />
      <rect x="4" y="10" width="1" height="2" fill={colors.shirt} />
      <rect x="11" y="10" width="1" height="2" fill={colors.shirt} />

      {/* Legs */}
      <rect x="5" y="13" width="2" height="2" fill="#4A3728" />
      <rect x="9" y="13" width="2" height="2" fill="#4A3728" />

      {/* Mood accents */}
      {mood === "tired" && colors.accent && (
        <rect x="12" y="3" width="2" height="2" fill={colors.accent} />
      )}
      {mood === "crisis" && (
        <>
          <rect x="2" y="1" width="1" height="3" fill="#E8A838" />
          <rect x="1" y="2" width="1" height="1" fill="#E8A838" />
          <rect x="3" y="2" width="1" height="1" fill="#E8A838" />
        </>
      )}
    </svg>
  );
}

function HpBar({ hp, width }: { hp: number; width: number }) {
  const filled = Math.round((hp / 100) * 8);
  return (
    <div className="flex flex-col items-center gap-1" style={{ width }}>
      <div className="flex gap-px">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-2 h-2",
              i < filled ? "bg-accent-green" : "bg-beige-300"
            )}
            style={{ imageRendering: "pixelated" }}
          />
        ))}
      </div>
      <span className="font-display text-pixel-xs text-brown-500">HP {hp}</span>
    </div>
  );
}

export function CharacterAvatar({
  mood = "normal",
  size = "md",
  showHp = false,
  hp = 50,
  className,
}: CharacterAvatarProps) {
  const pixelSize = sizeMap[size];

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className="pixel-border bg-cream-50 p-1 inline-flex"
        style={{ imageRendering: "pixelated" }}
      >
        <PixelCharacterSvg mood={mood} pixelSize={pixelSize} />
      </div>
      {showHp && <HpBar hp={hp} width={pixelSize + 8} />}
    </div>
  );
}
