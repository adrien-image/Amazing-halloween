# 🎃 Une soirée d'Halloween spéciale — une histoire interactive d'Halloween

Site web interactif basé sur une histoire à choix multiples. Chaque slide est illustrée par une image générée spécialement pour le texte associé.

## ▶️ Jouer

Le site est déployé via **GitHub Pages** : https://adrien-image.github.io/Amazing-halloween/

## 📖 Structure de l'histoire

L'histoire propose plusieurs embranchements :

- **Choix A** (parler au vieil homme) → A.1 (fuir) ou A.2 (le marché)
  - A.1 → A.1.1 (la fausse alerte téléphone) ou A.1.2 (boire le café)
  - A.2 → A.2.1 (omelette au sang) ou A.2.2 (trace d'ail au couteau)
- **Choix B** (poser le verre discrètement) → B.1 (montrer le cadre) ou B.2 (ouvrir la porte)
  - B.2 → B.2.1 (lettre des USA) ou B.2.2 (lettre du notaire)

Soit **6 fins différentes**.

## 🛠 Technique

Site statique (HTML/CSS/JS vanilla, aucune dépendance) :

- `index.html` — page principale
- `style.css` — thème Halloween (brume, citrouille, ambiance gothique)
- `story.js` — arbre de l'histoire (slides, textes, choix)
- `app.js` — moteur de navigation (historique, retour, clavier ←/→)
- `assets/img/` — une image générée par slide (14 images)

## 🚀 Déploiement GitHub Pages

Le déploiement se fait depuis la branche `main`, dossier racine (`/`), via *Settings → Pages → Deploy from a branch*.
