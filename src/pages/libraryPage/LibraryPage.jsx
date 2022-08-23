import Aos from 'aos';
import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import classes from './LibraryPage.module.css'

const LibraryPage = () => {
    Aos.init({
        duration: 2000
      });
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%);'}}>
            <Header/>
            <div className={classes.LibraryPage}>
                <div className={classes.Title}>Библиотека</div>
                <img src={require('../../images/library/library1.jpg')} alt="" className={classes.Img1} />
                <section className={classes.Section2}>
                    <div className={classes.Section2inside}>
                        <img src={require('../../images/library/library2.jpg')} alt="" className={classes.Img2} />
                        <div className={classes.Text} data-aos='fade-up'><p>Сергей, подопечный Дома, который очень нужен, несет в храме послушание библиотекаря. </p>
                        <p>Вдохновило его на это посещение обычной библиотеки в поселке. К тому же, Сергей умеет читать и очень любит книги. </p>
                        <p>С помощью других он постигает премудрости библиотечного дела - учится разбираться в книгах, систематизирует их по темам, ведет запись читателей и карточки на каждого.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default LibraryPage;
