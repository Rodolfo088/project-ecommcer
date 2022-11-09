import CartWidget from "../CartWidget";
import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to= '/'>VZ Store</NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/categoria/hombres'>Hombres</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/mujeres'>Mujeres</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/niños'>Niños</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/ cart'>
                        <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;