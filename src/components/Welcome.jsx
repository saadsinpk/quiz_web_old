import React from 'react'
import '../App.css'
import { Link,NavLink } from 'react-router-dom'
import topicon from '../assets/welcome/topicon.png'
import History from '../assets/welcome/calendar.png'
import biology from '../assets/welcome/icon bio.png'
import sports from '../assets/welcome/basketball.png'
import chemistry from '../assets/welcome/chemistry.png'
import geography from '../assets/welcome/map copy.png'
import math from '../assets/welcome/calculator.png'
import questionmark from '../assets/welcome/question mark.png'

const Welcome = () => {
  return (
    <div className='flex flex-col aligner' >
      <div className='text-3xl fontpoppins font-bold text-white flex flex-row aligner gap-3'><h1>Hi, John</h1><img src={topicon} className='w-9 h-9' /></div>
      <h1 className='text-white pb-5'>Lets make this day productive</h1>
      <div>
      <div className='bg-blue-200 flex flex-col aligner rounded-2xl'>
        <h1 className='bg-blue-800 text-white w-[57rem] m-[2rem] text-center fontpoppins text-xl font-semibold py-1 rounded-2xl'>Welcome Back !</h1>
        <div className='query-21 gap-10'>
        <div className='flex flex-col justify-center'>
          <button className='bg-white px-4 pr-8 rounded-2xl'>
            <Link to={'/selectedquiz'}>
            <img src={History} className='w-20 relative bottom-4'/>
            <div className='py-7'>
              <h1 className='text-left font-bold' >History</h1>
              <h1 className='bg-slate-300 px-2 rounded-xl'>20 Questions</h1>
            </div>
            </Link>
          </button>
        </div>
        <div className='flex flex-col gap-4'>
        <button className='bg-white px-4 pr-8 rounded-2xl'>
        <Link to={'/selectedquiz'}>
            <img src={biology} className='w-20 relative bottom-2'/>
            <div className='py-7'>
              <h1 className='text-left font-bold' >Biological</h1>
              <h1 className='bg-slate-300 px-2 rounded-xl'>20 Questions</h1>
            </div>
          </Link>
          </button>
          <button className='bg-white px-4 pr-8 rounded-2xl'>
          <Link to={'/selectedquiz'}>
            <img src={sports} className='w-20 relative bottom-2'/>
            <div className='py-7'>
              <h1 className='text-left font-bold' >Sports</h1>
              <h1 className='bg-slate-300 px-2 rounded-xl'>20 Questions</h1>
            </div>
          </Link>
          </button>
        </div>
        <div className='flex flex-col gap-4'>
        <button className='bg-white px-4 pr-8 rounded-2xl'>
        <Link to={'/selectedquiz'}>
            <img src={chemistry} className='w-20 relative bottom-2'/>
            <div className='py-7'>
              <h1 className='text-left font-bold' >Chemistry</h1>
              <h1 className='bg-slate-300 px-2 rounded-xl'>20 Questions</h1>
            </div>
          </Link>
          </button>
          <button className='bg-white px-4 pr-8 rounded-2xl'>
          <Link to={'/selectedquiz'}>
            <img src={geography} className='w-20 relative bottom-2'/>
            <div className='py-7'>
              <h1 className='text-left font-bold' >Geography</h1>
              <h1 className='bg-slate-300 px-2 rounded-xl'>20 Questions</h1>
            </div>
          </Link>
          </button>
        </div>
        <div className='flex flex-col justify-center'>
          <button className='bg-white px-4 pr-8 rounded-2xl'>
          <Link to={'/selectedquiz'}>
            <img src={math} className='w-20 relative bottom-2'/>
            <div className='py-7'>
              <h1 className='text-left font-bold' >Math</h1>
              <h1 className='bg-slate-300 px-2 rounded-xl'>20 Questions</h1>
            </div>
          </Link>
          </button>
        </div>
        
      </div>
      <button className='w-full flex justify-end aligner'><NavLink to={'/howitworks'}> <img src={questionmark} className='w-20 drop-shadow-xl' /></NavLink></button>
      </div>
      </div>
      
    </div>
  )
}

export default Welcome
