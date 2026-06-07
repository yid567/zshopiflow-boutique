import type { SVGProps } from "react";

interface AppIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  variant?: "ios" | "android" | "favicon" | "avatar";
  className?: string;
}

/**
 * Icônes Zshopiflow — 4 variantes pour app stores, favicon et avatar
 */
export default function AppIcon({
  size = 80,
  variant = "ios",
  className = "",
  ...props
}: AppIconProps) {
  // === Z LOGO MARK (réutilisable) ===
  const ZMark = (
    <g>
      {/* Z letter */}
      <path
        d="M20 22 L80 22 C84 22 86 26 84 29 L46 72 L80 72 C84 72 84 78 80 78 L20 78 C16 78 14 74 16 71 L54 28 L20 28 C16 28 16 22 20 22 Z"
        fill="white"
      />
      {/* Wave */}
      <path
        d="M0 62 Q25 52, 50 62 T100 58 L100 72 Q75 82, 50 72 T0 76 Z"
        fill="#F59E0B"
        opacity="0.9"
      />
      {/* Sparkle */}
      <path
        d="M82 8 L84 14 L90 16 L84 18 L82 24 L80 18 L74 16 L80 14 Z"
        fill="#F59E0B"
      />
      {/* Dot */}
      <circle cx="22" cy="78" r="2" fill="white" opacity="0.6" />
    </g>
  );

  const ZMarkColored = (
    <g>
      <path
        d="M20 22 L80 22 C84 22 86 26 84 29 L46 72 L80 72 C84 72 84 78 80 78 L20 78 C16 78 14 74 16 71 L54 28 L20 28 C16 28 16 22 20 22 Z"
        fill="url(#zGrad)"
      />
      <path
        d="M0 62 Q25 52, 50 62 T100 58 L100 72 Q75 82, 50 72 T0 76 Z"
        fill="#F59E0B"
        opacity="0.9"
      />
      <path
        d="M82 8 L84 14 L90 16 L84 18 L82 24 L80 18 L74 16 L80 14 Z"
        fill="#F59E0B"
      />
      <circle cx="22" cy="78" r="2" fill="white" opacity="0.6" />
      <defs>
        <linearGradient id="zGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </g>
  );

  switch (variant) {
    case "ios":
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          <defs>
            <linearGradient id="iosBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
            <filter id="iosGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feFlood floodColor="#7C3AED" floodOpacity="0.3" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#iosBg)" filter="url(#iosGlow)" />
          <rect x="2" y="2" width="116" height="116" rx="28" fill="url(#iosBg)" />
          <rect x="2" y="2" width="116" height="116" rx="28" stroke="rgba(255,255,255,0.1)" />
          <g transform="translate(10, 10) scale(0.83)">
            {ZMark}
          </g>
        </svg>
      );

    case "android":
      return (
        <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          <rect x="4" y="4" width="112" height="112" rx="26" fill="white" />
          <g transform="translate(10, 10) scale(0.83)">
            {ZMarkColored}
          </g>
        </svg>
      );

    case "favicon":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          <rect width="48" height="48" rx="10" fill="#1a1a2e" />
          <g transform="translate(4, 4) scale(0.4)">
            {ZMark}
          </g>
        </svg>
      );

    case "avatar":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
          <defs>
            <linearGradient id="avBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#avBg)" />
          <g transform="translate(10, 10) scale(0.65)">
            {ZMark}
          </g>
        </svg>
      );

    default:
      return null;
  }
}
