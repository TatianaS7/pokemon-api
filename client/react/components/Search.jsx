import React, { useState, useEffect } from "react";

import "../styles/search.css";

function Search({ pokemonData, setFilteredPokemonData }) {
    const [query, setQuery] = useState("");

    function handleSearch(e) {
        setQuery(e.target.value)
    }

    // Filter Pokemon Data on Change
    function filterPokemonData() {
        const filteredPokemon = pokemonData.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(query.toLowerCase())
        })
        setFilteredPokemonData(filteredPokemon);
    }

    useEffect(() => {
        if (query.length > 0) {
            filterPokemonData()
        } else {
            setFilteredPokemonData(pokemonData)
        }
    }, [query])




    return (
        <div id="search-div">
            <input id="searchbar" type="text" placeholder="Search Pokemon" onChange={handleSearch}></input>
        
        </div>
    )
}

export default Search;