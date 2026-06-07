"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => setUser(data.user || null))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/boutique#produits", label: "Boutique" },
    { href: "/boutique#gratuit", label: "Gratuit" },
    { href: "/boutique#temoignages", label: "Résultats" },
    { href: "/boutique#paiement", label: "Paiement" },
    { href: "/boutique#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-center px-4 py-3">
      <div className="w-full max-w-7xl bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-900/5">
        <div className="flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Logo size={38} variant="icon" />
            <span className="font-extrabold text-2xl tracking-tight">
              <span className="text-violet-600">Z</span>
              <span className="text-slate-900">shopi</span>
              <span className="text-pink-500">f</span>
              <span className="text-cyan-500">low</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {loading ? (
              <div className="w-24 h-10 bg-slate-100 rounded-xl animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-slate-700 hidden lg:block">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-slate-500 hover:text-red-500 transition px-3 py-2 rounded-xl hover:bg-red-50"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-slate-700 hover:text-violet-600 transition px-4 py-2.5"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition"
            aria-label="Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 w-5 bg-slate-700 transition ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 transition ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-xl transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
              {loading ? (
                <div className="w-full h-10 bg-slate-100 rounded-xl animate-pulse" />
              ) : user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-sm font-medium text-red-500 bg-red-50 hover:bg-red-100 transition px-4 py-3 rounded-xl"
                  >
                    Déconnexion
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition px-4 py-3 rounded-xl"
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="w-full text-center bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 text-white font-bold px-4 py-3 rounded-xl text-sm"
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
