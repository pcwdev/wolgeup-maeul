"use client";

import Link from "next/link";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";
import { SurvivalBadge } from "@/components/ui/SurvivalBadge";
import { crisisCategoryLabels, currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const statusOptions = [
  { id: "fridge", label: "냉장고 파밍", emoji: "🧊" },
  { id: "ramen", label: "라면 생존", emoji: "🍜" },
  { id: "coffee", label: "커피 위기", emoji: "☕" },
  { id: "delivery", label: "배달 유혹", emoji: "🍕" },
];

const bossOptions = [
  { id: "delivery", label: "배달 음식 유혹", emoji: "🍔" },
  { id: "sale", label: "세일 알림", emoji: "🛍️" },
  { id: "taxi", label: "택시 유혹", emoji: "🚕" },
  { id: "coffee", label: "카페 쿠폰", emoji: "☕" },
];

export default function SurvivalCardPage() {
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0].id);
  const [selectedBoss, setSelectedBoss] = useState(bossOptions[0].id);

  const status = statusOptions.find((s) => s.id === selectedStatus)!;
  const boss = bossOptions.find((b) => b.id === selectedBoss)!;

  return (
    <AppShell>
      <header className="flex items-center justify-between px-3 py-2 bg-cream-100 border-b-2 border-brown-700">
        <Link href="/" className="font-display text-pixel-sm text-brown-600">
          ←
        </Link>
        <h1 className="font-display text-pixel-sm text-brown-800">
          생존카드 만들기
        </h1>
        <span className="w-6" />
      </header>

      <div className="p-3 flex flex-col gap-4">
        <section>
          <h2 className="font-display text-pixel-xs text-brown-600 mb-2">
            오늘의 상태
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {statusOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedStatus(opt.id)}
                className={cn(
                  "p-2 pixel-border text-pixel-sm transition-colors",
                  selectedStatus === opt.id
                    ? "bg-accent-orange text-brown-800"
                    : "bg-cream-200 text-brown-600 hover:bg-beige-300"
                )}
              >
                {opt.emoji} {opt.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-pixel-xs text-brown-600 mb-2">
            오늘의 보스
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {bossOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedBoss(opt.id)}
                className={cn(
                  "p-2 pixel-border text-pixel-sm transition-colors",
                  selectedBoss === opt.id
                    ? "bg-accent-red text-cream-50"
                    : "bg-cream-200 text-brown-600 hover:bg-beige-300"
                )}
              >
                {opt.emoji} {opt.label}
              </button>
            ))}
          </div>
        </section>

        {/* Preview card */}
        <div className="bg-beige-300 p-2 pixel-border shadow-pixel">
          <PixelCard className="bg-gradient-to-b from-accent-blue to-cream-100">
            <div className="flex flex-col items-center gap-3 py-4">
              <p className="font-display text-pixel-xs text-brown-700">
                월급마을 생존카드
              </p>
              <CharacterAvatar
                mood={currentUser.mood}
                size="lg"
                showHp
                hp={currentUser.hp}
              />
              <SurvivalBadge grade={currentUser.grade} />
              <p className="font-display text-pixel-2xl text-accent-orange">
                D-{currentUser.dDay}
              </p>
              <div className="flex gap-2 text-pixel-sm">
                <span className="bg-cream-100 px-2 py-1 pixel-border">
                  {status.emoji} {status.label}
                </span>
                <span className="bg-cream-100 px-2 py-1 pixel-border">
                  VS {boss.emoji}
                </span>
              </div>
              <p className="text-pixel-sm text-brown-700 text-center px-4">
                &ldquo;{currentUser.todayQuote}&rdquo;
              </p>
              <div className="flex gap-2">
                {currentUser.crisisCategories.map((cat) => (
                  <span key={cat} className="text-xl">
                    {crisisCategoryLabels[cat].emoji}
                  </span>
                ))}
              </div>
            </div>
          </PixelCard>
        </div>

        <PixelButton variant="primary" fullWidth disabled>
          📤 생존카드 공유하기
        </PixelButton>
        <p className="text-pixel-xs text-brown-400 text-center">
          금액 정보는 절대 포함되지 않아요
        </p>
      </div>
    </AppShell>
  );
}
