import { AppShell } from "@/components/layout/AppShell";
import { TodayQuoteBar, VillageHomeHeader } from "@/components/village/VillageHomeHeader";
import { VillageMap } from "@/components/village/VillageMap";
import { VillageStatusCard } from "@/components/village/VillageStatusCard";

export default function HomePage() {
  return (
    <AppShell fullHeight>
      <div className="flex flex-col h-full min-h-0">
        <VillageHomeHeader />

        <div className="shrink-0">
          <VillageStatusCard />
        </div>

        {/* 맵 영역: 화면 중앙 62% 이상 */}
        <div className="flex-[1_1_62%] min-h-[62%] px-1.5 py-1 flex flex-col">
          <VillageMap className="flex-1 h-full min-h-0" />
        </div>

        <div className="shrink-0">
          <TodayQuoteBar />
        </div>
      </div>
    </AppShell>
  );
}
