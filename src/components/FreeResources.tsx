"use client";

import { useState } from "react";
import jsPDF from "jspdf";

export default function FreeResources() {
  const [downloading, setDownloading] = useState<number | null>(null);

  const freeDocs = [
    {
      id: 1,
      emoji: "🔥",
      title: "Conseils de Motivation pour Entrepreneurs",
      tag: "Gratuit",
      description:
        "25 conseils puissants pour rester motivé et atteindre tes objectifs business. Des citations inspirantes, des stratégies concrètes et des habitudes à adopter au quotidien.",
      pages: [
        { title: "Introduction", content: "La motivation est le carburant de tout entrepreneur. Sans elle, même les meilleures idées restent dans les tiroirs. Ce guide te donne 25 conseils pratiques pour maintenir ta flamme allumée, même dans les moments difficiles." },
        { title: "1. Commence par ton \"Pourquoi\"", content: "Avant tout, pose-toi cette question : Pourquoi je fais ça ? Quand tu connais ton pourquoi, tu peux supporter n'importe quel comment. Écris-le sur un papier et garde-le visible." },
        { title: "2. Célèbre les petites victoires", content: "Chaque vente, chaque nouveau client, chaque milestone mérite d'être célébré. La dopamine que tu ressens en célébrant tes victoires te motive à continuer. Garde un journal de tes succès." },
        { title: "3. Entoure-toi de personnes positives", content: "Ton réseau est ton filet de sécurité. Fuis les gens toxiques et négatifs. Recherche des communautés d'entrepreneurs, des groupes WhatsApp, des forums où tu peux échanger et t'inspirer." },
        { title: "4. Fixe-toi des objectifs SMART", content: "Spécifique, Mesurable, Atteignable, Réaliste, Temporel. Un objectif vague ne donne pas de direction. Par exemple : 'Gagner 500€ ce mois-ci' est SMART, 'Gagner plus d'argent' ne l'est pas." },
        { title: "5. Échoue vite, apprends vite", content: "L'échec n'est pas l'inverse du succès, c'est une étape vers le succès. Chaque échec t'apprend quelque chose. Les plus grands entrepreneurs ont tous connu des échecs retentissants avant de réussir." },
        { title: "6. Crée une routine matinale", content: "Les 30 premières minutes de ta journée déterminent le reste de ta journée. Réveille-toi à la même heure, fais du sport, médite, lis, puis travaille. La discipline crée la liberté." },
        { title: "7. Lis au moins 30 min par jour", content: "Les leaders sont des lecteurs. Un livre de business, de développement personnel ou de psychologie peut changer ta perspective. 30 minutes par jour = 182 heures par an = ~20 livres lus." },
        { title: "8. Ne compare pas ton début au milieu des autres", content: "Tu vois le succès des autres, mais pas leurs années de galère. Compare-toi uniquement à la version de toi d'hier. Chaque jour, essaie d'être 1% meilleur." },
        { title: "9. Investis en toi-même", content: "Le meilleur investissement que tu puisses faire, c'est en toi. Formations, livres, coaching, outils... L'argent que tu investis en toi te reviendra multiplié au centuple." },
        { title: "10. Sois patient et persévérant", content: "Le succès n'arrive pas en une nuit. Les résultats viennent après des mois de travail constant. Ne lâche pas quand c'est difficile, c'est souvent juste avant que tout ne change." },
      ],
    },
    {
      id: 2,
      emoji: "💰",
      title: "Guide : Gérer ses Bénéfices et Dépenses",
      tag: "Gratuit",
      description:
        "Comment gérer ton argent en tant qu'e-commerçant. Règle des 50/30/20, suivi des dépenses, investissements stratégiques et pièges à éviter pour ne pas tout dépenser.",
      pages: [
        { title: "Introduction", content: "Gagner de l'argent est une chose, le garder en est une autre. La plupart des e-commerçants débutants dépensent tout ce qu'ils gagnent. Ce guide te montre comment gérer tes finances comme un pro." },
        { title: "La Règle des 50/30/20", content: "Répartis tes revenus ainsi : 50% Reinvestir dans ton business (pub, stock, outils), 30% Dépenses personnelles (loyer, nourriture, loisirs), 20% Épargne d'urgence. C'est la base de toute gestion financière saine." },
        { title: "Sépare tes comptes pro et perso", content: "Ne mélange jamais l'argent du business et l'argent personnel. Ouvre un compte bancaire dédié à ton business. Quand tu vends, l'argent va d'abord sur le compte pro. Puis tu te verses un 'salaire' mensuel." },
        { title: "Suivi des dépenses : Le Tableau Magique", content: "Crée un tableau (Excel ou Notion) avec 4 colonnes : Date, Montant, Catégorie, Description. Note chaque dépense, même les petites. Tu seras surpris de voir où part ton argent." },
        { title: "Les 3 dépenses à PRIORISER", content: "1. Marketing (c'est ce qui te rapporte des clients), 2. Outils essentiels (hébergement, domaine, apps), 3. Formation (apprendre de nouvelles compétences). Tout le reste est secondaire." },
        { title: "Les 3 dépenses à ÉVITER", content: "1. Abonnements inutiles (combien de services payés que tu n'utilises pas ?), 2. Stock excessif (ne commande pas trop tôt), 3. Publicité mal ciblée (teste petit avant de scaler)." },
        { title: "L'Épargne d'urgence : Ton filet de sécurité", content: "Mets de côté l'équivalent de 3 mois de dépenses personnelles. Si ton business ralentit, tu auras de quoi vivre sans paniquer. C'est la différence entre stress et sérénité." },
        { title: "Réinvestissement intelligent", content: "Quand tu fais un bénéfice, réinvestis au moins 50%. Pas dans des trucs fous, mais dans ce qui marche : plus de pub, meilleurs outils, formations, outsourcing. Le business croît quand tu nourris la bête." },
        { title: "Pense au long terme", content: "Ne dépense pas tout ton cash. Construis un patrimoine. Achète des assets (formations, outils qui durent) plutôt que des liabilities (trucs qui perdent de la valeur). Pense à 1 an, 3 ans, 5 ans." },
        { title: "Bonus : Checklist mensuelle", content: "✅ Vérifier mes revenus vs dépenses\n✅ Calculer mon profit net\n✅ Mettre 20% de côté\n✅ Réinvestir 50%\n✅ Supprimer les abonnements inutiles\n✅ Planifier le budget du mois prochain\n✅ Célébrer les progrès !" },
      ],
    },
  ];

  const downloadPDF = async (doc: typeof freeDocs[0]) => {
    setDownloading(doc.id);
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let y = 20;

    // Title page
    pdf.setFillColor(124, 58, 237);
    pdf.rect(0, 0, pageWidth, 297, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(28);
    pdf.text("Zshopiflow", pageWidth / 2, 80, { align: "center" });
    pdf.setFontSize(18);
    pdf.text(doc.title, pageWidth / 2, 110, { align: "center" });
    pdf.setFontSize(12);
    pdf.setTextColor(200, 200, 200);
    pdf.text("Guide gratuit pour entrepreneurs", pageWidth / 2, 130, { align: "center" });
    pdf.text("www.zshopiflow.com", pageWidth / 2, 270, { align: "center" });

    pdf.addPage();

    // Content pages
    y = 20;
    pdf.setTextColor(0, 0, 0);

    doc.pages.forEach((page, idx) => {
      if (idx > 0) pdf.addPage();
      y = 20;

      // Header
      pdf.setFillColor(124, 58, 237);
      pdf.rect(0, 0, pageWidth, 40, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(8);
      pdf.text("Zshopiflow — Guide gratuit", margin, 15);
      pdf.setFontSize(6);
      pdf.text(`Page ${idx + 1}`, pageWidth - margin, 15, { align: "right" });

      y = 55;
      pdf.setTextColor(60, 60, 60);
      pdf.setFontSize(18);
      pdf.setFont("helvetica", "bold");
      pdf.text(page.title, margin, y);
      y += 12;

      pdf.setFontSize(11);
      pdf.setFont("helvetica", "normal");
      const lines = pdf.splitTextToSize(page.content, pageWidth - margin * 2);
      pdf.text(lines, margin, y);
    });

    pdf.save(`zshopiflow-${doc.id === 1 ? "motivation" : "budget"}.pdf`);
    setDownloading(null);
  };

  return (
    <section id="gratuit" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            🎁 100% Gratuit
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ressources <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">gratuites</span>
          </h2>
          <p className="text-lg text-slate-600">
            Télécharge nos guides PDF gratuits. Zéro inscription, zéro piège.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {freeDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border-2 border-emerald-200 overflow-hidden hover:shadow-xl hover:border-emerald-400 transition group"
            >
              <div className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{doc.emoji}</div>
                  <div className="flex-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1 rounded mb-2">
                      {doc.tag}
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-900">{doc.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {doc.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-6">
                  <span>📄 {doc.pages.length} pages</span>
                  <span>•</span>
                  <span> Conseils pratiques</span>
                  <span>•</span>
                  <span> Sans inscription</span>
                </div>
                <button
                  onClick={() => downloadPDF(doc)}
                  disabled={downloading === doc.id}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {downloading === doc.id ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Génération du PDF...
                    </>
                  ) : (
                    <>
                      📥 Télécharger le PDF gratuit
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> 100% gratuit
          </span>
          <span className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Pas d'email requis
          </span>
          <span className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> PDF haute qualité
          </span>
          <span className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span> Téléchargement immédiat
          </span>
        </div>
      </div>
    </section>
  );
}
