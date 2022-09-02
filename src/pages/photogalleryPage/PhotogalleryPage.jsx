import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import classes from './PhotogalleryPage.module.css'

const PhotogalleryPage = () => {
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
            <Header/>
            <div classes={classes.PhotogalleryPage}>
                <div className={classes.Title}>Фотогаллерея</div>
            </div>
            <Footer/>
        </div>
    );
}

export default PhotogalleryPage;
