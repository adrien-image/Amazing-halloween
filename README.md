# 🎃 Une soirée d'Halloween presque parfaite ? — une histoire interactive d'Halloween (version 2)

Site web interactif basé sur une histoire à choix multiples, générée depuis le fichier Markdown « Halloween version 2.md ». Chaque slide reprend le texte **tel quel** du Markdown et est illustrée par une image SVG cartoon cell-shaded générée pour l'occasion.

## ▶️ Jouer

Le site est déployé via **GitHub Pages** : https://adrien-image.github.io/Amazing-halloween/

## 📖 Structure de l'histoire

87 slides, 7 pages à choix, **8 fins différentes** (embranchements A / A.1 / A.1.1 / A.1.2 / A.2 / A.2.1 / A.2.2 et B / B.1 / B.1.1 / B.1.2 / B.2 / B.2.1 / B.2.2).

## 🛠 Technique

Site statique (HTML/CSS/JS vanilla, aucune dépendance) :

- `index.html` — page principale (CSP stricte, favicon inline, métadonnées OG, police **Open Sans**)
- `style.css` — thème Halloween (brume, citrouille, ambiance gothique)
- `story.js` — arbre de l'histoire (slides, textes verbatim du .md, choix), chargeable aussi sous Node pour les tests
- `app.js` — moteur de navigation (historique, retour, clavier ←/→, préchargement des images). Boutons de choix distincts du bouton « Suite » ; les fins affichent un badge « FIN ! » et un bouton « ↺ Revenir au début ». Aucun titre par slide.
- `assets/img/slide-NNN.svg` — une illustration SVG cartoon cell-shaded par slide (87 images, style cohérent : aplats, contours épais, palette Halloween fixe)
- `prompts.md` — un prompt de génération d'image (style identique pour toutes) par slide, pour régénérer les images avec un outil d'IA générative
- `tests/` — tests de validation sans dépendance (`node tests/run_all.js` ou `npm test`)

Sécurité : Content-Security-Policy stricte dans `index.html` (`default-src 'self'`, seules les polices Google Fonts sont autorisées en externe). Aucun script inline, aucun gestionnaire d'événement inline.

## ✅ Tests

```sh
npm test    # ou : node tests/run_all.js
```

Valide la structure de l'histoire (nœud `start`, nœuds tous atteignables, choix et images valides, fins rejouables) et les références statiques de `index.html`.

## 🚀 Déploiement GitHub Pages

`.github/workflows/deploy-pages.yml` publie automatiquement le site sur la branche `gh-pages` (GitHub Pages) **à chaque push sur `main`**.
