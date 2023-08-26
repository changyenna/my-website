import React from 'react';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('/test')
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>{!data ? 'Loading...' : data}</p>
            </header>
        </div>
    );
}

export default App;

// import React, { createContext, useContext, useState, useEffect } from 'react';

// function App() {
//     const [data, setData] = React.useState(null);

//     React.useEffect(() => {
//         fetch('/test')
//             .then((res) => res.json())
//             .then((data) => setData(data.message));
//     }, []);

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <p>{!data ? 'Loading...' : data}</p>
//             </header>
//         </div>
//     );
// }

// const SlidingPanelContext = createContext();

// export function useSlidingPanel() {
//     return useContext(SlidingPanelContext);
// }

// export function SlidingPanelProvider({ children }) {
//     const [showBox, setShowBox] = useState(true);
//     const [showLeft, setShowLeft] = useState(false);
//     const [showRight, setShowRight] = useState(true);

//     const togglePanels = () => {
//         if (showBox) {
//             setShowBox(false);
//             setShowLeft(true);
//             setShowRight(false);
//         } else {
//             setShowBox(true);
//             setShowLeft(false);
//             setShowRight(true);
//         }
//     };

//     const value = {
//         showBox,
//         showLeft,
//         showRight,
//         togglePanels
//     };

//     return (
//         <SlidingPanelContext.Provider value={value}>
//             {children}
//         </SlidingPanelContext.Provider>
//     );
// }

// export default function RootApp() {
//     return (
//         <SlidingPanelProvider>
//             <App />
//         </SlidingPanelProvider>
//     );
// }
