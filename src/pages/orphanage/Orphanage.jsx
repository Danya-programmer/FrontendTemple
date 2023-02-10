import React from 'react';
import AOS from 'aos';
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import classes from './Orphanage.module.css'

const Orphanage = () => {
  AOS.init({
    duration: 2000
  });
    return (
        <div>
          <Header/>
          <div className={classes.Orphanage}><br/><br/>
            <p className={classes.Title} data-aos="slide-up">Социальное служение в интернатах</p><br/>
              <div className={classes.Section} data-aos="slide-up" data-aos-once='true'> 
                <img src={require('../../images/orphanage/orphanage1.jpg')} alt="не работает" className={classes.Img}/>
              <div className={classes.SectionText}><p className={classes.TitleText}>Кировский детский дом-интернат</p><br/><p className={classes.Text}>
                ст.Входная, ул. Челябинская, д.2, <br className={classes.Br}/> дети с 4 до 18 лет.<br/><br/><br/>
                На территории интерната расположен домовой храм во имя Цесаревича Алексия. В храме служится молебен, читаются акафисты, по праздникам совершается Божественная Литургия.
                <br/>Еженедельно, по понедельникам оказывается комплексная помощь в санитарно-гигиеническом уходе за детьми.
                </p></div>
              </div>
               
              <div className={classes.Section} data-aos="slide-up" data-aos-once='true'>
              
              <div className={classes.SectionText}><p className={classes.TitleText}>Специализированный дом-малютки № 2</p><br/><p className={classes.Text}>

г.Омск, ул. Рокоссовского, д. 12/2,<br className={classes.Br}/> дети 0-4 года <br/><br/><br/>

На территории дома-малютки расположен домовой храм Рождества Пресвятой Богородицы. По праздникам в храме служится Божественная Литургия, при необходимости совершается Таинство Крещения детей.
                </p></div>
                
                <img src={require('../../images/orphanage/orphanage2.jpg')} alt="не работает" className={classes.Img}/>
              </div>
           
            
          </div>
          <Footer/>
      </div>
    );
}

export default Orphanage;
