import React, { createContext, useState, useContext } from "react";

interface HushContextType {
    isHushed: boolean;
    setIsHushed: (v: boolean) => void;
}

export const HushContext = createContext<HushContextType>({
    isHushed: false,
    setIsHushed: () => { },
});

export const HushProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isHushed, setIsHushed] = useState(false);
    return (
        <HushContext.Provider value={{ isHushed, setIsHushed }}>
            {children}
        </HushContext.Provider>
    );
}; 