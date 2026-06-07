"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #EC4899 40%, #06B6D4 100%)",
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Animated blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div
          className={`w-full max-w-4xl mx-auto flex flex-col items-center text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* ===== TOP SECTION: Logo + Badge ===== */}
          <div className="w-full flex flex-col items-center mb-8">
            {/* Animated Logo */}
            <div className="relative group cursor-pointer mb-3">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse opacity-50" />

              {/* Spinning ring */}
              <div
                className="absolute -inset-1 rounded-full border border-white/10 animate-spin"
                style={{ animationDuration: "12s" }}
              />

              {/* Logo SVG */}
              <svg
                width="72"
                height="72"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="relative drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
              >
                <defs>
                  <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Main Z */}
                <path
                  d="M20 22 L80 22 C84 22 86 26 84 29 L46 72 L80 72 C84 72 84 78 80 78 L20 78 C16 78 14 74 16 71 L54 28 L20 28 C16 28 16 22 20 22 Z"
                  fill="white"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,-1.5; 0,0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Wave */}
                <path
                  d="M0 62 Q25 52, 50 62 T100 58 L100 72 Q75 82, 50 72 T0 76 Z"
                  fill="url(#waveGrad)"
                  opacity="0.9"
                />

                {/* Sparkle */}
                <g filter="url(#glow)">
                  <path
                    d="M82 8 L84 14 L90 16 L84 18 L82 24 L80 18 L74 16 L80 14 Z"
                    fill="#F59E0B"
                  >
                    <animate
                      attributeName="opacity"
                      values="1;0.4;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                {/* Dot */}
                <circle cx="22" cy="78" r="2" fill="white" opacity="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            {/* Badge - sous le logo */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5">
              <span className="text-white/80 text-xs font-medium tracking-wide">
                Basé à Cotonou, Bénin
              </span>
              <span className="text-white/30 text-xs">•</span>
              <span className="text-white/80 text-xs font-medium tracking-wide">
                Disponible 24/7
              </span>
            </div>
          </div>

          {/* ===== TITLE SECTION ===== */}
          <div className="mb-3">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
              style={{
                textShadow: "0 2px 20px rgba(0,0,0,0.12)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Bienvenue sur{" "}
              <span
                className="relative inline-block"
              >
                Zshopiflow
                {/* Underline accent */}
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full opacity-60" />
              </span>
            </h1>
          </div>

          {/* ===== SUBTITLE SECTION ===== */}
          <div className="mb-10">
            <p
              className="text-lg sm:text-xl text-white/50 font-light"
              style={{
                letterSpacing: "0.01em",
                lineHeight: 1.5,
              }}
            >
              Votre boutique digitale au Bénin
            </p>
          </div>

          {/* ===== DESCRIPTION ===== */}
          <div className="max-w-sm mx-auto mb-10">
            <p className="text-white/70 text-sm leading-relaxed">
              Découvrez nos produits digitaux et simplifiez votre business.
            </p>
          </div>

          {/* ===== CTA ===== */}
          <button
            onClick={() => router.push("/boutique")}
            className="group inline-flex items-center gap-2.5 bg-white text-slate-900 font-semibold px-7 py-3.5 rounded-full text-sm hover:shadow-xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
          >
            Démarrer gratuitement
            <span className="text-base group-hover:translate-x-0.5 transition-transform duration-300">
              →
            </span>
          </button>

          {/* Trust badges */}
          <div className="mt-6 flex items-center justify-center gap-4 text-white/35 text-xs">
            <span>Gratuit</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>Sans carte</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>2 min</span>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/15 rounded-full animate-float"
            style={{
              left: `${20 + i * 18}%`,
              top: `${35 + (i % 3) * 18}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
