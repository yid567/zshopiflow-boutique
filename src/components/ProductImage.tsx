import type { SVGProps } from "react";

interface ProductImageProps {
  emoji: string;
  title: string;
  tag?: string;
  gradient: string;
  isFree?: boolean;
}

export default function ProductImage({ emoji, title, tag, gradient, isFree }: ProductImageProps) {
  return (
    <div className={`relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} shadow-lg`}>
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Logo Z centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl" />
          {/* Z logo */}
          <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-2xl">
            <defs>
              <linearGradient id="waveGradImg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <path
              d="M20 22 L80 22 C84 22 86 26 84 29 L46 72 L80 72 C84 72 84 78 80 78 L20 78 C16 78 14 74 16 71 L54 28 L20 28 C16 28 16 22 20 22 Z"
              fill="white"
            />
            <path
              d="M0 62 Q25 52, 50 62 T100 58 L100 72 Q75 82, 50 72 T0 76 Z"
              fill="url(#waveGradImg)"
              opacity="0.9"
            />
            <path d="M82 8 L84 14 L90 16 L84 18 L82 24 L80 18 L74 16 L80 14 Z" fill="#F59E0B" />
          </svg>
        </div>
      </div>

      {/* Bottom gradient overlay with title */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 pt-12">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <div>
            <p className="text-white font-bold text-sm leading-tight">{title}</p>
            {tag && (
              <span className="text-[10px] text-white/70 font-medium">{tag}</span>
            )}
          </div>
        </div>
      </div>

      {/* Top badge */}
      <div className="absolute top-3 left-3">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
          isFree
            ? "bg-emerald-400 text-emerald-900"
            : tag === "Premium"
            ? "bg-amber-400 text-amber-900"
            : tag === "Bestseller"
            ? "bg-orange-400 text-orange-900"
            : tag === "Populaire"
            ? "bg-blue-400 text-blue-900"
            : "bg-violet-400 text-violet-900"
        }`}>
          {isFree ? "✓ Gratuit" : tag}
        </span>
      </div>

      {/* Price badge (paid only) */}
      {!isFree && (
        <div className="absolute top-3 right-3">
          <span className="text-xs font-extrabold text-white bg-white/20 backdrop-blur px-2 py-1 rounded-full">
            {tag === "Premium" ? "12€" : "6€"}
          </span>
        </div>
      )}
    </div>
  );
}
