import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { SurvivalBadge } from "@/components/ui/SurvivalBadge";
import { currentUser, todayQuests } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function QuestPage() {
  const completedCount = todayQuests.filter((q) => q.completed).length;

  return (
    <AppShell>
      <header className="bg-cream-100 border-b-2 border-brown-700">
        <div className="flex items-center justify-between px-3 py-2">
          <Link href="/" className="font-display text-pixel-sm text-brown-600">
            ←
          </Link>
          <h1 className="font-display text-pixel-sm text-brown-800">
            오늘의 퀘스트
          </h1>
          <SurvivalBadge grade={currentUser.grade} size="sm" showLabel={false} />
        </div>
        <div className="flex items-center justify-center gap-4 py-2 bg-cream-200 border-t border-beige-300">
          <span className="text-pixel-xs text-brown-500">보상</span>
          <span className="text-lg">🪙</span>
          <span className="text-lg">⭐</span>
          <span className="text-lg">💚</span>
          <span className="font-display text-pixel-sm text-accent-orange ml-2">
            {completedCount}/{todayQuests.length}
          </span>
        </div>
      </header>

      <div className="p-3 flex flex-col gap-3">
        <PixelCard variant="highlight" className="text-center py-3">
          <p className="text-pixel-xs text-brown-500">월급날까지</p>
          <p className="font-display text-pixel-2xl text-accent-orange">
            D-{currentUser.dDay}
          </p>
        </PixelCard>

        {todayQuests.map((quest) => (
          <PixelCard key={quest.id} className={cn(quest.completed && "opacity-75")}>
            <div className="flex items-center gap-3">
              <span className="text-2xl shrink-0">
                {quest.completed ? "✅" : "📋"}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "font-display text-pixel-sm text-brown-800",
                    quest.completed && "line-through text-brown-400"
                  )}
                >
                  {quest.title}
                </p>
                <p className="text-pixel-xs text-brown-500">{quest.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-2 bg-beige-300 pixel-border-inset">
                    <div
                      className={cn(
                        "h-full",
                        quest.completed ? "bg-accent-green w-full" : "w-0"
                      )}
                    />
                  </div>
                  <span className="text-pixel-xs text-brown-400">
                    {quest.completed ? "1" : "0"}/1
                  </span>
                </div>
              </div>
              <button
                type="button"
                disabled={quest.completed}
                className={cn(
                  "shrink-0 px-2 py-1 font-display text-pixel-xs pixel-border transition-colors",
                  quest.completed
                    ? "bg-accent-green text-cream-50"
                    : "bg-accent-orange text-brown-800 hover:brightness-105"
                )}
              >
                {quest.completed ? "완료" : "달성"}
              </button>
            </div>
            <p className="text-pixel-xs text-accent-yellow mt-2 text-right">
              +{quest.hpReward} HP
            </p>
          </PixelCard>
        ))}

        <PixelPanel title="오늘의 보상" icon="🎁">
          <p className="text-pixel-sm text-brown-700">
            퀘스트 3개 완료 시{" "}
            <span className="text-accent-green font-medium">생존등급 UP</span>!
          </p>
        </PixelPanel>
      </div>
    </AppShell>
  );
}
