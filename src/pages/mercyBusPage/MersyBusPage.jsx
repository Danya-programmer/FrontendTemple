import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { HashLink as Link } from 'react-router-hash-link';
import classes from './MercyBusPage.module.css'
import ButonUp from '../../components/UI/buttonUp/ButonUp';
import Aos from 'aos'
import { Server } from '../../components/server/Server'
const MercyBusPage = () => {
    const mersybusStaionsData = Server().ControllerServer.mersybusStations
    
    Aos.init({
        duration: 1200
      });
    return (
        <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
           <Header/>
           <div className={classes.MercyBusPage}>
            <div className={classes.Title}>Автобус милосердия</div>
            <div data-aos='slide-up' className={classes.Section}>
                <img src={require('../../images/mercyBus/bus1.jpg')} alt="" className={classes.Img} />
                <div className={classes.Texts}><div className={classes.Text1}> Автобус милосердия – общественно-церковный проект помощи бездомным людям и людям в трудной жизненной ситуации. </div>
<div className={classes.Text1}>Еженедельно специально оборудованный автобус выезжает в пункты кормления для раздачи горячего питания, сезонной обуви и одежды. </div>
<div className={classes.Text1}>При необходимости подопечные получают медицинскую, психологическую и юридическую помощь.</div>
</div>
            </div>
            <div data-aos='slide-up' className={classes.Section}>
                
            <div className={classes.Texts}><div className={classes.Text1}>Команда Автобуса милосердия состоит из водителя, социального работника и волонтеров. </div>
                    <div className={classes.Text1}>Присоединиться к проекту может любой желающий!</div></div>
                <img src={require('../../images/mercyBus/bus2.jpg')} alt="" className={classes.Img} />
                
                </div>
            <div data-aos='slide-up' className={classes.Section}>
                <img src={require('../../images/mercyBus/bus3.jpg')} alt="" className={classes.Img} />
                <div className={classes.Texts}>
                    <p className={classes.Text1}>Автобус милосердия организует горячие обеды для людей, попавших в трудную жизненную ситуацию.</p>
                    <p className={classes.Text1}>Трижды в неделю волонтеры раздают еду и одежду бездомным на улицах Омска. </p> 
                    <p className={classes.Text1}>Присоединяйтесь и вы к нашей дружной компании!</p>
                </div>
            </div>
            <Link to='/contacts#info'  className={classes.Button}><p className={classes.WhiteText}>Стать волонтером</p></Link>
            <div className={classes.Title}>Пожертвовать посуду и одежду</div>
            <div className={classes.Text} >Вы очень поможете нам, если купите и привезете одноразовую посуду на любую стоянку Автобуса милосердия. Из одноразовой посуды в кормлении мы используем суповые тарелки, ложки и кружки для чая.
Также вы можете передать одежду для бездомных. Сейчас пришло время пополнить эти запасы, поэтому мы обращаемся к вам, друзья. Для раздачи бездомным нам нужна чистая мужская одежда по сезону
Если подъехать ко времени стоянки возможности нет, позвоните по телефону +7 (3812) 48-70-60 и договоритесь о передаче в другое удобное для вас время.</div> 
            </div>
            <div className={classes.DressAndFood}>
                <img src={require('../../images/mercyBus/busDress.jpg')} alt="" className={classes.ImgDressAndFood} />
                <img src={require('../../images/mercyBus/busFood.jpg')} alt="" className={classes.ImgDressAndFood} />
            </div>
            {mersybusStaionsData.map((data) => (
          <img src={data.image} alt="не работает" className={classes.Bustime} />
        ))}
            <ButonUp/>
           <Footer/>
           
        </div>
    );
}

export default MercyBusPage;
