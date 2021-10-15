import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

import './Navbar.css' 
const navBar = () => {
    return (
        <div>
           <nav> 
               <span><strong>My E-Commerce</strong></span>
           <li id="cartWidget"><CartWidget/></li>
               <ul>
                <li><a href="#">Home</a></li>
                <li><a href="http://localhost:3000/productos">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                {/* <li id="cartWidget"><CartWidget/></li> */}
            </ul>
            
            </nav>
        </div>
    )
}

export default navBar
