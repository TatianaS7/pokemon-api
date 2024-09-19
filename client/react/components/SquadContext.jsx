import React, { useState, createContext } from "react";

export const SquadContext = createContext();


export const SquadProvider = ({ children }) => {
    const [squad, setSquad] = useState({});
    return (
        <SquadContext.Provider value={{ squad, setSquad }}>
            {children}
        </SquadContext.Provider>
    );
};
