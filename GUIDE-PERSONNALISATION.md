# 🎨 Guide de Personnalisation - Mettre le site à votre nom

Ce guide vous montre comment personnaliser chaque partie du site pour qu'il soit 100% à votre image.

---

## 📁 Fichiers à modifier

### Fichier principal : `src/app/page.tsx`
C'est le fichier qui contient tout le contenu du site. C'est ici que vous allez faire 95% des modifications.

### Autres fichiers :
- `src/app/layout.tsx` : Titre de l'onglet du navigateur
- `src/app/globals.css` : Couleurs et styles
- `README.md` : Description du projet

---

## 🔧 Modifications étape par étape

### 1️⃣ Changer le nom du site (Logo)

**Fichier** : `src/app/page.tsx`

**Cherchez** :
```tsx
<span className="gradient-text">ShopiFlow</span>
```

**Remplacez par** :
```tsx
<span className="gradient-text">VotreNom</span>
```

Ou avec votre propre logo :
```tsx
<span className="gradient-text">MaBoutique229</span>
```

---

### 2️⃣ Changer le titre principal (Hero)

**Cherchez** :
```tsx
Crée ta boutique{" "}
<span className="gradient-text">Shopify + Chariow</span>
<br />
et gagne tes <span className="gradient-text">premiers euros</span>
```

**Remplacez par votre proposition** :
```tsx
Bienvenue sur{" "}
<span className="gradient-text">MaBoutique229</span>
<br />
Votre <span className="gradient-text">boutique digitale</span> de confiance
```

---

### 3️⃣ Changer la description

**Cherchez** :
```tsx
Le plan d'action en 7 étapes pour lancer une boutique de produits digitaux rentable,
même sans stock, sans création de produit, et sans audience de départ.
```

**Remplacez par** :
```tsx
Découvrez nos produits digitaux exclusifs : ebooks, formations, templates.
Paiement sécurisé par Mobile Money et carte bancaire.
```

---

### 4️⃣ Changer les statistiques du Hero

**Cherchez** :
```tsx
{ num: "15€", label: "Investissement min." },
{ num: "7 jours", label: "Pour 1ère vente" },
{ num: "500€+", label: "Objectif mois 1" },
{ num: "100%", label: "Légal & automatisé" },
```

**Remplacez par vos propres statistiques** :
```tsx
{ num: "100+", label: "Clients satisfaits" },
{ num: "24h", label: "Livraison rapide" },
{ num: "50+", label: "Produits digitaux" },
{ num: "100%", label: "Paiement sécurisé" },
```

---

### 5️⃣ Modifier les produits affichés

**Cherchez** la section mockup boutique :
```tsx
{ emoji: "📘", title: "Ebook Growth Hacking", price: "27€", tag: "Bestseller" },
{ emoji: "🎨", title: "Pack 50 Templates Canva", price: "37€", tag: "Nouveau" },
{ emoji: "🎓", title: "Formation Shopify Pro", price: "97€", tag: "Premium" },
```

**Remplacez par vos produits** :
```tsx
{ emoji: "📚", title: "Guide Business en ligne", price: "15€", tag: "Populaire" },
{ emoji: "💼", title: "Pack CV Professionnel", price: "10€", tag: "Nouveau" },
{ emoji: "🎯", title: "Formation Marketing", price: "45€", tag: "Bestseller" },
```

---

### 6️⃣ Personnaliser les moyens de paiement

Les numéros MTN et Moov sont déjà configurés avec vos numéros :
- **MTN** : +229 01 61 92 07 98
- **Moov** : +229 01 68 72 52 30

Pour changer le lien de paiement par carte :

**Cherchez** :
```tsx
href="https://paypal.me/votre-compte"
```

**Remplacez par votre lien** :
```tsx
href="https://paypal.me/votrenom"
```

Ou utilisez Stripe Payment Link :
```tsx
href="https://buy.stripe.com/votre-lien"
```

---

### 7️⃣ Ajouter WhatsApp pour contact

