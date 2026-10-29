# 🎃 Une soirée d'Halloween presque parfaite ? — une histoire interactive d'Halloween

Site web interactif basé sur une histoire à choix multiples. Chaque slide est illustrée par une image générée spécialement pour le texte associé.

## ▶️ Jouer

Le site est déployé via **GitHub Pages** : https://adrien-image.github.io/Amazing-halloween/

## 📖 Structure de l'histoire

L'histoire propose plusieurs embranchements :

- **Choix A** (parler au vieil homme) → A.1 (souffler son haleine à l'ail) ou A.2 (le pacte)
  - A.1 → A.1.1 (la fausse alerte téléphone) ou A.1.2 (boire le café)
  - A.2 → A.2.1 (goutte de sang dans l'omelette) ou A.2.2 (trace d'ail au couteau)
- **Choix B** (poser le verre discrètement, le cadre tombe) → B.1 (montrer le cadre) ou B.2 (chercher à ouvrir la porte)
  - B.1 → B.1.1 (parler de son grand amour, l'alliance) ou B.1.2 (la partie d'échecs)
  - B.2 → B.2.1 (lettre des USA) ou B.2.2 (lettre du notaire, qui mène aussi à la fin du reflet manquant)

Soit **8 fins différentes**.

## 🛠 Technique

Site statique (HTML/CSS/JS vanilla, aucune dépendance) :

- `index.html` — page principale (CSP stricte en meta, favicon inline, métadonnées OG)
- `style.css` — thème Halloween (brume, citrouille, ambiance gothique)
- `story.js` — arbre de l'histoire (slides, textes, choix), chargeable aussi sous Node pour les tests
- `app.js` — moteur de navigation (historique, retour, clavier ←/→, préchargement des images, gestion d'erreurs)
- `assets/img/` — une image générée par slide (21 slides, 21 images)
- `tests/` — tests de validation sans dépendance (`node tests/run_all.js` ou `npm test`)

Sécurité : une Content-Security-Policy stricte est déclarée dans `index.html` (`default-src 'self'`, scripts et feuilles de style locaux uniquement, seules les polices Google Fonts sont autorisées en externe). Aucun script inline, aucun gestionnaire d'événement inline.

## ✅ Tests

```sh
npm test    # ou : node tests/run_all.js
```

## 🖨️ Export PDF des slides

```sh
npm run pdf    # génère amazing-halloween-slides.pdf à la racine
```

Le PDF reprend toutes les slides (illustration, texte, choix, fins). Un workflow GitHub Actions (`.github/workflows/pdf-artifact.yml`) le régénère à chaque push sur `main` touchant l'histoire ou les images, et le publie en **artifact téléchargeable** (`amazing-halloween-slides`, onglet *Actions* → run → *Artifacts*).

Valide la structure de l'histoire (nœud `start`, nœuds tous atteignables, choix et images valides, fins rejouables) et les références statiques de `index.html` (CSP présente, fichiers référencés existants, image initiale présente, aucun script/handler inline).

## 🚀 Déploiement GitHub Pages

Le déploiement se fait depuis la branche `main`, dossier racine (`/`), via *Settings → Pages → Deploy from a branch*.
