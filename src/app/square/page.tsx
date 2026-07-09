"use client";

import Link from "next/link";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";
import { SurvivalBadge } from "@/components/ui/SurvivalBadge";
import { crisisCategoryLabels, squareFeed } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const tabs = ["인기", "최신", "팔로잉"] as const;

export default function SquarePage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("인기");

  return (
    <AppShell>
      <header className="bg-cream-100 border-b-2 border-brown-700">
        <div className="flex items-center justify-between px-3 py-2">
          <Link href="/" className="font-display text-pixel-sm text-brown-600">
            ←
          </Link>
          <h1 className="font-display text-pixel-sm text-brown-800">광장</h1>
          <span className="w-6" />
        </div>
        <div className="flex border-t border-beige-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-2 text-pixel-sm font-medium transition-colors",
                activeTab === tab
                  ? "bg-cream-200 text-brown-800 border-b-2 border-accent-orange"
                  : "text-brown-400 hover:text-brown-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="p-3 flex flex-col gap-3">
        <PixelButton variant="primary" fullWidth disabled>
          ✏️ 생존 일기 쓰기
        </PixelButton>

        {squareFeed.map((post) => (
          <PixelCard key={post.id} className="bg-cream-50">
            <div className="flex gap-3">
              <CharacterAvatar mood="normal" size="sm" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-pixel-xs text-brown-700">
                    {post.nickname}
                  </span>
                  <span className="text-pixel-xs text-brown-400 shrink-0">
                    {post.timeAgo}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <SurvivalBadge grade={post.grade} size="sm" showLabel={false} />
                  <span className="font-display text-pixel-xs text-accent-orange">
                    D-{post.dDay}
                  </span>
                </div>
                <p className="text-pixel-sm text-brown-700 mt-2 leading-relaxed">
                  {post.content}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.crisisCategories.map((cat) => (
                    <span
                      key={cat}
                      className="text-pixel-xs bg-cream-200 px-1.5 py-0.5 text-brown-500"
                    >
                      {crisisCategoryLabels[cat].emoji}
                      {crisisCategoryLabels[cat].label}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    type="button"
                    className="flex-1 py-1.5 text-pixel-xs bg-beige-300 pixel-border text-brown-700 hover:bg-cream-200 transition-colors"
                  >
                    💪 같이 버텨요
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-1.5 text-pixel-xs bg-cream-200 pixel-border text-brown-600 hover:bg-beige-300 transition-colors"
                  >
                    ✓ 인정
                  </button>
                </div>
              </div>
            </div>
          </PixelCard>
        ))}
      </div>
    </AppShell>
  );
}
