"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

/* ── 좌표계: viewBox 0 0 390 400 ──
 *
 *        [광장]
 *           │
 *  [의뢰소]─╋─[상점]
 *           │
 *   [내 방]   [생존게시판]
 *
 * ╋ = 분수 (중앙)
 */

interface BuildingDef {
  id: string;
  label: string;
  href: string;
  /** hotspot % on container */
  hotspot: { left: number; top: number; w: number; h: number };
}

const BUILDINGS: BuildingDef[] = [
  { id: "square", label: "광장", href: "/square", hotspot: { left: 34, top: 6, w: 32, h: 22 } },
  { id: "quest", label: "의뢰소", href: "/quest", hotspot: { left: 2, top: 30, w: 26, h: 24 } },
  { id: "shop", label: "상점", href: "/more", hotspot: { left: 72, top: 30, w: 26, h: 24 } },
  { id: "room", label: "내 방", href: "/room", hotspot: { left: 8, top: 62, w: 28, h: 24 } },
  { id: "board", label: "생존게시판", href: "/survival-card", hotspot: { left: 58, top: 62, w: 34, h: 24 } },
];

/* ── 배경 패턴 ── */
function GrassPattern() {
  return (
    <defs>
      <pattern id="grass" width="16" height="16" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="#7AB86E" />
        <rect width="8" height="8" fill="#8BC97F" />
        <rect x="8" y="8" width="8" height="8" fill="#8BC97F" />
        <rect x="8" width="8" height="8" fill="#6BAB62" opacity="0.35" />
        <rect y="8" width="8" height="8" fill="#6BAB62" opacity="0.35" />
      </pattern>
      <pattern id="path" width="12" height="12" patternUnits="userSpaceOnUse">
        <rect width="12" height="12" fill="#DCC9A8" />
        <rect width="6" height="6" fill="#E8D9BE" />
        <rect x="6" y="6" width="6" height="6" fill="#C9B090" />
        <rect x="6" width="6" height="6" fill="#C9B090" opacity="0.5" />
      </pattern>
    </defs>
  );
}

/* ── 나무 ── */
function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="6" y="0" width="8" height="6" fill="#3D7A3D" />
      <rect x="4" y="4" width="12" height="6" fill="#4E8F4E" />
      <rect x="2" y="8" width="16" height="8" fill="#5A9E5A" />
      <rect x="0" y="12" width="20" height="6" fill="#6BAB62" />
      <rect x="8" y="18" width="4" height="8" fill="#8B6E44" />
    </g>
  );
}

function Bush({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="2" y="4" width="12" height="8" fill="#5A9E5A" />
      <rect x="0" y="6" width="16" height="6" fill="#6BAB62" />
      <rect x="6" y="10" width="4" height="4" fill="#4E8F4E" />
    </g>
  );
}

/* ── 캐릭터 ── */
function Character({
  x,
  y,
  shirt,
  delay = 0,
}: {
  x: number;
  y: number;
  shirt: string;
  delay?: number;
}) {
  return (
    <g
      transform={`translate(${x},${y})`}
      className="animate-walk-bob"
      style={{ animationDelay: `${delay}s` }}
    >
      <rect x="4" y="0" width="8" height="3" fill="#4A3728" />
      <rect x="3" y="3" width="10" height="7" fill="#F5D6B8" />
      <rect x="4" y="4" width="3" height="3" fill="#3B2F23" />
      <rect x="9" y="4" width="3" height="3" fill="#3B2F23" />
      <rect x="5" y="7" width="6" height="2" fill="#D4A090" />
      <rect x="2" y="10" width="12" height="7" fill={shirt} />
      <rect x="2" y="17" width="4" height="4" fill="#3B2F23" />
      <rect x="10" y="17" width="4" height="4" fill="#3B2F23" />
    </g>
  );
}

