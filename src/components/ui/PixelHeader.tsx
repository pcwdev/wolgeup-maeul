"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PixelHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  rightAction?: ReactNode;
}

export function PixelHeader({
  title,
  subtitle,
  showBack = false,
  rightAction,
}: PixelHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-cream-100 border-b-2 border-brown-700 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          {showBack && (
            <Link
              href="/"
              className="shrink-0 font-display text-pixel-sm text-brown-600 hover:text-brown-800 transition-colors"
              aria-label="뒤로가기"
            >
              ←
            </Link>
          )}
          <div className="min-w-0">
            <h1 className="font-display text-pixel-lg text-brown-800 truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-pixel-xs text-brown-500 truncate">{subtitle}</p>
            )}
          </div>
        </div>
        {rightAction && <div className="shrink-0">{rightAction}</div>}
      </div>
    </header>
  );
}

interface PixelHeaderBrandProps {
  season?: string;
}

export function PixelHeaderBrand({ season = "시즌1" }: PixelHeaderBrandProps) {
  return (
    <header className="sticky top-0 z-40 bg-cream-100 border-b-2 border-brown-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-pixel-lg text-brown-800">
            월급마을
          </h1>
          <p className="text-pixel-xs text-brown-500">{season}. 이번달 생존기</p>
        </div>
        <span
          className={cn(
            "font-display text-pixel-xs px-2 py-1",
            "bg-accent-orange text-brown-800 pixel-border"
          )}
        >
          PWA
        </span>
      </div>
    </header>
  );
}
