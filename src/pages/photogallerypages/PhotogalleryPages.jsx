import React from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { PhotoGallery } from '../../components/photogallery/Photogallery';
import { Server } from '../../components/server/Server';


export const TempleGallery = () => {

    return(
        <>
    <Header/>
    <PhotoGallery data={Server().ControllerServer.templePhotogallery}/>
    <Footer/> 
    </>
    )
}

export const BelltowerGallery = () => {

    return(
        <>
    <Header/>
    <PhotoGallery data={Server().ControllerServer.belltowerPhotogallery}/>
    <Footer/> 
    </>
    )
}


export const PoorhouserGallery = () => {

    return(
        <>
    <Header/>
    <PhotoGallery data={Server().ControllerServer.poorhousePhotogallery}/>
    <Footer/> 
    </>
    )
}
export const MersybusGallery = () => {

    return(
        <>
    <Header/>
    <PhotoGallery data={Server().ControllerServer.mersybusPhotogallery}/>
    <Footer/> 
    </>
    )
}