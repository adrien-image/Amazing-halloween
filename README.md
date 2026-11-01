# 🎃 Une soirée d'Halloween presque parfaite ? — une histoire interactive d'Halloween

Site web interactif basé sur une histoire à choix multiples (86 pages, 8 fins). Le texte de chaque slide est injecté tel quel depuis le fichier Markdown source. Chaque slide est illustrée par une image générée spécialement, dans un style cartoon cell-shaded cohérent.

## ▶️ Jouer

Le site est déployé via **GitHub Pages** : https://adrien-image.github.io/Amazing-halloween/

## 📖 Structure de l'histoire

- **Choix A** (parler au vieil homme) → A.1 (haleine à l'ail) ou A.2 (le pacte)
  - A.1 → A.1.1 (fausse alerte téléphone) ou A.1.2 (boire le café)
  - A.2 → A.2.1 (goutte de sang) ou A.2.2 (trace d'ail au couteau)
- **Choix B** (poser le verre discrètement) → B.1 (montrer le cadre) ou B.2 (ouvrir la porte)
  - B.1 → B.1.1 (parler de son grand amour) ou B.1.2 (partie d'échecs)
  - B.2 → B.2.1 (lettre des USA) ou B.2.2 (lettre du notaire)

Soit **8 fins différentes**. À la fin, un bouton permet de revenir au début.

## 🛠 Technique

Site statique (HTML/CSS/JS vanilla, aucune dépendance) :

- `index.html` — page principale, police **Open Sans** (Google Fonts)
- `style.css` — thème Halloween
- `story.json` — arbre de l'histoire généré depuis le Markdown (`scripts/parse_story.py`)
- `app.js` — moteur de navigation (boutons de choix vs bouton « Suite », bouton « Revenir au début » en fin)
- `assets/img/page-XX.jpg` — une image générée par slide (86 images, prompts cohérents dans `scripts/prompts.json`)

## 🚀 Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` se déclenche **à chaque push sur `main`** et publie automatiquement le site sur la branche `gh-pages` (GitHub Pages).
