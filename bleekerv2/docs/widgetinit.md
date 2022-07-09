---
sidebar_position: 4
---

# Initialisation globale du widget Bleeker.

Ajouter la balise meta viewport à votre en-tête de page afin que les dimensions de l’iFrame s’adaptent parfaitement sur les différents appareils.

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

Dans le déploiement classique le code d’initialisation suivant est à insérer en bas du template global entre les balises de fin ```</body>``` et ```</html>``` en remplaçant UA-XXX par votre code UA Google Analytics. 
Le code ci-dessous permet d’importer et d’initialiser le widget bleeker.
Au départ c’est une url de dev qui importe un fichier non minifié au cas où nous devrions faire des ajustements spécifiques liés à votre environnement. 
L’url finale sera fournie avant la mise en production et sera à remplacer dans le code ci-dessous.

```js
  <script>
   (function() {
 	let scripts = Array
	.from(document.querySelectorAll('script'))
	.map(scr => scr.src);
 	const url = new URL(window.location.href);
 	var search = url.search;
 	var paramsStr = search.substr(1);
 	if (!scripts.includes('https://widget.bleeker-st.com/ID_VENDEUR/embed-dev.js')) {
   	var scriptNode = document.createElement('script');
   	scriptNode['id'] = 'bleeker-script';
   	scriptNode['src'] = 'https://widget.bleeker-st.com/ID_VENDEUR/embed-dev.js';
   	scriptNode['type'] = 'text/javascript';
   	document.documentElement.appendChild(scriptNode);
 	}
     jQuery(window).on('load', function () {
       initBleekerLiveShopping({
          params: paramsStr,
          vendorID: 'GL',
          uaGoogle : 'GA-XXX',
          widget: true,
          type: 'overlay',
       });
     });
   })();
</script>
```
