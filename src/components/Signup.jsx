import React,{useState} from 'react'
import '../app.css'
import { Link } from 'react-router-dom'
import mainimage from '../assets/login/mainimage.svg'
import signuptoyouraccount from '../assets/login/Signup to your account..png'
import iconmail from '../assets/login/iconmail.svg'
import lockicon from '../assets/login/lockicon.svg'
import eyeicon from '../assets/login/eyeicon.png'
import googleicon from '../assets/login/googleicon.svg'
import facebookicon from '../assets/login/facebookicon.svg'
import name from '../assets/signup/name.svg'

const Signup = () => {


  return (
    <div className=''>
      
      <div className=' gap-11 query31'>
        <img src={mainimage} className='query32 mt-16' />
        <div className='p-3 flex flex-col aligner'>
          <img src={signuptoyouraccount} className='w-[20rem] py-3'/>
          <div className=' flex flex-col bg-white p-10 rounded-3xl'>
            <h1 className='text-3xl text-center font-bold pb-4'>Let's go!</h1>
            <div className='flex border-blue-800 border w-[27rem] rounded-xl'>
              <img src={name} className='w-16 p-6' />
              <input type="email" placeholder='John doe'/>
            </div>
            <div className='flex border-blue-800 border w-[27rem] mt-4 rounded-xl '>
              <img src={iconmail} className='w-16 p-6 object-contain' />
              <input type="text" placeholder='example@site.com'/>
              
            </div>
            <div className='flex border-blue-800 border w-[27rem] mt-4 rounded-xl'>
            <img src={lockicon} className='w-16 p-6 object-contain' />
              <input type="text" placeholder='minimum 8 characters'/>
              
            </div>
            <button className='bg-blue-800 rounded-xl text-white py-6 mt-10 hover:bg-black hover:text-white-800'><Link to={'/purchased/profile'}>Sign up</Link></button>
            <div className='px-14 py-7'>
              <div className='text-center horizontalline w-[19rem] text-blue-800'><h1 className='px-2'>Or Sign up with</h1> </div>
            </div>
            <div className='flex justify-center gap-4'>
              <button><img src={googleicon} className='w-36' /></button>
              <button><img src={facebookicon} className='w-36'/></button>
            </div>
            <div className='flex justify-center py-6'>
              <h1 className='textslate-300'>Already have a account?</h1>
              <button className='text-blue-600 hover:text-black font-bold'><Link to='/login'>Login</Link></button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Signup
