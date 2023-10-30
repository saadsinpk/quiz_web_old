import React from 'react'
import '../app.css'
import {Routes, Route, Link, Outlet } from 'react-router-dom'




const Home = () => {
  
  
  
  return (
    <div className='backgroundvector flex aligner justify-center '>
      <Outlet/>
      
    </div>
  )
}

export default Home
