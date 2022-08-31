import React from 'react'
import { Server } from '../server/Server'
import classes from './PoorhousePagePeople.module.css'


export default function PoorhousePagePeople() {
  const people = Server().ControllerServer.poorhousePeople
  console.log(people)


  return (
    <div style={{margin: '0 3vw 0 3vw'}}>
      
       {people.map(men => {
        return (men.id%2===1) ? (
        <div className={classes.PoorhousePagePeople}>
        <img src={men.image} alt="не работает" className={classes.Img} />
        <div className={classes.MainText}>
          <div className={classes.Title}>{men.name}</div>
          <div className={classes.Text} >{men.text}</div>
        </div>
      </div>) : (
        <div className={classes.PoorhousePagePeople2}>
        <div className={classes.MainText}>
          <div className={classes.Title}>{men.name}</div>
          <div className={classes.Text}>{men.text}</div>
        </div>
        <img src={men.image} alt="не работает" className={classes.Img} />
      </div>)
       }
       )}
    </div>
    )
  
}
