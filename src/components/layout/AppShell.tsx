import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BottomTabBar } from "@/components/layout/BottomTabBar";

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
    <div className="w-full min-h-dvh bg-[#F4EAD8] flex justify-center">
      <div
        className={cn(
          "w-full max-w-[430px] bg-[#FFF7E8] flex flex-col",
          "border-x border-[#E8C98F]/70 shadow-[0_0_28px_rgba(43,26,16,0.1)]",
          fullHeight ? "min-h-dvh h-dvh" : "min-h-dvh"
        )}
      >
        <main
          className={cn(
            "flex-1 flex flex-col min-h-0",
            !hideNav && !fullHeight && "pb-[60px]",
            fullHeight && !hideNav && "pb-0"
          )}
        >
          {children}
        </main>
        {!hideNav && <BottomTabBar />}
      </div>
    </div>
  );
}
