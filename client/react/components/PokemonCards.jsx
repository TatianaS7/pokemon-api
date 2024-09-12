import React from "react";
import "../styles/pokemonCards.css";

function PokemonCards({ pokemonData, filteredPokemonData }) {

    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;


    return (
        <div id="pokemon-content">
            {filteredPokemonData.map((pokemon, idx) => (
                <div key={idx} className="card">
                    <div className="card-header">
                        <img src={imageURL + (idx + 1) + ".png"} alt={pokemon.name}></img>
                    </div>
                    <div className="card-body">
                    <h3>{pokemon.name}</h3>
                    <p>Thundershock ()</p>
                    <p>Level ..</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PokemonCards;