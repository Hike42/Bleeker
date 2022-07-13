---
title: Lives display
---

# Lives display

Create one or more CMS pages to host the presentation page that lists Shopping Parties and/or Replays.

Insert the following code with the desired parameters into the body of the page(s).



```html
<iframe id="bleeker-liveshopping" title="Bleeker" 
src="https://guest.bleeker.live/?vendorID=ID_VENDEUR&widget=true" frameborder="0" 
allow="camera; microphone;fullscreen; autoplay;" scrolling="no" 
style="overflow: hidden; height: auto; min-height: 100vh; width: 100vw;"></iframe>
```  


**Allowed settings :**
* ```layout``` (optionnal) : Possible values => "grid", "list"
* ```type``` (optionnal) : Possible values => "party", "replay"



> URLs examples to insert in the ```src``` attribute of the iFrame above:
> * https://guest.bleeker.live/?vendorID=545&widget=true
> * https://guest.bleeker.live/?vendorID=545&widget=true&layout=grid
> * https://guest.bleeker.live/?vendorID=545&widget=true&layout=list&type=replay
> * https://guest.bleeker.live/?vendorID=545&widget=true&layout=grid&type=party



:::tip - 
If no optional parameter is specified, the display contains upcoming Lives as well as Replays in list mode.
:::


