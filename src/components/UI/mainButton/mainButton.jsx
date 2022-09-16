import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './mainButton.css'

export const MainButton = (props) =>{

    return(
        <div className="main-button-contener">
        <Link to='/contacts#geo' className="main-button-navlink"><div className="main-button"><p className="main-button-text">{props.title}</p></div></Link>
        </div>
    )
}