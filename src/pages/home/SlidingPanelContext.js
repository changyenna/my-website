import React, { createContext, useContext, useState, useEffect } from 'react';

const SlidingPanelContext = createContext();

export const SlidingPanelProvider = ({ children }) => {
    const [showPanel, setShowPanel] = useState(false);

    useEffect(() => {
        document.body.style.overflowX = 'hidden';

        return () => {
            document.body.style.overflowX = 'auto';
        };
    }, [showPanel]);

    const togglePanel = () => {
        setShowPanel((prevShowPanel) => !prevShowPanel);
    };

    return (
        <SlidingPanelContext.Provider value={{ showPanel, togglePanel }}>
            {children}
        </SlidingPanelContext.Provider>
    );
};

export const useSlidingPanel = () => {
    const context = useContext(SlidingPanelContext);
    if (!context) {
        throw new Error(
            'useSlidingPanel must be used within a SlidingPanelProvider'
        );
    }
    return context;
};
