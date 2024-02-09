import React from "react";
import {NavLink} from "react-router-dom"; 
import { DropDownMenu } from "../UI/dropDownMenu/DropDownMenu";
import classes from './Header.module.css'
export const Header = () => {
    const menuItemsTemple = [{'to':'/history','title':'История храма'},{'to':'/belltower','title':'Колокольня'}, {'to':'/prosphoric','title':'Просфорная'}, {'to':'/library','title':'Библиотека'}, {'to':'/sundayschool','title':'Воскресная школа для взрослых'}] 
    const menuItemSocialService = [{'to':'/heatingpoint','title':'Пункт обогрева'},{'to':'/mercybus','title':'Автобус милосердия'}, {'to':'/orphanage','title':'Социальное служение в интернатах'}, {'to':'/poorhouse','title':'Дом сопровождаемого проживания(Богадельня)'},
    {'to':'/humanitarianwarehouse','title':'Гуманитарный склад'}] 

    return(
        <div className={classes.Header}>
            <NavLink to='/' className={classes.navlinkLogo}>
            <div className={classes.logo}>
                <img className={classes.logoImg} src={require('../../images/logos/logo.png')} alt="не работает"/>
                <div className={classes.logoTitle}>Храм Рождества Христова и Преподобного Сергия Радонежского  
                пос. Крутая горка</div>
            </div>
            </NavLink>
            <hr className={classes.orangeLine}/>
            <div className={classes.menu}>
            <DropDownMenu  menuItems={menuItemsTemple} title={'О храме'}/>
                <NavLink to='/schedule' className={navData => navData.isActive ? classes.active : classes.menuItem}>Расписание богослужений</NavLink>
                <DropDownMenu  menuItems={menuItemSocialService} title={'Cоциальное служение'}/>
                <NavLink to='/photogallery' className={navData => navData.isActive ? classes.active : classes.menuItem}>Фотогалерея</NavLink>
                <NavLink to='/contacts' className={navData => navData.isActive ? classes.active : classes.menuItem}>Контакты</NavLink>
                <NavLink to='/donations' className={navData => navData.isActive ? classes.active : classes.menuItem}>Пожертвования</NavLink>
            </div>
            <div ><hr className={classes.line}/></div>
            
        </div>
    )

}