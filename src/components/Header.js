import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
        <div className="logo">
        <img 
        className="logo"
        src={LOGO_URL}
         />
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button className="login"
        onClick={() => {
         btnNameReact === "Login" ?
         setBtnNameReact("Logout"):
        setBtnNameReact("Login");
        }}>
        {btnNameReact}
        </button>
        </ul>
        </div>
        </div>
    );
};
export default Header;