import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Routes from "./routes";

const App: React.FC = () => (
    <>
        <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
    </>
);
export default App;
