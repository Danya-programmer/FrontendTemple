import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Server } from '../../components/server/Server'
import ButonUp from '../../components/UI/buttonUp/ButonUp';
import classes from './SchedulePage.module.css'

export default function SchedulePage() {
  const scheldureData = Server().ControllerServer.scheduleData
  return (
    <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
        <Header/>
        <div className={classes.Images}>
        <div className={classes.Title}>Расписание богослужений</div>
        {scheldureData.map((data) => (
          <img src={data.image} alt="не работает" className={classes.Img} />
        ))}
       </div>
       <ButonUp/>
        <Footer/>
    </div> 
  )
}
