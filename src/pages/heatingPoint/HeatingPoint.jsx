import React from 'react';
import AOS from 'aos';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import classes from './HeatingPoint.module.css'
import { Parallax } from 'react-parallax';
import ButonUp from '../../components/UI/buttonUp/ButonUp';

const HeatingPoint = () => {
    AOS.init({
        
      });
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
            <Header/>
            <div className={classes.HeatingPoint} >
            <p className={classes.Title} data-aos="slide-up" data-aos-duration='1200'>Пункт обогрева</p>
                <Parallax  bgImage={require('../../images/heatingPoint/backgroundHeatingPoint.jpg')} bgImageAlt="not work" strength={200} style={{borderRadius: '10px'}}>
                    <div className={classes.insideParallax}>     
                    </div>
                </Parallax>
                <div className={classes.Section2}>
                        <div className={classes.Section2Text1}>
                            <p className={classes.Text} data-aos="slide-up" data-aos-duration='1500'>Пункт обогрева представляет собой двухслойную зимнюю палатку с 
                            деревянным полом и тепловой пушкой, которая поддерживает нужную температуру внутри.</p> 
                            
                        </div>
                        <div className={classes.Section2Text2}>
                            <p className={classes.Text} data-aos="slide-up" data-aos-duration='2500'>Обратившиеся за помощью получат здесь бесплатный ночлег, 
                            горячий ужин и завтрак, а также консультации администраторов по вопросам оказания 
                            социальной помощи.</p> 
                        </div>
                       
                </div>
                <div className={classes.Section3}>
                    <img src={require('../../images/heatingPoint/heatingPoint1.jpg')} alt='не работает' className={classes.Images}/>
                    <div className={classes.Section3Text} data-aos="slide-up" data-aos-duration='1500' data-aos-once='true'><p className={classes.TextSpeak}>«Это уникальный проект для нашего города, – рассказал настоятель храма Рождества Христова в поселке Крутая горка священник Антоний Хмелев. – Он важен для каждого человека, оставшегося на улице, потому что поможет пережить зиму без обморожений и болезней. Согреться, сытно поесть, переодеться в чистую одежду. А ещё - ощутить заботу добрых людей».</p></div>
                </div>
                <div className={classes.Section3}>
                    <div className={classes.Section3Text} data-aos="slide-up" data-aos-duration='1500' data-aos-once='true'><p className={classes.Text}>Пункт обогрева открыт для приема с 1 октября по 30 апреля, <b>с 20.00 до 8.00</b>. <br/> <br/>Он располагается по адресу: <b>Омск, поселок Солнечный, улица Багнюка, дом 8/1</b>. 

                    <br/><br/>Проезд на маршрутке №470 до остановки «Улица Багнюка». 
В пункте обогрева круглосуточно находятся 2 дежурных администратора. Они следят за порядком и оказывают всю необходимую помощь подопечным.

Проект запустили при поддержке Фонда президентских грантов.

<br/><br/>Единый справочный телефон по всем вопросам: <b>48-70-60</b>.

</p></div>
                    <img src={require('../../images/heatingPoint/heatingPointInside.jpg')} alt='не работает' className={classes.Images}/>
                </div>
            </div>
            <ButonUp/>
            <Footer/>
        </div>
    );
}

export default HeatingPoint;
