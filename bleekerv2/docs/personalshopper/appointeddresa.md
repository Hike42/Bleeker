---
title: Réservation
sidebar_position: 1
---

Deux options sont possibles pour savoir si un vendeur/marque est disponible : 
* Appel au WS/ ```getvendorisavailable```
> * Paramètre : name : String
> * Return : true :; false
> * Exemple : https://5y48dswgch.execute-api.eu-west-2.amazonaws.com/prod/getvendorisavailable?name=Fendi

* La fonction  ```checkAvailibily("Brand")``` à appeler une fois la page chargée,  qui fait l’appel au WS ```getvendorisavailable``` et qui en fonction du retour récupère et ajoute/supprime des classes CSS sur le bouton lié à la marque.
> * ID des boutons :  ```"#"+brandnormalize + "-bleeker"```
> * Si le vendeur/marque est dispo, supprime les classes existantes et ajoute les classes ```bleeker-available``` ```is-available```
> * Sinon laisse les classes existantes

* La fonction  ```initPersonalShopper("Brand", "ID_VENDEUR")``` qui enclenche la connexion instantanée au service Personal Shopper lors d’un clic sur le bouton. 
> * Cette fonction vérifie si la class is-available est présente et insère l’Iframe dans le container créé lors de l’initialisation du widget.

Ces fonctions peuvent prendre un paramètre optionnel BRAND qui permet d’instancier directement l’interface personal shopper de la marque.

```html
<button onclick="initPersonalShopper("Brand","ID_VENDEUR")"></button>;
```