import { Slider } from "@mui/material";
import React from "react";
import { Header } from "../../components/header/Header";
import { SliderImg } from "../../components/slider/Slider";
import Grid from '@mui/material/Grid'; 

import classes from './MainPage.module.css'
import { MainButton } from "../../components/UI/mainButton/mainButton";

export const MainPage = () => {
    
  
    return(
        <>
            <Header/>
            <SliderImg/>
            <MainButton/>
        </>
    )
}