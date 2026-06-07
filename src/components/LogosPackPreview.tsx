"use client";

import { useState } from "react";

// === 20+ LOGOS E-COMMERCE PRÊTS À UTILISER ===
const LOGO_PACKS = [
  {
    category: "E-commerce Mode",
    logos: [
      { name: "Fashion Store", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20" fill="#1a1a2e"/><text x="50" y="42" text-anchor="middle" font-size="28" font-weight="900" fill="white" font-family="Arial">F</text><text x="50" y="68" text-anchor="middle" font-size="10" fill="#EC4899" font-family="Arial">MODE</text></svg>`, color: "#1a1a2e" },
      { name: "Style Boutique", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#EC4899"/><text x="50" y="48" text-anchor="middle" font-size="24" font-weight="900" fill="white" font-family="Arial">SB</text><text x="50" y="68" text-anchor="middle" font-size="9" fill="white" font-family="Arial">BOUTIQUE</text></svg>`, color: "#EC4899" },
      { name: "Chic Paris", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="24" fill="#F59E0B"/><text x="50" y="45" text-anchor="middle" font-size="32" font-weight="900" fill="white" font-family="Arial">C</text><text x="50" y="65" text-anchor="middle" font-size="9" fill="#1a1a2e" font-family="Arial">PARIS</text></svg>`, color: "#F59E0B" },
    ],
  },
  {
    category: "Tech & Digital",
    logos: [
      { name: "TechShop", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20" fill="#0EA5E9"/><text x="50" y="45" text-anchor="middle" font-size="24" font-weight="900" fill="white" font-family="Arial">T</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#E0F2FE" font-family="Arial">SHOP</text></svg>`, color: "#0EA5E9" },
      { name: "Digital Pro", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="24" fill="#1e293b"/><text x="50" y="45" text-anchor="middle" font-size="22" font-weight="900" fill="white" font-family="Arial">DP</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="Arial">DIGITAL</text></svg>`, color: "#1e293b" },
      { name: "Smart Store", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="#10B981"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">SS</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#D1FAE5" font-family="Arial">SMART</text></svg>`, color: "#10B981" },
    ],
  },
  {
    category: "Alimentation",
    logos: [
      { name: "Food Market", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20" fill="#EF4444"/><text x="50" y="45" text-anchor="middle" font-size="24" font-weight="900" fill="white" font-family="Arial">FM</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#FECACA" font-family="Arial">MARKET</text></svg>`, color: "#EF4444" },
      { name: "Bio Shop", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="24" fill="#22C55E"/><text x="50" y="48" text-anchor="middle" font-size="22" font-weight="900" fill="white" font-family="Arial">BS</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#DCFCE7" font-family="Arial">BIO</text></svg>`, color: "#22C55E" },
      { name: "Gourmet", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#8B5CF6"/><text x="50" y="45" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">G</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#EDE9FE" font-family="Arial">GOURMET</text></svg>`, color: "#8B5CF6" },
    ],
  },
  {
    category: "Beauté & Santé",
    logos: [
      { name: "Beauty Lab", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20" fill="#F472B6"/><text x="50" y="45" text-anchor="middle" font-size="22" font-weight="900" fill="white" font-family="Arial">BL</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#FDF2F8" font-family="Arial">BEAUTY</text></svg>`, color: "#F472B6" },
      { name: "Glow Up", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="24" fill="#FBBF24"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">GU</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#FEFCE8" font-family="Arial">GLOW</text></svg>`, color: "#FBBF24" },
      { name: "Skin Care", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="42" fill="#A78BFA"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">SC</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#F5F3FF" font-family="Arial">SKIN</text></svg>`, color: "#A78BFA" },
    ],
  },
  {
    category: "Sport & Fitness",
    logos: [
      { name: "Fit Store", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20" fill="#F97316"/><text x="50" y="48" text-anchor="middle" font-size="22" font-weight="900" fill="white" font-family="Arial">FS</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#FFEDD5" font-family="Arial">FITNESS</text></svg>`, color: "#F97316" },
      { name: "Sport Pro", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="24" fill="#06B6D4"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">SP</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#ECFEFF" font-family="Arial">SPORT</text></svg>`, color: "#06B6D4" },
      { name: "Power Gym", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#DC2626"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">PG</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#FEE2E2" font-family="Arial">GYM</text></svg>`, color: "#DC2626" },
    ],
  },
  {
    category: "Maison & Déco",
    logos: [
      { name: "Home Decor", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="20" fill="#78716C"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">HD</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#F5F5F4" font-family="Arial">HOME</text></svg>`, color: "#78716C" },
      { name: "Zen Living", svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="24" fill="#14B8A6"/><text x="50" y="48" text-anchor="middle" font-size="20" font-weight="900" fill="white" font-family="Arial">ZL</text><text x="50" y="68" text-anchor="middle" font-size="8" fill="#CCFBF1" font-family="Arial">ZEN</text></svg>`, color: "#14B8A6" },
    ],
  },
];

export default function LogosPreview() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100">
        <h3 className="font-bold text-slate-900 text-lg mb-1">
          🎨 Pack de Logos E-commerce
        </h3>
        <p className="text-sm text-slate-500">20+ logos professionnels prêts à utiliser — SVG haute qualité</p>
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-2 px-6 py-3 border-b border-slate-100 bg-slate-50/50">
        {LOGO_PACKS.map((cat, i) => (
          <button
            key={cat.category}
            onClick={() => setSelectedTab(i)}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition whitespace-nowrap ${
              selectedTab === i
                ? "bg-violet-100 text-violet-700"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Logos Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {LOGO_PACKS[selectedTab].logos.map((logo) => (
            <div
              key={logo.name}
              className="group bg-slate-50 rounded-xl p-4 text-center hover:shadow-lg hover:border-violet-300 border border-transparent transition"
            >
              <div
                className="w-16 h-16 mx-auto mb-2"
                dangerouslySetInnerHTML={{ __html: logo.svg }}
              />
              <p className="text-xs font-semibold text-slate-700">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>📁 20+ fichiers SVG</span>
          <span>🎨 Formats carré & rond</span>
          <span>✏️ Modifiable</span>
        </div>
        <div className="text-sm font-bold text-violet-600">6€</div>
      </div>
    </div>
  );
}
