import React from "react";

function Navbar(props){
    return (
        <div className="navbar-bkg">
            <h3 className="navbar-text-style">{props.logo}</h3>
            <a href={props.link}><h4 className="navbar-text-style text-right">{props.linkText}</h4></a>
        </div>
    );
}

export default Navbar;