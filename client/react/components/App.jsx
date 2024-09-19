import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import apiURL from "../api";
import "../../styles.css";

import Navbar from "./Navbar";
import PokemonCards from "./PokemonCards";
import Search from "./Search";
import Battle from "./Battle";

import { SquadProvider } from "./SquadContext";

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
        <SquadProvider>
            <Navbar />
            <Search pokemonData={pokemonData} setFilteredPokemonData={setFilteredPokemonData} />

            <Battle />

            <h2>All Pokemon</h2>
            <PokemonCards pokemonData={pokemonData} filteredPokemonData={filteredPokemonData} />
        </SquadProvider>
    )
}

export default App;