import React from "react";
import {NavLink} from "react-router-dom"; 
import { DropDownMenu } from "../UI/dropDownMenu/DropDownMenu";
import classes from './Header.module.css'
export const Header = () => {
    const menuItemsTemple = [{'to':'history','title':'История храма'},{'to':'belltower','title':'Колокольня'}, {'to':'prosphoric','title':'Просфорная'}, {'to':'library','title':'Библиотека'}] 
    const menuItemSocialService = [{'to':'mercybus','title':'Автобус милосердия'},{'to':'Almshouse','title':'Дом сопровождаемого проживания(Богадельня)'}] 

    return(
        <div className={classes.Header}>
            <NavLink to='/' className={classes.navlinkLogo}>
            <div className={classes.logo}>
                <img className={classes.logoImg} src={require('../../images/logos/logo.png')} alt="не работает" />
                <div className={classes.logoTitle}>Храм Рождества Христова и Преподобного Сергия Радонежского  
                пос. Крутая горка</div>
            </div>
            </NavLink>
            <hr className={classes.orangeLine}/>
            <div className={classes.menu}>
            <DropDownMenu  menuItems={menuItemsTemple} title={'О храме'}/>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Расписание богослужений</NavLink>
                <DropDownMenu  menuItems={menuItemSocialService} title={'Cоциальное служение'}/>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Фотогалерея</NavLink>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Контакты</NavLink>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Пожертвования</NavLink>
            </div>
            <div ><hr className={classes.line}/></div>
            
        </div>
    )

}