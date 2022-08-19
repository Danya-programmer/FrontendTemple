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
                <img className={classes.logoImg} src="https://s3-alpha-sig.figma.com/img/41af/7238/eec36336c08546e8eb647f7dee0b9b90?Expires=1661731200&Signature=eYgMMlauWpzqcxrHvP5dqorpBYbsbGxWHs4FdA~AQ7NfQyq8df~XZ-0zMkNxbEscMThlnAGrlejAOsXfWgaQiLhd71G0eagopoAMkyA3JuxA02pa8vSbAr-4lD6j4-I-RiPUbAkxtOKLkz9Qpxy08pW4xDa3Dp59~xaT0-lyzeHFgqwzcLeTNODLeMP6B6O5hD~-KIxCJ~nyH9e2u1EimRhu99BJcQTF2eNgrVS364Vzl09QBroMRdQVhMV-LG-CcK2wEYgz~PrT2RDdS0qU6PBEC-IgiW7NWzyE30l68il0IDXzlzAW8Ahvt~vxqld-jRKzmiDLtRvjzblS1x7NuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="не работает" />
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