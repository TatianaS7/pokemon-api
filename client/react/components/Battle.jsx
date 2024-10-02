import React, { useContext } from "react";
import { SquadContext } from "./SquadContext";

import "../styles/battle.css";

function Battle() {
    const { squad, setSquad } = useContext(SquadContext);

    console.log(squad);

    // Reset Squad
    const handleReset = () => {
        setSquad({});
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {Object.keys(squad).length >= 1 && (
                <>
                <div style={{display: 'flex', gap: '1em'}}>
                    <button id="battle-btn" className="btn btn-primary">Battle</button>
                    <button id="reset-btn" className="btn btn-secondary" onClick={handleReset}>Reset</button>
                </div>

                <div id="squad-container">
                    <button id="view-squad">Squad List</button>
                    <div id="squad-list">
                        {Object.keys(squad).map((name, idx) => (
                            <div key={idx} className="squad-member">
                                <h5>{name}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default Battle