---
title: Lancement d'un Replay depuis un bouton spécifique
sidebar_position: 3
---

La fonction *initReplay* permet de lancer un replay à un instant choisi directement depuis un bouton.

* Fonction à utiliser : ```initReplay('id_live','id_vendeur','start');```

**Paramètres autorisés :**
* ```id_live``` (**Requis**) : Valeurs possibles => ID d’un Live, à récupérer depuis la console sur la fiche détail du Live Shopping. 
* ```id_vendeur``` (**Requis**) : Valeurs possibles => ID du compte, le même que celui défini dans l’initialisation du widget.
* ```START``` (Optionnel) : Valeurs possibles => le nombre de secondes à laquelle le Replay doit démarrer.

:::tip INFO
Si le nombre de secondes n'est pas précisé le lancement du Replay se fait depuis le début
:::

* ***Bouton*** :
> * L'ID du bouton doit impérativement être ```replay-bleeker```.
> * La fonction ```initReplay('id_live', 'id_vendeur', 'start')``` doit être associée à l'évènement onClick

:::tip Exemple de bouton
```html
<button id="replay-bleeker" onclick="initReplay('545-Olivier-', '545', '200')">Voir le Replay</button>
```
:::



