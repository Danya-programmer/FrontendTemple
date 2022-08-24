import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import classes from './ContactsPage.module.css'

export default function ContactsPage() {
  return (
    <div>
        <Header/>
        
        <div className={classes.ContactsPage}>
          <div className={classes.Title}>Контакты</div>
          <div className={classes.ContactsPageMain}>
          <div className={classes.Info}>
            <div className={classes.Info1}>
                <div className={classes.InfoEmail}><p className={classes.Text}><b>E-mail:</b>hram-krgorka@yandex.ru</p> <p className={classes.Text}><b>Контактный телефон:</b>+7 (3812) 97-97-12</p></div>
                <div className={classes.Network}><div className={classes.Text}>Мы в социальных сетях:</div> 
                <div className={classes.Networks}>
                  <img src={require('../../images/contacts/vk.png')} alt="" className={classes.Img1}/>
                  <img src={require('../../images/contacts/whatsapp.png')} alt="" className={classes.Img2}/>
                </div>
                </div>
            </div>
            <p className={classes.Text}><b>Настоятель:</b> иерей Антоний Андреевич Хмелёв +7-962-047-55-85</p>
            <p className={classes.Text}><b>Контактное лицо по волонтерким вопросам:</b> Ольга, +7-965-879-97-28</p>
            <p className={classes.Text}><b>Банковские реквизиты:</b> Сбербанк 5336 6901 5898 6895 (получатель платежа Антон Андреевич Х.)</p>
            <p className={`${classes.Text} ${classes.TextT}`}><svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="65" height="64" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_412_5" transform="translate(0 -0.0078125) scale(0.0078125 0.00793457)"/>
</pattern>
<image id="image0_412_5" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>
                 <p>Автобус №197 от остановки Бархатовой до р.п Крутая горка</p></p>
          </div>
          <div className={classes.Geoposition}>
            <div className={classes.GeopositionTitle}><svg  className={classes.Line}  height="1" viewBox="0 0 415 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="415" y2="0.5" stroke="black"/>
</svg>
<p className={classes.Title}>Местоположение</p><svg className={classes.Line} height="1" viewBox="0 0 415 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="415" y2="0.5" stroke="black"/>
</svg>
              </div>
              <div className={classes.MapInfomation}>
            <iframe className={classes.Map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A74c6cc2f13e86ccbbdec5806619f4c6522ead7c5b0fa53d20e44821dbbeea338&amp;source=constructor" width="757" height="663" frameBorder="0"/>
            <div className={classes.Address}>
              dfsdsdfs
            </div>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
        </div>
  )
}
