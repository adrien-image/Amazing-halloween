# Rapport d'incohérences texte ↔ images et images ↔ images

Analyse de `story.js` (20 slides) et des 14 images de `assets/img/`.

Légende de priorité : 🔴 incohérence majeure (l'image contredit le texte) · 🟠 incohérence notable · 🟡 détail.

---

## 0. Vue d'ensemble : quelle image sert à quelle slide

| Image | Slides qui l'utilisent | Verdict |
|---|---|---|
| `slide-00-intro.jpg` | `start` | OK, quelques retouches |
| `slide-01-party.jpg` | `party` | 🔴 aucun déguisement, aucun vampire |
| `slide-02-doorway.jpg` | `doorway` | OK, détails |
| `slide-03-salon.jpg` | `salon` | 🟠 pendule illisible, scène décalée |
| `slide-04-hallway.jpg` | `hallway` | 🔴 rez-de-chaussée au lieu de l'étage |
| `slide-05-room.jpg` | `room`, `choixB` | 🔴 réutilisée pour `choixB` sans cadre photo |
| `slide-06-henri.jpg` | `choixA`, `a22` | 🔴 réutilisée pour `a22` (aucune omelette/pain) |
| `slide-07-kitchen.jpg` | `a2` | 🟠 fours à bois dans des cuisinières à gaz |
| `slide-08-allergy.jpg` | `a21` | 🔴 ne montre pas l'allergie ; correspond à `a12` |
| `slide-09-yvonne.jpg` | `a1` | 🟠 bonne scène, mauvaises photos murales |
| `slide-10-feast.jpg` | `a12` | 🔴 vin rouge au lieu de café, Yvonne jeune |
| `slide-11-mirror.jpg` | `b1`, `b2` | 🔴 n'illustre ni `b1` ni `b2` ; correspond à `b1a_end` |
| `slide-12-letters.jpg` | `b1a`, `b21`, `b22` | 🔴 pas de timbre US, pas de lettre tapée, inadaptée à `b1a` |
| `slide-13-ending.jpg` | `b1a_end`, `a11` | 🔴 le vampire porte Minou, absent des deux textes |

6 images sont réutilisées sur 13 slides au total. Le README affirme « une image générée par slide (14 images) » alors qu'il y a 20 slides.

---

## 1. Incohérences entre images (fil rouge)

Ces points concernent plusieurs images à la fois. Il faut fixer une **fiche personnage / décor** et regénérer en conséquence.

### 1.1 Le héros (vampire)
| Image | Apparence |
|---|---|
| 00 | homme jeune/adulte, cheveux noirs gominés en pointe, col haut, cape noire, gilet + cravate |
| 01 | **absent** (aucun vampire sur la piste alors que « vous dansez ») |
| 10 | personnage central **âgé, cheveux gris**, cape à col rouge |
| 11 | homme de dos, **costume noir sans cape**, cheveux châtains courts |
| 13 | cheveux **châtains**, cape **à capuche** |

➡ Unifier : même visage, cheveux noirs gominés, cape noire à col haut (doublure rouge ou non, mais toujours la même), teint blafard, fausses canines visibles quand il sourit.

### 1.2 Henri (le vieil homme, 96 ans)
| Image | Apparence |
|---|---|
| 05 | mince, cheveux blancs, **chemise sombre décontractée** |
| 06 | plus massif, cheveux gris, **costume trois-pièces + cravate**, paraît ~70 ans |
| 10 | (homme de gauche ?) cheveux gris ébouriffés, veste ouverte, chemise sans cravate |

➡ Unifier : très âgé (96 ans), cheveux blancs, teint cadavérique, toujours « habillé de manière très chic » (costume sombre, cravate) comme l'exige `b1`.

### 1.3 Yvonne / Mme Morticia
| Image | Apparence |
|---|---|
| 02 | cheveux gris **en chignon**, **collier de perles**, robe bordeaux |
| 03 | cheveux blancs courts, robe gris foncé, **pas de perles** |
| 08 | cheveux gris bouclés, boucles d'oreilles, pendentif ovale |
| 09 | cheveux blancs ondulés **sans chignon**, **pendentif en forme de clé** |
| 10 | **jeune femme brune** en rouge (si c'est elle) |

➡ Unifier : chignon blanc, longue robe sombre, collier de perles **et** pendentif-clé (la clé est mentionnée dans `a1` et `a11` : la montrer dès la slide 02 crée une belle cohérence).

### 1.4 Minou (le chat)
Chat noir aux yeux jaunes : cohérent sur 01, 02, 03, 13. Mais **le médaillon** (au cœur de `party` : c'est grâce à lui qu'on reconnaît Mme Morticia) **n'apparaît sur aucune image**. ➡ Ajouter un collier avec petit médaillon doré sur 01, 02, 03 et 13.

### 1.5 La maison de Mme Morticia
- 02 : maison en **brique rouge**, perron à colonnes, marches, porte rouge.
- 13 : rue pavée, façade **enduite violette** sans perron ni marches.
- Intérieurs : papier peint orange fleuri (03), damassé rouge (04), orange uni (09), rouge-brun uni (08), rouge uni avec appliques (11). Acceptable pour des pièces différentes, mais l'**entrée** (04, 09, 11) devrait avoir le même papier peint, le même portemanteau, le même escalier.

### 1.6 La maison de la fête
- 00 : salon intime avec cheminée, citrouilles, ~8 invités assis.
- 01 : grande salle de danse aux murs nus, bougies, aucune décoration d'Halloween.
➡ Les deux images doivent représenter le même lieu (même cheminée, mêmes citrouilles, même éclairage).

### 1.7 Les photos du couple (motif récurrent)
- 03 : photos N&B de personnes diverses.
- 06 : photos de mariage sépia, style années 50 ✅ (référence à garder).
- 09 : portraits **couleur, modernes**, d'un jeune couple aux traits différents.
- 10 : portrait d'un vampire.
- 12 : photo de mariage **en couleur, format Polaroid**.
➡ Toujours le même couple Henri & Yvonne, en N&B/sépia, tenue de mariage pour la photo de 1952.

### 1.8 Les horloges
- 03 : chiffres illisibles (pseudo-lettres), heure ~19 h 25.
- 08 : affiche **~11 h 00** (et chiffres « 11 / 12 » déformés) alors que la scène se passe après 23 h 44.
- `b22` et `b1a_end` parlent d'une **pendule figée à 23 h 44** : aucune image ne la montre.
➡ Chiffres lisibles partout ; pendule à 23 h 44 dans la chambre d'Henri.

---

## 2. Rapport image par image

### 🖼 `slide-00-intro.jpg` — slide `start`
Texte : soirée d'Halloween chez des amis, déguisements, musique à fond, cocktails étranges, bonbons ; vous portez un costume de vampire (cape noire, dents pointues, teint blafard).

Constat : salon décoré, vampire au centre, fête calme.

Modifications :
- 🟠 Ajouter des **déguisements** aux autres invités (seule une invitée porte un masque citrouille ; les autres sont en tenue de ville).
- 🟡 Ajouter des **cocktails étranges** (verres fumants, couleurs vives) et un bol de **bonbons**.
- 🟡 Ambiance « musique à fond » : enceinte, gens qui dansent en arrière-plan.
- 🟡 Vampire : montrer les **dents pointues**, accentuer le teint blafard.
- 🟠 Cette image sert de **référence** pour le décor de la fête (cf. 1.6) et pour le héros (cf. 1.1).

### 🖼 `slide-01-party.jpg` — slide `party`
Texte : 23 h 30, piste bondée, invités éméchés, vous dansez, un chat apparaît, médaillon au nom de Mme Morticia, on voit la maison d'en face éclairée.

Constat : piste de danse, chat noir au centre.

Modifications :
- 🔴 **Aucun invité n'est déguisé** et il n'y a **aucune décoration d'Halloween** : ajouter costumes et citrouilles.
- 🔴 **Le héros vampire est absent** alors que « vous dansez » : l'ajouter (vu de dos ou en train de se pencher vers le chat).
- 🟠 Ajouter le **médaillon** au cou du chat.
- 🟠 Décor différent de l'image 00 : unifier (même maison).
- 🟡 Optionnel : par une fenêtre, la maison d'en face avec une lumière allumée.

### 🖼 `slide-02-doorway.jpg` — slide `doorway`
Texte : vous montez les marches du perron, une vieille dame au sourire chaleureux, longue robe sombre, collier de perles, cheveux blancs en chignon. Vous lui rapportez le chat.

Constat : très fidèle (chignon, perles, robe, perron, citrouilles).

Modifications :
- 🟡 Cheveux plutôt **gris** que blancs : passer au blanc.
- 🟡 Robe bordeaux/prune : plus sombre pour coller à « longue robe sombre » et aux autres images.
- 🟡 Ajouter le **médaillon** du chat et, discrètement, le **pendentif-clé** (cf. 1.3).
- 🟡 Optionnel : montrer le héros (bras tendus, cape) pour justifier la remise du chat ; aujourd'hui elle tient déjà Minou.

### 🖼 `slide-03-salon.jpg` — slide `salon`
Texte : papier peint défraîchi, meubles anciens, dizaines de photographies anciennes, Mme Morticia vous invite à vous asseoir près de la cheminée, elle prépare le café.

Constat : salon, cheminée, photos, Mme Morticia assise avec Minou, fauteuil vide.

Modifications :
- 🟠 **Pendule illisible** (pseudo-chiffres) : chiffres lisibles, heure ≈ 23 h 35-23 h 40.
- 🟠 Papier peint **éclatant**, pas « légèrement défraîchi » : ternir, taches, coins décollés.
- 🟡 Ajouter le **café** (cafetière, tasses) puisqu'elle « prépare le café ».
- 🟡 Photos murales : représenter **le même couple** (Henri & Yvonne) à différentes époques.
- 🟡 Yvonne : ajouter chignon et perles (cf. 1.3).

### 🖼 `slide-04-hallway.jpg` — slide `hallway`
Texte : vous montez avec un verre d'eau ; **à l'étage**, couloir **plongé dans la pénombre**, seule la lumière des lampadaires filtre par une fenêtre **au fond** ; trois portes **à gauche**, vous frappez à la troisième.

Constat : rez-de-chaussée, escalier qui **monte**, porte d'entrée vitrée au fond, éclairage chaud et vif.

Modifications :
- 🔴 Montrer le **couloir de l'étage** (vu depuis le haut de l'escalier), pas le hall d'entrée.
- 🔴 **Pénombre** : éclairage froid/bleuté de lampadaire entrant par une **fenêtre** au fond (pas une porte d'entrée lumineuse).
- 🔴 **Trois portes à gauche** bien lisibles (seules deux sont visibles).
- 🟠 Le **verre posé par terre** contient un liquide **brun** (café ?) et des taches au sol : supprimer ; le verre d'eau doit être **dans la main** du héros (premier plan, main avec manche de cape).

### 🖼 `slide-05-room.jpg` — slides `room` et `choixB`
Texte `room` : pièce froide, silhouette assise **face à la fenêtre, le dos tourné**, regarde la rue aux lampadaires, livre tombé par terre.
Texte `choixB` : un **cadre photo** glisse de la **table de chevet** ; photo N&B d'un couple de mariés ; inscription « Yvonne et Henri. Pour toujours. 31 octobre 1952. »

Constat : vieil homme **de profil**, fauteuil, lampadaire, livre au sol, verre d'eau déjà posé sur une commode.

Modifications pour `room` :
- 🔴 Henri doit être **de dos** (silhouette, dossier du fauteuil), pas de profil.
- 🟠 **Retirer le verre d'eau** de la commode : le héros l'a encore à la main.
- 🟠 Ajouter une **table de chevet** (et un lit) : c'est une chambre et `choixB` en a besoin.
- 🟠 Ambiance « froide » : l'image est très chaude/orangée.
- 🟠 Tenue d'Henri : chemise décontractée → costume chic (cf. 1.2, `b1`).
- 🟡 Mettre déjà en place les éléments utilisés plus tard dans la même pièce : **photos aux murs, bibliothèque poussiéreuse, bureau, cheminée avec pendule** (`b2`, `b22`). Aujourd'hui les murs sont nus.
- 🟡 Objet sur la commode (moulin à café ?) : à remplacer par un objet neutre ou par le cadre photo.

Modifications pour `choixB` :
- 🔴 **Nouvelle image** : le cadre tombé au sol (ou dans les mains du héros), photo **N&B** de mariés, inscription manuscrite au dos ; porte qui claque en arrière-plan.

### 🖼 `slide-06-henri.jpg` — slides `choixA` et `a22`
Texte `choixA` : il tourne la tête, sourire, la porte claque, il se lève, ses pieds ne touchent pas tout à fait le sol, il réclame de l'ail.
Texte `a22` : Henri goûte le pain, son sourire disparaît, il se lève, colère froide.

Constat : gros plan d'Henri en costume, photos de mariage sépia en arrière-plan.

Modifications pour `choixA` :
- 🟠 Expression trop neutre/maussade : **large sourire inquiétant** (« C'est signe que j'ai faim ! »).
- 🟠 Décor incompatible avec 05 (pas de fenêtre, porte décorée de photos) : harmoniser avec la chambre.
- 🟡 Optionnel : plan plus large montrant ses **pieds flottant** au-dessus du sol.
- 🟡 Âge apparent (~70 ans) : vieillir à 96 ans.
- ✅ Les photos de mariage sépia sont la **bonne référence** pour tout le motif « photos du couple ».

Modifications pour `a22` :
- 🔴 **Nouvelle image** : Henri devant le plateau (omelette + pain grillé + couteau), visage fermé, ou le héros seul un an plus tard devant un pot d'ail confit et un téléphone affichant « Un pacte est un pacte ».

### 🖼 `slide-07-kitchen.jpg` — slide `a2`
Texte : pacte avec Henri, marques de morsure sur la peau, puis cuisine vide, réfrigérateur avec **légumes fatigués, restes, gousses d'ail**, omelette aux restes.

Constat : cuisine, frigo ouvert, ail visible, omelette sur un plat.

Modifications :
- 🟠 Les **fours des cuisinières à gaz contiennent des feux de bois** : retirer les flammes.
- 🟠 Frigo moderne inox, hotte moderne : incompatibles avec « maison d'un autre temps » ; mobilier ancien.
- 🟡 Légumes **frais et colorés** : les rendre « fatigués » + ajouter des restes (boîtes, assiettes couvertes).
- 🟡 **Trois tasses de café** visibles (2 sur le plan de travail, 1 sur la table) alors que la cuisine est censée être vide : en garder une seule ou aucune (sinon confusion avec `a12`).
- 🟡 Ajouter **pain + couteau** (choix `a22`).
- 🟡 Optionnel : main du héros avec deux petits points noirs (marque de morsure).

### 🖼 `slide-08-allergy.jpg` — slide `a21`
Texte : Henri mange l'omelette **à l'étage**, son visage **gonfle**, yeux rouges, **secours (15)**, Mme Morticia introuvable (morte depuis six ans), puis dans la cuisine **une tasse** fume encore à côté d'**un petit mot** signé Yvonne.

Constat : Yvonne souriante, **trois tasses** de café, une omelette, ombre d'homme au mur, horloge à ~11 h 00.

Modifications :
- 🔴 L'image **ne montre pas la scène d'allergie** (ni Henri gonflé, ni secouristes, ni mot).
- 🔴 Yvonne y est **présente et souriante** alors que tout le twist de `a21` repose sur son **absence** (elle est morte).
- 🔴 **Horloge à ~11 h 00** : incompatible (on est après 23 h 44, plutôt ~0 h 30) ; chiffres déformés.
- 🔴 **Trois tasses** : c'est le détail de `a12` (« trois tasses fumantes. Trois ? »).
- ➡ **Recommandation** : réaffecter cette image à `a12` (après avoir corrigé l'horloge, l'omelette à retirer, et ajouté le héros dans un fauteuil). Pour `a21`, nouvelle image : cuisine vide, **une seule tasse** fumante + **mot manuscrit** signé Yvonne, gyrophares des secours à la fenêtre.

### 🖼 `slide-09-yvonne.jpg` — slide `a1`
Texte : vous dévalez l'escalier ; Mme Morticia se tient dans l'**embrasure du salon** ; porte fermée à clé, **clé autour de son cou**, elle saisit le pendentif.

Constat : bonne scène (vieille dame dans une embrasure, escalier derrière, pendentif-clé) ✅.

Modifications :
- 🔴 **Photos murales** : portraits **couleur et modernes** d'un jeune couple aux traits différents d'Henri/Yvonne → remplacer par photos sépia du couple (cf. 06).
- 🟠 Coiffure sans chignon, pas de perles (cf. 1.3).
- 🟡 Elle devrait **saisir** le pendentif (geste du texte) et avoir un sourire plus inquiétant.
- 🟡 La porte d'entrée fermée devrait être visible (ou le héros en premier plan devant elle).

### 🖼 `slide-10-feast.jpg` — slide `a12`
Texte : Mme Morticia vous installe dans un **fauteuil ancien**, revient avec **trois tasses de café** fumantes ; vous somnolez ; Henri apparaît, s'accroupit devant vous, **canines** à la lumière des bougies ; final : **photo** de vous entre Henri et Yvonne.

Constat : dîner à table, **verres de vin rouge**, assiettes, un vieil homme, un vampire âgé au centre, une **jeune femme brune**, portrait de vampire au mur.

Modifications :
- 🔴 **Vin rouge (4 verres pour 3 personnes) + repas** → **trois tasses de café**, pas de repas.
- 🔴 **Yvonne représentée jeune et brune** → vieille dame (cf. 1.3).
- 🔴 Le **vampire au centre est âgé** : soit c'est le héros (doit être jeune, cf. 1.1), soit c'est Henri (alors il fait double emploi avec l'homme de gauche). Clarifier : héros dans un fauteuil, Yvonne en face, Henri accroupi devant lui, canines visibles.
- 🟠 Table de salle à manger au lieu de **fauteuil** au salon.
- 🟡 Le portrait au mur pourrait devenir la **photo finale** (héros entre Henri et Yvonne, « 31 octobre 2026 ») : bon clin d'œil.
- ➡ Alternative : utiliser l'image 08 (corrigée) pour `a12` et regénérer celle-ci pour le moment « Henri s'accroupit » ou la photo finale.

### 🖼 `slide-11-mirror.jpg` — slides `b1` et `b2`
Texte `b1` : face à vous, un homme très âgé, visage triste, **cadavérique, presque transparent**, très chic.
Texte `b2` : vous allumez la lumière ; chambre avec meubles anciens, rideaux, bibliothèque, **dizaines de photos du couple** ; **coupe-papier** ; dans le **reflet de la vitre**, Henri debout derrière vous alors qu'il est assis ; **lettres sur la table**.

Constat : grand miroir doré reflétant un **hall d'entrée** et un homme en costume noir **de dos**, sans cape.

Modifications :
- 🔴 N'illustre **ni `b1`** (pas de face-à-face, pas d'Henri cadavérique) **ni `b2`** (pas de chambre éclairée, pas de photos, pas de coupe-papier, reflet dans une vitre et non dans un miroir).
- 🔴 Le personnage reflété n'est ni Henri (cheveux blancs) ni le héros (pas de cape) ; un reflet **de dos** n'a pas de sens si la personne regarde le miroir.
- ➡ **Recommandation** : réaffecter cette image à **`b1a_end`** (« le miroir de l'entrée ») après correction : reflet **de face** du héros en vampire + Mme Morticia, et **espace vide** là où Henri devrait être.
- ➡ Nouvelles images pour `b1` (Henri translucide face au héros, porte coincée) et `b2` (chambre éclairée couverte de photos, coupe-papier, silhouette d'Henri dans le reflet de la fenêtre, lettres sur la table).

### 🖼 `slide-12-letters.jpg` — slides `b1a`, `b21` et `b22`
Texte `b1a` : Henri fixe le **cadre** et parle d'Yvonne ; aucune lettre.
Texte `b21` : lettre **récente, manuscrite, timbrée des USA** (Los Angeles), signée Élise.
Texte `b22` : lettre **ancienne, tapée à la machine**, du notaire **Maître Delorme**, « Succession de Monsieur Henri Morticia », 14 novembre 1986.

Constat : lettres manuscrites avec **cachets de cire**, deux photos **couleur** façon Polaroid (mariage, femme qui rit), encrier, stylos-plumes.

Modifications :
- 🔴 Aucune lettre **tapée à la machine** ni en-tête de notaire (`b22`).
- 🔴 Aucun **timbre américain** / enveloppe « par avion » (`b21`) ; les cachets de cire font XIXᵉ siècle, pas « lettre récente ».
- 🟠 Photos **en couleur** et format Polaroid : passer en N&B/sépia 1952 (cf. 1.7, `choixB` dit « en noir et blanc »).
- 🔴 Inadaptée à `b1a` : nouvelle image d'Henri tenant le **cadre**, visage triste, porte qui s'ouvre seule.
- ➡ Idéalement deux images distinctes : une pour `b21` (enveloppe airmail, timbres USA, tampon « Los Angeles », écriture jeune) et une pour `b22` (lettre dactylographiée, en-tête « Maître Delorme — Notaire », pendule figée à **23 h 44** en arrière-plan).

### 🖼 `slide-13-ending.jpg` — slides `b1a_end` et `a11`
Texte `b1a_end` : miroir de l'entrée, reflet manquant d'Henri, vous partez dans la nuit, **sans le chat**.
Texte `a11` : vous arrachez la clé, fuyez en **courant** jusqu'à la maison de vos amis, sans regarder derrière vous ; le lendemain, morsure au cou et carte signée.

Constat : le vampire **marche calmement** dans une rue pavée en **portant Minou**, citrouilles, pleine lune.

Modifications :
- 🔴 **Minou dans les bras** : absent des deux textes (il ne quitte la maison avec vous que dans `b21`).
- 🔴 `a11` : le héros devrait **courir** (fuite paniquée), porte ouverte derrière lui, éventuellement Mme Morticia sur le seuil.
- 🟠 Façade **violette sans perron** ≠ maison en brique à perron de l'image 02 (cf. 1.5).
- 🟠 Héros aux cheveux châtains et cape à capuche (cf. 1.1).
- ➡ **Recommandation** : cette image (corrigée côté maison) convient parfaitement à **`b21`** (« descendez l'escalier avec Minou dans les bras ») ou à la transition `party → doorway` (traverser la rue avec le chat). Pour `a11` et `b1a_end`, nouvelles images (cf. 11 pour `b1a_end`).

---

## 3. Réaffectation proposée et images à créer

| Slide | Image actuelle | Proposition |
|---|---|---|
| `start` | 00 | 00 (retouchée) |
| `party` | 01 | 01 (regénérée : costumes, vampire, médaillon) |
| `doorway` | 02 | 02 (retouches mineures) |
| `salon` | 03 | 03 (pendule, papier défraîchi) |
| `hallway` | 04 | 04 (regénérée : étage, pénombre, 3 portes) |
| `room` | 05 | 05 (Henri de dos, sans verre, table de chevet) |
| `choixA` | 06 | 06 (sourire, décor de la chambre) |
| `choixB` | 05 | **nouvelle** : cadre photo tombé |
| `b1` | 11 | **nouvelle** : Henri translucide face au héros |
| `b1a` | 12 | **nouvelle** : Henri tenant le cadre |
| `b1a_end` | 13 | **11** (corrigée : reflet de face, Henri absent) |
| `b2` | 11 | **nouvelle** : chambre éclairée, photos, coupe-papier, reflet |
| `b21` | 12 | **13** (maison harmonisée) ou 12 corrigée (timbres USA) |
| `b22` | 12 | 12 corrigée (lettre de notaire tapée, pendule 23 h 44) |
| `a1` | 09 | 09 (photos murales) |
| `a11` | 13 | **nouvelle** : fuite en courant, sans chat |
| `a12` | 10 | **08** (horloge corrigée, héros ajouté) ou 10 regénérée |
| `a2` | 07 | 07 (fours, frigo ancien, une tasse max) |
| `a21` | 08 | **nouvelle** : cuisine vide, une tasse + mot d'Yvonne |
| `a22` | 06 | **nouvelle** : Henri et le plateau omelette/pain |

Soit environ **8 nouvelles images** pour avoir une image dédiée par slide (20), et mettre à jour le README (« 14 images »).

---

## 4. Incohérences internes au texte (à corriger avant de regénérer les images)

Elles ne sont pas « texte ↔ image » mais conditionnent ce qu'il faut dessiner.

1. **Heure** : `party` dit qu'il est **23 h 30** quand le chat apparaît ; `salon`, après la traversée de la rue et l'accueil, dit « il est **presque 23 h 30** ». Mettre « près de 23 h 40 ».
2. **Date du mariage** : `choixB` → **31 octobre 1952** ; `b2` → **31 octobre 1932**. Henri a 96 ans en 2026, donc né en 1930 : 1932 est impossible. Mettre 1952 partout.
3. **Nombre d'étages** : `a1` « dévalez les **deux étages** » alors que la maison n'a qu'un étage (`salon`, `hallway`). Mettre « l'escalier ».
4. **Fin `b1a_end` atteinte via `b1a`** : elle évoque « un homme **déclaré mort depuis quarante ans**, une **pendule figée à 23 h 44** » et « le retour de **sa fille** », informations révélées seulement dans `b22` (notaire, pendule) et `b21` (fille). Par le chemin `b1 → b1a → b1a_end`, le joueur ne les connaît pas. Rendre ce paragraphe conditionnel ou neutre.
5. **Henri « derrière vous » dans le miroir** (`b1a_end`) alors qu'il est resté dans sa chambre : préciser qu'il vous a raccompagné, ou que vous « sentez » sa présence.
6. **Genre du héros** : écriture inclusive au début (« invité·e », « Intrigué·e ») puis masculin (« effrayé », « seul », « certain », « Monsieur », « Il me rappelle… »). Choisir une convention ; les images montrent un homme.
7. **`a2`** : « vous n'êtes qu'un **inconnu** » alors qu'Henri vient de vous reconnaître comme le vampire de la fête des voisins (`choixA`). Mineur.
8. **Minou** : présenté comme le chat de Mme Morticia (`doorway`, médaillon) puis « ce chat **lui** appartient » (à Élise) dans `b21`, et dans `b21` vous **quittez** la maison avec lui en promettant de le « ramener chez lui » l'an prochain, alors que vous êtes déjà chez lui.
