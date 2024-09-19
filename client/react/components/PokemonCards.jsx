import React, { useContext, useState } from "react";
import { SquadContext } from "./SquadContext";
import "../styles/pokemonCards.css";
import { Modal } from "react-bootstrap";

import { StarOutline, Star } from 'react-ionicons'

function PokemonCards({ pokemonData, filteredPokemonData }) {

    const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

    const { squad, setSquad } = useContext(SquadContext);
    const [show, setShow] = useState(false);

    function handleSave(pokemon) {
        // Check if pokemon is already in squad
        if (squad[pokemon.name]) {
            // Remove pokemon from squad
            const newSquad = { ...squad };
            delete newSquad[pokemon.name];
            setSquad(newSquad);
        } else if (!squad[pokemon.name] && Object.keys(squad).length < 6) {
            // Add pokemon to squad
            setSquad((prevSquad) => ({
                ...prevSquad,
                [pokemon.name]: [pokemon]
            }));
        } else {
            setShow(true);
        }
    }


    return (
        <>
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding: '2em', textAlign: 'center'}}>
                <p style={{fontSize: '15pt'}}>You can only have 6 pokemon in your squad!</p><br/>

                <h5><b>Current Squad:</b></h5>
                <div style={{fontSize: '14pt'}}>
                    {Object.keys(squad).map((name, idx) => (
                        <p key={idx}>{name}</p>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={() => setShow(false)}>Close</button>
            </Modal.Footer>
        </Modal>
        
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
                        <div className="save">
                            <button className="save-button" onClick={() => handleSave(pokemon)}>
                                {squad[pokemon.name] ? 
                                <Star color={'#f0ed99'} height="35px" width="35px"/> 
                                : <StarOutline color={'#00000'} height="35px" width="35px"/> }
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default PokemonCards;