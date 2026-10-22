import { useContext } from "react";
import {ThemeContext}from"../context/ThemeContext.jsx";
function Navbar(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark mode": "light mode"}
        </button>
    );
}