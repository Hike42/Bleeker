---
title: Booking
sidebar_position: 1
---

# Booking

There are two options to find out if a vendor/brand is available: 
* Call to the WS/ ```getvendorisavailable```
> * Parameter : name : String
> * Return : true :; false
> * Example : https://5y48dswgch.execute-api.eu-west-2.amazonaws.com/prod/getvendorisavailable?name=Fendi

* The ```checkAvailibily("Brand")``` function to be called once the page is loaded, which makes the call to the WS ```getvendorisavailable``` and which, depending on the return, retrieves and adds/removes CSS classes on the branded button.
> * Button ID :  ```"#"+brandnormalize + "-bleeker"```
> * If the seller/brand is available, delete the existing classes and add the classes ```bleeker-available``` ```is-available```
> * Otherwise leave the existing classes

* The ```initPersonalShopper("Brand", "ID_VENDEUR")``` function which triggers the instant connection to the Personal Shopper service when the button is clicked.
> * This function checks if the class is-available is present and inserts the Iframe into the container created when initializing the widget.

These functions can take an optional BRAND parameter that directly instantiates the personal shopper interface of the brand.

```html
<button onclick="initPersonalShopper("Brand","ID_VENDEUR")"></button>;
```