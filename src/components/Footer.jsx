import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>~Created wholly for learning purposes~</p>
            <p>&copy;Chandana Chakilam {year} </p>
        </footer>
    )
}

export default Footer;