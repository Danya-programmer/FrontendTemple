import React from "react";
import { NavLink } from "react-router-dom";
import './mainButton.css'

export const MainButton = () =>{

    return(
        <div className="main-button-contener">
        <NavLink to='/' className="main-button-navlink"><div className="main-button"><p className="main-button-text">Как посетить</p></div></NavLink>
        </div>
    )
}