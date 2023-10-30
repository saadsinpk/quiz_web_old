import React from 'react'
import lockicon from '../assets/for selected quiz/lockicon.svg'
import calender from '../assets/welcome/calendar.png'
import { Link } from 'react-router-dom'
import '../App.css'

const SelectedQuizlevel = (props) => {
  return (
    <div className={`flex aligner rounded-2xl ${props.status ? 'bg-white' : 'bg-[#B8DAD8]'}`}>
      <h1 className={`w-14 pl-3 flex justify-center ${props.status ? 'text-black' : 'text-white'}`} >{props.Level}</h1>
      <img src={calender} className='w-10 my-2 flex justify-center aligner' />
      
      <div className='w-96 pl-10 font-semibold' >Quiz level {props.Level}</div>
      <div className='pr-3'>
        {props.status ?( <button className='text-blue-800 hover:text-blue-900'><Link to={'/questions'}>start</Link></button>) : (<div className='justify-center w-10'><img src={lockicon} className='w-6'/></div>)}
      </div>
    </div>
  )
}

export default SelectedQuizlevel
