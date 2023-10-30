import React from 'react'
import '../app.css'
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import Purchasemain from '../components/Purchasemain'
import ActiveProfile from '../components/ActiveProfile'
import Termsofservice from '../components/Termsofservice'



const Purchased = () => {
  
  
  
  return (
    <div className='backgroundvector flex aligner justify-center '>
      <Outlet/>
      
    </div>
  )
}

export default Purchased