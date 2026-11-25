"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 cursor-pointer ${
        isDark
          ? "border-[#C8AE88]/35 bg-[#4A1226]/70 text-[#C8AE88] hover:border-[#C8AE88] hover:bg-[#4A1226]"
          : "border-[#9E825C]/35 bg-[#EFE9DF]/80 text-[#420D21] hover:border-[#420D21] hover:bg-[#EFE9DF]"
      } ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
