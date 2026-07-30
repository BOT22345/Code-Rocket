export function RocketIllustration() {
  return (
    <svg
      viewBox="0 0 400 480"
      className="h-full w-full drop-shadow-[0_30px_60px_rgba(139,92,246,0.35)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--gradient-from)" }} />
          <stop offset="55%" style={{ stopColor: "var(--gradient-via)" }} />
          <stop offset="100%" style={{ stopColor: "var(--gradient-to)" }} />
        </linearGradient>
        <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--gradient-to)" }} />
          <stop offset="100%" style={{ stopColor: "var(--gradient-via)" }} />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: "var(--gradient-via)", stopOpacity: 0.45 }} />
          <stop offset="100%" style={{ stopColor: "var(--gradient-via)", stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      <circle cx="200" cy="230" r="190" fill="url(#glow)" />

      {/* left fin */}
      <path
        d="M162 250 C 110 270, 85 330, 95 380 C 130 360, 158 320, 172 275 Z"
        fill="url(#finGrad)"
      />
      {/* right fin */}
      <path
        d="M238 250 C 290 270, 315 330, 305 380 C 270 360, 242 320, 228 275 Z"
        fill="url(#finGrad)"
      />

      {/* flames */}
      <path
        d="M178 372 C 168 400, 172 428, 188 448 C 196 424, 198 398, 190 372 Z"
        fill="url(#flameGrad)"
      />
      <path
        d="M222 372 C 232 402, 226 432, 208 454 C 202 428, 202 398, 210 372 Z"
        fill="url(#flameGrad)"
      />

      {/* body */}
      <path
        d="M200 20 C 250 70, 268 150, 262 240 C 262 300, 240 340, 200 370 C 160 340, 138 300, 138 240 C 132 150, 150 70, 200 20 Z"
        fill="url(#bodyGrad)"
      />
      {/* body highlight */}
      <path
        d="M170 90 C 158 140, 152 190, 156 235 C 162 232, 168 200, 174 160 C 178 135, 178 110, 170 90 Z"
        fill="#ffffff"
        opacity="0.18"
      />

      {/* window */}
      <circle cx="200" cy="175" r="34" fill="#0f172a" opacity="0.85" />
      <circle cx="200" cy="175" r="26" fill="#e0f2fe" opacity="0.9" />
      <circle cx="192" cy="167" r="8" fill="#ffffff" opacity="0.7" />

      {/* star accents */}
      <g opacity="0.9">
        <path d="M60 120 l6 14 15 2 -11 11 3 15 -13 -8 -13 8 3 -15 -11 -11 15 -2 z" fill="#facc15" />
        <circle cx="330" cy="90" r="4" fill="#5eead4" />
        <circle cx="70" cy="260" r="3" fill="#f9a8d4" />
      </g>
    </svg>
  );
}
