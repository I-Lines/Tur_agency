import React from "react";
import Shhome from "./Shhome";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";

function Shop() {
    
    return (
        <>
            <CartProvider>
            <Shhome/>
            <Cart/>
            </CartProvider>
        </>
    )
}

export default Shop;