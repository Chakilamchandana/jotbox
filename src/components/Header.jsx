import React from "react";
import logo from '../assets/logo.png'


function Header(){
    return(
        <header>
            <a href="#" >
                <img className="logo" src={logo}/>
            </a>
            <h1> Jot Box</h1>
        </header>
    )

}

export default Header;