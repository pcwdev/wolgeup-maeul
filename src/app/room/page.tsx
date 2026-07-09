import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { RoomScene } from "@/components/village/RoomScene";
import { currentUser } from "@/lib/mock-data";

const decorButtons = [
  { emoji: "🪑", label: "가구" },
  { emoji: "🎒", label: "아이템" },
  { emoji: "🎵", label: "BGM" },
  { emoji: "✨", label: "꾸미기" },
];

export default function RoomPage() {
  return (
    <AppShell>
      <header className="flex items-center justify-between px-3 py-2 bg-cream-100 border-b-2 border-brown-700">
        <Link href="/" className="font-display text-pixel-sm text-brown-600">
          ←
        </Link>
        <div className="text-center">
          <h1 className="font-display text-pixel-sm text-brown-800">
            {currentUser.nickname}의 방
          </h1>
          <p className="text-pixel-xs text-brown-500">{currentUser.roomTheme}</p>
        </div>
        <span className="text-pixel-xs text-brown-400 w-6">👣{currentUser.visitorCount}</span>
      </header>

      <div className="flex flex-col gap-3 p-3">
        <RoomScene />

        <PixelPanel title="생존 현황" icon="📊">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-cream-100 pixel-border p-2">
              <p className="text-pixel-xs text-brown-500">생존등급</p>
              <p className="font-display text-pixel-lg text-accent-orange mt-1">
                {currentUser.grade}
              </p>
            </div>
            <div className="bg-cream-100 pixel-border p-2">
              <p className="text-pixel-xs text-brown-500">방문자</p>
              <p className="font-display text-pixel-lg text-brown-800 mt-1">
                {currentUser.visitorCount}
              </p>
            </div>
            <div className="bg-cream-100 pixel-border p-2">
              <p className="text-pixel-xs text-brown-500">D-day</p>
              <p className="font-display text-pixel-lg text-accent-red mt-1">
                -{currentUser.dDay}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-pixel-xs text-brown-500 mb-1">
              <span>HP</span>
              <span>{currentUser.hp}%</span>
            </div>
            <div className="h-3 bg-beige-300 pixel-border-inset">
              <div
                className="h-full bg-accent-green"
                style={{ width: `${currentUser.hp}%` }}
              />
            </div>
          </div>
        </PixelPanel>

        <div className="grid grid-cols-4 gap-2">
          {decorButtons.map((btn) => (
            <button
              key={btn.label}
              type="button"
              className="bg-cream-200 pixel-border p-2 flex flex-col items-center gap-1 hover:bg-beige-300 transition-colors"
            >
              <span className="text-lg">{btn.emoji}</span>
              <span className="text-pixel-xs text-brown-600">{btn.label}</span>
            </button>
          ))}
        </div>

        <PixelPanel title="오늘 일기" icon="📔">
          <p className="text-pixel-sm text-brown-700 leading-relaxed">
            {currentUser.diaryEntry}
          </p>
        </PixelPanel>

        <Link href="/guestbook">
          <PixelButton variant="secondary" fullWidth>
            📝 방명록 보기
          </PixelButton>
        </Link>
      </div>
    </AppShell>
  );
}
