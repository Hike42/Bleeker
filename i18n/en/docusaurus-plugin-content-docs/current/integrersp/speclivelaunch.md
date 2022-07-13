---
title: Live launch through a specific button
sidebar_position: 4
---

# Live launch through a specific button

The ```initLive``` function allows you to launch a live from a button.

> Function to use : ```initLive('id_live', 'id_vendeur');```

**Allowed settings:**
* ```id_live``` (**Required**) : Possible values ​​=> Live ID, to be retrieved from the console on the Live Shopping detail sheet.
* ```id_vendeur``` (**Required**) : Possible values ​​=> Account ID, the same as defined in widget initialization.
* ***Button*** :
> * The button ID must be ```live-bleeker```.
> * The ```initLive('id_live', 'id_vendeur', 'start')``` function must be associated with the onClick event.

:::tip Button example
```html
<button id="live-bleeker" onclick="initLive('id_live', 'id_vendeur')">Participate in live</button>
```
:::