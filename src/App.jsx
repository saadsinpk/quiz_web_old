import React, { useState } from 'react'
import './app.css'
import {Routes, Route, NavLink, Link} from 'react-router-dom'
import Home from './pages/Home'
import Howitworks from './pages/Howitworks'
import Purchased from './pages/Purchased'
import Mainhome from './components/mainhome'
import Welcome from './components/Welcome'
import SelectedQuiz from './components/SelectedQuiz'
import Questions from './components/Questions'
import ReviewQuestions from './components/ReviewQuestions'
import ForgotPassword from './components/ForgotPassword'
import Loginmain from './components/Loginmain'
import Signup from './components/Signup'
import Purchasemain from './components/Purchasemain'
import ActiveProfile from './components/ActiveProfile'
import Termsofservice from './components/Termsofservice'
import Review from './components/review'

import Login from './pages/Login'
import { useRef } from 'react'

const App = () => {
  
  const showitems = useRef()
  const [showmenu,setShowmenu] = useState(false)

  const displayer=()=>{
    
    setShowmenu(!showmenu)
    if(showmenu == true){
    showitems.current.classList.remove('myClasss')
    }
    else(
      showitems.current.classList.add('myClasss')
    )
  }




  
  return (
    <div>
      <nav className='navbar h-28'>
        <a href="#" className='toggle-button '  onClick={displayer} >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>

        <div className='navlinkadded pt-2 aligner myClasss z-30 pr-7' ref={showitems} >
          <button className='navlinks text-slate-500 p-4 px-8 fontpoppins' ><NavLink to={'/'}>Home</NavLink></button>
          <button className='navlinks text-slate-500 p-4 px-8 fontpoppins'><NavLink to={'/howitworks'}>How it works?</NavLink></button>
          <button className='navlinks text-slate-500 p-4 px-8 fontpoppins'><NavLink to={'/purchased'}>Purchased</NavLink></button>
          
          <button className='navlinks border-blue-800 text-blue-800 p-4 px-9 border-2 fontpoppins '><Link to={'/login'}>Login</Link></button>
        </div>
      </nav>
    <Routes>
      <Route path='/' element={<Home/>}>
      
        <Route index element={<Mainhome/>} />
        <Route path='welcome' element={<Welcome/>} />
        <Route path='selectedquiz' element={<SelectedQuiz/>} />
        <Route path='reviewquestions' element={<ReviewQuestions/>} />
        <Route path='review' element={<Review/>} />
      

      </Route>
      <Route path='/howitworks' element={<Howitworks/>} />
      
      
      <Route path='/purchased' element={<Purchased/>}>
      
        <Route index element={<Purchasemain/>} />
        <Route path='profile' element={<ActiveProfile/>}/>
        <Route path='termsofservice' element={<Termsofservice/>}/>
      
      
      </Route>
      
      <Route path='/login' element={<Login/>}>
      
        <Route index element={<Loginmain/>} />
        <Route path='signup' element={<Signup/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>} />
      
      </Route>
      <Route path='/Questions' element={<Questions/>} />
    </Routes>
    </div>
  )
}

export default App
