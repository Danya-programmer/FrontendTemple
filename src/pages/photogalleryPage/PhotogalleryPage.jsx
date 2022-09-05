import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import classes from './PhotogalleryPage.module.css'
import ButonUp from '../../components/UI/buttonUp/ButonUp';
import './PhotogalleryPage.module.css'
import { Link } from 'react-router-dom';

const PhotogalleryPage = () => {
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
            <Header/>
            <div classes={classes.PhotogalleryPage}>
                <div className={classes.Title}>Фотогаллерея</div>
                <Link to='/photogallery/temple' style={{textDecoration: 'none'}}>
                    <div className={classes.TemplePhotos}>
                    <div className={classes.Temple}>
                        <img src={require('../../images/photogallery/Templemain.jpg')} alt="" className={classes.MainPhoto} />
                        <div className={classes.Other}>
                            <img src={require('../../images/photogallery/temple1.jpg')} alt="" className={classes.OtherPhoto} />
                            <img src={require('../../images/photogallery/temple2.jpg')} alt="" className={classes.OtherPhoto} />
                        </div>
                    </div>
                  <div className={classes.TextinPhotos}>
                    <p className={classes.Text}>Храм</p>
                  </div>
                </div>
                </Link>
                <Link to='/photogallery/belltower' style={{textDecoration: 'none'}}>
                    <div className={classes.TemplePhotos}>
                    <div className={classes.Temple}>
                        <img src={require('../../images/photogallery/belltower1.jpg')} alt="" className={classes.MainPhoto} />
                        <img src={require('../../images/photogallery/belltower2.jpg')} alt="" className={classes.MainPhoto} />
                        </div>
                    
                  <div className={classes.TextinPhotos}>
                    <p className={classes.Text}>Колокольня</p>
                  </div>
                  </div>
                </Link>
                <Link to='/photogallery/poorhouse' style={{textDecoration: 'none'}}>
                    <div className={classes.TemplePhotos}>
                        <img src={require('../../images/photogallery/poorhouse.jpg')} alt="" className={classes.PoorhousePhoto} />
                  <div className={classes.TextinPhotos}>
                    <p className={classes.Text}>Богадельня</p>
                  </div>
                  </div>
                </Link>
                <Link to='/photogallery/mersybus' style={{textDecoration: 'none'}}>
                    <div className={classes.TemplePhotos}>
                    <div className={classes.Temple}>
                        <img src={require('../../images/photogallery/bus1.jpg')} alt="" className={classes.MainPhoto} />
                        <img src={require('../../images/photogallery/bus2.jpg')} alt="" className={classes.MainPhoto} />
                        </div>
                    
                  <div className={classes.TextinPhotos}>
                    <p className={classes.Text}>Автобус милосердия</p>
                  </div>
                  </div>
                </Link>
                <ButonUp/>
            </div>
            <Footer/>
        </div>
    );
}

export default PhotogalleryPage;
