import React from 'react';
import RenderNormalButtons from "./components/RenderNormalButtons/RenderNormalButtons";
import RenderOutlineButtons from "./components/RenderOutlineButtons/RenderOutlineButtons";
import RenderSizedButtons from "./components/RenderSizedButtons/RenderSIzedButtons";
import LinkButtons from "./components/LinkButtons/LinkButtons";
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <div className="normal-buttons">
                <RenderNormalButtons/>
            </div>
            <div className="outline-button">
                <RenderOutlineButtons/>
            </div>
            <div className="sized-buttons">
                <RenderSizedButtons/>
            </div>
            <div className="link-buttons">
                <LinkButtons/>
            </div>
        </div>
    );
}

export default App;
