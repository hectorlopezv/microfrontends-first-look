import { mount as cartMount } from "cart/CartShow";
import { mount } from "products/ProductsIndex";
console.log("Container!");
mount(document.querySelector("#my-products"));
cartMount(document.querySelector("#cart-dev"));
