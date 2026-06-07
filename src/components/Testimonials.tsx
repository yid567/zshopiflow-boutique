"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Amina K.",
    location: "Cotonou, Bénin",
    avatar: "👩🏾‍💼",
    amount: "245 000 FCFA",
    amountEur: "373€",
    period: "en 2 mois",
    text: "J'ai commencé avec 0€ et le guide 'Gagner avec Chariow'. Maintenant je vends des ebooks chaque jour. Mon business a changé ma vie !",
    rating: 5,
    verified: true,
  },
  {
    name: "Jean-Paul M.",
    location: "Paris, France",
    avatar: "👨‍💻",
    amount: "890€",
    amountF: "583 000 FCFA",
    period: "en 3 mois",
    text: "Grâce au pack de logos, j'ai lancé ma boutique en 24h. Les clients adorent et je fais des ventes régulières. Merci Zshopiflow !",
    rating: 5,
    verified: true,
  },
  {
    name: "Fatou D.",
    location: "Dakar, Sénégal",
    avatar: "🏾‍🎨",
    amount: "156 000 FCFA",
    amountEur: "238€",
    period: "en 1 mois",
    text: "Le guide 'Modèles Canva' m'a fait économiser des semaines de travail. Mes posts sont devenus professionnels et mes ventes ont explosé !",
    rating: 5,
    verified: true,
  },
  {
    name: "Moussa B.",
    location: "Abidjan, Côte d'Ivoire",
    avatar: "👨🏾‍",
    amount: "420 000 FCFA",
    amountEur: "640€",
    period: "en 4 mois",
    text: "J'ai suivi le plan d'action du guide 'Lancer son Business'. Pas à pas, j'ai construit quelque chose de solide. Aujourd'hui je vis de mon business.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sophie L.",
    location: "Bruxelles, Belgique",
    avatar: "🏼‍💻",
    amount: "1 200€",
    amountF: "786 000 FCFA",
    period: "en 6 mois",
    text: "Zshopiflow est une mine d'or. Les guides sont concrets, les templates Canva sont top, et les logos m'ont fait gagner un temps fou. Je recommande !",
    rating: 5,
    verified: true,
  },
  {
    name: "Kofi A.",
    location: "Lomé, Togo",
    avatar: "🏾‍💼",
    amount: "89 000 FCFA",
    amountEur: "135€",
    period: "en 2 semaines",
    text: "Première semaine : 32 000 FCFA. Deuxième semaine : 57 000 FCFA. Avec le guide 'Gagner avec Chariow', tout est devenu clair et rentable.",
    rating: 4,
    verified: true,
  },
  {
    name: "Nadia R.",
    location: "Casablanca, Maroc",
    avatar: "👩🏻‍🎤",
    amount: "560€",
    amountF: "367 000 FCFA",
    period: "en 3 mois",
    text: "J'ai acheté le pack complet à 24€. En 3 mois j'ai fait x23 en retour sur investissement. Le meilleur achat de l'année.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ibrahim S.",
    location: "Bamako, Mali",
    avatar: "👨🏾‍",
    amount: "210 000 FCFA",
    amountEur: "320€",
    period: "en 2 mois",
    text: "Étudiant en fac, j'ai lancé mon side business avec les guides Zshopiflow. Maintenant je paye mes propres frais. Merci infiniment !",
    rating: 5,
    verified: true,
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 4);

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            <span>💰</span>
            Résultats réels
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ils ont <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">gagné de l'argent</span> avec Zshopiflow
          </h2>
          <p className="text-lg text-slate-600">
            Des entrepreneurs comme toi qui ont lancé leur business et généré des revenus en FCFA et en Euros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {displayed.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-amber-300 transition group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-2xl flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{t.name}</span>
                    {t.verified && (
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-semibold">
                        ✓ Vérifié
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
              </div>

              {/* Revenue badge */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-3 mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-emerald-600 font-semibold mb-0.5">Revenus générés</div>
                  <div className="text-lg font-extrabold text-emerald-700">
                    {t.amount}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 mb-0.5">≈</div>
                  <div className="text-sm font-bold text-slate-600">
                    {t.amountEur || t.amountF}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className={si < t.rating ? "text-amber-400" : "text-slate-200"}>
                    ★
                  </span>
                ))}
                <span className="ml-2 text-xs text-slate-400">{t.period}</span>
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Toggle */}
        {!showAll && TESTIMONIALS.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 font-semibold px-6 py-3 rounded-full hover:bg-amber-100 transition text-sm border border-amber-200"
            >
              Voir les {TESTIMONIALS.length - 4} autres témoignages ↓
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-14 bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 rounded-3xl p-8 text-white">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Entrepreneurs satisfaits" },
              { value: "15 000€+", label: "Revenus générés (total)" },
              { value: "2.3M FCFA+", label: "Gains en Afrique" },
              { value: "4.9/5", label: "Note moyenne" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-black mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