function Dog({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`} className="animate-walk-bob" style={{ animationDelay: "0.4s" }}>
      <rect x="0" y="4" width="14" height="7" fill="#C4A882" />
      <rect x="11" y="2" width="5" height="5" fill="#C4A882" />
      <rect x="2" y="11" width="3" height="3" fill="#8B6E44" />
      <rect x="9" y="11" width="3" height="3" fill="#8B6E44" />
      <rect x="13" y="4" width="2" height="2" fill="#3B2F23" />
      <rect x="3" y="5" width="2" height="1" fill="#3B2F23" />
    </g>
  );
}

/* ── 건물 라벨 ── */
function BuildingSign({ x, y, label }: { x: number; y: number; label: string }) {
  const w = label.length * 9 + 12;
  return (
    <g transform={`translate(${x - w / 2},${y})`}>
      <rect width={w} height={16} fill="#FFF7E6" stroke="#8B6E44" strokeWidth={2} />
      <text
        x={w / 2}
        y={11}
        textAnchor="middle"
        fill="#3B2F23"
        style={{ fontSize: "9px", fontWeight: 700, fontFamily: "sans-serif" }}
      >
        {label}
      </text>
    </g>
  );
}

/* ── 건물들 ── */
function SquareBuilding({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* 지붕 */}
      <rect x="8" y="0" width="56" height="8" fill="#E25D5D" />
      <rect x="4" y="6" width="64" height="6" fill="#C94A4A" />
      {/* 벽 */}
      <rect x="6" y="12" width="60" height="36" fill="#FFF3D6" stroke="#8B6E44" strokeWidth={2} />
      {/* 기둥 */}
      <rect x="6" y="12" width="4" height="36" fill="#E4C89A" />
      <rect x="62" y="12" width="4" height="36" fill="#E4C89A" />
      {/* 문 */}
      <rect x="28" y="30" width="16" height="18" fill="#8B6E44" />
      <rect x="32" y="34" width="8" height="14" fill="#6B4F2A" />
      {/* 창문 */}
      <rect x="14" y="20" width="12" height="10" fill="#8ECEF4" stroke="#8B6E44" strokeWidth={1} />
      <rect x="46" y="20" width="12" height="10" fill="#8ECEF4" stroke="#8B6E44" strokeWidth={1} />
      {/* 깃발 */}
      <rect x="34" y="-8" width="2" height="10" fill="#8B6E44" />
      <rect x="36" y="-8" width="10" height="6" fill="#F48C5B" />
    </g>
  );
}

function QuestBuilding({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="6" y="4" width="52" height="8" fill="#F48C5B" />
      <rect x="2" y="10" width="60" height="6" fill="#D4764E" />
      <rect x="4" y="16" width="56" height="32" fill="#FFF7E6" stroke="#8B6E44" strokeWidth={2} />
      <rect x="22" y="32" width="20" height="16" fill="#8B6E44" />
      {/* 퀘스트 게시판 */}
      <rect x="64" y="18" width="4" height="24" fill="#8B6E44" />
      <rect x="44" y="18" width="24" height="20" fill="#E4C89A" stroke="#8B6E44" strokeWidth={2} />
      <rect x="48" y="22" width="16" height="3" fill="#F48C5B" />
      <rect x="48" y="27" width="12" height="2" fill="#8B6E44" />
      <rect x="48" y="31" width="14" height="2" fill="#8B6E44" />
      <text x="52" y="38" fill="#E25D5D" style={{ fontSize: "8px", fontWeight: 700 }}>!</text>
    </g>
  );
}

function ShopBuilding({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="6" y="4" width="52" height="8" fill="#E8A838" />
      <rect x="2" y="10" width="60" height="6" fill="#C48A28" />
      <rect x="4" y="16" width="56" height="32" fill="#E4C89A" stroke="#8B6E44" strokeWidth={2} />
      {/* 차양 */}
      <rect x="0" y="16" width="64" height="8" fill="#F48C5B" stroke="#8B6E44" strokeWidth={1} />
      <rect x="4" y="24" width="8" height="8" fill="#F48C5B" />
      <rect x="16" y="24" width="8" height="8" fill="#FFF7E6" />
      <rect x="28" y="24" width="8" height="8" fill="#F48C5B" />
      <rect x="40" y="24" width="8" height="8" fill="#FFF7E6" />
      <rect x="52" y="24" width="8" height="8" fill="#F48C5B" />
      <rect x="24" y="36" width="16" height="12" fill="#8B6E44" />
      {/* 상점 간판 */}
      <rect x="18" y="0" width="28" height="10" fill="#FFF7E6" stroke="#8B6E44" strokeWidth={1} />
      <text x="32" y="8" textAnchor="middle" fill="#3B2F23" style={{ fontSize: "6px", fontWeight: 700 }}>SHOP</text>
    </g>
  );
}

function RoomBuilding({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="8" y="2" width="48" height="8" fill="#8ECEF4" />
      <rect x="4" y="8" width="56" height="6" fill="#6BB8E8" />
      <rect x="6" y="14" width="52" height="34" fill="#FFF7E6" stroke="#8B6E44" strokeWidth={2} />
      <rect x="22" y="30" width="20" height="18" fill="#8B6E44" />
      <rect x="10" y="20" width="10" height="10" fill="#8ECEF4" stroke="#8B6E44" strokeWidth={1} />
      <rect x="44" y="20" width="10" height="10" fill="#8ECEF4" stroke="#8B6E44" strokeWidth={1} />
      {/* 굴뚝 */}
      <rect x="46" y="-6" width="8" height="10" fill="#A0A0A0" />
      <rect x="48" y="-10" width="4" height="6" fill="#8B6E44" />
    </g>
  );
}

function BoardBuilding({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="6" y="4" width="60" height="8" fill="#7FC97F" />
      <rect x="2" y="10" width="68" height="6" fill="#5A9E5A" />
      <rect x="4" y="16" width="64" height="34" fill="#F5E6C8" stroke="#8B6E44" strokeWidth={2} />
      {/* 게시판 */}
      <rect x="12" y="20" width="48" height="24" fill="#E4C89A" stroke="#8B6E44" strokeWidth={2} />
      <rect x="16" y="24" width="40" height="4" fill="#FFF7E6" />
      <rect x="16" y="30" width="32" height="3" fill="#DCC9A8" />
      <rect x="16" y="35" width="36" height="3" fill="#DCC9A8" />
      <rect x="16" y="40" width="28" height="3" fill="#DCC9A8" />
      {/* 핀 */}
      <rect x="30" y="18" width="4" height="4" fill="#E25D5D" />
    </g>
  );
}

function Fountain({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* 외곽 돌 */}
      <rect x="0" y="24" width="72" height="20" fill="#A0A0A0" stroke="#8B6E44" strokeWidth={2} />
      <rect x="4" y="20" width="64" height="8" fill="#B8B8B8" />
      <rect x="8" y="16" width="56" height="8" fill="#C8C8C8" />
      {/* 물 */}
      <rect x="10" y="8" width="52" height="16" fill="#8ECEF4" />
      <rect x="14" y="10" width="44" height="12" fill="#6BB8E8" />
      {/* 분수대 */}
      <rect x="30" y="0" width="12" height="12" fill="#A0A0A0" stroke="#8B6E44" strokeWidth={1} />
      <rect x="33" y="-6" width="6" height="8" fill="#B8B8B8" />
      {/* 물줄기 */}
      <rect x="35" y="-10" width="2" height="6" fill="#8ECEF4" />
      <rect x="32" y="-8" width="2" height="4" fill="#8ECEF4" opacity={0.7} />
      <rect x="38" y="-8" width="2" height="4" fill="#8ECEF4" opacity={0.7} />
      {/* 반짝임 */}
      <rect x="18" y="14" width="4" height="4" fill="#FFF" opacity={0.7} />
      <rect x="48" y="16" width="3" height="3" fill="#FFF" opacity={0.5} />
      <rect x="34" y="18" width="2" height="2" fill="#FFF" opacity={0.6} />
    </g>
  );
}

interface VillageMapProps {
  className?: string;
}

export function VillageMap({ className }: VillageMapProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full pixel-border bg-[#6BAB62] overflow-hidden",
        className
      )}
    >
      <svg
        viewBox="0 0 390 400"
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <GrassPattern />

        {/* 잔디 배경 */}
        <rect width="390" height="400" fill="url(#grass)" />

        {/* ── 숲 (상단) ── */}
        {[-10, 20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 370].map((tx, i) => (
          <Tree key={`forest-${i}`} x={tx} y={-4} scale={i % 3 === 0 ? 1.3 : i % 2 === 0 ? 1.1 : 1} />
        ))}

        {/* ── 좌우 숲 벽 ── */}
        <Tree x={-8} y={60} scale={1.2} />
        <Tree x={-4} y={110} scale={1} />
        <Tree x={0} y={160} scale={1.15} />
        <Tree x={-6} y={220} scale={1} />
        <Tree x={2} y={280} scale={1.1} />
        <Tree x={360} y={55} scale={1.2} />
        <Tree x={364} y={105} scale={1} />
        <Tree x={358} y={155} scale={1.15} />
        <Tree x={362} y={215} scale={1} />
        <Tree x={356} y={275} scale={1.1} />

        {/* ── 길 (십자형 + 광장) ── */}
        {/* 가로 메인 길 */}
        <rect x="40" y="178" width="310" height="44" fill="url(#path)" />
        {/* 세로 메인 길 */}
        <rect x="173" y="60" width="44" height="300" fill="url(#path)" />
        {/* 중앙 광장 (분수 주변) */}
        <rect x="149" y="154" width="92" height="92" fill="url(#path)" />
        {/* 연결 지선 */}
        <rect x="149" y="88" width="44" height="30" fill="url(#path)" />
        <rect x="197" y="88" width="44" height="30" fill="url(#path)" />
        <rect x="88" y="149" width="30" height="44" fill="url(#path)" />
        <rect x="272" y="149" width="30" height="44" fill="url(#path)" />
        <rect x="88" y="245" width="30" height="44" fill="url(#path)" />
        <rect x="272" y="245" width="30" height="44" fill="url(#path)" />

        {/* ── 분수 (정중앙) ── */}
        <Fountain x={159} y={162} />

        {/* ── 건물 ── */}
        <SquareBuilding x={147} y={52} />
        <BuildingSign x={195} y={104} label="광장" />

        <QuestBuilding x={36} y={148} />
        <BuildingSign x={95} y={200} label="의뢰소" />

        <ShopBuilding x={290} y={148} />
        <BuildingSign x={322} y={200} label="상점" />

        <RoomBuilding x={52} y={268} />
        <BuildingSign x={95} y={320} label="내 방" />

        <BoardBuilding x={248} y={264} />
        <BuildingSign x={300} y={320} label="생존게시판" />

        {/* ── 장식 나무/덤불 ── */}
        <Tree x={120} y={68} scale={0.9} />
        <Tree x={260} y={72} scale={0.85} />
        <Bush x={130} y={340} />
        <Bush x={240} y={338} />
        <Bush x={170} y={350} />
        <Tree x={340} y={330} scale={0.8} />
        <Tree x={30} y={340} scale={0.8} />

        {/* ── 캐릭터 (길 위) ── */}
        <Character x={130} y={186} shirt="#5B8FB9" delay={0} />
        <Character x={250} y={196} shirt="#E88BA0" delay={0.3} />
        <Character x={178} y={130} shirt="#7FC97F" delay={0.6} />
        <Character x={100} y={250} shirt="#F48C5B" delay={0.9} />
        <Dog x={210} y={248} />
        <Character x={300} y={280} shirt="#E4C89A" delay={1.2} />
      </svg>

      {/* 클릭 핫스팟 */}
      {BUILDINGS.map((b) => (
        <Link
          key={b.id}
          href={b.href}
          className="absolute hover:bg-white/10 active:bg-accent-orange/20 transition-colors"
          style={{
            left: `${b.hotspot.left}%`,
            top: `${b.hotspot.top}%`,
            width: `${b.hotspot.w}%`,
            height: `${b.hotspot.h}%`,
          }}
          aria-label={b.label}
        />
      ))}
    </div>
  );
}
