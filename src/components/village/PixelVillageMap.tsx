import Image from "next/image";
import { MapHotspot } from "@/components/village/MapHotspot";

const HOTSPOTS = [
  { label: "광장", left: 50, top: 23, width: 25, height: 18 },
  { label: "의뢰소", left: 25, top: 43, width: 24, height: 18 },
  { label: "상점", left: 75, top: 43, width: 24, height: 18 },
  { label: "내 방", left: 27, top: 68, width: 24, height: 18 },
  { label: "생존게시판", left: 72, top: 68, width: 25, height: 18 },
] as const;

export function PixelVillageMap() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-[12px] border-2 border-[#5B3A1E] shadow-[4px_4px_0_0_#5B3A1E] bg-[#FFF1D6]">
      <Image
        src="/assets/village/village-home-full.png"
        alt="월급마을 마을 지도"
        fill
        className="object-cover object-center pointer-events-none select-none"
        style={{ objectPosition: "center" }}
        priority
        sizes="430px"
      />

      {HOTSPOTS.map((spot) => (
        <MapHotspot key={spot.label} {...spot} />
      ))}

      {/* 말풍선 — 캐릭터와 별도 레이어 */}
      <div className="absolute left-[50%] top-[54%] z-20 -translate-x-1/2 pointer-events-none bg-transparent">
        <div className="px-2.5 py-1 text-[10px] font-medium text-[#2B1A10] whitespace-nowrap animate-float bg-[#FFF7E8] border-2 border-[#5B3A1E] shadow-[2px_2px_0_0_#5B3A1E] relative">
          오늘도 살아남는 중
          <span
            className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#5B3A1E]"
            aria-hidden
          />
          <span
            className="absolute left-1/2 -bottom-[3px] -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#FFF7E8]"
            aria-hidden
          />
        </div>
      </div>

      {/* 캐릭터 */}
      <div className="absolute left-[50%] top-[62%] z-20 -translate-x-1/2 pointer-events-none bg-transparent">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/avatars/avatar-basic.png?v=2"
          alt="캐릭터"
          className="block w-[52px] h-auto object-contain bg-transparent animate-walk-bob [image-rendering:pixelated]"
          draggable={false}
        />
      </div>

      {/* 강아지 */}
      <div className="absolute left-[58%] top-[64%] z-20 -translate-x-1/2 pointer-events-none bg-transparent">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/avatars/pet-dog.png?v=2"
          alt="강아지"
          className="block w-[38px] h-auto object-contain bg-transparent animate-walk-bob opacity-90 [image-rendering:pixelated]"
          style={{ animationDelay: "0.4s" }}
          draggable={false}
        />
      </div>
    </div>
  );
}
