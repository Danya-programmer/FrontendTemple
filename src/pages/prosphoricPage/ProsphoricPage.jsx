import classes from './ProsphoricPage.module.css'
import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

const ProsphoricPage = () => {
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%);'}}>
            <Header/>
            <div className={classes.ProsphoricPage}>
                <div className={classes.ProsphoricPageSection1}>
                    <div className={classes.ProsphoricPageSection1Text}>
                        <div className={classes.Text}> <p> Просфорная - одно из самых ответственных послушаний в нашем храме. </p> 
                        <p>В просфорной всегда благоговейная тишина, наполненная молитвой, ведь здесь готовится особое приношение, без которого невозможно совершать Божественную Литургию.</p> </div>
                    </div>
                    <img src={require('../../images/prosphoric/prosphoric1.webp')} alt="не работает" className={classes.Img1} />
                </div>
                <img src={require('../../images/prosphoric/prosphoric2.webp')} alt="не работает" className={classes.Img2} />
            </div>
            <Footer/>
        </div>
    );
}

export default ProsphoricPage;
