---
title: Lancement d'un Live depuis un bouton spécifique.
sidebar_position: 4
---

La fonction ```initLive``` permet de lancer un live depuis un bouton.

> Fonction à utiliser : ```initLive('id_live', 'id_vendeur');```

**Paramètres autorisées :**
* ```id_live``` (**Requis**) : Valeurs possibles => ID d’un Live, à récupérer depuis la console sur la fiche détail du Live Shopping. 
* ```id_vendeur``` (**Requis**) : Valeurs possibles => ID du compte, le même que celui défini dans l’initialisation du widget.
* ***Bouton*** :
> * L'ID du bouton doit impérativement être ```live-bleeker```.
> * La fonction ```initLive('id_live', 'id_vendeur', 'start')``` doit être associée à l'évènement onClick.

:::tip Exemple de bouton
```html
<button id="live-bleeker" onclick="initLive('id_live', 'id_vendeur')">Particper au  Live</button>
```
:::