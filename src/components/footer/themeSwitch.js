import React, { useState } from "react";

const ThemeSwitchComponent = () => {
    let localMode = JSON.parse(localStorage.getItem('LIGHT_MODE'))
    if (localMode === true) {
        document.body.classList.add('light-mode');
    }
    const [currentMode, setCurrentMode] = useState(localMode ? 'light-mode' : 'dark-mode');


    const onModeClickHandler = () => {
        if (currentMode === 'light-mode') {
            setCurrentMode('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('LIGHT_MODE', false);
        } else if (currentMode === 'dark-mode') {
            setCurrentMode('light-mode')
            document.body.classList.add('light-mode');
            localStorage.setItem('LIGHT_MODE', true);
        }
        
    }

    return (
        <button onClick={onModeClickHandler}>Toggle Mode</button>
    )
};

export default ThemeSwitchComponent;