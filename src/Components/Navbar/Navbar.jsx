import React  , {useContext} from 'react'
import {CounterContext} from "../../Context";
import ShopCart from "./shopping-cart-icon.webp";
import ClassNames from "./Navbar.module.scss";
function Navbar() {
    const {counter} = useContext(CounterContext);
    return (
        <header className = {ClassNames.Header}>
            <img src={ShopCart} alt = "Shop Cart" title = "shop Cart" className = {ClassNames.ShopCart}/>
            <div className = {ClassNames.Counter}>{counter}</div>
            <h2> Items </h2>
        </header>
    )
}

export default Navbar;