import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react';

// THEME
import theme from './theme';

// REACT-ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
// import Alert from './pages/landing/Alert';
// import Message from './pages/landing/Message';
import Home from './pages/home/Home';
import MyScene from './pages/myscene/MyScene';
// import MusicPlayerWithContext from './components/music-player-comp/MusicPlayer';
import Playground from './pages/playground/playground';
import { SlidingPanelProvider } from './pages/home/SlidingPanelContext';
import FirstPanel from './pages/home/FirstPanel';
import SecondPanel from './pages/home/SecondPanel';
import Contact from './pages/Contact';
// import Projects from './nav-bar/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
const manager = createLocalStorageManager('my-key');
root.render(
    <ChakraProvider colorScheme={manager} theme={theme}>
        <React.StrictMode>
            <SlidingPanelProvider>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/" element={<Alert />} />
                        <Route path="/message" element={<Message />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/myScene" element={<MyScene />} />
                        <Route path="/playground" element={<Playground />} />
                        <Route path="/firstPanel" element={<FirstPanel />} />
                        <Route path="/secondPanel" element={<SecondPanel />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </SlidingPanelProvider>
        </React.StrictMode>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
