import React from "react";
import sneakersLover from "../../img/sneakers_lover.png"
import {CartWidget} from "./CartWidget"

export const Navbar = () => {
    return(
       <div className="headerStyle">
        <header>
                
            <a href="#">
                <div className="logo">
                    <img src ={sneakersLover} alt="" width="140" className="logosneaker"/>                
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
            </ul>
            <CartWidget />
            </header>
        </div>  

    )
}