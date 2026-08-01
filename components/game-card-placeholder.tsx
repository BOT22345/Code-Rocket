interface GameCardPlaceholderProps {
  gradient: string;
  icon?: "blocks" | "racing" | "city" | "controller";
}

export function GameCardPlaceholder({ gradient, icon = "controller" }: GameCardPlaceholderProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`grad-${icon}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {icon === "blocks" && (
            <>
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#ec4899" />
            </>
          )}
          {icon === "racing" && (
            <>
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#3b82f6" />
            </>
          )}
          {icon === "city" && (
            <>
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#581c87" />
            </>
          )}
          {icon === "controller" && (
            <>
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </>
          )}
        </linearGradient>
        
        <pattern id={`dots-${icon}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.1)" />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill={`url(#grad-${icon})`} />
      <rect width="400" height="300" fill={`url(#dots-${icon})`} />

      {/* Icon illustrations */}
      {icon === "blocks" && (
        <g opacity="0.5">
          {/* Minecraft-style blocks */}
          <rect x="120" y="100" width="60" height="60" fill="#d946ef" opacity="0.8" />
          <rect x="180" y="100" width="60" height="60" fill="#c084fc" opacity="0.7" />
          <rect x="240" y="100" width="60" height="60" fill="#a855f7" opacity="0.6" />
          <rect x="150" y="160" width="60" height="60" fill="#c084fc" opacity="0.7" />
          <rect x="210" y="160" width="60" height="60" fill="#a855f7" opacity="0.8" />
        </g>
      )}

      {icon === "racing" && (
        <g opacity="0.6">
          {/* Racing car silhouette */}
          <path
            d="M 100 180 L 140 160 L 220 160 L 260 180 L 270 190 L 270 210 L 90 210 L 90 190 Z"
            fill="#ffffff"
            opacity="0.3"
          />
          {/* Speed lines */}
          <line x1="50" y1="150" x2="130" y2="150" stroke="#ffffff" strokeWidth="3" opacity="0.3" />
          <line x1="40" y1="170" x2="100" y2="170" stroke="#ffffff" strokeWidth="3" opacity="0.25" />
          <line x1="30" y1="190" x2="80" y2="190" stroke="#ffffff" strokeWidth="3" opacity="0.2" />
        </g>
      )}

      {icon === "city" && (
        <g opacity="0.5">
          {/* City skyline */}
          <rect x="80" y="140" width="40" height="80" fill="#ffffff" opacity="0.3" />
          <rect x="130" y="120" width="50" height="100" fill="#ffffff" opacity="0.35" />
          <rect x="190" y="100" width="45" height="120" fill="#ffffff" opacity="0.4" />
          <rect x="245" y="130" width="55" height="90" fill="#ffffff" opacity="0.3" />
          <rect x="310" y="150" width="40" height="70" fill="#ffffff" opacity="0.25" />
        </g>
      )}

      {icon === "controller" && (
        <g opacity="0.4">
          {/* Game controller outline */}
          <ellipse cx="200" cy="150" rx="90" ry="50" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.3" />
          <circle cx="160" cy="145" r="8" fill="#ffffff" opacity="0.4" />
          <circle cx="180" cy="155" r="8" fill="#ffffff" opacity="0.4" />
          <circle cx="220" cy="145" r="8" fill="#ffffff" opacity="0.4" />
          <circle cx="240" cy="155" r="8" fill="#ffffff" opacity="0.4" />
          {/* D-pad */}
          <rect x="145" y="145" width="6" height="20" fill="#ffffff" opacity="0.35" />
          <rect x="138" y="152" width="20" height="6" fill="#ffffff" opacity="0.35" />
          {/* Particles */}
          <circle cx="120" cy="100" r="3" fill="#ffffff" opacity="0.5" />
          <circle cx="280" cy="110" r="2" fill="#ffffff" opacity="0.4" />
          <circle cx="150" cy="80" r="2.5" fill="#ffffff" opacity="0.45" />
          <circle cx="250" cy="90" r="3" fill="#ffffff" opacity="0.5" />
          <circle cx="200" cy="70" r="2" fill="#ffffff" opacity="0.4" />
        </g>
      )}
    </svg>
  );
}
