---
title: Affichage des Lives
---

Créez une ou plusieurs pages CMS pour accueillir la page de présentation qui liste les Shopping Parties et/ou les Replay.

Insérez le code suivant avec les paramètres souhaités dans le corps de la(des) page(s).



```html
<iframe id="bleeker-liveshopping" title="Bleeker" 
src="https://guest.bleeker.live/?vendorID=ID_VENDEUR&widget=true" frameborder="0" 
allow="camera; microphone;fullscreen; autoplay;" scrolling="no" 
style="overflow: hidden; height: auto; min-height: 100vh; width: 100vw;"></iframe>
```  


**Paramètres autorisées :**
* ```layout``` (optionnel) : valeurs possibles => "grid", "list"
* ```type``` (optionnel) : valeur possibles => "party", "replay"



> Exemples d’URLs à insérer dans l’attribut ```src``` de l’iframe ci-dessus : 
> * https://guest.bleeker.live/?vendorID=545&widget=true
> * https://guest.bleeker.live/?vendorID=545&widget=true&layout=grid
> * https://guest.bleeker.live/?vendorID=545&widget=true&layout=list&type=replay
> * https://guest.bleeker.live/?vendorID=545&widget=true&layout=grid&type=party



:::tip - 
Si aucun paramètre optionnel n’est spécifié, l'affichage contient les Lives à venir ainsi que les Replay en mode liste.
:::


