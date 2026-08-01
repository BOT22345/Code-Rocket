"use client";

import * as React from "react";
import { Rocket, Menu, X } from "lucide-react";
import { GradientPicker } from "@/components/gradient-picker";
import { ThemeToggleButton } from "@/components/theme-toggle-button";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Knowledge Box", href: "#knowledge-box" },
  { label: "Course Material", href: "#course-material" },
  { label: "About Us", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-nav-blur-bg backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] text-white shadow-md">
            <Rocket className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-fg">
            Code Rocket
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggleButton />
          <GradientPicker />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-bg-elevated border border-border">
              <span className="text-sm font-medium text-fg">Theme</span>
              <ThemeToggleButton />
            </div>
            <GradientPicker />
          </div>
        </div>
      )}
    </header>
  );
}
