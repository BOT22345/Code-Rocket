"use client";

import { GameCardPlaceholder } from "@/components/game-card-placeholder";
import { useEffect, useRef, useState } from "react";

interface GameCard {
  title: string;
  description: string;
  icon: "blocks" | "racing" | "city" | "controller";
  gradient: string;
}

const GAME_CARDS: GameCard[] = [
  {
    title: "Minecraft",
    description: "Build logic with blocks",
    icon: "blocks",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Need for Speed",
    description: "Race through physics & AI",
    icon: "racing",
    gradient: "from-orange-500 to-blue-600",
  },
  {
    title: "GTA V",
    description: "Script open-world systems",
    icon: "city",
    gradient: "from-pink-600 to-purple-900",
  },
  {
    title: "Fortnite",
    description: "Master real-time multiplayer",
    icon: "controller",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Roblox",
    description: "Create worlds with Lua",
    icon: "blocks",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Among Us",
    description: "Learn game theory & logic",
    icon: "controller",
    gradient: "from-pink-500 to-red-600",
  },
  {
    title: "Valorant",
    description: "Study AI & tactics",
    icon: "racing",
    gradient: "from-red-600 to-pink-500",
  },
  {
    title: "League of Legends",
    description: "Understand strategy algorithms",
    icon: "controller",
    gradient: "from-yellow-500 to-blue-600",
  },
  {
    title: "The Sims",
    description: "Simulate complex systems",
    icon: "city",
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "FIFA",
    description: "Explore physics engines",
    icon: "racing",
    gradient: "from-green-600 to-blue-600",
  },
  {
    title: "Call of Duty",
    description: "Analyze ballistics & rendering",
    icon: "racing",
    gradient: "from-gray-700 to-orange-600",
  },
  {
    title: "Apex Legends",
    description: "Study matchmaking systems",
    icon: "controller",
    gradient: "from-orange-600 to-red-700",
  },
];

export function GamingCSSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;

        const maxScroll = scrollContainer.scrollWidth / 2;

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const duplicatedCards = [...GAME_CARDS, ...GAME_CARDS];

  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg mb-6">
            <span className="bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
              Gaming Meets
            </span>
            <br />
            <span className="text-fg">Computer Science</span>
          </h2>

          <p className="text-lg text-fg-muted max-w-3xl mx-auto leading-relaxed">
            Why learn from textbooks when you can learn by playing? Popular games become interactive
            classrooms where every quest, race, and build teaches real coding, logic, and problem-solving
            skills.
          </p>
        </div>

        {/* Carousel Container with Theme Border */}
        <div className="relative rounded-2xl p-1 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)]">
          
          {/* Floating Meteorites */}
          <div
            className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-80 animate-float-chip"
            style={{ animationDelay: "0s" }}
          />

          <div
            className="absolute -top-2 left-20 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--gradient-via)] to-[var(--gradient-to)] opacity-70 animate-float-chip"
            style={{ animationDelay: "0.5s" }}
          />

          <div
            className="absolute top-10 -left-4 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-via)] opacity-75 animate-float-chip"
            style={{ animationDelay: "1s" }}
          />

          <div
            className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-80 animate-float-chip"
            style={{ animationDelay: "0.3s" }}
          />

          <div
            className="rounded-xl bg-bg p-6"
          >
            {/* Scrolling Cards */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {duplicatedCards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className="group relative flex-shrink-0 w-[280px]"
                >
                  {/* Theme changing border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Card */}
                  <div className="relative m-[1px] h-full rounded-2xl border border-border bg-bg-elevated overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[var(--accent)]">
                    
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-bg to-bg-elevated">
                      <GameCardPlaceholder
                        gradient={card.gradient}
                        icon={card.icon}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold text-fg mb-1.5">
                        {card.title}
                      </h3>

                      <p className="text-sm text-fg-muted">
                        {card.description}
                      </p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pause Hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-fg-muted">
            Hover over cards to pause • {GAME_CARDS.length} games and counting
          </p>
        </div>
      </div>
    </section>
  );
}
