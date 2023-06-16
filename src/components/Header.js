import { useState } from "react";
const Header = ({darkModeHandler, dark})=>{
    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={darkModeHandler}>
                {dark ? "Light" : "Dark"} Mode
            </button>
        </header>
    );
}

export default Header;