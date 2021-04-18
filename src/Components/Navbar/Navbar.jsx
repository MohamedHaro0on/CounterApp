import React, { useContext } from 'react'
import { CounterContext } from "../../Context";
import ShopCart from "./shopping-cart-icon.webp";
import ClassNames from "./Navbar.module.scss";
const Navbar = () => {
    const { counter } = useContext(CounterContext);

    return (
        <header className={ClassNames.Header}>
            <img src={ShopCart} alt="Shop Cart" title="shop Cart" aria-label="Shop Cart" className={ClassNames.ShopCart} />
            <h1 className={ClassNames.Counter}>{counter}</h1>
            <h2> Items </h2>
        </header>
    )
}

export default Navbar;