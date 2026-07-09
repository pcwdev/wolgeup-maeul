import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelPanel } from "@/components/ui/PixelPanel";
import { guestbookEntries } from "@/lib/mock-data";

export default function GuestbookPage() {
  return (
    <AppShell>
      <header className="flex items-center justify-between px-3 py-2 bg-cream-100 border-b-2 border-brown-700">
        <Link href="/room" className="font-display text-pixel-sm text-brown-600">
          ←
        </Link>
        <h1 className="font-display text-pixel-sm text-brown-800">방명록</h1>
        <span className="w-6" />
      </header>

      <div className="p-3 flex flex-col gap-3">
        <PixelPanel>
          <p className="text-pixel-sm text-brown-700 text-center">
            🌸 익명으로 짧은 응원을 남겨보세요
          </p>
        </PixelPanel>

        {guestbookEntries.map((entry) => (
          <PixelCard key={entry.id} variant="highlight">
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <CharacterAvatar mood="happy" size="sm" />
                <span className="text-lg">{entry.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-display text-pixel-xs text-brown-700">
                    {entry.nickname}
                  </span>
                  <span className="text-pixel-xs text-brown-400">
                    {entry.timeAgo}
                  </span>
                </div>
                <p className="text-pixel-sm text-brown-800 mt-1 leading-relaxed bg-cream-50 p-2 pixel-border-inset">
                  {entry.message}
                </p>
              </div>
            </div>
          </PixelCard>
        ))}

        <PixelButton variant="primary" fullWidth disabled>
          📝 방명록 남기기
        </PixelButton>
      </div>
    </AppShell>
  );
}
