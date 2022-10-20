import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Server } from '../../components/server/Server'
import ButonUp from '../../components/UI/buttonUp/ButonUp';
import Loading from '../../components/UI/loading/loading';
import classes from './SchedulePage.module.css'

export default function SchedulePage() {
  const scheldureData = Server().ControllerServer.scheduleData
  
  return (
    <div style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #ECECEC 99.99%)'}}>
        <Header/>
        <div className={classes.Images}>
        <div className={classes.Title}>Расписание богослужений</div>
        {scheldureData.length ===0 ?<div><Loading/></div>
        : scheldureData.map((data) => (
          <img key={data.image} src={data.image} alt="не работает" className={classes.Img} />
        ))}
        
       </div>
       <ButonUp/>
        <Footer/>
    </div> 
  )
}
