// SlidingPanelContext.js

import React, { createContext, useContext, useState } from 'react';

const SlidingPanelContext = createContext();

export const SlidingPanelProvider = ({ children }) => {
    const [showPanel, setShowPanel] = useState(false);

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
