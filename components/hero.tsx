import { Sparkles, Rocket, Gamepad2, Trophy, SquarePlay } from "lucide-react";
import { RocketIllustration } from "@/components/rocket-illustration";
import { FloatingChip } from "@/components/floating-chip";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-100"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, color-mix(in srgb, var(--accent) 12%, transparent), transparent), radial-gradient(50% 40% at 85% 10%, rgba(139,92,246,0.14), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">
        {/* Illustration side */}
        <div className="relative order-2 mx-auto flex h-[420px] w-full max-w-md items-center justify-center lg:order-1 lg:h-[480px]">
          <div className="animate-float-slow h-full w-[70%]">
            <RocketIllustration />
          </div>

          <FloatingChip
            icon={Rocket}
            label="Learn JS"
            className="left-2 top-6"
            delay="0.2s"
          />
          <FloatingChip
            icon={Gamepad2}
            label="Play & Code"
            className="right-0 top-40"
            delay="0.9s"
          />
          <FloatingChip
            icon={Trophy}
            label="Earn XP"
            className="left-0 bottom-16"
            delay="1.4s"
          />
          <FloatingChip
            icon={Sparkles}
            label="Level Up"
            className="left-1/3 bottom-0"
            delay="0.6s"
          />
        </div>

        {/* Copy side */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-sm font-medium text-fg-muted">
            <Sparkles className="h-4 w-4 text-accent" />
            For curious gamers turning coders
          </span>

          <h1 className="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-[64px]">
            Turn gaming into{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              programming
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Level up your coding skills with fun, practical, and engaging tech
            lessons. Play your way to becoming a developer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#course-material"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-base font-semibold text-[#04140f] shadow-lg shadow-accent/25 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              <Rocket className="h-4.5 w-4.5" />
              Start Learning
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-fg transition-colors hover:bg-panel"
            >
              <SquarePlay className="h-4.5 w-4.5" />
              Visit my YT Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
