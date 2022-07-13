---
sidebar_position: 4
---

# Global Initialization of the Bleeker widget.

Add the meta viewport tag to your page header so that the iFrame dimensions fit perfectly on different devices.

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

In the classic deployment the following initialization code has to be inserted at the bottom of the global template between the end tags ```</body>``` and ```</html>``` replacing UA-XXX by your Google Analytics UA code.
The code below allows to import and initialize the Bleeker widget.
It starts out as a dev url that imports an unminified file in case we need to make specific adjustments related to your environment.
The final url will be provided before production and will be replaced in the code below.

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
