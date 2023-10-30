import React from 'react'
import '../app.css'
import { Link } from 'react-router-dom'
import mainimage from '../assets/forgot password/mainimage.svg'
import iconmail from '../assets/login/iconmail.svg'
import lock from '../assets/forgot password/lock.png'

const ForgotPassword = () => {
  return (
    <div>
      <div className='flex query31 gap-24'>
        <img src={mainimage} className='query42' />
        <div className='p-3 flex flex-col aligner'>
        <div className=' flex flex-col bg-white rounded-3xl p-10'>
            <h1 className='text-3xl text-center font-bold pb-4'>Forgot Password?</h1>
            <p className='text-center pb-4 text-slate-400'>Please Enter the email you used to sign in</p>
            <div className='flex border-blue-800 border w-[27rem]'>
              <img src={iconmail} className='w-16 p-6' />
              <input type="email" placeholder='email@site.com'/>
            </div>
            <div className='flex border-blue-800 border w-[27rem] mt-4 '>
              <img src={lock} className='w-16 p-6 object-contain' />
              <input type="password" placeholder='*******'/>
              
            </div>
            <div className='px-14 py-7'>
              <h1 className='text-center w-[20rem]'>00:30 seconds </h1>
            </div>
            <button className='bg-blue-800 rounded-2xl text-white py-6 hover:bg-black'>Submit</button>
            <button className='pt-4 hover:text-blue-700'><Link to={'/login/login'}>Back to Sign in</Link></button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
