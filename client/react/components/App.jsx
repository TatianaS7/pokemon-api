import React, { useState, useEffect } from "react";

import axios from "axios";
import apiURL from "../api";
import "../../styles.css";

import Navbar from "./Navbar";
import PokemonCards from "./PokemonCards";
import Search from "./Search";

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);

    // Fetch Pokemon Data
    async function fetchPokemonData() {
        try {
            const res = await axios.get(apiURL);
            const data = res.data.results
            setPokemonData(data)
            setFilteredPokemonData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchPokemonData();
    }, []);

    return (
        <>
            <Navbar />
            <Search pokemonData={pokemonData} setFilteredPokemonData={setFilteredPokemonData} />

            <h2>All Pokemon</h2>
            <PokemonCards pokemonData={pokemonData} filteredPokemonData={filteredPokemonData} />
        </>
    )
}

export default App;