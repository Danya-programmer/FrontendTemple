
import React from "react";
import { Header } from "../../components/header/Header";
import { SliderImg } from "../../components/sliderImg/SliderImg";

import classes from './MainPage.module.css'
import { MainButton } from "../../components/UI/mainButton/mainButton";
import { Footer } from "../../components/footer/Footer";

export const MainPage = () => {
    
  
    return(
        <>
            <Header/>
            <SliderImg/>
            <MainButton/>
            <Footer/>
        </>
    )
}