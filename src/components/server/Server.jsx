import React, {useEffect} from "react";
import axios from "axios";


export const Server =() => {
    const [scheduleData, setScheduleData] = React.useState([])
    const [poorhousePeople, setPoorhousePeople] = React.useState([])
    const [mersybusStations, setMersybusStations] = React.useState([])
    
    
    const [templePhotogallery, setTemplePhotogallery] = React.useState([])
    const [belltowerPhotogallery, setBelltowerPhotogallery] = React.useState([])
    const [mersybusPhotogallery, setMersybusPhotogallery] = React.useState([])
    const [poorhousePhotogallery, setPoorhousePhotogallery] = React.useState([])



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

        useEffect(() =>  {
          axios  ( {
              method: "GET",
              url:"http://127.0.0.1:8000/api/photogallery/temple",
            }).then((response)=>{
              setTemplePhotogallery(response.data)
            }) 
          } ,[])

          useEffect(() =>  {
            axios  ( {
                method: "GET",
                url:"http://127.0.0.1:8000/api/photogallery/belltower",
              }).then((response)=>{
                setBelltowerPhotogallery(response.data)
              }) 
            } ,[])

            useEffect(() =>  {
              axios  ( {
                  method: "GET",
                  url:"http://127.0.0.1:8000/api/photogallery/poorhouse",
                }).then((response)=>{
                  setPoorhousePhotogallery(response.data)
                }) 
              } ,[])

              useEffect(() =>  {
                axios  ( {
                    method: "GET",
                    url:"http://127.0.0.1:8000/api/photogallery/mersybus",
                  }).then((response)=>{
                    setMersybusPhotogallery(response.data)
                  }) 
                } ,[])
              
              useEffect(() =>  {
                axios  ( {
                    method: "GET",
                    url:"http://127.0.0.1:8000/api/mersybusstations/",
                  }).then((response)=>{
                    setMersybusStations(response.data)
                  }) 
                } ,[])

               


    const ControllerServer = {scheduleData, poorhousePeople, templePhotogallery, belltowerPhotogallery, poorhousePhotogallery, mersybusPhotogallery, mersybusStations}

    return {ControllerServer}

}