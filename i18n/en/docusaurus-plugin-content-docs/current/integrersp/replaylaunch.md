---
title: Replay Launch through a specific button
sidebar_position: 3
---

# Replay Launch through a specific button

The *initReplay* function allows you to launch a replay at a chosen time directly from a button.

* Function to use : ```initReplay('id_live','id_vendeur','start');```

**Allowed settings:**
* ```id_live``` (**Required**) : Possible values => Live ID, to be retrieved from the console on the Live Shopping detail sheet.
* ```id_vendeur``` (**Required**) : Possible values => Account ID, the same as defined in widget initialization.
* ```START``` (Optionnal) : Possible values => the number of seconds at which the Replay should start.

:::tip INFO
If the number of seconds is not specified, the Replay is launched from the beginning
:::

* ***Button*** :
> * The button ID must be ```replay-bleeker```.
> * The ```initReplay('id_live', 'id_vendeur', 'start')``` function must be associated with the onClick event.

:::tip Button example
```html
<button id="replay-bleeker" onclick="initReplay('545-Olivier-', '545', '200')">Voir le Replay</button>
```
:::



