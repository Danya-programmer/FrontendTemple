import AOS from 'aos';
import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import classes from './HistoryPage.module.css'

export const HistoryPage = () => {
    AOS.init({
        duration: 1200
      });
    return(
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%);'}}>
            <Header />
            <div className={classes.HistoryPage}>
                <p className={classes.Title} data-aos="slide-up">История храма</p>
                <section  className={classes.HistorySectionfirst} >
                    <div className={`${classes.text}`} 
     >В 1995 году в детском садике была выделена комната для совершения богослужений. Так появился Храм в поселке. Первый служил батюшка Ксенофонт. Потом-батюшка Олег (Тыртышный). В дальнейшем он принял монашество с именем Александр. А в 33 года батюшку убили в Колосовке.</div>
                    <div className={classes.HistorySection1}>
                        <img src={require('../../images/history/history1.jpg')} alt="не работает" className={`${classes.img1}`} data-aos="slide-up"/> 
                        <div className={`${classes.text1} `} data-aos="slide-up"> <p className={classes.text}> В 1996 году из Большекулачья приехал служить отец Петр (Мансуров). Появилась потребность в отдельном Храме.</p>

                            <p className={classes.text} data-aos="slide-up">При содействии Губернатора Омской области Л.К. Полежаева под строительство Храма было выделено полуразрушенное здание бывшего спортивного зала. </p>

                            <p className={classes.text} data-aos="slide-up" >Все строительные работы велись собственными силами священника и прихожан (в основном людьми преклонного возраста от 60 лет и старше).</p>
                            </div>
                            </div></section>
            <section className={classes.HistorySection2} data-aos="slide-up">
            <img  src={require('../../images/history/history2.jpg')} alt="не работает" className={classes.img1} /> 
                        <div  className={`${classes.text1} `} data-aos="slide-up"> <p className={classes.text} > Обустраивали Храм всем миром. Умелые, трудолюбивые руки прихожан и батюшки Петра практически заново отстраивали стены, штукатурили, красили своды купола и благоустраивали территорию. </p>
                            <p className={classes.text}>Работали до поздна, ужин был в 23.00 часа. Летом от комаров разводили костер.</p>
                            <p className={classes.text}>Несмотря на тяжелые физические нагрузки, работали с радостью и Божией помощью.</p>
                            </div>
            </section>
            <section className={classes.HistorySection3}>
            <img data-aos="slide-right" src={require('../../images/history/history3.jpg')} alt="не работает" className={classes.img3} /> 
                        <div data-aos="slide-left" className={classes.text3}> <p className={classes.textWhite} data-aos="slide-up"> Первая служба состоялась в нижнем Храме (с пределом преподобного Сергия Радонежского) в 1997 году на Пасху. </p>
                            <p className={classes.textWhite} data-aos="slide-up">В большом Храме (с пределом Рождества Христова) шли ремонтно-строительные работы, а в нижнем Храме совершались богослужения. </p>
                            <p className={classes.textWhite} data-aos="slide-up">Строительство Храма длилось 7 лет.</p>
                            </div>
            </section>
            <section className={classes.HistorySection4} >
                <div className={classes.text4}>В 2013 году теперь уже Владыка Петр  служит в Калачинской и Муромцевской епархии. Настоятелем Храма становится иерей Антоний (Хмелев). В Храме по-прежнему совершаются литургия, таинства (крещения, венчания, исповеди, причастия, соборования), требы. Храм является центром духовной жизни прихожан.
</div>
        <img data-aos="zoom-in"  src={require('../../images/history/history4.jpg')} alt="не работает" className={classes.img4} />
        <div className={classes.text4}>Жизнь идет, но неизменной остается лишь вера в Бога, упование на промысел Божий. Будем дорожить своим православным Храмом как небесным островком на грешной земле. Будем содействовать его красоте и благолепию совершаемых в нем богослужений, потому что в Храме особенно чувствуется Благодать Божия.</div>
            </section>
            </div>
            <Footer/>
        </div>
    )
}