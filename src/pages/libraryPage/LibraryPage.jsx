import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import classes from './LibraryPage.module.css'

const LibraryPage = () => {
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%);'}}>
            <Header/>
            <div className={classes.LibraryPage}>
                <div className={classes.Title}>Библиотека</div>
                <img src="" alt="" className="" />
                <section className={classes.Section2}>
                    <div className={classes.Section2inside}>
                        <img src="" alt="" className="" />
                        <div className={classes.Text}></div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default LibraryPage;
