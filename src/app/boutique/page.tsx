"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import AppIcon from "@/components/AppIcon";
import LogosPreview from "@/components/LogosPackPreview";
import ProductImage from "@/components/ProductImage";
import Testimonials from "@/components/Testimonials";

// ============ DONNÉES ============
const PRODUCTS = [
  {
    id: 1,
    emoji: "💰",
    title: "Gagner de l'argent avec Chariow en 2026",
    shortTitle: "Gagner avec Chariow 2026",
    price: 6,
    tag: "Nouveau",
    gradient: "from-violet-500 to-purple-600",
    description:
      "Le guide complet pour générer vos premiers euros avec l'affiliation Chariow. Découvrez les secrets des top affiliés africains, les produits qui se vendent le mieux, et comment construire une audience rentable.",
    features: [
      "📖 85 pages de stratégies éprouvées",
      "🎯 10 niches rentables à exploiter en 2026",
      "💡 Techniques de vente avancées",
      "📱 Stratégies TikTok & Instagram",
      "🎁 Bonus : 20 templates de posts",
    ],
    audience: "Débutants et intermédiaires en marketing digital",
    format: "PDF + Vidéos bonus",
  },
  {
    id: 2,
    emoji: "🚀",
    title: "Comment lancer son business en ligne",
    shortTitle: "Lancer son Business en Ligne",
    price: 6,
    tag: "Populaire",
    gradient: "from-blue-500 to-cyan-600",
    description:
      "De l'idée à la première vente en 30 jours. Un plan d'action étape par étape pour créer un business en ligne rentable, même sans expérience technique ni capital de départ.",
    features: [
      "📖 120 pages ultra-pratiques",
      "🎯 Plan d'action sur 30 jours",
      "💰 15 idées de business rentables",
      "🛠️ Outils gratuits recommandés",
      "📊 Tableaux de suivi inclus",
    ],
    audience: "Entrepreneurs débutants, freelances",
    format: "PDF + Checklists imprimables",
  },
  {
    id: 3,
    emoji: "🎨",
    title: "Modèles Canva pour Chariow",
    shortTitle: "Modèles Canva Chariow",
    price: 6,
    tag: "Bestseller",
    gradient: "from-pink-500 to-rose-600",
    description:
      "50+ templates Canva éditables spécialement conçus pour promouvoir vos produits Chariow. Posts Instagram, stories, bannières, mockups... Tout ce qu'il faut pour vendre plus vite.",
    features: [
      "🎨 50+ templates éditables",
      "📱 Posts Instagram & Facebook",
      "📖 Stories & Reels animés",
      "🖼️ Mockups produits professionnels",
      "🎯 Bannières publicitaires",
    ],
    audience: "Créateurs, affiliés Chariow, entrepreneurs",
    format: "Liens Canva + Tutoriels vidéo",
  },
  {
    id: 4,
    emoji: "🎨",
    title: "Pack complet de logos e-commerce prêt à vendre",
    shortTitle: "Pack Logos E-commerce",
    price: 12,
    tag: "Premium",
    gradient: "from-amber-500 to-orange-600",
    description:
      "20+ logos e-commerce professionnels en SVG haute qualité. Mode, tech, food, beauté, sport, déco... Tous prêts à utiliser et personnaliser pour n'importe quelle boutique en ligne.",
    features: [
      "🎨 20+ logos professionnels",
      "📁 Fichiers SVG haute qualité",
      "✏️ 100% modifiable et éditable",
      "🏪 6 catégories (Mode, Tech, Food, Beauté, Sport, Déco)",
      "💰 Prêt à vendre ou à utiliser",
    ],
    audience: "Entrepreneurs e-commerce, graphistes, agences",
    format: "SVG + PNG + Guide d'utilisation",
  },
  {
    id: 5,
    emoji: "",
    title: "Conseils de Motivation pour Entrepreneurs",
    shortTitle: "Guide Motivation",
    price: 0,
    tag: "Gratuit",
    gradient: "from-emerald-500 to-teal-600",
    description: "25 conseils puissants pour rester motivé et atteindre tes objectifs business. Citations inspirantes, stratégies concrètes et habitudes à adopter au quotidien.",
    features: [
      "📖 10 pages de conseils pratiques",
      " Commence par ton Pourquoi",
      "🎯 Objectifs SMART",
      " Lis 30 min/jour",
      "🔥 Ne lâche jamais",
    ],
    audience: "Tous les entrepreneurs",
    format: "PDF gratuit",
  },
  {
    id: 6,
    emoji: "💰",
    title: "Guide : Gérer ses Bénéfices et Dépenses",
    shortTitle: "Gestion Budget",
    price: 0,
    tag: "Gratuit",
    gradient: "from-emerald-500 to-teal-600",
    description: "Comment gérer ton argent en tant qu'e-commerçant. Règle des 50/30/20, suivi des dépenses, investissements stratégiques et pièges à éviter.",
    features: [
      "📖 10 pages de conseils financiers",
      "💰 Règle 50/30/20 expliquée",
      "📊 Tableau de suivi des dépenses",
      "🚫 3 dépenses à éviter absolument",
      "✅ Checklist mensuelle",
    ],
    audience: "E-commerçants, freelances",
    format: "PDF gratuit",
  },
];

