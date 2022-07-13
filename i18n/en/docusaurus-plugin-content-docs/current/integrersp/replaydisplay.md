---
title: One Live/Replay display
sidebar_position: 2
---

# One Live/Replay display

Insert the following code in with the desired parameters in the body of the page(s).

```html
<iframe id="bleeker-liveshopping" title="Bleeker" 
src="https://www.guest.bleeker.live/event/ID_LIVE/?vendorID=ID_VENDEUR&widget=true" 
frameborder="0" allow="camera; microphone;fullscreen; autoplay;" 
scrolling="no" style="overflow: hidden; height: 1279px; width: 100vw;"></iframe>
```

**Allowed settings:**
* ```start``` (optionnal for the replays only) : Possible values => the number of seconds at which the Replay should start
* ```product``` (optionnal, coming soon) : Possible values => "true", "false"

> URLs examples to insert in the src attribute of the iFrame above :
> * https://www.guest.bleeker.live/event/545-Olivier-U2I5/?vendorID=545&widget=true&product=true&start=200

> Integration examples :
> * https://demo.bleeker.live/  (At the end of the page)


