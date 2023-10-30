import React from 'react'
import '../App.css'
import MulticolorProgressBar from './MulticolorProgressBar'
import calender from '../assets/review questions/calender.svg'
import clock from '../assets/review questions/clock.svg'
import { NavLink } from 'react-router-dom'
const ReviewQuestions = () => {
  
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  const Passed = true
  const Totalquestions = 20 
  const rightanswers = 11
  const wronganswers = 7
  const skippedanswers = (wronganswers + rightanswers)-Totalquestions
  const Time = 35
  const percra = (rightanswers/Totalquestions) * 100;
  const percwra = (wronganswers/Totalquestions) * 100
  // update the values depending on the user performance
  return (
    <div className='flex flex-col aligner' >
      <h1 className='text-3xl fontpoppins font-bold text-white pb-4'>Review Qustions</h1>
      <div className='bg-blue-200 pb-10 rounded-2xl w-[62rem] px-7 gap-4 flex flex-col justify-start'>
        <button className=' flex justify-end w-full p-2'><NavLink to={'/welcome'}><h1 className='bg-blue-400 h-[34px] w-[34px] flex justify-center aligner rounded-full'>X</h1></NavLink></button>
        <div className='flex aligner gap-14'>
          <MulticolorProgressBar percentagerightanswers={percra} percentagewronganswers={percwra} circlewidth='200' />
          <div>
            <div className='border-b-2 border-slate-400 pb-3'>
              <h1 className='font-bold fontpoppins'>Attempt 1</h1>
              <h1 className='text-5xl font-bold text-blue-900 fontpoppins'>{parseInt(percra)}%</h1>
              <h1 className='text-blue-900 font-bold'>Correct({rightanswers}/{Totalquestions})</h1>
            </div>
            <div>
              <div className='flex aligner'>
                <img src={calender} className='w-7' />
                <h1 className='text-blue-900 font-bold'>{months[new Date().getMonth()]} {new Date().getDate()} {new Date().getFullYear()}</h1>
              </div>
              <div className='flex aligner'>
                <img src={clock} className='w-7' />
                <h1 className='text-blue-900 font-bold'>{Time} minutes</h1>
              </div>
            </div>
          </div>

          </div>
        <div>
          {Passed ? 
            (<div className='bg-white py-2 w-72 rounded-2xl'>
                <h1 className='font-semibold text-green-600 text-center'>Congratulations! You Passed</h1>
            </div>)
            :
            (<div className='bg-white py-2 rounded-2xl'>
                <h1 className='font-semibold text-red-600 text-center'>Failed (70% required to pass)</h1>
            </div>)}
        </div>
        <div className='flex flex-col gap-2 pl-12 font-bold poppins'>
        <div className='flex aligner gap-1'>
          <div className='bg-green-600 w-4 h-4'></div>
          <h1>Correct Answers</h1>
        </div>
        <div className='flex aligner gap-1'>
        <div className='bg-red-600 w-4 h-4'></div>
          <h1>Wrong Answers</h1>
        </div>
        <div className='flex aligner gap-1'>
        <div className='bg-slate-400 w-4 h-4'></div>
          <h1>Skipped/UnAnswers</h1>
        </div>
        </div>
        <div>

        </div>
      </div>
      <button className='bg-blue-600 p-4 px-8 m-4 rounded-2xl text-white font-semibold'><NavLink to={'/review'}>Review</NavLink></button>
      </div>
      
  )
}

export default ReviewQuestions