"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "마을", icon: "🏘️" },
  { href: "/quest", label: "퀘스트", icon: "⚔️" },
  { href: "/square", label: "광장", icon: "📢" },
  { href: "/room", label: "내 방", icon: "🏠" },
  { href: "/more", label: "더보기", icon: "☰" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="shrink-0 bg-cream-100 border-t-2 border-brown-700">
      <div className="flex h-14">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-0.5 relative",
                "text-pixel-xs transition-colors",
                isActive ? "text-brown-800" : "text-brown-400"
              )}
            >
              {isActive && (
                <span className="absolute top-0 left-1 right-1 h-[3px] bg-accent-orange" />
              )}
              <span
                className={cn(
                  "text-base leading-none",
                  isActive && "scale-110"
                )}
              >
                {item.icon}
              </span>
              <span className="font-body text-[10px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

interface AppShellProps {
  children: ReactNode;
  hideNav?: boolean;
  fullHeight?: boolean;
}

export function AppShell({
  children,
  hideNav = false,
  fullHeight = false,
}: AppShellProps) {
  return (
    <div className="w-full min-h-screen bg-brown-800/20 flex justify-center">
      <div
        className={cn(
          "w-full max-w-[390px] bg-cream-50 flex flex-col shadow-xl",
          fullHeight ? "min-h-screen h-screen" : "min-h-screen"
        )}
      >
        <main
          className={cn(
            "flex-1 flex flex-col",
            !hideNav && !fullHeight && "pb-14",
            fullHeight && !hideNav && "min-h-0"
          )}
        >
          {children}
        </main>
        {!hideNav && <BottomNav />}
      </div>
    </div>
  );
}
