import React from 'react'
import Sawquestions from './Sawquestions'
import { Link } from 'react-router-dom'
import mainimage from '../assets/extra/mainimage.png'
import '../app.css'

const Review = () => {
  return (
      <div>
        <div className='flex flex-col justify-center aligner gap-14'>
         <h1 className='text-4xl fontpoppins font-semibold text-white'>Review</h1>
         <div className='flex aligner query-ext'>
           <div className='pr-20 mr-24 h-[39rem] overflow-auto'>
            <div className='query-ext2  query-big'>
              <Sawquestions questionnumber={1} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='Rhubarb' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={2} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={3} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={4} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={5} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={6} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={7} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={8} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={9} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={10} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={11} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={12} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={13} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={14} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={15} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={16} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={17} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={18} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={19} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
              <Sawquestions questionnumber={20} question='Which of the following is NOT a fruit?' options={['Rhubarb','Tomatoes','Avocados','apple']} selectedOption='apple' correctAnswer={'Rhubarb'}/>
            </div>
            <button className='bg-blue-400 rounded-full text-white p-2 m-7 mx-48 font-bold px-5'><Link to='/welcome'>Menu</Link></button>
           </div>
           <div>
             <img className='query-ext3' src={mainimage} />
           </div>
         </div>
        </div>
      </div>
  )
}

export default Review
