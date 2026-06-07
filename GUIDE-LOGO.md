# 🎨 Comment intégrer votre logo depuis l'autre projet

## ✅ Ce qui a été fait

J'ai créé un **composant Logo professionnel** dans `src/components/Logo.tsx` qui est maintenant utilisé dans :
- La **navbar** (en haut du site)
- Le **footer** (en bas du site)

Le logo actuel est un design SVG avec :
- La lettre "Z" stylisée en blanc
- Gradient violet → orange
- Petit sac shopping en accent
- Coins arrondis modernes

---

## 🔧 Comment remplacer par votre logo

### Option 1 : Si votre logo est un composant React

**Étape 1** : Copiez le code de votre composant Logo

**Étape 2** : Remplacez le contenu de `src/components/Logo.tsx` par votre composant

**Exemple** :
```tsx
// src/components/Logo.tsx
export default function Logo({ size = 40, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" {...props}>
      {/* Votre code SVG ici */}
    </svg>
  );
}
```

**Étape 3** : Le logo sera automatiquement mis à jour partout sur le site !

---

### Option 2 : Si votre logo est une image (PNG/JPG)

**Étape 1** : Placez votre image dans le dossier `public/logo.png`

**Étape 2** : Modifiez `src/components/Logo.tsx` :

```tsx
export default function Logo({ size = 40, ...props }) {
  return (
    <img
      src="/logo.png"
      alt="Zshopiflow"
      width={size}
      height={size}
      {...props}
    />
  );
}
```

---

### Option 3 : Si votre logo est en SVG brut

**Étape 1** : Ouvrez votre fichier SVG dans un éditeur de texte

**Étape 2** : Copiez le contenu entre `<svg>...</svg>`

**Étape 3** : Collez-le dans `src/components/Logo.tsx` :

```tsx
export default function Logo({ size = 40, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Collez votre SVG ici */}
      <path d="..." fill="..." />
      <circle cx="..." cy="..." r="..." fill="..." />
      {/* etc. */}
    </svg>
  );
}
```

---

### Option 4 : Partager le composant depuis l'autre projet

Si vous avez un projet séparé avec le composant Logo :

**Étape 1** : Dans l'autre projet, trouvez le fichier du composant Logo
- Généralement : `src/components/Logo.tsx` ou `components/Logo.jsx`

**Étape 2** : Copiez **tout le contenu** du fichier

**Étape 3** : Collez-le dans `src/components/Logo.tsx` de ce projet

**Étape 4** : Ajustez les imports si nécessaire :
- Remplacez `from "@/..."` par les bons chemins
- Supprimez les imports inutilisés

---

## 🎯 Utilisation du composant Logo

Le composant accepte plusieurs **props** :

### `size` (nombre)
Taille du logo en pixels. Défaut : 40
```tsx
<Logo size={36} />
<Logo size={50} />
<Logo size={100} />
```

### `variant` ("full" | "icon" | "text")
- `"full"` : Logo + texte (défaut)
- `"icon"` : Logo seul (utilisé dans navbar/footer)
- `"text"` : Texte seul

```tsx
<Logo variant="icon" />   {/* Icône seule */}
<Logo variant="text" />   {/* Texte seul */}
<Logo variant="full" />   {/* Icône + texte */}
```

### `showText` (boolean)
Afficher le texte ou non (pour variant="full")
```tsx
<Logo showText={false} />
```

### `className` (string)
Classes CSS personnalisées
```tsx
<Logo className="hover:scale-110 transition" />
```

---

## 📍 Où le logo est utilisé

Le composant Logo est importé et utilisé dans `src/app/page.tsx` :

1. **Navbar** (ligne ~264) :
   ```tsx
   <Logo size={36} variant="icon" />
   ```

2. **Footer** (ligne ~1448) :
   ```tsx
   <Logo size={36} variant="icon" />
   ```

Vous pouvez facilement l'ajouter ailleurs :
```tsx
import Logo from "@/components/Logo";

// Dans votre composant :
<Logo size={60} variant="full" />
```

---

## 🎨 Personnaliser les couleurs du logo actuel

Si vous gardez le logo actuel mais voulez changer les couleurs, modifiez `src/components/Logo.tsx` :

**Couleurs actuelles** :
- Violet : `#7c3aed`
- Violet clair : `#a855f7`
- Orange : `#f97316`

**Pour changer** :
```tsx
<linearGradient id="zGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" stopColor="#VOTRE_COULEUR_1" />
  <stop offset="50%" stopColor="#VOTRE_COULEUR_2" />
  <stop offset="100%" stopColor="#VOTRE_COULEUR_3" />
</linearGradient>
```

---

## 💡 Besoin d'aide ?

Si vous voulez que j'intègre votre logo spécifique :

1. **Partagez le code du composant Logo** de l'autre projet
2. **Ou envoyez-moi l'image du logo** (PNG/SVG)
3. **Ou décrivez-moi le logo** (couleurs, forme, éléments)

Je pourrai alors l'intégrer directement dans ce projet.

---

## 🚀 Après modification

N'oubliez pas de :
```bash
npm run build
```

Pour vérifier que tout fonctionne après avoir modifié le logo.
