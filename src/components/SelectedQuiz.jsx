import React, { useRef } from 'react'
import '../App.css'
import SelectedQuizlevel from './SelectedQuizlevel'
import verfiedicon from '../assets/for selected quiz/verified icon.png'


const SelectedQuiz = () => {

  const contentRef = useRef(null)
  const customScrollbarRef = useRef(null)
  
  
  const handleScroll = () => {
    const content = contentRef.current;
    const customScrollbar = customScrollbarRef.current;
    const scrollPercentage = (content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100;
    customScrollbar.style.top = scrollPercentage + '%';
  };

  const handleScrollbarClick = (e) => {
    const content = contentRef.current;
    const customScrollbar = customScrollbarRef.current;
    const scrollbarRect = customScrollbar.getBoundingClientRect();
    const clickY = e.clientY - scrollbarRect.top;
    const scrollY = (clickY / customScrollbar.clientHeight) * (content.scrollHeight - content.clientHeight);
    content.scrollTop = scrollY;
  };


  
  
  return (
    <div className='flex flex-col aligner' >
      <div className='flex gap-4 aligner'>
      <h1 className='text-3xl fontpoppins font-bold text-white'>Hi, John</h1>
      <img src={verfiedicon} />
      </div>
      <h1 className='text-white pb-5'>Lets make this day productive</h1>
      <div className='bg-blue-200 aligner pb-7 rounded-2xl pt-7 px-4'>
        
         <div ref={contentRef} onScroll={handleScroll} className=" relative overflow-y-auto  h-[32rem]">
        <div className=" scroll flex flex-col gap-4 px-64">
          <SelectedQuizlevel Level={1} status={true}/>
          <SelectedQuizlevel Level={2} status={false}/>
          <SelectedQuizlevel Level={3} status={false}/>
          <SelectedQuizlevel Level={4} status={false}/>
          <SelectedQuizlevel Level={5} status={false}/>
          <SelectedQuizlevel Level={6} status={false}/>
          <SelectedQuizlevel Level={7} status={false}/>
          <SelectedQuizlevel Level={8} status={false}/>
          <SelectedQuizlevel Level={9} status={false}/>
          <SelectedQuizlevel Level={10} status={false}/>
          <SelectedQuizlevel Level={11} status={false}/>
          <SelectedQuizlevel Level={12} status={false}/>
          <SelectedQuizlevel Level={13} status={false}/>
          <SelectedQuizlevel Level={14} status={false}/>
          <SelectedQuizlevel Level={15} status={false}/>
          <SelectedQuizlevel Level={16} status={false}/>
          <SelectedQuizlevel Level={17} status={false}/>
          <SelectedQuizlevel Level={18} status={false}/>
          <SelectedQuizlevel Level={19} status={false}/>
          <SelectedQuizlevel Level={20} status={false}/>
            
        </div>
    </div>
         
         
         
        </div>
        
      </div>
      
  )
}

export default SelectedQuiz