**Cherchez** dans la section paiement :
```tsx
<strong>+229 01 61 92 07 98</strong> pour une validation rapide.
```

**Vous pouvez ajouter un lien WhatsApp direct** :
```tsx
<a href="https://wa.me/2290161920798" target="_blank" rel="noopener noreferrer">
  <strong>Contactez-nous sur WhatsApp</strong>
</a> pour une validation rapide.
```

---

### 8️⃣ Modifier les étapes de la Roadmap

**Cherchez** la section `ROADMAP` en haut du fichier :
```tsx
const ROADMAP = [
  {
    step: "01",
    title: "Créer ta boutique Shopify",
    ...
```

**Adaptez les étapes selon votre offre** :

Si vous vendez directement des produits (pas un guide) :
```tsx
const ROADMAP = [
  {
    step: "01",
    title: "Choisissez votre produit",
    duration: "2 min",
    icon: "🛍️",
    color: "from-violet-500 to-purple-600",
    tasks: [
      "Parcourez notre catalogue de produits digitaux",
      "Sélectionnez le produit qui vous intéresse",
      "Lisez la description et les avis clients",
    ],
    tip: "Tous nos produits sont livrés instantanément par email.",
  },
  {
    step: "02",
    title: "Effectuez le paiement",
    duration: "1 min",
    icon: "💳",
    color: "from-orange-500 to-red-600",
    tasks: [
      "Choisissez votre moyen de paiement (MTN, Moov, Carte)",
      "Effectuez le paiement sécurisé",
      "Envoyez la confirmation par WhatsApp",
    ],
    tip: "Paiement 100% sécurisé avec Mobile Money ou carte bancaire.",
  },
  // ... autres étapes
]
```

---

### 9️⃣ Modifier les stratégies marketing

Si vous n'avez pas besoin de la section marketing, **supprimez-la** :

**Cherchez** :
```tsx
<MarketingSection />
```

**Supprimez la ligne**.

Ou modifiez `MARKETING_STRATEGIES` pour refléter vos services.

---

### 🔟 Modifier la FAQ

**Cherchez** `FAQS` en haut du fichier et modifiez les questions/réponses :

```tsx
const FAQS = [
  {
    q: "Comment passer commande ?",
    a: "Choisissez votre produit, payez par MTN/Moov/Carte, puis envoyez la confirmation sur WhatsApp au +229 01 61 92 07 98. Vous recevrez votre produit par email sous 5 minutes.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons MTN Mobile Money (+229 01 61 92 07 98), Moov Money (+229 01 68 72 52 30), et les cartes bancaires Visa/Mastercard via PayPal.",
  },
  // ... ajoutez vos propres questions
]
```

---

### 1️⃣1️⃣ Modifier le Footer

**Cherchez** la fonction `Footer()` :
```tsx
<span className="text-white font-extrabold text-lg">ShopiFlow Guide</span>
```

**Remplacez par** :
```tsx
<span className="text-white font-extrabold text-lg">MaBoutique229</span>
```

Et mettez à jour la description :
```tsx
<p className="text-sm leading-relaxed">
  Votre boutique de produits digitaux au Bénin. 
  Paiement Mobile Money et livraison instantanée.
</p>
```

---

### 1️⃣2️⃣ Changer le titre de l'onglet du navigateur

**Fichier** : `src/app/layout.tsx`

**Cherchez** :
```tsx
export const metadata: Metadata = {
  title: "Guide Complet : Shopify + Chariow | Gagne tes premiers euros",
  description: "...",
};
```

**Remplacez par** :
```tsx
export const metadata: Metadata = {
  title: "MaBoutique229 - Produits Digitaux au Bénin",
  description:
    "Boutique en ligne de produits digitaux. Ebooks, formations, templates. Paiement MTN Mobile Money, Moov Money et carte bancaire.",
};
```

---

### 1️⃣3️⃣ Changer les couleurs

**Fichier** : `src/app/globals.css`

**Cherchez** :
```css
--color-brand-600: #7c3aed;
--color-accent-500: #f97316;
```

