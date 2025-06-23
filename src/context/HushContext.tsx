import React, { createContext, useState, useContext, useEffect } from "react";

interface HushContextType {
    isHushed: boolean;
    setIsHushed: (v: boolean) => void;
}

export const HushContext = createContext<HushContextType>({
    isHushed: false,
    setIsHushed: () => { },
});

export const HushProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isHushed, setIsHushedState] = useState(false);

    // On mount, read from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('isHushed');
        if (stored !== null) {
            setIsHushedState(stored === 'true');
        }
    }, []);

    // Update both state and localStorage
    const setIsHushed = (v: boolean) => {
        setIsHushedState(v);
        localStorage.setItem('isHushed', v ? 'true' : 'false');
    };

    return (
        <HushContext.Provider value={{ isHushed, setIsHushed }}>
            {children}
        </HushContext.Provider>
    );
}; 