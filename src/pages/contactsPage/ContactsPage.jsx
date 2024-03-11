import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import classes from './ContactsPage.module.css'
import ButonUp from '../../components/UI/buttonUp/ButonUp';

export default function ContactsPage() {
  return (
    <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
        <Header/>
        
        <div className={classes.ContactsPage}>
          <div className={classes.Title} id='info'>Контакты</div>
          <div className={classes.ContactsPageMain}>
          <div className={classes.Info}>
            <div className={classes.Info1}>
                <div className={classes.InfoEmail}><p className={classes.Text1}><b>E-mail: </b><a className={classes.Link} href="moilto:hram-krgorka@yandex.ru" >hram-krgorka@yandex.ru</a></p> <p className={classes.Text1}><b>Контактный телефон: </b>
                <a href="tel:+7 (3812) 97-97-12" className={classes.Link} >+7 (3812) 97-97-12</a></p>
                <p className={classes.Text1}><b>Настоятель: </b> иерей Антоний Андреевич Хмелёв <a href="tel:+7-962-047-55-85" className={classes.Link} >+7-962-047-55-85</a></p>
            <p className={classes.Text1}><b>Контактное лицо по волонтерским вопросам: </b> Ольга, <a href="tel:+7-965-879-97-28" className={classes.Link} >+7-965-879-97-28</a></p>
            <p className={classes.Text1}><b>Банковские реквизиты: </b> Сбербанк 5336 6901 5898 6895 (получатель платежа Антон Андреевич Х.)</p>
            <p className={classes.Text1}><b>Мы в социальных сетях: </b> <a href="https://vk.com/chramkgorka" className={classes.Link} >vk.com/chramkgorka</a></p>
            </div>
            <br/>
            
                
            
            </div>
            
            <p className={`${classes.Text} ${classes.TextT}`}>
            <img src={require("../../images/contacts/busStation.png")} alt=""  className={classes.BusImg}/>
                 <p>Автобус №197 от остановки Бархатовой до р.п Крутая горка</p></p>
          </div>
          <div className={classes.Geoposition} id='geo'>
            <div className={classes.GeopositionTitle}><svg  className={classes.Line}  height="1" viewBox="0 0 415 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="415" y2="0.5" stroke="black"/>
</svg>
<p className={classes.Title}>Местоположение</p><svg className={classes.Line} height="1" viewBox="0 0 415 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="415" y2="0.5" stroke="black"/>
</svg>
              </div>
              <div className={classes.MapInfomation}>
            <iframe className={classes.Map} title={'geoposition'} src="https://yandex.ru/map-widget/v1/?um=constructor%3A74c6cc2f13e86ccbbdec5806619f4c6522ead7c5b0fa53d20e44821dbbeea338&amp;source=constructor" width="757" height="663" frameBorder="0"/>
            <div className={classes.Address}>
              <p className={`${classes.Text} ${classes.geoText}`}>Адрес: Россия, Омская область, р.п. Крутая Горка, ул. Полтавцева, 2а</p>
              <a href="https://yandex.ru/maps/?from=mapframe&ll=73.217645%2C55.364103&mode=routes&rtext=~55.364110%2C73.217479&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1059766135&source=mapframe&um=constructor%3A74c6cc2f13e86ccbbdec5806619f4c6522ead7c5b0fa53d20e44821dbbeea338&utm_source=mapframe&z=17.08" className={classes.Button}><p className={classes.WhiteText}>Построить маршрут</p></a>
            </div>
            </div>
          </div>
          </div>
        </div>
        <ButonUp/>
        <Footer/>
        </div>
  )
}
