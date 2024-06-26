import React, { useState } from "react";
import './Navbar.css';

import logo from "../Assets/Ecommerce_Frontend_Assets/Assets/logo.png"
import cart_icon from "../Assets/Ecommerce_Frontend_Assets/Assets/cart_icon.png"
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo-image" />
                <p>SHOPPER</p>
                </div>
                <ul className="nav-menu">
                    <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:"none", color:"black"}} to="/">Shop</Link>{menu === "shop" ? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("mens")}}><Link  style={{textDecoration:"none", color:"black"}} to="/mens">Men</Link>{menu === "mens" ? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("women")}}><Link style={{textDecoration:"none", color:"black"}}  to="/womens">Women</Link>{menu === "women" ? <hr />:<></>}</li>
                    <li onClick={() => {setMenu("kids")}}><Link  style={{textDecoration:"none", color:"black"}} to="/kids">Kids</Link>{menu === "kids" ? <hr />:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                   <Link to="/login"> <button>Login</button></Link>
                   <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
                    
                    <span className="nav-cart-count">0</span>
                </div>
        </div>
    )
}


export default Navbar