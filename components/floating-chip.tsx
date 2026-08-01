import type { LucideIcon } from "lucide-react";

export function FloatingChip({
  icon: Icon,
  label,
  className = "",
  delay = "0s",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`animate-float-chip absolute inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/90 px-4 py-2 text-sm font-semibold text-fg shadow-lg shadow-black/5 backdrop-blur ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-[#04140f]">
        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      {label}
    </div>
  );
}
