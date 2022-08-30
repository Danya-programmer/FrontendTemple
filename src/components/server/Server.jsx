import React, {useEffect} from "react";
import axios from "axios";


export const Server =() => {
    const [scheduleData, setScheduleData] = React.useState([])
    const [poorhousePeople, setPoorhousePeople] = React.useState([])

    useEffect(() =>  {
       axios  ( {
          method: "GET",
          url:"http://127.0.0.1:8000/api/schedule",
        }).then((response)=>{
            setScheduleData(response.data)
        })

        } ,[])


        useEffect(() =>  {
        axios  ( {
            method: "GET",
            url:"http://127.0.0.1:8000/api/poorhousepeople",
          }).then((response)=>{
            setPoorhousePeople(response.data)
          }) 
        } ,[])


    const ControllerServer = {scheduleData, poorhousePeople}

    return {ControllerServer}

}