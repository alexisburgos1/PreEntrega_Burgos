import React from "react";
import {Link} from 'react-router-dom';

export const CartWidget = () => {
    return(
            <Link to="/cart" className="navbar">
            <div className="cart">
                <box-icon name='cart' color='white' animation='tada'></box-icon>
                <span className="ir">0</span>
            </div>
            </Link>
    )
}