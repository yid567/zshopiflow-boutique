"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function DashboardPage() {
  const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (!data.user) {
          window.location.href = "/login";
        } else {
          setUser(data.user);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center animate-pulse">
            <Logo size={24} variant="icon" />
          </div>
          <div className="text-slate-400 text-sm font-medium">Chargement...</div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Top Bar */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={32} variant="icon" />
            <span className="font-extrabold text-lg">
              <span className="text-violet-600">Z</span>
              <span className="text-slate-900">shopi</span>
              <span className="text-pink-500">f</span>
              <span className="text-cyan-500">low</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-violet-600 transition px-3 py-2 rounded-xl hover:bg-slate-100"
            >
              Boutique
            </Link>
            <Link
              href="/admin"
              className="text-sm font-medium text-violet-600 bg-violet-50 hover:bg-violet-100 transition px-3 py-2 rounded-xl"
            >
              ⚙️ Admin
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 transition px-4 py-2 rounded-xl"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Bienvenue,{" "}
            <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {user.name}
            </span>
            ! 👋
          </h1>
          <p className="text-slate-500">
            Gérez vos commandes et accédez à vos produits digitaux
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: "", label: "Commandes", value: "0", color: "from-violet-500 to-purple-600" },
            { icon: "📦", label: "Ebooks achetés", value: "0", color: "from-pink-500 to-rose-600" },
            { icon: "💰", label: "Dépensé", value: "0€", color: "from-cyan-500 to-blue-600" },
            { icon: "⭐", label: "Membre depuis", value: "Aujourd'hui", color: "from-amber-500 to-orange-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-200/60 p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-xl shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Profile Card */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-extrabold mb-4 shadow-lg shadow-violet-500/20">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
                <p className="text-slate-500 text-sm">{user.email}</p>
                <div className="mt-4 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                  ✓ Compte vérifié
                </div>
              </div>
            </div>
          </div>

          {/* Orders / Products */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Mes produits</h3>
              <div className="bg-gradient-to-r from-slate-50 to-violet-50 rounded-xl p-8 text-center">
                <div className="text-5xl mb-3">📚</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Aucun produit acheté</h4>
                <p className="text-slate-500 text-sm mb-4">
                  Explorez notre boutique pour découvrir nos ebooks et formations.
                </p>
                <Link
                  href="/#produits"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:scale-105 transition text-sm"
                >
                  Découvrir les produits →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Actions rapides</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/#produits"
              className="bg-white rounded-2xl border border-slate-200/60 p-5 hover:shadow-lg hover:border-violet-300 transition group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">🛍️</div>
              <h4 className="font-bold text-slate-900 mb-1">Parcourir la boutique</h4>
              <p className="text-sm text-slate-500">Ebooks dès 6€</p>
            </Link>
            <Link
              href="/#paiement"
              className="bg-white rounded-2xl border border-slate-200/60 p-5 hover:shadow-lg hover:border-pink-300 transition group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">💳</div>
              <h4 className="font-bold text-slate-900 mb-1">Moyens de paiement</h4>
              <p className="text-sm text-slate-500">MTN, Moov, Carte</p>
            </Link>
            <Link
              href="https://wa.me/2290161920798"
              target="_blank"
              className="bg-white rounded-2xl border border-slate-200/60 p-5 hover:shadow-lg hover:border-green-300 transition group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">💬</div>
              <h4 className="font-bold text-slate-900 mb-1">Support WhatsApp</h4>
              <p className="text-sm text-slate-500">+229 01 61 92 07 98</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
