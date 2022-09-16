
import React from "react";
import { Header } from "../../components/header/Header";
import { SliderImg } from "../../components/sliderImg/SliderImg";

import { MainButton } from "../../components/UI/mainButton/mainButton";
import { Footer } from "../../components/footer/Footer";

export const MainPage = () => {
    
  
    return(
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
            <Header/>
            <SliderImg/>
            <MainButton title='Как посетить'/>
            <Footer/>
        </div>
    )
}