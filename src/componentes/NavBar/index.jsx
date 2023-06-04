import React from "react";
import CartWidget from '../CardWidget'

export const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav brand">
                    <a href="" className="nav-link">Mi marca</a>
                </div>

                <ul>
                    <li>
                        <a href="" className="nav-link">cat 1</a>
                    </li>
                    <li>
                        <a href="" className="nav-link">cat 2</a>
                    </li>
                    <li>
                        <a href="" className="nav-link"> 
                            <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}