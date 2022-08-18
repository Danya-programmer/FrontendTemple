import React from "react";
import {NavLink} from "react-router-dom"; 
import { DropDownMenu } from "../UI/dropDownMenu/DropDownMenu";
import classes from './Header.module.css'
export const Header = () => {
    const menuItems = ['История храма','Колокольня', 'Просфорная', 'Библиотека'] 
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
            <DropDownMenu  />
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Расписание богослужений</NavLink>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Социальное служение <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.82662 16.9345L0.431541 0.57201H17.2217L8.82662 16.9345Z" fill="black"/>
</svg> </NavLink>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Фотогалерея</NavLink>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Контакты</NavLink>
                <NavLink to='/f' className={navData => navData.isActive ? classes.active : classes.menuItem}>Пожертвования</NavLink>
            </div>
            <div ><hr /></div>
            
        </div>
    )

}