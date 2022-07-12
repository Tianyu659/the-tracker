/**
 * Project: The Tracker
 * Description: This file contains the current context of the app using COntext API.
 */

import React, { createContext, Dispatch, useContext, useState } from 'react'

interface PropsInterface {
    children: JSX.Element;
}

interface StateInterface {
    activeMenu: boolean,
    setActiveMenu: Dispatch<React.SetStateAction<boolean>>,
    screenSize: number,
    setScreenSize: Dispatch<React.SetStateAction<number>>,
    currentColor: string,
}


let StateContext = createContext<StateInterface>({} as StateInterface);

export const ContextProvider = ({ children }: PropsInterface) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(1920);

    const [currentColor, setCurrentColor] = useState("#03C9D7")
    
    return (
        <StateContext.Provider
            value={{ activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor }}
            // Add to value when use: currentColor, currentMode, setColor, setMode, themeSettings, setThemeSettings
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext((StateContext))


// For dealing with color choices/theme
    // const [currentColor, setCurrentColor] = useState('#03C9D7');
    // const [currentMode, setCurrentMode] = useState('Light');
    // const [themeSettings, setThemeSettings] = useState(false);

    // const setMode = (e: MouseEvent) => {
    //     setCurrentMode(e.target!.value)

    //     localStorage.setItem('themeMode', e.target.value)

    //     setThemeSettings(false)
    // }

    // const setColor = (color: string) => {
    //     setCurrentColor(color)

    //     localStorage.setItem('colorMode', color)

    //     setThemeSettings(false)
    // }