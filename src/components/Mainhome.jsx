import React from 'react'
import {Link} from 'react-router-dom'
import homeimage from '../assets/forhomepage/mainvect.svg'
import signuplogo from '../assets/forhomepage/signup button logo.svg'

const mainhome = () => {
  return (
    <div className='flex gap-11 pb-28 query-1'>
        <img src={homeimage} className=' query-2' />
        <div className='p-3 query-3'>
          <h1 className='query-4 font-bold roboto text-5xl text-white'>Quiz App</h1>
          <p className='query-5 text-white text-xl pt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <div className='flex gap-3 py-4'>
            <button className='text-blue-800 bg-white font-semibold py-2 px-12'><Link to={'/login'}>LOGIN</Link></button>
            <Link to={'/login/signup'}><button className='text-blue-800 bg-white font-semibold py-2 px-10 flex aligner gap-2'><h1>SIGN UP</h1> <img src={signuplogo} className='w-3' /> </button></Link>
          </div>
        </div>
      </div>
  )
}

export default mainhome
