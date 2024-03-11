import {React} from 'react';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import classes from './HumanitarianWarehousePage.module.css';



export const HumanitarianWarehousePage = () => {
   
    return (
        <div >
        <Header/>
        <main className={classes.MainContainer}>
        <p className={classes.Title}>Гуманитарный склад</p>
        <div className={classes.Section1}>
            <div  className={classes.TextContainer}>
            <p className={classes.Text1}>В поселке Крутая горка православными волонтерами открыт 
            гуманитарный склад для нуждающихся</p>
            </div>
            <img src={require('../../images/humanitarianWarehouse/img1.jpg')} alt="" className={classes.Img1} />
        </div>
        <div className={classes.Section2}>
            <img src={require('../../images/humanitarianWarehouse/img2.jpg')} alt="" className={classes.Img2}/>
            
            <p className={classes.Text2}>С мая 2023 года волонтеры Православной Службы Милосердия при храме 
            Рождества Христова в Крутой горке реализуют благотворительный проект «Территория добра».
            <br/>
            <br/>
            В рамках реализации проекта в пос. Крутая горка, на территории храма Рождества 
            Христова и преп. Сергия Радонежского был открыт гуманитарный склад.</p>
            </div>
        <div className={classes.Section3}>
            <p className={classes.Text3}><b>Гуманитарный склад</b> – это специально оборудованное помещение для сбора,
             хранения и сортировки гуманитарной помощи
            <br/>
            <br/>
            <br/>
            <br/>
            На складе постоянно трудятся более 30 волонтеров, 
            в задачи которых входит принимать одежду и продукты, сортировать их и формировать наборы.
            <br/><br/>
            Вся собранная таким образом гуманитарная помощь развозится по деревням и селам Омской области,
            отдаленным более чем на 50 км. Там их раздают нуждающимся – людям в трудной жизненной ситуации, 
            многодетным семьям, 
            пенсионерам и людям с ограниченными возможностями здоровья.
            </p>
            <img src={require('../../images/humanitarianWarehouse/img3.jpg')} alt="" className={classes.Img3}/>
        </div>
        <div className={classes.Section4}>
        <img src={require('../../images/humanitarianWarehouse/img4.jpg')} alt="" className={classes.Img4}/>
        <p className={classes.Text4}>
                Чтобы присоединиться к проекту и помогать, позвоните по телефону 48-70-60. <br/>
                Наша группа в ВК:<a className={classes.Text4l} href='https://vk.com/avtobus_miloserdiya'>https://vk.com/avtobus_miloserdiya</a>. 
            <br/><br/><br/><br/>
            Проект  "Территория добра"  реализуется при поддержке Фонда президентских грантов
            </p>
        </div>

        </main>
        
        <Footer/>
        </div>
    )
}