const ROADMAP = [
  {
    step: "01",
    title: "Créer ta boutique Shopify",
    duration: "30 min",
    icon: "🛍️",
    color: "from-violet-500 to-purple-600",
    tasks: [
      "Inscris-toi sur shopify.com (essai gratuit 3 jours puis 1€/mois)",
      "Choisis un nom de domaine mémorable (.com ou .fr)",
      "Sélectionne le thème gratuit 'Dawn' ou achète un thème premium",
      "Configure les paramètres : devise (EUR), langue (FR), pays",
      "Ajoute un logo, une charte graphique cohérente",
    ],
    tip: "Utilise l'offre à 1€/mois pour tester sans risque pendant 3 mois.",
  },
  {
    step: "02",
    title: "S'inscrire sur Chariow",
    duration: "15 min",
    icon: "🚀",
    color: "from-orange-500 to-red-600",
    tasks: [
      "Va sur chariow.com et crée ton compte gratuit",
      "Active le programme d'affiliation dans les paramètres",
      "Explore la marketplace : ebooks, templates, formations",
      "Sélectionne 5 à 10 produits avec 30%+ de commission",
      "Génère tes liens d'affiliation uniques",
    ],
    tip: "Choisis des produits qui résolvent un problème précis et ont déjà des ventes prouvées.",
  },
  {
    step: "03",
    title: "Configurer la livraison digitale",
    duration: "20 min",
    icon: "📦",
    color: "from-emerald-500 to-teal-600",
    tasks: [
      "Installe l'app gratuite 'Digital Downloads' sur Shopify",
      "Alternative : SendOwl ou SkyPilot pour les formations vidéo",
      "Configure les emails automatiques de livraison",
      "Teste le parcours d'achat complet",
      "Ajoute des pages légales (CGV, Mentions légales, Politique de confidentialité)",
    ],
    tip: "SendOwl gère mieux la TVA automatique pour les produits digitaux en Europe.",
  },
  {
    step: "04",
    title: "Créer des fiches produits qui convertissent",
    duration: "2 heures",
    icon: "✨",
    color: "from-blue-500 to-cyan-600",
    tasks: [
      "Titre accrocheur avec bénéfice principal",
      "Description structurée : problème → solution → résultat",
      "Mockup professionnel (utilise Canva ou Placeit)",
      "Section FAQ pour lever les objections",
      "Preuve sociale : avis, nombre de téléchargements",
    ],
    tip: "Une fiche qui convertit à 3% peut générer 300€ avec 1000 visiteurs à 10€.",
  },
  {
    step: "05",
    title: "Mettre en place le tunnel marketing",
    duration: "1 journée",
    icon: "🎯",
    color: "from-pink-500 to-rose-600",
    tasks: [
      "Installe le Pixel Meta et Google Analytics 4",
      "Configure MailerLite ou Brevo (gratuit jusqu'à 1000 contacts)",
      "Crée un lead magnet gratuit (mini-guide en échange de l'email)",
      "Mets en place une séquence email de 5 jours",
      "Ajoute un pop-up de sortie sur Shopify",
    ],
    tip: "70% des premières ventes viennent des relances email, pas de la première visite.",
  },
  {
    step: "06",
    title: "Générer du trafic qualifié",
    duration: "En continu",
    icon: "📈",
    color: "from-amber-500 to-orange-600",
    tasks: [
      "TikTok : 1 vidéo/jour montrant le problème résolu par le produit",
      "Instagram Reels : témoignages et aperçus du contenu",
      "Pinterest : épingles SEO pour trafic organique long terme",
      "Facebook Groups : rejoindre 10 groupes de ta niche",
      "SEO : articles de blog répondant aux questions clients",
    ],
    tip: "Le trafic organique TikTok peut générer 1000 vues/jour gratuitement en 2 semaines.",
  },
  {
    step: "07",
    title: "Encaisser tes premiers euros",
    duration: "Semaine 1-4",
    icon: "💰",
    color: "from-yellow-500 to-amber-600",
    tasks: [
      "Shopify : paiements via Stripe/PayPal, virement après 2 jours",
      "Chariow : retrait par Mobile Money (Orange, Wave, MTN) ou virement",
      "Suivre tes KPIs : taux de conversion, panier moyen, ROAS",
      "Réinvestir 30% des gains en publicité Meta",
      "Scaler : ajouter 2-3 nouveaux produits/mois",
    ],
    tip: "Réinvestis toujours 30% des gains en acquisition pour scaler durablement.",
  },
];

const MARKETING_STRATEGIES = [
  {
    title: "TikTok Organique",
    icon: "🎵",
    difficulty: "Facile",
    roi: "★★★★★",
    description:
      "Crée 1 vidéo/jour montrant le problème que résout ton produit. Hook dans les 3 premières secondes, storytelling, CTA vers ta boutique en bio.",
    example: "Exemple : 'J'ai failli rater mon examen... jusqu'à ce que je découvre cette méthode.'",
  },
  {
    title: "Email Marketing",
    icon: "📧",
    difficulty: "Moyen",
    roi: "★★★★★",
    description:
      "Offre un lead magnet gratuit, puis séquence de 5 emails : bienvenue, valeur, valeur, preuve, offre. Taux d'ouverture moyen : 25%.",
    example: "Exemple : Guide gratuit '7 erreurs à éviter' → séquence → promotion produit à 27€.",
  },
  {
    title: "Meta Ads",
    icon: "🎯",
    difficulty: "Avancé",
    roi: "★★★★☆",
    description:
      "Budget minimum 5€/jour. Campagne de conversion, audience large, laisser l'algorithme trouver les acheteurs. Objectif ROAS 3x minimum.",
    example: "Exemple : 5€/jour → 1 vente à 27€ = ROAS 5,4x = excellent.",
  },
  {
    title: "Influence Micro",
    icon: "🌟",
    difficulty: "Facile",
    roi: "★★★★☆",
    description:
      "Contacte 20 micro-influenceurs (5-20k abonnés) dans ta niche. Propose commission 30-40% via Chariow. Aucune avance de trésorerie.",
    example: "Exemple : 5 influenceurs actifs × 3 ventes/mois = 15 ventes = 405€ à 27€.",
  },
];

