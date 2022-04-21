import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink exact to="/">Home  </NavLink>
            <NavLink to="/pokedex">PokeDex  </NavLink>
            <NavLink to="/about">About  </NavLink>
            <NavLink to="/forum">Forum  </NavLink>
        </nav>
    );
}

export default NavBar;
