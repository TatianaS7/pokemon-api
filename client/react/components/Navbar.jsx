import React from "react";
import "../styles/navbar.css";

import pokeball from "../../assets/pokeball-icon.png";


function Navbar() {
    return (
        <nav>
            <h1><b>P<img src={pokeball} alt="pokeverse"></img>
            keverse!</b></h1>
        </nav>
    )
}

export default Navbar;