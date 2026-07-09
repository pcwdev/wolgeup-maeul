"use client";

import { currentUser } from "@/lib/mock-data";

export function VillageHomeHeader() {
  return (
    <header className="shrink-0 flex items-center justify-between px-2 py-1.5 bg-cream-100 border-b-2 border-brown-700">
      <button
        type="button"
        className="w-7 h-7 flex flex-col items-center justify-center gap-[2px] pixel-border bg-cream-200"
        aria-label="메뉴"
      >
        <span className="w-3.5 h-[2px] bg-brown-800" />
        <span className="w-3.5 h-[2px] bg-brown-800" />
        <span className="w-3.5 h-[2px] bg-brown-800" />
      </button>

      <div className="text-center flex-1 px-1">
        <h1 className="font-display text-pixel-xs text-brown-800">월급마을</h1>
        <p className="text-[10px] text-brown-500 leading-tight">
          시즌1 · 이번달 생존기
        </p>
      </div>

      <button
        type="button"
        className="w-7 h-7 flex items-center justify-center pixel-border bg-cream-200 relative"
        aria-label="알림"
      >
        <span className="text-xs">🔔</span>
        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-accent-red" />
      </button>
    </header>
  );
}

export function TodayQuoteBar() {
  return (
    <div className="mx-2 mb-1 pixel-border bg-cream-100">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <span className="text-[10px] font-display text-accent-orange shrink-0">
          오늘의 한마디
        </span>
        <p className="text-pixel-xs text-brown-800 truncate flex-1">
          &ldquo;{currentUser.todayQuote}&rdquo;
        </p>
      </div>
    </div>
  );
}
