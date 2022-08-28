import React, {useEffect} from "react";
import axios from "axios";


export const Server =() => {
    const [scheduleData, setScheduleData] = React.useState([])
    

    useEffect(() =>  {
       axios  ( {
          method: "GET",
          url:"http://127.0.0.1:8000/api/schedule",
        }).then((response)=>{
            setScheduleData(response.data)
        
    })
        } ,[])


    const ControllerServer = {scheduleData}

    return {ControllerServer}

}