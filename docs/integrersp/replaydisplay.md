---
title: Affichage d'un Live/Replay
sidebar_position: 2
---

Insérer le code suivant dans avec les paramètres souhaités dans le corps de la (des) page(s).

```html
<iframe id="bleeker-liveshopping" title="Bleeker" 
src="https://www.guest.bleeker.live/event/ID_LIVE/?vendorID=ID_VENDEUR&widget=true" 
frameborder="0" allow="camera; microphone;fullscreen; autoplay;" 
scrolling="no" style="overflow: hidden; height: 1279px; width: 100vw;"></iframe>
```

**Paramètres autorisées :**
* ```start``` (optionnel pour les replay uniquement) : Valeurs possibles => le nombre de secondes à laquelle le Replay doit démarrer
* ```product``` (à venir optionnel) : Valeurs possibles => "true", "false"

> Exemples d’urls à insérer dans l’attribut src de l’iframe ci-dessus : 
> * https://www.guest.bleeker.live/event/545-Olivier-U2I5/?vendorID=545&widget=true&product=true&start=200

> Exemples d’intégration :
> * https://demo.bleeker.live/  (En bas de page)


