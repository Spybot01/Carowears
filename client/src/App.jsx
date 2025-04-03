import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  // const url = 'http://localhost:5500/test'
  const url = 'https://second-class.vercel.app/api'
  const getInfo = ( )=>{
    axios.get(url)
    .then((res)=>{
      console.log(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }


  return (
    <>
      <button onClick={getInfo}>Get Info</button>
    </>
  )
}

export default App