**Changez les couleurs** (utilisez un site comme [coolors.co](https://coolors.co) pour trouver des palettes) :
```css
--color-brand-600: #2563eb; /* Bleu */
--color-accent-500: #dc2626; /* Rouge */
```

Puis recherchez/remplacez dans `page.tsx` :
- `violet-` → votre couleur principale
- `orange-` → votre couleur d'accent

---

### 1️⃣4️⃣ Ajouter votre logo

Si vous avez un logo, remplacez l'emoji 🚀 dans la navbar :

**Cherchez** :
```tsx
<span className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-orange-500 flex items-center justify-center text-white text-xl">
  🚀
</span>
```

**Mettez votre logo** (à placer dans `/public/logo.png`) :
```tsx
<img src="/logo.png" alt="Logo" className="w-9 h-9 rounded-xl" />
```

---

## 🎯 Exemple complet de personnalisation

Voici un exemple de transformation pour une boutique de produits digitaux au Bénin :

### Avant :
```
🚀 ShopiFlow Guide
"Crée ta boutique Shopify + Chariow et gagne tes premiers euros"
```

### Après :
```
🛍️ DigiShop Bénin
"Votre boutique de produits digitaux au Bénin - Paiement Mobile Money"
```

---

## 🚀 Après la personnalisation

Une fois toutes les modifications faites :

1. **Testez localement** :
   ```bash
   npm run dev
   ```
   Ouvrez `http://localhost:3000` pour voir le résultat

2. **Validez le build** :
   ```bash
   npm run build
   ```

3. **Commit et push** :
   ```bash
   git add .
   git commit -m "Personnalisation du site"
   git push
   ```

4. **Vercel/Netlify redéploient automatiquement** ✨

---

## 📝 Checklist de personnalisation

- [ ] Nom du site changé
- [ ] Titre Hero personnalisé
- [ ] Description adaptée
- [ ] Produits remplacés
- [ ] Moyens de paiement vérifiés
- [ ] Numéro WhatsApp ajouté
- [ ] Roadmap adaptée (si besoin)
- [ ] FAQ personnalisée
- [ ] Footer mis à jour
- [ ] Titre d'onglet changé
- [ ] Couleurs personnalisées (optionnel)
- [ ] Logo ajouté (optionnel)
- [ ] Test local OK
- [ ] Déploiement réussi

---

## 🎨 Ressources utiles

- **Icônes/emojis** : [emojipedia.org](https://emojipedia.org)
- **Palettes de couleurs** : [coolors.co](https://coolors.co)
- **Images gratuites** : [unsplash.com](https://unsplash.com), [pexels.com](https://pexels.com)
- **Créer un logo** : [canva.com](https://canva.com), [logo.com](https://logo.com)
- **Générateur de favicon** : [favicon.io](https://favicon.io)

---

## 💡 Astuces

### Ajouter un favicon (icône d'onglet)
1. Créez un favicon sur [favicon.io](https://favicon.io)
2. Placez `favicon.ico` dans le dossier `public/`
3. Next.js le détecte automatiquement

### Ajouter des images
1. Placez vos images dans `public/images/`
2. Utilisez-les avec : `<img src="/images/monimage.jpg" />`

### Ajouter des réseaux sociaux dans le footer
Ajoutez dans la fonction `Footer()` :
```tsx
<div className="flex gap-3 mt-4">
  <a href="https://wa.me/2290161920798" className="hover:text-white">WhatsApp</a>
  <a href="https://instagram.com/votrepseudo" className="hover:text-white">Instagram</a>
  <a href="https://tiktok.com/@votrepseudo" className="hover:text-white">TikTok</a>
</div>
```

---

## 🆘 Besoin d'aide ?

Si vous bloquez sur une modification :
1. Vérifiez la syntaxe (pas de virgule manquante, guillemets fermés)
2. Testez avec `npm run dev` pour voir les erreurs
3. Consultez la documentation : [nextjs.org/docs](https://nextjs.org/docs)

---

**🎉 Votre site sera maintenant 100% personnalisé à votre image !**
