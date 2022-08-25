import React from 'react';
import classes from './PoorhousePage.module.css'
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import AOS from 'aos';
import { HashLink as Link } from 'react-router-hash-link';
import PoorhousePageFrame from '../../components/poorhousePageFrame/poorhousePageFrame';

const PoorhousePage = () => {
    AOS.init({
        duration: 1200
      });
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
            <Header/>
            <div className={classes.PoorhousePage}>
                <div className={classes.Title}>Богадельня во имя Святителя Иоанна Шанхайского и Сан-Францисского при храме Рождества Христова и прп. Сергия Радонежского</div>
                <div className={classes.ImgBack}>
                    
                    <img src={require('../../images/poorhouse/poorhouse.jpg')} alt="не работает" className={classes.ImgMain} />
                    <div data-aos='slide-up' className={classes.ImgTitle}>Богадельня (от слов Бога для, то есть ради Бога) - благотворительное место для содержания нетрудоспособных лиц (престарелых, немощных, инвалидов и пр).</div>
                </div>
                <div className={classes.Text} ><p>Строительство богадельни началось в 2015 году по благословению Митрополита Омского и Таврического Владимира. 
                    С Божьей помощью и при участии неравнодушных людей дом был построен в 2017 году и рассчитан на проживание 15 человек. </p>
                    <p>На первом этаже располагается кухня, просторная трапезная, несколько комнат для проживания. На втором этаже располагаются комнаты для проживания. На текущий момент в доме размещаются 7 человек. 
                    Все вместе они учатся совместному проживанию, поддерживают друг друга, по возможности помогают в благоустройстве территории храма и дома, и участвуют в Богослужениях. </p>
                    <nav>
                        <b>Для содержания богадельни регулярно требуется помощь в виде:</b>
                        <li style={{margin: '10px 0 10px 0'}}>продуктов питания</li>
                        <li style={{margin: '10px 0 10px 0'}}>средств гигиены (памперсы для взрослых, пеленки, зубная паста, мыло, влажные салфетки и пр.)</li>     
                        <li style={{margin: '10px 0 10px 0'}}>медикаменты первой мед.помощи (зеленка, бинт, йод и пр.)</li>
                        <li style={{margin: '10px 0 10px 0'}}>средства реабилитации для инвалидов,</li> 
                        <li style={{margin: '10px 0 10px 0'}}>средства бытовой химии (стиральный порошок, чистящие   средства и пр.)</li> 
                    </nav>
                    <div >Передать продукты/вещи можно любым удобном способом:
                        в Омске, через настоятеля или наших прихожан.<Link to='/contacts#info' style={{textDecoration: 'none', color: '#DF6033'}}>(см. раздел контакты)</Link></div>
                        <p>С радостью примем Вашу помощь!</p>
        </div>
                <div className={classes.PeopleTitle}><svg  className={classes.Line}  height="1" viewBox="0 0 415 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="415" y2="0.5" stroke="black"/>
                    </svg>
                        <p className={classes.Title}>Подопечные богодельни</p><svg className={classes.Line} height="1" viewBox="0 0 415 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="415" y2="0.5" stroke="black"/>
                </svg>
              </div>
            <PoorhousePageFrame/>
            </div>
            <Footer/>
        </div>
    );
}

export default PoorhousePage;