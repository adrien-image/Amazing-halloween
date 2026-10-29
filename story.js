const STORY = {
  start: {
    id: "start",
    title: "Une soirée d'Halloween spéciale",
    image: "assets/img/slide-00-title.jpg",
    text: `Nous sommes le 31 octobre. Ce soir, vous êtes invité·e à une grande soirée d'Halloween chez des amis.

Au programme : déguisements plus ou moins réussis, musique à fond, cocktails étranges et quelques bonbons.

Pour l'occasion, vous avez enfilé votre plus beau costume de vampire. Cape noire, dents pointues, teint blafard… Vous avez mis le paquet !`,
    choices: [
      { label: "▶ Commencer l'histoire", next: "party" }
    ]
  },

  party: {
    id: "party",
    title: "23 h 30 — Sur la piste de danse",
    image: "assets/img/slide-01-party.jpg",
    text: `La soirée bat son plein. Les conversations vont bon train, la piste est bondée et certains invités commencent déjà à regretter d'avoir mélangé autant de boissons.

Il est 23 h 30. Vous dansez tranquillement quand, soudain, un chat apparaît au beau milieu de la piste.

Intrigué·e, vous vous approchez pour le caresser. C'est alors que vous remarquez son petit médaillon : vous reconnaissez immédiatement le nom de sa propriétaire, Mme Morticia, votre voisine d'en face.

Tiens, que fait donc son chat ici ?

Vous jetez un coup d'œil à la maison d'en face. Une lumière est encore allumée. Vous décidez de ramener le petit fugueur chez lui.`,
    choices: [
      { label: "Traverser la rue et sonner chez Mme Morticia", next: "doorway" }
    ]
  },

  doorway: {
    id: "doorway",
    title: "Ding dong !",
    image: "assets/img/slide-02-doorway.jpg",
    text: `Vous traversez la rue, montez les quelques marches du perron et sonnez à la porte.

La porte s'ouvre. Sur le seuil se tient une vieille dame au sourire chaleureux, en longue robe sombre et collier de perles, cheveux blancs en chignon.

« Oh ! Bonsoir, mon petit ! Que me vaut cette visite à une heure pareille ? »

Vous lui expliquez que vous avez retrouvé son chat au milieu de la piste de danse. « Minou ! Mon petit Minou ! Merci, vous êtes adorable ! Entrez donc, je vous en prie. »

Vous franchissez le seuil.`,
    choices: [
      { label: "Entrer dans la maison", next: "salon" }
    ]
  },

  salon: {
    id: "salon",
    title: "Une maison d'un autre temps",
    image: "assets/img/slide-03-salon.jpg",
    text: `Le papier peint est légèrement défraîchi, les meubles semblent avoir traversé les siècles et des dizaines de photographies anciennes tapissent les murs.

Mme Morticia vous invite à vous asseoir près de la cheminée. « Vous prendrez bien un petit café ? »

Vous déclinez poliment — il est presque 23 h 30 — mais elle insiste : « Vous venez de me ramener la prunelle de mes yeux ! »

Vous finissez par accepter. Pendant qu'elle prépare le café, elle vous raconte comment Minou est entré dans sa vie…

Soudain, un bruit sourd retentit à l'étage. Boum !

« Ah, ça doit être mon mari. Il fait toujours ça quand il a soif ! Pourriez-vous lui monter un verre d'eau, mon petit ? Avec mon arthrose, les escaliers deviennent une épreuve… Oh, je pourrais y arriver, mais puisque j'ai un peu de chair fraîche à la maison, autant en profiter ! »

Elle vous adresse un clin d'œil amusé. « Troisième porte à gauche, en haut de l'escalier. »`,
    choices: [
      { label: "Monter à l'étage avec le verre d'eau", next: "hallway" }
    ]
  },

  hallway: {
    id: "hallway",
    title: "L'escalier qui grince",
    image: "assets/img/slide-04-hallway.jpg",
    text: `Vous remplissez un verre d'eau dans la cuisine et montez les marches, qui grincent sous vos pieds. À l'étage, le couloir est plongé dans la pénombre. Seule la lumière des lampadaires, filtrant à travers une fenêtre au fond, éclaire faiblement les lieux.

Première porte à gauche. Deuxième à gauche.

Troisième à gauche. Vous vous arrêtez devant une porte fermée et frappez doucement. Toc, toc, toc.

La porte s'entrouvre dans un grincement. Vous entrez.`,
    choices: [
      { label: "Entrer dans la chambre", next: "room" }
    ]
  },

  room: {
    id: "room",
    title: "La chambre du vieil homme",
    image: "assets/img/slide-05-room.jpg",
    text: `La pièce est froide et silencieuse. Face à la fenêtre, le dos tourné vers vous, une silhouette est assise dans un vieux fauteuil. Elle contemple la rue éclairée par les lampadaires.

Vous distinguez une respiration lente et régulière. Est-il endormi ?

Par terre, un livre vraisemblablement tombé du fauteuil.

Que faites-vous ?`,
    choices: [
      { label: "CHOIX A — Lui parler : « Heu… Monsieur ? C'est votre femme qui m'a demandé de vous monter un verre d'eau. Je vous le pose où ? »", next: "choixA" },
      { label: "CHOIX B — Poser discrètement le verre sur la table de chevet, à pas de loup", next: "choixB" }
    ]
  },

  choixA: {
    id: "choixA",
    title: "« Vous êtes le vampire de la fête des voisins ! »",
    image: "assets/img/slide-06-henri.jpg",
    text: `Le vieil homme tourne lentement la tête vers vous.

« Oh, merci beaucoup ! Oh, mais je vous reconnais ! Vous êtes le vampire de la fête de nos voisins ! Très réussi, ce costume ! Ça me rappelle le jour où j'ai rencontré Yvonne… Ma femme. Qu'est-ce qu'elle était belle ! Mon petit soleil… »

Soudain, la porte claque violemment derrière vous !

« Ah ! 23 h 44 ! C'est toujours à cette heure-là que le courant d'air se lève dans cette maison. »

Il se lève de son fauteuil… Étrange : dans la pénombre, c'est comme si ses pieds ne touchaient pas tout à fait le sol. Il vous adresse un large sourire.

« C'est signe que j'ai faim ! »

Il tourne lentement la tête vers vous. « Et justement… vous tombez à pic ! »

Il s'approche. « Vous savez ce qui est terrible quand on vieillit ? C'est qu'on finit par oublier le goût des bonnes choses. Mais vous… Vous sentez quelque chose de particulier. Dites-moi, mon petit vampire, vous avez mangé de l'ail ce soir ? »

Effectivement, vous avez mangé plusieurs tartines à l'ail. Le grand-père recule soudainement et pousse un cri de dégoût : « DE L'AIL ?! Dans MA maison ?! »

Il tourne en rond, visiblement contrarié… puis son monologue s'égare : l'ail, ce goût si particulier qu'il aimait tant, qu'Yvonne mettait toujours dans ses plats… Du jour au lendemain, au retour d'un long bivouac en Forêt-Noire, une indigestion juste à l'odeur. Plus jamais d'ail, au risque d'en mourir dans d'atroces souffrances.

« Mais à 96 ans… ne serait-ce pas le moment de se faire plaisir une dernière fois ? »

Que faites-vous ?`,
    choices: [
      { label: "CHOIX A.1 — Fuir : lui souffler votre haleine à l'ail en plein visage et foncer vers la porte", next: "a1" },
      { label: "CHOIX A.2 — Jouer le jeu : lui proposer un marché pour qu'il ouvre la porte", next: "a2" }
    ]
  },

  choixB: {
    id: "choixB",
    title: "Le cadre photo qui tombe",
    image: "assets/img/slide-05-room.jpg",
    text: `Un objet tombe soudainement par terre. Vous baissez les yeux : un vieux cadre photo vient de glisser du bord de la table de chevet.

Vous vous accroupissez pour le ramasser. La photographie, en noir et blanc, représente un jeune couple en tenue de mariage. L'homme ressemble étrangement au vieillard assis devant la fenêtre.

Au dos du cadre, une inscription manuscrite : « Yvonne et Henri. Pour toujours. 31 octobre 1952. »

BAM ! La porte claque violemment derrière vous !

Le vieil homme remue dans son fauteuil. « Qui va là ? » Sa voix est rauque, grave, agressive. « Qui que vous soyez, si je vous trouve, je vous tue ! »

Vous vous précipitez vers la porte… Elle est coincée ! Impossible de l'ouvrir.

Derrière vous, le vieil homme commence à se lever. Vous entendez ses pas sur le parquet. Puis plus rien. Un silence absolu.

Une voix s'élève alors, juste derrière vous : « Vous n'auriez pas dû entrer ici… »`,
    choices: [
      { label: "Vous retourner lentement et l'affronter", next: "b1" }
    ]
  },

  b1: {
    id: "b1",
    title: "« Vous n'auriez pas dû venir ici »",
    image: "assets/img/slide-11-mirror.jpg",
    text: `Face à vous, un homme âgé, très âgé… le visage triste, fermé, cadavérique, presque transparent. Habillé de manière très chic. Tout le malheur du monde semble lui peser sur le dos.

Vous lui expliquez alors que c'est sa femme qui vous a demandé de monter, que vous ne vouliez pas le réveiller, qu'en posant le verre le cadre est tombé et la porte a claqué.

Que faites-vous maintenant ?`,
    choices: [
      { label: "CHOIX B.1 — Lui montrer le cadre tombé : « Je suis désolé… Tenez, je crois que c'est à vous. »", next: "b1a" },
      { label: "CHOIX B.2 — Chercher de quoi ouvrir la porte coincée", next: "b2" }
    ]
  },

  b1a: {
    id: "b1a",
    title: "« Yvonne… Elle était si belle »",
    image: "assets/img/slide-12-letters.jpg",
    text: `Le vieil homme fixe le cadre. Son expression change : pendant un instant, sa mine sévère laisse place à une profonde tristesse.

« Yvonne… Elle était si belle, vous savez. Elle avait cette façon de rire… On aurait dit que rien de mauvais ne pouvait arriver tant qu'elle était là. Et maintenant, il ne me reste que ça. Des souvenirs et des photographies. »

Il relève les yeux vers vous. « Vous lui ressemblez un peu, vous savez. Pas physiquement, non… Mais vous avez eu la gentillesse de ramasser ce cadre. »

« Vous savez, je lui avais promis que nous resterions ensemble pour toujours. » Il tourne lentement la tête vers vous. « Et je tiens toujours mes promesses. »

Un silence pesant s'installe. Puis la porte s'ouvre toute seule avec un petit clic…`,
    choices: [
      { label: "Quitter la chambre et redescendre retrouver Mme Morticia", next: "b1a_end" }
    ]
  },

  b1a_end: {
    id: "b1a_end",
    title: "Le reflet manquant",
    image: "assets/img/slide-13-ending.jpg",
    text: `Vous descendez l'escalier et retrouvez Mme Morticia, qui vous accueille avec un sourire chaleureux : « Alors, vous avez rencontré mon mari ? J'espère qu'il ne vous a pas trop effrayé ! »

En passant devant le miroir de l'entrée, vous vous arrêtez un instant. Vous distinguez votre propre reflet, celui de Mme Morticia… mais l'endroit où devrait apparaître Henri, derrière vous, est vide. Le miroir ne montre plus que le couloir désert.

Dehors, il respire profondément et se persuade que la fatigue lui joue des tours. Un homme déclaré mort depuis quarante ans, une pendule figée à 23 h 44 et un reflet manquant… ce ne sont peut-être que des coïncidences.

Il s'éloigne dans la nuit, avec le sentiment étrange d'avoir partagé un petit moment avec un homme qui attend toujours le retour de sa fille.`,
    ending: "FIN — Une visite inoubliable",
    choices: [
      { label: "↺ Rejouer l'histoire", next: "start" }
    ]
  },

  b2: {
    id: "b2",
    title: "Allumer la lumière",
    image: "assets/img/slide-11-mirror.jpg",
    text: `Vous désignez la porte derrière vous : « La porte semble coincée. Il faudrait que je trouve quelque chose pour l'ouvrir. »

Vous cherchez l'interrupteur et le trouvez. CLIC. La lumière s'allume brusquement.

La chambre apparaît clairement : meubles anciens, rideaux épais, une bibliothèque couverte de poussière… et des dizaines de photographies sur les murs. Sur chacune d'elles, le même couple. Le grand-père et Yvonne.

Vous vous approchez d'une photo près de la porte : le couple pose devant une maison, habillé comme pour une grande occasion. Au bas du cadre : 31 octobre 1932. Une autre, puis une troisième… Les années changent, les vêtements aussi, mais les deux visages restent étrangement semblables.

Vous cherchez un objet pour débloquer la porte. Sur le bureau, un vieux coupe-papier en métal. Vous tentez de glisser la lame entre la porte et son encadrement.

Derrière vous, le grand-père murmure : « Vous n'auriez pas dû allumer cette lumière. »

Dans le reflet de la vitre, vous distinguez sa silhouette debout, juste derrière vous. Pourtant, lorsque vous vous retournez, il est assis dans son fauteuil.

« Dites-moi, mon petit… » reprend-il d'une voix calme, « pourriez-vous me lire l'une des lettres posées sur la table ? Toutes sont différentes. Toutes ont un destin tragique. Choisissez… »`,
    choices: [
      { label: "CHOIX B.2.1 — La lettre récente, manuscrite, timbrée des USA", next: "b21" },
      { label: "CHOIX B.2.2 — La lettre ancienne, tapée à la machine, adressée à Mme Morticia", next: "b22" }
    ]
  },

  b21: {
    id: "b21",
    title: "La lettre d'Élise",
    image: "assets/img/slide-12-letters.jpg",
    text: `« Mon cher papa, Los Angeles est vraiment un endroit incroyable ! Hier, avec Maryse, nous sommes allées découvrir Hollywood. Tu aurais adoré ! J'ai hâte de rentrer pour passer Halloween avec vous. Tu sais bien que c'est ma fête préférée ! Je vous embrasse fort tous les deux. À très bientôt ! Votre fille qui vous aime, Élise. »

Henri garde les yeux baissés sur la lettre. « Elle n'est jamais rentrée. Elle devait revenir quelques semaines plus tard, juste à temps pour Halloween. Mais je n'ai plus jamais eu de nouvelles. »

Soudain, un petit clic : la porte s'ouvre toute seule. « Ah, ne vous inquiétez pas ! Ça arrive parfois. La maison est vieille, les serrures n'en font qu'à leur tête. »

Minou se faufile dans la chambre et vient se frotter contre ses jambes. « Ce chat lui appartient, vous savez. Il me rappelle ma fille, dans sa façon de se glisser partout et de réclamer de l'attention. Elle adorait Halloween… »

Vous saluez Henri, descendez l'escalier avec Minou dans les bras et, avant de quitter la maison, vous lui murmurez : « Promis, l'année prochaine, je te laisserai profiter de la fête un peu plus longtemps avant de te ramener chez toi ! »

Minou ronronne, comme s'il avait compris.`,
    ending: "FIN — L'attente d'une fille",
    choices: [
      { label: "↺ Rejouer l'histoire", next: "start" }
    ]
  },

  b22: {
    id: "b22",
    title: "« Vous avez été déclaré mort en 1986 »",
    image: "assets/img/slide-12-letters.jpg",
    text: `C'est une lettre tapée à la machine, du notaire Maître Delorme, objet : « Succession de Monsieur Henri Morticia », indiquant qu'il a été officiellement déclaré décédé le 14 novembre 1986.

« Excusez-moi, Monsieur Morticia… Cette lettre indique que vous avez été déclaré mort en 1986. Pourtant, vous êtes bien là. »

Henri soupire. « Il y a quarante ans, j'ai été victime d'un accident. On m'a retrouvé inanimé, le médecin a conclu à mon décès… Quelques jours plus tard, je me suis réveillé chez moi. Les papiers avaient été signés… Nous avons décidé de continuer à vivre ici, comme avant. Pourquoi laisser des papiers décider de notre existence ? »

Vous remarquez alors que la pendule posée sur la cheminée est arrêtée. Ses aiguilles indiquent 23 h 44. Pourtant, il vous semble l'avoir entendue tictaquer depuis le début de la conversation.

« Elle s'est arrêtée le jour de mon accident. » Il se lève et s'approche de la fenêtre. Son reflet dans la vitre est étrangement pâle, presque imperceptible. « Cette maison m'a vu naître. Elle me verra mourir. Je ne suis pas prêt à la laisser. Et ma femme non plus. »

Un petit clic retentit derrière vous : la porte s'entrouvre toute seule. « Ces vieilles serrures… La maison a ses habitudes. »

Avant de partir, vous vous retournez : Henri est de nouveau assis dans son fauteuil, alors que vous ne l'avez pas entendu traverser la pièce. « Merci de m'avoir tenu compagnie, mon petit. Ma femme doit vous attendre en bas. »`,
    choices: [
      { label: "Redescendre et quitter la maison", next: "b1a_end" }
    ]
  },

  a1: {
    id: "a1",
    title: "La fuite",
    image: "assets/img/slide-09-yvonne.jpg",
    text: `Dans un dernier élan de désespoir, vous vous approchez du vieux et lui soufflez votre haleine à l'ail en plein visage. Il s'immobilise, perplexe… puis se met à tousser violemment.

BAM ! La porte s'ouvre brusquement. Le vieux cesse immédiatement de tousser et se redresse. Son regard croise le vôtre : vous y percevez une fureur terrifiante.

Il est temps de partir. Tout de suite !

Vous vous élancez dans le couloir à toute vitesse, dévalez les deux étages trois marches à la fois. En deux minutes chrono, vous voilà en bas ! Plus que trois mètres avant la porte d'entrée quand…

« Vous partez déjà ? »

Mme Morticia se tient dans l'embrasure du salon. « Quel dommage ! J'aimais bien votre présence… Je me sens tellement seule, vous savez… La porte est fermée à clé et la clé est autour de mon cou. Il ne pourra pas aller bien loin ! »

Elle saisit machinalement le pendentif sur sa poitrine. Gloups.

À l'étage, une voix résonne : « Yvonne ? Le petit est toujours là ? Empêche-le de partir ! »

« Oui, mon chéri ! Ne t'inquiète pas, je m'en occupe ! »

Où êtes-vous tombé ? Et surtout… qu'allez-vous faire ?`,
    choices: [
      { label: "A.1.1 — Faire semblant que votre téléphone vibre et courir vers la porte", next: "a11" },
      { label: "A.1.2 — Accepter de boire ce café avec elle", next: "a12" }
    ]
  },

  a11: {
    id: "a11",
    title: "« Votre téléphone est éteint, pourtant »",
    image: "assets/img/slide-13-ending.jpg",
    text: `Vous faites semblant de sentir votre téléphone vibrer. « Oh ! Excusez-moi, c'est très important, je dois absolument répondre ! Allô ? QUOI ?! Mais c'est terrible ! J'arrive tout de suite ! »

Mme Morticia vous observe sans ciller. « Un problème, mon petit vampire ? » Vous hochez frénétiquement la tête et tentez de vous diriger vers la porte. « Oui, oui, un problème très grave ! »

Elle soupire, puis baisse les yeux vers votre poche. « C'est drôle… Votre téléphone est éteint, pourtant. »

Mince. Son sourire disparaît. Elle sort une petite clé de son collier. « Vous savez, mon petit, Henri n'aime pas beaucoup qu'on lui mente. Et moi non plus, d'ailleurs. »

À l'étage, des pas commencent à résonner. Lentement. Très lentement.

Vous n'avez plus le choix : vous vous précipitez vers la porte et arrachez presque la clé des mains de Mme Morticia. La porte s'ouvre enfin ! Vous bondissez dehors et courez jusqu'à la maison de vos amis, sans jamais regarder derrière vous.

Une fois en sécurité, vous racontez toute l'histoire. Évidemment, personne ne vous croit. On vous accuse d'avoir un peu trop abusé des boissons de la soirée.

Le lendemain matin, vous découvrez deux petits points noirs sur votre cou. Deux marques minuscules, comme celles laissées par des crocs.

Et dans votre boîte aux lettres, une carte : « Merci pour cette charmante soirée. Revenez quand vous voulez ! Henri et Yvonne Morticia. »`,
    ending: "FIN — Échappé·e de justesse",
    choices: [
      { label: "↺ Rejouer l'histoire", next: "start" }
    ]
  },

  a12: {
    id: "a12",
    title: "Trois tasses de café",
    image: "assets/img/slide-10-feast.jpg",
    text: `Vous décidez d'aller boire ce café. « Après tout, qu'est-ce que vous risquez ? Personne ne croira jamais qu'un vieillard de 96 ans est un vampire. Et puis, vous n'allez pas vexer une pauvre grand-mère ! »

« Avec plaisir, madame Morticia ! Un petit café, ça ne se refuse pas ! » Son visage s'illumine : « Oh, quelle joie ! Henri va être ravi ! »

Elle vous installe dans un fauteuil ancien et revient avec trois tasses fumantes. Trois ? « Henri nous rejoint tout de suite. »

Vous prenez une gorgée. Le café est amer, mais délicieux. Mme Morticia s'assoit en face de vous : « Dites-moi, mon petit, vous avez quelqu'un dans votre vie ? Quelqu'un que vous aimez assez pour rester avec lui pour toujours ? »

Avant même de pouvoir répondre, vos paupières deviennent lourdes. Votre tête tourne. « Oh, ne vous inquiétez pas, mon petit. Ça va passer… » Elle vous caresse doucement la joue.

Des pas résonnent dans l'escalier. Henri apparaît dans l'encadrement de la porte. « Alors, Yvonne ? Notre invité se sent bien ? »

Henri s'accroupit devant vous : « Vous savez, mon petit vampire, nous avons eu très peu de visiteurs ces dernières décennies. Et les rares qui sont venus… disons qu'ils ne sont jamais vraiment repartis. » Il dévoile lentement ses dents : deux canines anormalement longues brillent à la lumière des bougies.

« Henri, sois gentil avec lui, murmure Yvonne. Il me rappelle tellement notre fils… »

« Les enfants grandissent, ils partent… et nous, nous restons. Toujours. » Il approche son visage de votre cou. Vous sentez son souffle glacé sur votre peau.

Le lendemain matin, Mme Morticia arrose tranquillement ses plantes. Sur la commode, une nouvelle photo rejoint les autres : vous, souriant dans votre costume de vampire, assis entre Henri et Yvonne. Au dos : « Notre famille s'agrandit. 31 octobre 2026. Pour toujours. »`,
    ending: "FIN — La famille s'agrandit",
    choices: [
      { label: "↺ Rejouer l'histoire", next: "start" }
    ]
  },

  a2: {
    id: "a2",
    title: "Un pacte…",
    image: "assets/img/slide-07-kitchen.jpg",
    text: `Vous décidez de rentrer dans son jeu et de lui proposer un marché : s'il vous aide à ouvrir la porte, vous lui donnerez de quoi retrouver le goût de l'ail sans avoir à en manger.

Le grand-père s'arrête net. « Vous feriez ça pour moi ? Après tout, vous n'êtes qu'un inconnu… » Il semble sincèrement ému. Puis un sourire inquiétant se dessine. « Mais dites-moi… Vous savez ce qui se passe quand on rompt un pacte avec quelqu'un comme moi ? »

Vous répondez avec assurance que vous tiendrez parole. Il vous fait signe d'approcher. Vous vous dirigez vers la porte, qui s'ouvre sans la moindre résistance. C'est alors que vous remarquez deux petits points noirs sur votre peau, comme les marques laissées par une morsure.

Vous relevez la tête vers le grand-père. Il vous sourit toujours.

Vous descendez dans la cuisine. Bizarre… aucune trace de Mme Morticia. Vous ouvrez le réfrigérateur : quelques légumes fatigués, des restes… Ah, tiens ! Des gousses d'ail !

Vous improvisez une omelette aux restes. Au moment de servir, vous hésitez sur la touche finale…`,
    choices: [
      { label: "A.2.1 — Ajouter une goutte de votre sang : « Comme ça on pourra dire qu'il y a de l'ail ! »", next: "a21" },
      { label: "A.2.2 — Couper une tranche d'ail, puis trancher le pain avec le même couteau (une simple trace)", next: "a22" }
    ]
  },

  a21: {
    id: "a21",
    title: "L'omelette au sang",
    image: "assets/img/slide-08-allergy.jpg",
    text: `Vous remontez avec votre assiette : « Voilà, monsieur Morticia ! Une omelette maison, avec une petite touche personnelle. »

Le vieil homme observe le plat, intrigué, puis prend une première bouchée. Silence. Il ferme les yeux. Un sourire béat se dessine. « Mon Dieu… Mais c'est délicieux ! Je n'avais pas goûté quelque chose d'aussi bon depuis… depuis Yvonne ! » Il dévore l'omelette jusqu'à la dernière miette. Pacte honoré !

Mais cinq minutes plus tard, son sourire disparaît. Son visage commence à gonfler. Ses yeux deviennent rouges, ses lèvres enflent et sa respiration se fait sifflante. « Oh non… Pas ça… PAS ENCORE ! »

Vous appelez le 15. Les secours arrivent et prennent Henri en charge. Un secouriste vous demande : « Vous savez ce qu'il a mangé ? » — « Une omelette… Enfin, je crois. » — « Et sa femme ? Elle peut nous renseigner sur ses allergies ? » — « Mme Morticia ? Elle doit être quelque part dans la maison… »

Vous parcourez les pièces, mais ne trouvez personne. De retour auprès des secouristes : « C'est étrange… Je ne comprends pas où elle est passée. »

Le secouriste vous regarde avec étonnement : « Monsieur, la femme de monsieur Morticia est morte il y a six ans. À moins que vous ayez vu son fantôme… » Il poursuit : « Merci pour votre aide. Vous ne pouviez pas savoir que monsieur Morticia souffre d'une allergie sévère à la ciboulette. Ce qui est étrange, c'est que tous les ans, à Halloween, il nous fait le même coup ! »

Vous restez seul dans la cuisine, sous le choc. Vous n'avez jamais utilisé de ciboulette. Pourtant vous êtes certain d'avoir vu Mme Morticia il y a quelques minutes.

Sur la table, une tasse de café fume encore. À côté, un petit mot est apparu, d'une écriture élégante : « Merci d'avoir pris soin de mon Henri. Il ne faut pas le laisser seul trop longtemps. Il s'ennuie tellement depuis mon départ… À l'année prochaine ! — Yvonne »`,
    ending: "FIN — L'allergie annuelle",
    choices: [
      { label: "↺ Rejouer l'histoire", next: "start" }
    ]
  },

  a22: {
    id: "a22",
    title: "« Un pacte est un pacte »",
    image: "assets/img/slide-06-henri.jpg",
    text: `Vous remontez avec votre plateau : « Voilà, monsieur Morticia ! Une omelette maison et du pain grillé, avec une petite touche spéciale, comme promis ! »

Henri attrape une tranche de pain, la porte à sa bouche, mâche lentement, ferme les yeux… puis s'immobilise. « Non… Non, non, non… »

« Quoi ? Ce n'est pas bon ? » — « Vous m'aviez promis de me faire retrouver le goût de l'ail. » — « Mais… il y en a ! Enfin, il y en a eu ! J'ai utilisé le même couteau ! »

Henri relève la tête. Son sourire a disparu. « Vous pensez vraiment que l'on peut tromper un homme qui a vécu 96 ans ? Il se lève et s'approche. Un pacte est un pacte, mon petit vampire. Et vous n'avez pas tenu parole. »

« Mais attendez, ce n'est pas ma faute si vous ne sentez rien ! » Henri éclate d'un rire sec : « Oh, mais vous sentirez quelque chose, vous. Je vous le garantis. » Il vous fait signe de partir.

Vous dévalez les escaliers et sortez sans demander votre reste. Le lendemain, personne ne croit votre histoire.

Les jours passent. Les semaines. Un mois plus tard, un rhume carabiné… et une fois guéri, quelque chose cloche : vous ne sentez plus rien. Le café n'a plus d'arôme, les plats sont fades, même l'odeur du pain chaud a disparu.

Un soir, presque un an après cette étrange nuit d'Halloween, vous ouvrez un pot d'ail confit. Rien. Vous en prenez une bouchée. Toujours rien.

Votre téléphone vibre. Deux messages d'un numéro inconnu :

« Alors, mon petit vampire ? Vous avez retrouvé le goût des bonnes choses ? »
« Un pacte est un pacte. Dommage que vous n'ayez pas tenu le vôtre. Henri. »`,
    ending: "FIN — Le goût perdu",
    choices: [
      { label: "↺ Rejouer l'histoire", next: "start" }
    ]
  }
};
