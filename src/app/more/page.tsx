import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PixelCard } from "@/components/ui/PixelCard";

const menuItems = [
  { href: "/guestbook", emoji: "📝", label: "방명록", desc: "응원 메시지" },
  { href: "/survival-card", emoji: "🃏", label: "생존카드", desc: "상태 카드 만들기" },
  { href: "/quest", emoji: "⚔️", label: "의뢰소", desc: "오늘의 퀘스트" },
  { href: "/square", emoji: "📢", label: "광장", desc: "생존 일기 피드" },
];

export default function MorePage() {
  return (
    <AppShell>
      <header className="px-3 py-3 bg-cream-100 border-b-2 border-brown-700">
        <h1 className="font-display text-pixel-sm text-brown-800">더보기</h1>
        <p className="text-pixel-xs text-brown-500 mt-0.5">마을 메뉴</p>
      </header>

      <div className="p-3 grid grid-cols-2 gap-3">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <PixelCard interactive className="h-full">
              <div className="flex flex-col items-center gap-2 py-3">
                <span className="text-3xl">{item.emoji}</span>
                <span className="font-display text-pixel-sm text-brown-800">
                  {item.label}
                </span>
                <span className="text-pixel-xs text-brown-400">{item.desc}</span>
              </div>
            </PixelCard>
          </Link>
        ))}
      </div>

      <div className="px-3 pb-4">
        <PixelCard className="bg-cream-200">
          <p className="text-pixel-xs text-brown-500 text-center">
            월급마을 v0.1 · 시즌1. 이번달 생존기
          </p>
        </PixelCard>
      </div>
    </AppShell>
  );
}
