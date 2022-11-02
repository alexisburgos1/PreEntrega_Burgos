import React from "react";
import sneakersLover from "../../img/sneakers_lover.png"

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
            <div className="cart">
                <box-icon name='cart' color='white' animation='tada'></box-icon>
                <span className="ir">0</span>
            </div>
                
            </header>
        </div>  

    )
}