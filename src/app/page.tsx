import Image from "next/image";
import { AppShell } from "@/components/layout/AppShell";
import { PixelVillageMap } from "@/components/village/PixelVillageMap";
import { SurvivalBadge } from "@/components/ui/SurvivalBadge";
import { currentUser } from "@/lib/mock-data";

function VillageHeader() {
  return (
    <header className="shrink-0 flex items-center justify-between px-4 pt-3 pb-2">
      <div>
        <h1 className="font-display text-[15px] text-[#2B1A10] leading-tight tracking-tight">
          월급마을
        </h1>
        <p className="text-[11px] text-[#7A6042] mt-0.5">
          시즌1. 이번달 생존기
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative w-9 h-9 flex items-center justify-center bg-[#FFF1D6] border-2 border-[#5B3A1E] shadow-[2px_2px_0_0_#5B3A1E] active:translate-y-px active:shadow-none transition-all rounded-[6px]"
          aria-label="알림"
        >
          <span className="text-base">🔔</span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E25D5D] border border-[#5B3A1E]" />
        </button>
        <button
          type="button"
          className="w-9 h-9 flex flex-col items-center justify-center gap-[3px] bg-[#FFF1D6] border-2 border-[#5B3A1E] shadow-[2px_2px_0_0_#5B3A1E] active:translate-y-px active:shadow-none transition-all rounded-[6px]"
          aria-label="메뉴"
        >
          <span className="w-4 h-[2px] bg-[#2B1A10] rounded-full" />
          <span className="w-4 h-[2px] bg-[#2B1A10] rounded-full" />
          <span className="w-4 h-[2px] bg-[#2B1A10] rounded-full" />
        </button>
      </div>
    </header>
  );
}

function StatusCard() {
  return (
    <div className="shrink-0 mx-3 mb-2.5 rounded-[10px] border-2 border-[#5B3A1E] bg-[#8ECEF4] shadow-[3px_3px_0_0_#5B3A1E] overflow-hidden">
      <div className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-[#8ECEF4] via-[#9DD4F5] to-[#A8DDF8]">
        <div className="shrink-0 w-11 h-11 rounded-[8px] border-2 border-[#5B3A1E] bg-[#FFF7E8] overflow-hidden shadow-[2px_2px_0_0_#5B3A1E]">
          <Image
            src="/assets/avatars/avatar-basic.png"
            alt="프로필"
            width={44}
            height={44}
            className="w-full h-full object-cover"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-display text-[10px] px-1.5 py-0.5 bg-[#FFF7E8] border-2 border-[#5B3A1E] text-[#2B1A10] shadow-[1px_1px_0_0_#5B3A1E]">
              D-{currentUser.dDay}
            </span>
            <SurvivalBadge grade={currentUser.grade} size="sm" />
          </div>
          <p className="text-sm font-bold text-[#2B1A10] mt-1 truncate">
            오늘도 살아남는 중
          </p>
          <p className="text-[11px] text-[#7A6042] truncate">
            {currentUser.nickname} · {currentUser.todayStatus}
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-center gap-0.5 px-1">
          <span className="text-xl leading-none">🪙</span>
          <span className="text-[10px] font-bold text-[#2B1A10]">
            {currentUser.coins.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

function TodayQuoteCard() {
  return (
    <div className="mx-3 mt-3 mb-2 rounded-[10px] border-2 border-[#5B3A1E] bg-[#FFF1D6] shadow-[3px_3px_0_0_#5B3A1E]">
      <div className="flex items-start gap-2 px-3 py-2.5">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-display text-[#F48C6B] mb-1">
            오늘의 한마디
          </p>
          <p className="text-sm text-[#2B1A10] leading-snug font-medium">
            &ldquo;{currentUser.todayQuote}&rdquo;
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 w-8 h-8 flex items-center justify-center bg-[#FFF7E8] border-2 border-[#5B3A1E] shadow-[2px_2px_0_0_#5B3A1E] active:translate-y-px active:shadow-none text-sm rounded-[6px]"
          aria-label="한마디 수정"
          disabled
        >
          ✏️
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <AppShell fullHeight>
      <div className="flex flex-col min-h-0 flex-1 bg-[#FFF7E8]">
        <VillageHeader />
        <StatusCard />

        <div className="flex-1 min-h-0 overflow-y-auto px-3 pb-1">
          <PixelVillageMap />
          <TodayQuoteCard />
        </div>
      </div>
    </AppShell>
  );
}
