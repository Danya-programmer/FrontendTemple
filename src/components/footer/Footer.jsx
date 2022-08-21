import React from "react";
import classes from './Footer.module.css'


export const Footer = () => {

    return(
        <footer className={classes.footer}>
            <div className={classes.logoes}>
                <a href="https://omsk-eparhiya.ru/"><img className={classes.logoOmsk} src={require('../../images/logos/omskdiocese.png')} alt="не работает" /></a>
                <a href="http://www.patriarchia.ru/"><img className={classes.logoRussia} src={require('../../images/logos/russianorthodoxchurch.png')} alt="не работает" /></a>
            </div>
            <div className={classes.copyright}><p style={{color: 'white', fontSize: '16px'}}>© </p><p className={classes.copyrightText}>Храм Рождества Христова и Сергия Радонежского пос.Крутая горка. Все права защищены. 2022 год.</p></div>
        </footer>
    )
}