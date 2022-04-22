import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav id="format"> 
            <NavLink className="navbar" exact to="/">Home  </NavLink>
            <NavLink className="navbar"to="/pokedex">PokeDex  </NavLink>
            <NavLink className="navbar"to="/about">About  </NavLink>
            <NavLink className="navbar"to="/forum">Forum  </NavLink>
        </nav>   //above here gets repetitive I need to take a look at styling component"
    );
}

export default NavBar;
