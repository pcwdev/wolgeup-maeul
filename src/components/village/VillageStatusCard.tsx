import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { SurvivalBadge } from "@/components/ui/SurvivalBadge";
import { currentUser } from "@/lib/mock-data";

export function VillageStatusCard() {
  return (
    <div className="mx-2 mt-1 pixel-border bg-accent-blue shadow-pixel-sm">
      <div className="flex items-center gap-2 px-2 py-1.5 bg-gradient-to-r from-accent-blue to-[#7BBDE8]">
        <CharacterAvatar mood={currentUser.mood} size="sm" />
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <span className="font-display text-pixel-xs text-brown-800 bg-cream-100 px-1 py-0.5 pixel-border shrink-0">
            D-{currentUser.dDay}
          </span>
          <SurvivalBadge grade={currentUser.grade} size="sm" showLabel={false} />
          <p className="text-pixel-xs text-brown-800 truncate">
            오늘도 살아남는 중
          </p>
        </div>
        <span className="text-base shrink-0">☀️</span>
      </div>
    </div>
  );
}
