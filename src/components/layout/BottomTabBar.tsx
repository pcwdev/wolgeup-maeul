"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "마을", icon: "🏘️" },
  { href: "/quest", label: "퀘스트", icon: "⚔️" },
  { href: "/square", label: "광장", icon: "📢" },
  { href: "/room", label: "내 방", icon: "🏠" },
  { href: "/more", label: "더보기", icon: "☰" },
];

export function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav className="shrink-0 bg-[#FFF1D6] border-t-2 border-[#5B3A1E] px-1.5 pt-1.5 pb-2">
      <div className="flex h-[52px] gap-1">
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
                "flex-1 flex flex-col items-center justify-center gap-0.5 rounded-[8px] transition-all",
                isActive
                  ? "bg-[#F48C6B] text-[#2B1A10] border-2 border-[#5B3A1E] shadow-[0_-2px_0_0_#E8C98F_inset,2px_2px_0_0_#5B3A1E] -translate-y-0.5"
                  : "text-[#7A6042] hover:bg-[#E8C98F]/50 border-2 border-transparent"
              )}
            >
              <span className={cn("text-lg leading-none", isActive && "scale-110")}>
                {item.icon}
              </span>
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
