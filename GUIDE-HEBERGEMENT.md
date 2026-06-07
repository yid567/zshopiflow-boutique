# 🚀 Guide d'Hébergement - Comment mettre votre site en ligne

Ce guide vous explique étape par étape comment héberger votre site gratuitement ou à faible coût.

---

## 🎯 Option 1 : Vercel (GRATUIT - Recommandé)

**Vercel** est la meilleure option pour Next.js. C'est gratuit, rapide et simple.

### Étapes :

#### 1. Créer un compte GitHub
- Allez sur [github.com](https://github.com)
- Créez un compte gratuit
- Vérifiez votre email

#### 2. Installer Git sur votre ordinateur

**Windows :**
- Téléchargez Git depuis [git-scm.com](https://git-scm.com/download/win)
- Installez avec les options par défaut

**Mac :**
```bash
brew install git
```

**Linux :**
```bash
sudo apt-get install git
```

#### 3. Préparer votre projet

Ouvrez un terminal dans le dossier de votre projet :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Premier commit - Mon site e-commerce"

# Renommer la branche principale en main
git branch -M main
```

#### 4. Créer un dépôt GitHub

- Allez sur [github.com/new](https://github.com/new)
- Nom du dépôt : `mon-site-ecommerce`
- Laissez en **Public** ou **Privé**
- Ne cochez PAS "Initialize with README"
- Cliquez sur "Create repository"

#### 5. Connecter votre projet local à GitHub

```bash
# Remplacez VOTRE-NOM par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-NOM/mon-site-ecommerce.git

# Envoyer le code sur GitHub
git push -u origin main
```

#### 6. Déployer sur Vercel

- Allez sur [vercel.com](https://vercel.com)
- Cliquez sur "Sign Up" → Connectez-vous avec GitHub
- Autorisez Vercel à accéder à vos dépôts
- Cliquez sur "Add New Project"
- Sélectionnez votre dépôt `mon-site-ecommerce`
- Cliquez sur "Deploy"

**C'est tout !** Votre site sera en ligne en 2-3 minutes avec une URL comme :
```
https://mon-site-ecommerce.vercel.app
```

#### 7. Obtenir un nom de domaine personnalisé (optionnel)

**Domaine gratuit avec Vercel :**
- Votre site aura automatiquement une URL `.vercel.app`

**Acheter un domaine personnalisé (10-15€/an) :**
1. Achetez un domaine sur :
   - [Namecheap](https://namecheap.com)
   - [OVH](https://ovh.com)
   - [GoDaddy](https://godaddy.com)

2. Dans Vercel :
   - Allez dans votre projet
   - Cliquez sur "Settings" → "Domains"
   - Ajoutez votre domaine (ex: `monsite.com`)
   - Suivez les instructions DNS

---

## 🎯 Option 2 : Netlify (GRATUIT)

Alternative à Vercel, également gratuit.

### Étapes :

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte avec GitHub
3. Cliquez sur "Add new site" → "Import an existing project"
4. Sélectionnez votre dépôt GitHub
5. Configurez :
   - **Build command** : `npm run build`
   - **Publish directory** : `.next`
6. Cliquez sur "Deploy site"

---

## 🎯 Option 3 : Railway (Gratuit avec limites)

Bon pour les projets avec base de données.

### Étapes :

1. Allez sur [railway.app](https://railway.app)
2. Connectez-vous avec GitHub
3. Cliquez sur "New Project" → "Deploy from GitHub repo"
4. Sélectionnez votre dépôt
5. Railway détectera automatiquement Next.js
6. Cliquez sur "Deploy"

---

## 🎯 Option 4 : Hébergement classique (cPanel, Hostinger)

Si vous préférez un hébergement traditionnel.

### Étapes :

1. Achetez un hébergement (Hostinger, OVH, etc.)
2. Construisez votre site localement :
   ```bash
   npm run build
   ```
3. Exportez le site statique :
   ```bash
   npm run export
   ```
4. Uploadez le dossier `out` via FTP/cPanel

⚠️ **Attention** : Cette méthode perd les fonctionnalités serveur de Next.js.

---

## 💰 Comparaison des coûts

| Service | Gratuit | Domaine personnalisé | Recommandé pour |
|---------|---------|---------------------|-----------------|
| **Vercel** | ✅ Illimité | 10-15€/an | Next.js (meilleur choix) |
| **Netlify** | ✅ 100GB/mois | 10-15€/an | Sites statiques |
| **Railway** | ✅ 500h/mois | 10-15€/an | Avec base de données |
| **Hostinger** | ❌ 2-5€/mois | Inclus | Hébergement classique |

---

## 🔧 Après le déploiement

### 1. Vérifier que tout fonctionne
- Visitez votre URL
- Testez tous les liens
- Vérifiez les moyens de paiement

### 2. Mettre à jour le site
Quand vous modifiez le code :

```bash
# Sauvegarder les modifications
git add .
git commit -m "Mise à jour du site"
git push

# Vercel/Netlify redéploient automatiquement !
```

### 3. Ajouter Google Analytics (optionnel)
- Créez un compte sur [analytics.google.com](https://analytics.google.com)
- Ajoutez le code de suivi dans `src/app/layout.tsx`

### 4. Configurer HTTPS
- Vercel/Netlify : automatique ✅
- Autre hébergeur : installez un certificat SSL Let's Encrypt

---

## ❓ Problèmes fréquents

### Le site ne se déploie pas
```bash
# Vérifiez que tous les fichiers sont bien commités
git status
git add .
git commit -m "Fix"
git push
```

### Erreur de build
```bash
# Testez localement d'abord
npm run build
```

### Le site est lent
- Utilisez Vercel (CDN mondial intégré)
- Optimisez les images
- Activez la compression

---

## 🎉 Votre site est en ligne !

Une fois déployé, partagez votre URL :
- Sur vos réseaux sociaux
- Dans votre bio Instagram/TikTok
- Par WhatsApp à vos contacts
- Sur votre carte de visite

**Prochaine étape** : Personnalisez le site à votre nom → voir `GUIDE-PERSONNALISATION.md`
