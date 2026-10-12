// Brand-colored line-art for each industry tile. These are original illustrative graphics,
// not photographs — chosen deliberately over stock/scraped imagery to avoid implying real
// Millworks facilities, products or customers without verified permission (see project brief).

import type { ReactElement, ReactNode } from "react";

const INK = "#0b1220";
const ORANGE = "#ff834f";
const PAPER = "#f7f7f5";

function ArtFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-hidden
    >
      <rect width="400" height="240" fill={INK} />
      {children}
    </svg>
  );
}

export function AerospaceArt() {
  return (
    <ArtFrame>
      <g stroke={PAPER} strokeOpacity="0.15" strokeWidth="1">
        <line x1="0" y1="60" x2="400" y2="60" />
        <line x1="0" y1="180" x2="400" y2="180" />
      </g>
      <g transform="translate(200 120) rotate(-10) scale(0.8)" fill={ORANGE} stroke="none">
        {/* minimalist top-down airplane silhouette */}
        <path d="M0 -95 L10 -70 L10 -12 L85 18 L85 34 L10 20 L10 55 L32 72 L32 86 L0 76 L-32 86 L-32 72 L-10 55 L-10 20 L-85 34 L-85 18 L-10 -12 L-10 -70 Z" />
      </g>
    </ArtFrame>
  );
}

export function RailwaysArt() {
  return (
    <ArtFrame>
      <g stroke={ORANGE} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* train front */}
        <path d="M90 150 L90 95 Q90 80 110 80 L220 80 Q260 80 270 110 L270 150 Z" />
        <line x1="90" y1="115" x2="270" y2="115" />
        <circle cx="120" cy="150" r="12" fill={ORANGE} stroke="none" />
        <circle cx="230" cy="150" r="12" fill={ORANGE} stroke="none" />
      </g>
      {/* rails */}
      <g stroke={PAPER} strokeOpacity="0.3" strokeWidth="2">
        <line x1="0" y1="190" x2="400" y2="190" />
        <line x1="0" y1="200" x2="400" y2="200" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1={i * 44} y1="186" x2={i * 44 - 10} y2="206" />
        ))}
      </g>
    </ArtFrame>
  );
}

export function SemiconductorArt() {
  return (
    <ArtFrame>
      <g stroke={ORANGE} strokeWidth="3" fill="none" strokeLinecap="round">
        <rect x="150" y="90" width="100" height="60" rx="4" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line x1={170 + i * 20} y1="90" x2={170 + i * 20} y2="72" />
            <line x1={170 + i * 20} y1="150" x2={170 + i * 20} y2="168" />
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <line x1="150" y1={102 + i * 18} x2="132" y2={102 + i * 18} />
            <line x1="250" y1={102 + i * 18} x2="268" y2={102 + i * 18} />
          </g>
        ))}
      </g>
      <circle cx="200" cy="120" r="10" fill={ORANGE} />
      <g stroke={PAPER} strokeOpacity="0.15" strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="240" />
        ))}
      </g>
    </ArtFrame>
  );
}

export const industryArt: Record<string, () => ReactElement> = {
  aerospace: AerospaceArt,
  railways: RailwaysArt,
  semiconductor: SemiconductorArt,
};
