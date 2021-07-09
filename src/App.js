/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import { Notour } from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [ loading, setLoading] = useState(true)
  const [ data, setData] = useState([])
  const getData = async () =>{
    setLoading(true)
    const req = await fetch(url)
    const res = await req.json()
    // console.log(res)
    setData(res)
    
  }
  useEffect(() => {
    getData()
    setLoading(false)
   
  }, [])
  const getTour = () => {
    getData()
  }
  const reload = () => {
    return window.location.reload()
  }
    const removeTour = (id) => {
      const newTour = data.filter((item) => {
        if(item.id !== id){
          return item 
        }
      })
      setData(newTour)
    }
  if(loading){
    return <Loading  />
  }else{
      return(
        <main>
        <Tours  data={data} removeItem={removeTour}/>
        {
          data.length === 0 ? <Notour  getTours={getTour}/>
          : null 
        }
    </main>
      )
  }
  
}

export default App
