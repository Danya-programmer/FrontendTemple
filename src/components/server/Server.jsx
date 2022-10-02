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
          url:"https://temple-krutayagorka-server.ru/api/schedule?format=json",
        }).then((response)=>{
            setScheduleData(response.data)
        })

        } ,[])


        useEffect(() =>  {
        axios  ( {
            method: "GET",
            url:"https://temple-krutayagorka-server.ru/api/poorhousepeople?format=json",
          }).then((response)=>{
            setPoorhousePeople(response.data) 
          }) 
        } ,[])

        useEffect(() =>  {
          axios  ( {
              method: "GET",
              url:"https://temple-krutayagorka-server.ru/api/photogallery/temple?format=json",
            }).then((response)=>{
              setTemplePhotogallery(response.data)
            }) 
          } ,[])

          useEffect(() =>  {
            axios  ( {
                method: "GET",
                url:"https://temple-krutayagorka-server.ru/api/photogallery/belltower?format=json",
              }).then((response)=>{
                setBelltowerPhotogallery(response.data)
              }) 
            } ,[])

            useEffect(() =>  {
              axios  ( {
                  method: "GET",
                  url:"https://temple-krutayagorka-server.ru/api/photogallery/poorhouse?format=json",
                }).then((response)=>{
                  setPoorhousePhotogallery(response.data)
                }) 
              } ,[])

              useEffect(() =>  {
                axios  ( {
                    method: "GET",
                    url:"https://temple-krutayagorka-server.ru/api/photogallery/mersybus?format=json",
                  }).then((response)=>{
                    setMersybusPhotogallery(response.data)
                  }) 
                } ,[])
              
              useEffect(() =>  {
                axios  ( {
                    method: "GET",
                    url:"https://temple-krutayagorka-server.ru/api/mersybusstations?format=json",
                  }).then((response)=>{
                    setMersybusStations(response.data)
                  }) 
                } ,[])

               


    const ControllerServer = {scheduleData, poorhousePeople, templePhotogallery, belltowerPhotogallery, poorhousePhotogallery, mersybusPhotogallery, mersybusStations}

    return {ControllerServer}

}