const FAQS = [
  {
    q: "Combien coûte vraiment le démarrage ?",
    a: "Shopify : 1€/mois pendant 3 mois (offre de lancement). Nom de domaine : 12€/an. Canva Pro (optionnel) : 12€/mois. Soit un investissement initial de 15€ pour te lancer. Chariow est 100% gratuit à l'inscription.",
  },
  {
    q: "Faut-il créer ses propres produits ?",
    a: "Non ! C'est la force du système. Avec l'affiliation Chariow, tu peux vendre les ebooks, formations et templates d'autres créateurs et toucher 20 à 50% de commission. Zéro création, zéro SAV produit.",
  },
  {
    q: "Combien de temps pour les premières ventes ?",
    a: "Avec une stratégie TikTok + email marketing cohérente, la plupart des débutants font leur première vente en 7 à 21 jours. Avec Meta Ads, c'est possible dès le 2-3ème jour si la fiche produit est bonne.",
  },
  {
    q: "Shopify ou Chariow directement ?",
    a: "Les deux sont complémentaires. Utilise Chariow pour l'affiliation (produits d'autres créateurs, paiement Mobile Money) et Shopify comme vitrine internationale pour vendre tes propres produits ou combiner plusieurs sources. Shopify touche une audience européenne/américaine, Chariow touche l'Afrique.",
  },
  {
    q: "Comment retirer mes gains ?",
    a: "Shopify : virement bancaire via Stripe ou PayPal sous 2-5 jours. Chariow : Mobile Money (Orange Money, Wave, MTN MoMo, Moov) ou virement bancaire. Parfait pour l'Afrique francophone.",
  },
  {
    q: "Faut-il déclarer son activité ?",
    a: "Oui. En France : micro-entreprise (auto-entrepreneur) gratuite à créer sur urssaf.fr. En Afrique : statut selon pays (entreprenant OHADA, RCCM, etc.). Toujours déclarer dès le premier euro encaissé.",
  },
  {
    q: "Quels produits digitaux se vendent le mieux en 2026 ?",
    a: "Top 5 : 1) Ebooks pratiques (10-47€), 2) Templates Notion/Canva (15-67€), 3) Mini-formations vidéo (27-197€), 4) Presets Lightroom (9-29€), 5) Planners digitaux (12-37€). Choisis un produit qui résout un problème urgent.",
  },
];

