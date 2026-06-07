"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

interface Product {
  id: number;
  emoji: string;
  title: string;
  shortTitle: string;
  price: number;
  tag: string;
  gradient: string;
  description: string;
  features: string[];
  audience: string;
  format: string;
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    emoji: "💰",
    title: "Gagner de l'argent avec Chariow en 2026",
    shortTitle: "Gagner avec Chariow 2026",
    price: 6,
    tag: "Nouveau",
    gradient: "from-violet-500 to-purple-600",
    description: "Le guide complet pour générer vos premiers euros avec l'affiliation Chariow.",
    features: ["85 pages", "10 niches rentables", "Bonus templates"],
    audience: "Débutants marketing",
    format: "PDF + Vidéos",
  },
  {
    id: 2,
    emoji: "🚀",
    title: "Comment lancer son business en ligne",
    shortTitle: "Lancer son Business",
    price: 6,
    tag: "Populaire",
    gradient: "from-blue-500 to-cyan-600",
    description: "De l'idée à la première vente en 30 jours.",
    features: ["120 pages", "Plan 30 jours", "15 idées business"],
    audience: "Entrepreneurs débutants",
    format: "PDF + Checklists",
  },
  {
    id: 3,
    emoji: "🎨",
    title: "Modèles Canva pour Chariow",
    shortTitle: "Modèles Canva",
    price: 6,
    tag: "Bestseller",
    gradient: "from-pink-500 to-rose-600",
    description: "50+ templates Canva éditables pour promouvoir vos produits.",
    features: ["50+ templates", "Stories animés", "Bannières pub"],
    audience: "Créateurs, affiliés",
    format: "Liens Canva",
  },
  {
    id: 4,
    emoji: "🎨",
    title: "Pack complet de logos e-commerce prêt à vendre",
    shortTitle: "Pack Logos E-commerce",
    price: 12,
    tag: "Premium",
    gradient: "from-amber-500 to-orange-600",
    description: "20+ logos e-commerce professionnels en SVG haute qualité.",
    features: ["20+ logos", "Fichiers SVG", "100% modifiable"],
    audience: "Entrepreneurs, graphistes",
    format: "SVG + PNG",
  },
];

export default function AdminPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    emoji: "📘",
    title: "",
    shortTitle: "",
    price: 6,
    tag: "Nouveau",
    gradient: "from-violet-500 to-purple-600",
    description: "",
    features: "",
    audience: "",
    format: "",
  });

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (!data.user) {
          router.push("/login");
        } else {
          const saved = localStorage.getItem("admin_products");
          setProducts(saved ? JSON.parse(saved) : DEFAULT_PRODUCTS);
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("admin_products", JSON.stringify(products));
    }
  }, [products]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  const addProduct = () => {
    const id = Math.max(0, ...products.map((p) => p.id)) + 1;
    const product: Product = {
      id,
      emoji: newProduct.emoji,
      title: newProduct.title,
      shortTitle: newProduct.shortTitle || newProduct.title,
      price: newProduct.price,
      tag: newProduct.tag,
      gradient: newProduct.gradient,
      description: newProduct.description,
      features: newProduct.features.split(",").map((f) => f.trim()),
      audience: newProduct.audience,
      format: newProduct.format,
    };
    setProducts([...products, product]);
    setShowAddForm(false);
    setNewProduct({
      emoji: "",
      title: "",
      shortTitle: "",
      price: 6,
      tag: "Nouveau",
      gradient: "from-violet-500 to-purple-600",
      description: "",
      features: "",
      audience: "",
      format: "",
    });
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const resetProducts = () => {
    setProducts(DEFAULT_PRODUCTS);
    localStorage.removeItem("admin_products");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-400">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={32} variant="icon" />
            <span className="font-extrabold text-lg">
              <span className="text-violet-600">Z</span>
              <span className="text-slate-900">shopi</span>
              <span className="text-pink-500">f</span>
              <span className="text-cyan-500">low</span>
            </span>
            <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-1 rounded-full">
              ADMIN
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/boutique"
              className="text-sm text-slate-600 hover:text-violet-600 transition"
            >
              Voir boutique →
            </a>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 transition px-4 py-2 rounded-xl"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Produits", value: products.length, icon: "📦", color: "from-violet-500 to-purple-600" },
            { label: "Prix moyen", value: `${Math.round(products.reduce((a, b) => a + b.price, 0) / products.length || 0)}€`, icon: "", color: "from-emerald-500 to-teal-600" },
            { label: "Catégories", value: new Set(products.map((p) => p.tag)).size, icon: "🏷️", color: "from-blue-500 to-cyan-600" },
            { label: "Pack", value: "15€", icon: "🎁", color: "from-amber-500 to-orange-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-lg shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold px-5 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition text-sm flex items-center gap-2"
          >
            <span className="text-lg">+</span> Ajouter un produit
          </button>
          <button
            onClick={resetProducts}
            className="bg-slate-100 text-slate-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-200 transition text-sm"
          >
            🔄 Réinitialiser
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl border-2 border-violet-200 p-6 mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Nouveau produit</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Titre"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Emoji"
                value={newProduct.emoji}
                onChange={(e) => setNewProduct({ ...newProduct, emoji: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Prix (€)"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
              <select
                value={newProduct.tag}
                onChange={(e) => setNewProduct({ ...newProduct, tag: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              >
                <option value="Nouveau">Nouveau</option>
                <option value="Populaire">Populaire</option>
                <option value="Bestseller">Bestseller</option>
                <option value="Premium">Premium</option>
              </select>
              <input
                type="text"
                placeholder="Description courte"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm sm:col-span-2 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Features (séparées par des virgules)"
                value={newProduct.features}
                onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm sm:col-span-2 focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Audience cible"
                value={newProduct.audience}
                onChange={(e) => setNewProduct({ ...newProduct, audience: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Format (ex: PDF + Vidéos)"
                value={newProduct.format}
                onChange={(e) => setNewProduct({ ...newProduct, format: e.target.value })}
                className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/50 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={addProduct}
                disabled={!newProduct.title}
                className="bg-violet-600 text-white font-bold px-5 py-2 rounded-xl hover:bg-violet-700 transition disabled:opacity-50 text-sm"
              >
                Ajouter
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-slate-100 text-slate-600 font-semibold px-5 py-2 rounded-xl hover:bg-slate-200 transition text-sm"
              >
                Annuler
              </button>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Liste des produits ({products.length})</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 font-medium">
                <tr>
                  <th className="text-left px-6 py-3"></th>
                  <th className="text-left px-6 py-3">Produit</th>
                  <th className="text-left px-6 py-3">Tag</th>
                  <th className="text-left px-6 py-3">Prix</th>
                  <th className="text-left px-6 py-3">Format</th>
                  <th className="text-right px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-2xl">{product.emoji}</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{product.title}</div>
                      <div className="text-slate-500 text-xs">{product.description.slice(0, 60)}...</div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          product.tag === "Nouveau"
                            ? "bg-violet-100 text-violet-700"
                            : product.tag === "Populaire"
                            ? "bg-blue-100 text-blue-700"
                            : product.tag === "Bestseller"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        {product.tag}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-900">{product.price}€</td>
                    <td className="px-6 py-4 text-slate-500">{product.format}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition text-xs"
                      >
                        🗑️ Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {products.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              Aucun produit. Cliquez sur "Ajouter un produit" pour commencer.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
