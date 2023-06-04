import './NavBar.css'
import React from "react";
import CartWidget from '../CardWidget'

export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav brand">
                    <a href="" className="nav-link">Mi marca</a>
                </div>

                <ul className='ul-navbar'>
                    <li className='li-navbar'>
                        <a href="" className="nav-link">cat 1</a>
                    </li>
                    <li className='li-navbar'>
                        <a href="" className="nav-link">cat 2</a>
                    </li>
                    <li className='li-navbar'>
                        <a href="" className="nav-link"> 
                            <CartWidget/>
                            <span className='CW-span'>3</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}