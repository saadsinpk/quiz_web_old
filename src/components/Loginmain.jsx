import React, { useState } from 'react'
import '../app.css'
import { Link,NavLink } from 'react-router-dom'
import mainimage from '../assets/login/mainimage.svg'
import signuptoyouraccount from '../assets/login/Signup to your account..png'
import iconmail from '../assets/login/iconmail.svg'
import lockicon from '../assets/login/lockicon.svg'
import eyeicon from '../assets/login/eyeicon.png'
import sawpassword from '../assets/login/seepassword.png'
import googleicon from '../assets/login/googleicon.svg'
import facebookicon from '../assets/login/facebookicon.svg'

const Loginmain = () => {
  
  const [seepassword,setSeepassword] = useState(false)
  
  return (
    <div>
      <div className='gap-11 query31 flex items-center'>
        <img src={mainimage} className='query32' />
        <div className='p-3 flex flex-col aligner'>
          <img src={signuptoyouraccount} className='w-[20rem] py-3'/>
          <div className=' flex flex-col bg-white p-10 rounded-3xl'>
            <div className='flex border-blue-800 border w-[27rem] rounded-xl'>
              <img src={iconmail} className='w-16 p-6' />
              <input className='w-[27rem] rounded-xl border-r border-blue' type="email" placeholder='Enter your email'/>
            </div>
            <div className='flex border-blue-800 border w-[27rem] mt-4 rounded-xl'>
              <img src={lockicon} className='w-16 p-6 object-contain' />
              <input className='w-[180rem] rounded-xl border-r border-blue' type={`${seepassword ? 'text' : 'password'}`} placeholder='Enter  Password'/>
              <button className='w-full flex justify-end aligner pr-5'>
              <img src={seepassword ? sawpassword : eyeicon} className='w-7 h-7' onClick={()=>{setSeepassword(!seepassword)}} />
              </button>
            </div>
            <div className='flex aligner'>
              <input type="checkbox" className='ml-2' />
              <h1 className='p-1 text-blue-800 cursor-pointer'>remember me</h1>
              <h1 className='w-[19rem] text-right text-blue-800 cursor-pointer hover:text-blue-800'><NavLink to={'/login/forgotpassword'}>Forgot password?</NavLink></h1>
            </div>
            <button className='bg-blue-800 text-white py-6 mt-10 hover:bg-black hover:text-white rounded-xl '><NavLink to={'/welcome'}>Log In</NavLink></button>
            <div className='px-14 py-7'>
              <div className='text-center horizontalline w-[20rem] text-blue-800'><h1 className='px-3'>Or Login with</h1></div>
            </div>
            <div className='flex justify-center gap-4'>
              <button><img src={googleicon} className='w-36' /></button>
              <button><img src={facebookicon} className='w-36'/></button>
            </div>
            <div className='flex justify-center py-6'>
              <h1 className='textslate-300'>Don't have a account?</h1>
              <button className='text-blue-600 font-bold hover:text-black'><NavLink to={'/login/signup'}>Sign up</NavLink></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginmain
