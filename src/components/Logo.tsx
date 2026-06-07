import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  showText?: boolean;
  variant?: "full" | "icon" | "text";
  className?: string;
}

/**
 * Logo Zshopiflow
 * Design : Z stylisé avec gradient violet-rose-cyan et vague orange-rose
 */
export default function Logo({
  size = 40,
  showText = true,
  variant = "full",
  className = "",
  ...props
}: LogoProps) {
  // === ICÔNE ZSHOPFLOW ===
  const Icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <mask id="m">
          <rect width="100" height="100" fill="white" />
          <path
            d="M0 62 Q25 52,50 62 T100 58 L100 72 Q75 82,50 72 T0 76 Z"
            fill="black"
          />
        </mask>
      </defs>
      <g mask="url(#m)">
        <path
          d="M18 22 L82 22 C86 22 88 26 86 29 L46 72 L82 72 C86 72 86 78 82 78 L18 78 C14 78 12 74 14 71 L54 28 L18 28 C14 28 14 22 18 22 Z"
          fill="url(#g)"
        />
      </g>
      <path
        d="M0 62 Q25 52,50 62 T100 58 L100 72 Q75 82,50 72 T0 76 Z"
        fill="url(#g2)"
        opacity="0.9"
      />
      <path
        d="M82 8 L84 14 L90 16 L84 18 L82 24 L80 18 L74 16 L80 14 Z"
        fill="url(#g2)"
      />
    </svg>
  );

  // === TEXTE ZSHOPFLOW ===
  const Text = (
    <span
      className={`font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent ${className}`}
      style={{ fontSize: size * 0.5, lineHeight: 1 }}
    >
      Zshopiflow
    </span>
  );

  // === COMPOSITION SELON VARIANT ===
  if (variant === "icon") {
    return Icon;
  }

  if (variant === "text") {
    return Text;
  }

  return (
    <div className="flex items-center gap-2">
      {Icon}
      {showText && Text}
    </div>
  );
}
