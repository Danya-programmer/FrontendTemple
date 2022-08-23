import AOS from 'aos';
import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import classes from './BelltowerPage.module.css';

const BelltowerPage = () => {
    AOS.init({
        duration: 2000
      });
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%);'}}>
            <Header/>
            <div className={classes.Belltower}>
                <div data-aos="slide-up" className={classes.Title}>Колокольня</div>
                <section className={classes.BelltowerSection1}>
                <div data-aos="slide-up" className={classes.text}><p>В августе 2003 года была заложена колокольня. Прототип для строительства нашли в старой книге по истории русской архитектуры – знаменитую колокольню Ивана Великого в московском Кремле. </p>
                <p>Сохранили оригинальную белокаменную резьбу и общие пропорции. Только крутогорский вариант намного меньше – 35 метров против 80. </p>
                <p>Архитектором колокольни был П.А.Самосудов. Помощь в строительстве колокольни оказали Губернатор Омской области Л.К. Полежаев и генеральный директор ОАО «Омскнефтехимпроект» , депутат Законодательного Собрания Омской области И.М. Зуга. Предприятием оказана финансовая поддержка при изготовлении купола и главного колокола, выполнении строительно-монтажных работ.</p></div>
                <img  data-aos="slide-up" src={require('../../images/belltower/belltower1.webp')} alt="не работает" className={classes.Img1} />
            </section>
            <section className={classes.BelltowerSection2}>
                <div className={classes.BelltowerSection2inside}>

            <img data-aos="fade-up"    src={require('../../images/belltower/belltower2.webp')} alt="не работает" className={classes.Img2} />
                        <div  className={classes.text2}> <p className={classes.text} data-aos="slide-up"> Уникальная инженерная находка, в результате которой колокольня обрела удивительные акустические свойства, родилась почти случайно. Настоятель храма - Отец Петр искал недорогой и доступный материал для строительства. </p> 

                        <p className={classes.text} data-aos="slide-up">Снаружи кажется, что колонны служат только для поддержания стен. На самом деле они полые.</p> 

                        <p className={classes.text} data-aos="slide-up">Стальные трубы метрового диаметра и сантиметровой толщины выполняют роль резонаторов. В итоге, вся колокольня - как огромный музыкальный инструмент.</p> 
                        <p className={classes.text} data-aos="slide-up">Нашлись трубы, как говориться, с Божией помощью. "Здесь совсем недалеко есть дюкер нефтепровода - переправа через Иртыш. Там какую-то реконструкцию проводили и осталось 100 метров трубы. Я не верил, что нам их отдадут", - рассказывает Отец Петр.

                            </p> 
                            <p data-aos="slide-up" className={classes.text}>Прихожане трудились даже за темно. Так рисунок в колокольне делали в 2.00 часа ночи. Все с нетерпением ждали, когда впервые зазвучат колокола. </p>
                            </div></div>
            </section>
            <section className={classes.BelltowerSection1}>
                <div className={classes.text}>
                    <p>И через 6 лет в 2009 году в день памяти преподобного Сергия Радонежского колокольня была освящена. Но ее созданием строительство православного комплекса в Крутой Горке не завершилось. </p>
                </div>
                <img src={require('../../images/belltower/belltower3.webp')} alt="не работает" className={classes.Img1} />
            </section>
            </div>
            <Footer/>
        </div>
    );
}

export default BelltowerPage;
