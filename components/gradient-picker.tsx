"use client";

import * as React from "react";
import { Check } from "lucide-react";

type GradientTheme = "cosmic" | "ocean" | "sunset" | "forest" | "neon";

interface GradientOption {
  id: GradientTheme;
  label: string;
  colors: string;
}

const GRADIENTS: GradientOption[] = [
  {
    id: "cosmic",
    label: "Cosmic",
    colors: "linear-gradient(135deg, #d946ef 0%, #a855f7 50%, #8b5cf6 100%)",
  },
  {
    id: "ocean",
    label: "Ocean",
    colors: "linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)",
  },
  {
    id: "sunset",
    label: "Sunset",
    colors: "linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fb923c 100%)",
  },
  {
    id: "forest",
    label: "Forest",
    colors: "linear-gradient(135deg, #84cc16 0%, #22c55e 50%, #10b981 100%)",
  },
  {
    id: "neon",
    label: "Neon",
    colors: "linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%)",
  },
];

export function GradientPicker() {
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [gradient, setGradient] = React.useState<GradientTheme>("cosmic");

  React.useEffect(() => {
    setMounted(true);
    // Load saved gradient from localStorage
    const saved = localStorage.getItem("gradient-theme") as GradientTheme;
    if (saved && GRADIENTS.find((g) => g.id === saved)) {
      setGradient(saved);
      document.documentElement.setAttribute("data-gradient", saved);
    }
  }, []);

  const handleGradientChange = (newGradient: GradientTheme) => {
    setGradient(newGradient);
    document.documentElement.setAttribute("data-gradient", newGradient);
    localStorage.setItem("gradient-theme", newGradient);
    setOpen(false);
  };

  if (!mounted) return null;

  const currentGradient = GRADIENTS.find((g) => g.id === gradient);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Pick a gradient theme"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-[#04140f] shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
      >
        <span
          className="h-4 w-4 rounded-full"
          style={{ background: currentGradient?.colors }}
        />
        Theme
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-border bg-bg-elevated p-3 shadow-2xl shadow-black/20">
            <div className="mb-2 px-2 py-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
                Pick a Gradient
              </p>
            </div>
            <div className="space-y-1">
              {GRADIENTS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleGradientChange(option.id)}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-panel"
                >
                  <span
                    className="h-8 w-8 shrink-0 rounded-full shadow-md"
                    style={{ background: option.colors }}
                  />
                  <span className="flex-1 text-sm font-medium text-fg">
                    {option.label}
                  </span>
                  {gradient === option.id && (
                    <Check className="h-4 w-4 text-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
