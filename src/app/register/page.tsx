"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          window.location.href = "/dashboard";
        }
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors de la création du compte");
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setError("Erreur réseau. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = (p: string): { level: number; label: string; color: string } => {
    let level = 0;
    if (p.length >= 6) level++;
    if (p.length >= 10) level++;
    if (/[A-Z]/.test(p)) level++;
    if (/[0-9]/.test(p)) level++;
    if (/[^A-Za-z0-9]/.test(p)) level++;

    if (level <= 1) return { level: 1, label: "Faible", color: "bg-red-500" };
    if (level <= 2) return { level: 2, label: "Moyen", color: "bg-orange-500" };
    if (level <= 3) return { level: 3, label: "Bon", color: "bg-yellow-500" };
    return { level: 4, label: "Fort", color: "bg-green-500" };
  };

  const strength = passwordStrength(password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 flex items-center justify-center p-4">
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-900/5 overflow-hidden">
          {/* Header */}
          <div className="pt-10 pb-6 px-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <Logo size={32} variant="icon" />
              </div>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
              Créer un compte
            </h1>
            <p className="text-slate-500 text-sm">
              Rejoignez Zshopiflow et accédez à vos produits digitaux
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-400 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition text-sm"
                >
                  {showPassword ? "🙈" : ""}
                </button>
              </div>
              {password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
                      style={{ width: `${(strength.level / 4) * 100}%` }}
                    />
                  </div>
                  <span className={`text-xs font-medium ${
                    strength.level <= 1 ? "text-red-500" :
                    strength.level <= 2 ? "text-orange-500" :
                    strength.level <= 3 ? "text-yellow-500" : "text-green-500"
                  }`}>
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className={`w-full px-4 py-3 rounded-xl border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition ${
                  confirmPassword && password !== confirmPassword
                    ? "border-red-300 bg-red-50/50 focus:ring-red-500/50 focus:border-red-400"
                    : confirmPassword && password === confirmPassword && confirmPassword.length > 0
                    ? "border-green-300 bg-green-50/50 focus:ring-green-500/50 focus:border-green-400"
                    : "border-slate-200 bg-slate-50/50 focus:ring-violet-500/50 focus:border-violet-400"
                }`}
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-xs text-red-500 mt-1">Les mots de passe ne correspondent pas</p>
              )}
              {confirmPassword && password === confirmPassword && confirmPassword.length > 0 && (
                <p className="text-xs text-green-500 mt-1">✓ Les mots de passe correspondent</p>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 flex items-center gap-2">
                <span>⚠️</span>
                {error}
              </div>
            )}

            {/* Terms */}
            <p className="text-xs text-slate-500">
              En créant un compte, vous acceptez nos{" "}
              <span className="text-violet-600 underline underline-offset-2 cursor-pointer">conditions d'utilisation</span>{" "}
              et notre{" "}
              <span className="text-violet-600 underline underline-offset-2 cursor-pointer">politique de confidentialité</span>.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Création...
                </>
              ) : (
                "Créer mon compte"
              )}
            </button>

            {/* Divider */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-slate-400">ou</span>
              </div>
            </div>

            {/* Social */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl transition text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              S'inscrire avec Google
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-slate-500 pt-2">
              Déjà un compte ?{" "}
              <Link
                href="/login"
                className="text-violet-600 font-semibold hover:text-violet-700 underline underline-offset-2"
              >
                Se connecter
              </Link>
            </p>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-slate-600 transition inline-flex items-center gap-1"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