// ============ COMPOSANTS ============

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 bg-gradient-to-b from-violet-50/80 to-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-10 -left-20 w-80 h-80 bg-violet-400/15 rounded-full blur-3xl" />
      <div className="absolute top-20 -right-20 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ===== LOGO + BADGE (top) ===== */}
          <div className="flex flex-col items-center mb-8 animate-fade-up">
            <div className="relative group cursor-pointer mb-4">
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/15 via-pink-500/15 to-cyan-500/15 rounded-full blur-xl animate-pulse opacity-40" />
              <div
                className="absolute -inset-1 rounded-full border border-violet-200/50 animate-spin"
                style={{ animationDuration: "12s" }}
              />
              <Logo size={56} variant="icon" className="relative group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-violet-200/60 rounded-full px-4 py-1.5">
              <span className="text-white/80 text-xs font-medium tracking-wide text-slate-600">
                Basé à Cotonou, Bénin
              </span>
              <span className="text-sm">🇧🇯</span>
              <span className="text-slate-300 text-xs">•</span>
              <span className="text-xs font-medium tracking-wide text-slate-600">
                Disponible 24/7
              </span>
            </div>
          </div>

          {/* ===== TITLE ===== */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Bienvenue sur{" "}
            <span className="relative inline-block">
              <span className="text-violet-600">Z</span>
              <span className="text-slate-900">shopi</span>
              <span className="text-pink-500">f</span>
              <span className="text-cyan-500">low</span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full opacity-50" />
            </span>
          </h1>

          {/* ===== SUBTITLE ===== */}
          <p className="text-lg sm:text-xl text-slate-400 font-light mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Votre boutique digitale au Bénin
          </p>

          <p className="text-base text-slate-500 max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Découvrez nos produits digitaux : ebooks, formations, templates. 
            Paiement par <strong className="text-slate-700">Mobile Money</strong> et <strong className="text-slate-700">carte bancaire</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <a
              href="#produits"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold px-8 py-4 rounded-full text-lg hover:shadow-xl hover:shadow-violet-500/30 transition hover:scale-105"
            >
              Voir nos produits
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
            <a
              href="#paiement"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold px-8 py-4 rounded-full text-lg border-2 border-slate-200 hover:border-violet-300 transition"
            >
              💳 Moyens de paiement
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {[
              { num: "100+", label: "Clients satisfaits" },
              { num: "5min", label: "Livraison instantanée" },
              { num: "3", label: "Ebooks disponibles" },
              { num: "24/7", label: "Support WhatsApp" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-3 border border-slate-100">
                <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">{s.num}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    {
      icon: "🌍",
      title: "Shopify : vitrine internationale",
      desc: "Accepte les paiements par carte du monde entier (Stripe, PayPal). Parfait pour toucher l'Europe et l'Amérique du Nord.",
    },
    {
      icon: "🇧🇯",
      title: "Chariow : champion de l'Afrique",
      desc: "Paiements Mobile Money (Orange, Wave, MTN, Moov). 100% adapté aux clients africains. Affiliation intégrée.",
    },
    {
      icon: "🤝",
      title: "Affiliation = 0 stock, 0 création",
      desc: "Vends les produits digitaux d'autres créateurs Chariow et touche 20 à 50% de commission. Tu ne gères que le marketing.",
    },
    {
      icon: "⚡",
      title: "Livraison 100% automatisée",
      desc: "Le client paie, reçoit son produit instantanément par email. Tu dors, ta boutique vend.",
    },
    {
      icon: "📈",
      title: "Scalabilité infinie",
      desc: "Vendre 1 ebook ou 10 000, ça te demande le même effort. Marge proche de 100%.",
    },
    {
      icon: "💎",
      title: "Revenus passifs réels",
      desc: "Une fiche produit bien optimisée peut vendre pendant des années sans retouche.",
    },
  ];

  return (
    <section id="pourquoi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            Pourquoi ce duo ?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Shopify + Chariow = <span className="gradient-text">combo gagnant</span>
          </h2>
          <p className="text-lg text-slate-600">
            Deux plateformes complémentaires pour vendre partout dans le monde, encaisser en euros ET en FCFA, et scaler sans limite.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-violet-300 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-orange-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition">
                {r.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-slate-600 leading-relaxed">{r.desc}</p>
              <div className="absolute top-4 right-4 text-xs font-bold text-slate-300">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const [active, setActive] = useState(0);
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-4">
            Le plan d'action
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Les <span className="gradient-text">7 étapes</span> pour te lancer
          </h2>
          <p className="text-lg text-slate-600">
            De l'inscription à la première vente. Suis la roadmap, coche les tâches, et tu seras en ligne en moins d'une semaine.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-8">
          {ROADMAP.map((s, i) => (
            <button
              key={s.step}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-4 py-3 rounded-xl text-sm font-semibold transition whitespace-nowrap border-2 ${
                active === i
                  ? "bg-gradient-to-r from-violet-600 to-orange-500 text-white border-transparent shadow-lg shadow-violet-500/30"
                  : "bg-white text-slate-700 border-slate-200 hover:border-violet-300"
              }`}
            >
              <span className="mr-2">{s.icon}</span>
              {s.step} • {s.title}
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Liste des étapes */}
          <div className="lg:col-span-1 space-y-3">
            {ROADMAP.map((s, i) => (
              <button
                key={s.step}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition flex items-start gap-3 ${
                  active === i ? "border-violet-500 bg-violet-50" : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl`}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-slate-400">ÉTAPE {s.step}</span>
                    <span className="text-xs text-slate-400">• {s.duration}</span>
                  </div>
                  <div className="font-bold text-slate-900 truncate">{s.title}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Détail */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ROADMAP[active].color} flex items-center justify-center text-4xl shadow-lg`}
                >
                  {ROADMAP[active].icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400">ÉTAPE {ROADMAP[active].step} • {ROADMAP[active].duration}</div>
                  <h3 className="text-2xl font-extrabold">{ROADMAP[active].title}</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {ROADMAP[active].tasks.map((t, i) => (
                  <label key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-2 border-slate-300 accent-violet-600" />
                    <span className="text-slate-700 group-hover:text-slate-900">{t}</span>
                  </label>
                ))}
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="font-bold text-amber-900 mb-1">Conseil de pro</div>
                    <p className="text-amber-800 text-sm">{ROADMAP[active].tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AffiliationSection() {
  return (
    <section id="affiliation" className="py-20 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold mb-4">
            💎 La méthode secrète
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            L'affiliation Chariow : <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">vendre sans créer</span>
          </h2>
          <p className="text-lg text-slate-300">
            La marketplace Chariow te donne accès à des centaines de produits digitaux à promouvoir. Tu partages ton lien, tu touches ta commission.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-14">
          {[
            { step: "1", title: "Parcours la marketplace", desc: "Explore les ebooks, formations, templates disponibles en affiliation" },
            { step: "2", title: "Génère ton lien", desc: "Clique sur 'Promouvoir' et copie ton lien d'affilié unique" },
            { step: "3", title: "Partage-le", desc: "TikTok, Instagram, blog, email... Partage auprès de ton audience" },
            { step: "4", title: "Encaisse", desc: "Reçois 20 à 50% de commission par vente, payé par Mobile Money ou virement" },
          ].map((s) => (
            <div key={s.step} className="relative bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center font-extrabold text-lg shadow-lg">
                {s.step}
              </div>
              <h3 className="font-bold text-lg mb-2 mt-4">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-violet-600/20 to-violet-800/20 rounded-2xl p-8 border border-violet-500/30">
            <h3 className="text-2xl font-extrabold mb-4">🎁 Pour débutants complets</h3>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="text-green-400">✓</span> Aucune création de produit requise</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Aucune gestion SAV</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Commission automatique après chaque vente</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Tableau de bord détaillé avec tes stats</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Paiements Mobile Money intégrés</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-600/20 to-pink-800/20 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-extrabold mb-4">🔥 Pour créateurs confirmés</h3>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="text-green-400">✓</span> Active l'affiliation sur tes propres produits</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Fixe tes commissions (20-50%)</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Des milliers d'affiliés promeuvent tes produits</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Règles marketing personnalisables</li>
              <li className="flex gap-3"><span className="text-green-400">✓</span> Parténariats closers premium</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [price, setPrice] = useState(27);
  const [commission, setCommission] = useState(40);
  const [visitors, setVisitors] = useState(1000);
  const [conversion, setConversion] = useState(2.5);

  const result = useMemo(() => {
    const sales = Math.floor((visitors * conversion) / 100);
    const revenue = sales * price;
    const earnings = sales * price * (commission / 100);
    return { sales, revenue, earnings };
  }, [price, commission, visitors, conversion]);

  return (
    <section id="calculateur" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            💰 Simulateur
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Combien peux-tu <span className="gradient-text">gagner ?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Ajuste les curseurs pour voir ton potentiel de revenus mensuel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-sm">
            <div className="space-y-7">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-800">Prix du produit</label>
                  <span className="text-2xl font-extrabold gradient-text">{price}€</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-violet-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>5€</span>
                  <span>200€</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-800">Commission affilié</label>
                  <span className="text-2xl font-extrabold gradient-text">{commission}%</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  step={5}
                  value={commission}
                  onChange={(e) => setCommission(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>10%</span>
                  <span>60%</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-800">Visiteurs mensuels</label>
                  <span className="text-2xl font-extrabold gradient-text">{visitors.toLocaleString("fr-FR")}</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={10000}
                  step={100}
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full accent-violet-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>100</span>
                  <span>10 000</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-bold text-slate-800">Taux de conversion</label>
                  <span className="text-2xl font-extrabold gradient-text">{conversion}%</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={8}
                  step={0.5}
                  value={conversion}
                  onChange={(e) => setConversion(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>0.5%</span>
                  <span>8%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-violet-600 to-orange-500 rounded-3xl p-8 text-white shadow-2xl shadow-violet-500/30">
              <div className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-2">Tes gains mensuels estimés</div>
              <div className="text-6xl font-extrabold mb-4">
                {Math.round(result.earnings).toLocaleString("fr-FR")}€
              </div>
              <div className="text-white/80 text-sm">
                Basé sur {result.sales} ventes × {price}€ × {commission}% de commission
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                <div className="text-3xl mb-2">🛒</div>
                <div className="text-sm text-slate-600 mb-1">Ventes/mois</div>
                <div className="text-3xl font-extrabold text-slate-900">{result.sales}</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                <div className="text-3xl mb-2">💸</div>
                <div className="text-sm text-slate-600 mb-1">CA total généré</div>
                <div className="text-3xl font-extrabold text-slate-900">{result.revenue.toLocaleString("fr-FR")}€</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
              <div className="font-bold text-emerald-900 mb-2">📅 Projection annuelle</div>
              <div className="text-3xl font-extrabold text-emerald-700">
                {(Math.round(result.earnings) * 12).toLocaleString("fr-FR")}€
              </div>
              <div className="text-sm text-emerald-800 mt-1">Si tu maintiens ce rythme sur 12 mois</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketingSection() {
  return (
    <section id="marketing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4">
            📣 Stratégies qui marchent
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            4 canaux pour <span className="gradient-text">exploser tes ventes</span>
          </h2>
          <p className="text-lg text-slate-600">
            Choisis-en UN pour commencer, maîtrise-le, puis ajoute le suivant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {MARKETING_STRATEGIES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl hover:border-violet-300 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{s.icon}</div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-violet-100 text-violet-700">
                    {s.difficulty}
                  </span>
                  <span className="text-sm text-amber-500">{s.roi}</span>
                </div>
              </div>
              <h3 className="text-xl font-extrabold mb-2">{s.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{s.description}</p>
              <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700 border-l-4 border-orange-400">
                {s.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            ❓ FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-lg text-slate-600">Tout ce que tu dois savoir avant de te lancer.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 transition overflow-hidden ${
                open === i ? "border-violet-400 bg-violet-50/50" : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-slate-900">{f.q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-orange-500 text-white flex items-center justify-center font-bold transition ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-700 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const paidProducts = PRODUCTS.filter((p) => p.price > 0);
  const freeProducts = PRODUCTS.filter((p) => p.price === 0);

  return (
    <section id="produits" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== SECTION PRODUITS PAYANTS ===== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
            Produits Premium
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ebooks & <span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">Ressources</span>
          </h2>
          <p className="text-lg text-slate-600">
            Des produits de qualité pour booster ton business. Livraison instantanée.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paidProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-violet-300 transition group cursor-pointer"
              onClick={() => setSelectedProduct(p.id)}
            >
              {/* Product Image */}
              <div className="group-hover:scale-[1.02] transition-transform duration-500">
                <ProductImage emoji={p.emoji} title={p.shortTitle || p.title} tag={p.tag} gradient={p.gradient} />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-2 line-clamp-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {p.description.slice(0, 80)}...
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">
                      {p.price}€
                    </div>
                    <div className="text-[10px] text-slate-400">{p.format}</div>
                  </div>
                  <span className="bg-gradient-to-r from-violet-600 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full group-hover:shadow-lg transition">
                    Acheter
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pack Complet */}
        <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 rounded-3xl p-8 sm:p-10 text-white shadow-2xl mb-20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />
          <div className="relative grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold mb-4">
                🔥 OFFRE PACK — Économisez 6€
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Pack Complet — 4 Produits
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Tous nos ebooks + le pack de logos e-commerce. Tout ce qu'il faut pour démarrer et réussir.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5">✓ Gagner avec Chariow 2026</div>
                <div className="flex items-center gap-1.5">✓ Lancer son Business</div>
                <div className="flex items-center gap-1.5">✓ Modèles Canva</div>
                <div className="flex items-center gap-1.5">✓ Pack Logos E-commerce</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/60 line-through mb-1">30€</div>
              <div className="text-5xl sm:text-6xl font-black mb-2">24€</div>
              <div className="text-sm text-white/70 mb-5">Paiement unique — Accès immédiat</div>
              <button
                onClick={() => setSelectedProduct(999)}
                className="bg-white text-violet-700 font-extrabold px-8 py-4 rounded-full hover:scale-105 transition shadow-xl text-sm"
              >
                🎁 Acheter le Pack Complet
              </button>
            </div>
          </div>
        </div>

        {/* ===== SECTION PRODUITS GRATUITS ===== */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            <span className="text-emerald-500">🎁</span>
            100% Gratuit — Aucune inscription requise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Guides <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Gratuits</span>
          </h2>
          <p className="text-slate-600">
            Télécharge nos PDF gratuits pour t'aider à progresser dans ton business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {freeProducts.map((p) => (
            <div
              key={p.id}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200/60 overflow-hidden hover:shadow-xl hover:border-emerald-400 transition group"
            >
              <div className="flex items-start gap-4 p-6 sm:p-8">
                <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">{p.emoji}</div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-1 rounded mb-2">
                    ✓ Gratuit — PDF
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 mb-4">
                    <span className="flex items-center gap-1">📄 {p.features.length} pages</span>
                    <span>•</span>
                    <span>📥 Téléchargement immédiat</span>
                    <span>•</span>
                    <span>📧 Pas d'email requis</span>
                  </div>
                  <button
                    onClick={() => {
                      // Generate simple PDF
                      const doc = { title: p.title, pages: [{ title: p.title, content: p.description + "\n\n" + p.features.join("\n") }] };
                      import("jspdf").then(({ default: jsPDF }) => {
                        const pdf = new jsPDF();
                        pdf.setFontSize(24);
                        pdf.text("Zshopiflow", 105, 40, { align: "center" });
                        pdf.setFontSize(16);
                        pdf.text(p.title, 105, 60, { align: "center" });
                        pdf.setFontSize(11);
                        pdf.text(p.description, 20, 80);
                        p.features.forEach((f, i) => {
                          pdf.text(`• ${f}`, 20, 95 + i * 8);
                        });
                        pdf.text("www.zshopiflow.com", 105, 280, { align: "center" });
                        pdf.save(`zshopiflow-${p.id}.pdf`);
                      });
                    }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition text-sm"
                  >
                    📥 Télécharger gratuitement
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-slate-400">
          Ces ressources sont 100% gratuites et sans engagement. Profites-en !
        </div>
      </div>

      {/* Logos Pack Preview */}
      <div className="mt-12 max-w-5xl mx-auto">
        <LogosPreview />
      </div>

      {/* Modal de commande */}
      {selectedProduct && (
        <OrderModal
          product={
            selectedProduct === 999
              ? { id: 999, title: "Pack Complet - 4 Produits", price: 24 }
              : PRODUCTS.find((p) => p.id === selectedProduct)!
          }
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function OrderModal({
  product,
  onClose,
}: {
  product: { id: number; title: string; price: number };
  onClose: () => void;
}) {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-violet-600 to-orange-500 p-6 text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-extrabold">Finaliser la commande</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-xl"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4">
            <div className="text-sm text-white/80 mb-1">Vous commandez :</div>
            <div className="font-bold text-lg">{product.title}</div>
            <div className="text-3xl font-extrabold mt-2">{product.price}€</div>
          </div>
        </div>

        <div className="p-6">
          <h4 className="font-bold text-lg mb-4">Choisissez votre moyen de paiement</h4>

          {!paymentMethod ? (
            <div className="grid gap-3">
              <button
                onClick={() => setPaymentMethod("mtn")}
                className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl hover:border-yellow-400 hover:bg-yellow-50 transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl">
                  📱
                </div>
                <div className="flex-1">
                  <div className="font-bold">MTN Mobile Money</div>
                  <div className="text-sm text-slate-600">Paiement instantané</div>
                </div>
                <span className="text-slate-400">→</span>
              </button>

              <button
                onClick={() => setPaymentMethod("moov")}
                className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl">
                  💙
                </div>
                <div className="flex-1">
                  <div className="font-bold">Moov Money</div>
                  <div className="text-sm text-slate-600">Paiement rapide</div>
                </div>
                <span className="text-slate-400">→</span>
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className="flex items-center gap-4 p-4 border-2 border-slate-200 rounded-xl hover:border-violet-400 hover:bg-violet-50 transition text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl">
                  💳
                </div>
                <div className="flex-1">
                  <div className="font-bold">Carte Bancaire</div>
                  <div className="text-sm text-slate-600">Visa, Mastercard</div>
                </div>
                <span className="text-slate-400">→</span>
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => setPaymentMethod(null)}
                className="mb-4 text-sm text-violet-600 font-semibold hover:underline flex items-center gap-1"
              >
                ← Changer de méthode
              </button>

              {paymentMethod === "mtn" && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl">
                      📱
                    </div>
                    <div>
                      <div className="font-bold text-lg">MTN Mobile Money</div>
                      <div className="text-sm text-slate-600">
                        Envoyez <strong>{product.price}€ ({Math.round(product.price * 655)} FCFA)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Numéro MTN MoMo
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 font-mono">
                      +229 01 61 92 07 98
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard("+2290161920798", "mtn-modal")}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold py-3 rounded-xl hover:shadow-lg transition mb-4"
                  >
                    {copied === "mtn-modal" ? "✓ Numéro copié !" : "📋 Copier le numéro"}
                  </button>

                  <div className="text-sm text-slate-700 space-y-2">
                    <div className="font-semibold">Comment payer :</div>
                    <ol className="list-decimal list-inside space-y-1 text-xs">
                      <li>Composez <strong>*880#</strong></li>
                      <li>Option 1 (Transfert d'argent)</li>
                      <li>Entrez le numéro ci-dessus</li>
                      <li>Montant : {Math.round(product.price * 655)} FCFA</li>
                      <li>Confirmez avec votre code PIN</li>
                    </ol>
                  </div>
                </div>
              )}

              {paymentMethod === "moov" && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl">
                      💙
                    </div>
                    <div>
                      <div className="font-bold text-lg">Moov Money</div>
                      <div className="text-sm text-slate-600">
                        Envoyez <strong>{product.price}€ ({Math.round(product.price * 655)} FCFA)</strong>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Numéro Moov Money
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 font-mono">
                      +229 01 68 72 52 30
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard("+2290168725230", "moov-modal")}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition mb-4"
                  >
                    {copied === "moov-modal" ? "✓ Numéro copié !" : "📋 Copier le numéro"}
                  </button>

                  <div className="text-sm text-slate-700 space-y-2">
                    <div className="font-semibold">Comment payer :</div>
                    <ol className="list-decimal list-inside space-y-1 text-xs">
                      <li>Composez <strong>*155#</strong></li>
                      <li>Option 1 (Envoi d'argent)</li>
                      <li>Entrez le numéro ci-dessus</li>
                      <li>Montant : {Math.round(product.price * 655)} FCFA</li>
                      <li>Confirmez avec votre code PIN</li>
                    </ol>
                  </div>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl">
                      💳
                    </div>
                    <div>
                      <div className="font-bold text-lg">Carte Bancaire</div>
                      <div className="text-sm text-slate-600">
                        Paiement sécurisé de <strong>{product.price}€</strong>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://paypal.me/votre-compte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition text-center mb-4"
                  >
                    💳 Payer {product.price}€ par carte
                  </a>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div>✓ Paiement sécurisé SSL 256-bit</div>
                    <div>✓ Visa, Mastercard, American Express</div>
                    <div>✓ Protection acheteur PayPal</div>
                    <div>✓ Remboursement sous 14 jours</div>
                  </div>
                </div>
              )}

              <div className="mt-4 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg">
                <p className="text-sm text-emerald-900">
                  <strong>💡 Après paiement :</strong> Envoyez une capture d'écran de la confirmation sur WhatsApp au{" "}
                  <a
                    href="https://wa.me/2290161920798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
                  >
                    +229 01 61 92 07 98
                  </a>{" "}
                  pour recevoir votre ebook par email en moins de 5 minutes.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PaymentSection() {
  return (
    <section id="paiement" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            💳 Paiement sécurisé
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text">Payez comme vous voulez</span>
          </h2>
          <p className="text-lg text-slate-600">
            Plusieurs options de paiement sécurisées. Les coordonnées complètes sont révélées uniquement au moment du paiement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* MTN Mobile Money */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-yellow-400 transition shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl shadow-lg">
                📱
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">MTN Mobile Money</h3>
                <p className="text-sm text-slate-500">Paiement instantané</p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 mb-4 text-center">
              <div className="text-xs font-semibold text-yellow-800 uppercase tracking-wider mb-1">Numéro MTN MoMo</div>
              <div className="text-2xl font-extrabold text-slate-400 font-mono tracking-wider">
                +229 •• •• •• ••
              </div>
              <div className="text-xs text-slate-500 mt-2">🔒 Visible au paiement</div>
            </div>
            <a
              href="#produits"
              className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold py-3 rounded-xl hover:shadow-lg transition text-center"
            >
              Choisir un produit
            </a>
            <div className="mt-4 text-xs text-slate-600 space-y-1">
              <p>✓ Transfert instantané</p>
              <p>✓ Aucune commission</p>
              <p>✓ Disponible 24h/24</p>
            </div>
          </div>

          {/* Moov Money */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 transition shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-3xl shadow-lg">
                💙
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">Moov Money</h3>
                <p className="text-sm text-slate-500">Paiement rapide</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 mb-4 text-center">
              <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-1">Numéro Moov Money</div>
              <div className="text-2xl font-extrabold text-slate-400 font-mono tracking-wider">
                +229 •• •• •• ••
              </div>
              <div className="text-xs text-slate-500 mt-2">🔒 Visible au paiement</div>
            </div>
            <a
              href="#produits"
              className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition text-center"
            >
              Choisir un produit
            </a>
            <div className="mt-4 text-xs text-slate-600 space-y-1">
              <p>✓ Transfert rapide</p>
              <p>✓ Réseau fiable</p>
              <p>✓ Support client</p>
            </div>
          </div>

          {/* Carte Bancaire */}
          <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-violet-400 transition shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg">
                💳
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">Carte Bancaire</h3>
                <p className="text-sm text-slate-500">Visa, Mastercard</p>
              </div>
            </div>
            <div className="bg-violet-50 rounded-xl p-4 mb-4 text-center">
              <div className="text-xs font-semibold text-violet-800 uppercase tracking-wider mb-2">Paiement sécurisé via</div>
              <div className="flex gap-2 justify-center flex-wrap">
                <span className="bg-white px-3 py-1 rounded-lg text-sm font-bold text-slate-700 border border-slate-200">PayPal</span>
                <span className="bg-white px-3 py-1 rounded-lg text-sm font-bold text-slate-700 border border-slate-200">Stripe</span>
              </div>
              <div className="text-xs text-slate-500 mt-2">🔒 Cryptage SSL 256-bit</div>
            </div>
            <a
              href="#produits"
              className="block w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition text-center"
            >
              Choisir un produit
            </a>
            <div className="mt-4 text-xs text-slate-600 space-y-1">
              <p>✓ Protection acheteur</p>
              <p>✓ Remboursement garanti</p>
              <p>✓ Paiement international</p>
            </div>
          </div>
        </div>

        {/* Bannière sécurité */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border-2 border-slate-200 p-8">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🔒</div>
            <div>
              <h3 className="text-2xl font-extrabold mb-3">Pourquoi vos informations sont sécurisées ?</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Les numéros de paiement ne sont révélés qu'aux clients qui passent commande</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Paiement Mobile Money sécurisé par code PIN</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Transactions carte bancaire cryptées SSL 256-bit</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Livraison instantanée par email après confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="text-6xl mb-6 animate-float">🛍️</div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Prêt à découvrir nos <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">produits digitaux ?</span>
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Rejoignez les centaines de clients satisfaits de Zshopiflow à Cotonou et partout au Bénin. 
          Paiement Mobile Money, livraison instantanée par email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 font-extrabold px-8 py-4 rounded-full text-lg hover:scale-105 transition shadow-2xl"
          >
            🛍️ Créer ma boutique Shopify
          </a>
          <a
            href="https://chariow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-extrabold px-8 py-4 rounded-full text-lg hover:scale-105 transition shadow-2xl border-2 border-white/20"
          >
            🚀 S'inscrire sur Chariow
          </a>
        </div>
        <p className="text-white/70 text-sm mt-8">
          ✓ Pas de carte bancaire requise • ✓ Essai gratuit • ✓ Support en français
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Logo size={36} variant="icon" />
              <span className="text-white font-extrabold text-lg">Zshopiflow</span>
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Votre boutique de produits digitaux au Bénin. Ebooks, formations, templates avec livraison instantanée.
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:zidaneminphis82@gmail.com" className="hover:text-white">zidaneminphis82@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Cotonou, Bénin</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span>
                <a href="https://wa.me/2290161920798" className="hover:text-white">+229 01 61 92 07 98</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#pourquoi" className="hover:text-white">Pourquoi nous</a></li>
              <li><a href="#roadmap" className="hover:text-white">Nos étapes</a></li>
              <li><a href="#paiement" className="hover:text-white">Paiement</a></li>
              <li><a href="#calculateur" className="hover:text-white">Calculateur</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Nous contacter</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:zidaneminphis82@gmail.com" className="hover:text-white flex items-center gap-2">
                  <span>✉️</span> Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/2290161920798" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                  <span>💬</span> WhatsApp
                </a>
              </li>
              <li>
                <a href="#paiement" className="hover:text-white flex items-center gap-2">
                  <span>💳</span> Paiement Mobile Money
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                🇧🇯 Fièrement basé à Cotonou, Bénin
              </p>
            </div>
          </div>
        </div>

        {/* App Icons Section */}
        <div className="border-t border-slate-800 pt-10 pb-8">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Icônes &amp; Favicon
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {/* iOS */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-violet-500/30 rounded-[28px] blur-xl group-hover:bg-violet-500/50 transition" />
                <AppIcon size={80} variant="ios" className="relative" />
              </div>
              <span className="text-sm text-slate-500 font-medium">iOS</span>
            </div>

            {/* Android */}
            <div className="flex flex-col items-center gap-3">
              <AppIcon size={80} variant="android" className="hover:scale-110 transition-transform" />
              <span className="text-sm text-slate-500 font-medium">Android</span>
            </div>

            {/* Favicon */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-slate-800/50 rounded-xl p-3 hover:bg-slate-800 transition">
                <AppIcon size={48} variant="favicon" />
              </div>
              <span className="text-sm text-slate-500 font-medium">Favicon</span>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center gap-3">
              <AppIcon size={64} variant="avatar" className="hover:scale-110 transition-transform" />
              <span className="text-sm text-slate-500 font-medium">Avatar</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-sm">
          © 2026 Zshopiflow. Tous droits réservés. Cotonou, Bénin.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/2290161920798?text=Bonjour%20Zshopiflow%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20produits%20digitaux"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition flex items-center justify-center text-white text-2xl sm:text-3xl group"
        aria-label="Contacter sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.116.133-.231.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.116-.198-.012-.304.088-.403.087-.088.197-.231.296-.346.1-.116.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.325-.335-.445-.34-.116-.007-.248-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.116-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-sm font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
          Discuter sur WhatsApp
        </span>
      </a>
    </>
  );
}

function ContactBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-violet-600 to-orange-500 rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
          <div className="grid sm:grid-cols-3 gap-6 items-center">
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Une question ? Contactez-nous !
              </h3>
              <p className="text-white/90">
                Nous sommes disponibles pour répondre à toutes vos questions sur nos produits digitaux.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:zidaneminphis82@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 font-bold px-6 py-3 rounded-full hover:scale-105 transition"
              >
                📧 Email
              </a>
              <a
                href="https://wa.me/2290161920798"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PAGE PRINCIPALE ============
export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductsSection />
      <PaymentSection />
      <WhySection />
      <RoadmapSection />
      <AffiliationSection />
      <Calculator />
      <MarketingSection />
      <TarifsSection />
      <ContactSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function TarifsSection() {
  return (
    <section id="tarifs" className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-4">
            💎 Nos Tarifs
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Des prix <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">accessibles</span>
          </h2>
          <p className="text-lg text-slate-600">
            Investissez dans vos compétences. Chaque ebook est un tremplin vers votre succès.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.id}
              className={`relative bg-white rounded-3xl border-2 overflow-hidden transition hover:shadow-2xl ${
                i === 0 ? "border-violet-300" : i === 1 ? "border-pink-300" : i === 2 ? "border-cyan-300" : "border-amber-300"
              }`}
            >
              {i === 0 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ Populaire
                </div>
              )}
              <div className={`h-3 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-8">
                <div className="text-5xl mb-4">{p.emoji}</div>
                <h3 className="font-extrabold text-xl text-slate-900 mb-2">{p.shortTitle}</h3>
                <p className="text-slate-500 text-sm mb-6">{p.description.slice(0, 100)}...</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                    {p.price}€
                  </span>
                  <span className="text-slate-400 text-sm mb-1">/ebook</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.slice(0, 3).map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-500 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#produits"
                  className={`block w-full text-center font-bold py-3 rounded-xl transition text-sm ${
                    i === 0
                      ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white hover:shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Commander →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pack promo */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500 rounded-3xl p-8 text-white text-center shadow-2xl">
            <div className="text-3xl mb-2"></div>
            <h3 className="text-2xl font-extrabold mb-2">Pack Complet - 4 Produits</h3>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-lg text-white/70 line-through">30€</span>
              <span className="text-4xl font-extrabold">24€</span>
            </div>
            <p className="text-white/90 text-sm mb-4">Économisez 6€ et obtenez TOUS nos produits : 3 ebooks + pack logos !</p>
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-white/90 mb-6">
              <li className="flex items-center gap-1">✓ Gagner avec Chariow 2026</li>
              <li className="flex items-center gap-1">✓ Lancer son Business</li>
              <li className="flex items-center gap-1">✓ Modèles Canva</li>
              <li className="flex items-center gap-1">✓ Pack Logos E-commerce</li>
            </ul>
            <a
              href="#produits"
              className="inline-flex items-center gap-2 bg-white text-violet-700 font-extrabold px-8 py-3 rounded-full hover:scale-105 transition shadow-xl"
            >
              Acheter le Pack →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
            📬 Nous contacter
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Une question ? On est là !
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Notre équipe basée à Cotonou vous répond en moins de 24h.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:zidaneminphis82@gmail.com"
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition"></div>
            <h3 className="font-bold text-white mb-1">Email</h3>
            <p className="text-white/70 text-sm">zidaneminphis82@gmail.com</p>
          </a>
          <a
            href="https://wa.me/2290161920798"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition">💬</div>
            <h3 className="font-bold text-white mb-1">WhatsApp</h3>
            <p className="text-white/70 text-sm">+229 01 61 92 07 98</p>
          </a>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition">📍</div>
            <h3 className="font-bold text-white mb-1">Adresse</h3>
            <p className="text-white/70 text-sm">Cotonou, Bénin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
