"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated text-fg transition-all duration-200 hover:scale-105 hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-bg"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated text-fg transition-all duration-200 hover:scale-105 hover:border-[var(--accent)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-bg active:scale-95"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark
              ? "scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
          strokeWidth={2}
          aria-hidden="true"
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
