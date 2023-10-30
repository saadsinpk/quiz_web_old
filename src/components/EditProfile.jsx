import React, { useState } from 'react'
import {CaretRight} from 'phosphor-react'
import profilepic from '../assets/savingprofile/profilepic.png'
import { Link } from 'react-router-dom'


const Profilesetting = (props) => {

  const [buttonon,setButtonon] = useState(false)

  const profileedit = props.orignal;
  const setProfileedit = props.changer;




  return (
    <div className=' flex aligner bg-white p-10 gap-14 query34 rounded-2xl'>
            <div>
                <div className='bg-blue-600 circleofimage rounded-full'>
                    <img src={profilepic}  />
                </div>
                <div className='flex flex-col justify-center my-7'>
                    <button className='font-bold'>John doe</button>
                    <button className='text-slate-700'>example@site.com</button>
                    <button className='text-white font-semibold  py-2 my-3 rounded-2xl' onClick={() => setProfileedit(!profileedit)}></button>
                </div>
            </div>
            <div>
                <h1 className='text-blue-800 text-2xl font-bold pb-7 flex justify-center ' >Setting</h1>
                <div id='condition' className='font-bold flex flex-col gap-4'>
                  <div className='flex  w-96 aligner justify-between border-t border-slate-200 pt-8'>
                    <h1 className='py- font-semibold text-blue-600'>Account Settings</h1>
                   
                  </div>
                  <div className='flex w-96 aligner justify-between' >
                    <h1 className='py- font-semibold'>Edit profile</h1>
                    <button className='flex flex-row '><CaretRight className='w-10' onClick={() => setProfileedit(!profileedit)} /></button>
                  </div>
                  <div className='flex  w-96 aligner justify-between'>
                    <h1 className='py- font-semibold '>Purchased</h1>
                    <button className='flex flex-row '><Link to='/purchased'><CaretRight className='w-10'/></Link></button>
                  </div>
                  <div className='flex  w-96 aligner justify-between'>
                    <h1 className='py- font-semibold cursor-pointer w-20'>Notifications</h1>
                    <button className='flex flex-row ' onClick={()=>{setButtonon(!buttonon)}}  ><div className={` flex aligner ${buttonon ? 'justify-end bg-blue-800' : 'justify-start bg-slate-300'} w-14 h-7 px-[2px] rounded-full `} >{buttonon ?  <div className='w-6 h-6 rounded-full bg-white'></div> : <div className='w-6 h-6 rounded-full bg-white'></div> }</div></button>
                  </div>
                  <div className='flex  w-96 aligner justify-between'>
                    <h1 className='py- font-semibold cursor-pointer w-32'>How to play</h1>
                    <button className='flex flex-row '><Link to='/howitworks'><CaretRight className='w-10'/></Link>  </button>
                  </div>
                  <div className='flex  w-96 aligner justify-between'>
                    <h1 className='py- font-semibold cursor-pointer w-32'>Privacy Policy</h1>
                    <button className='flex flex-row '><Link to='/purchased/termsofservice'><CaretRight className='w-10'/></Link></button>
                  </div>
                  
                  <div className='flex  w-96 aligner justify-between'>
                    <h1 className='py- font-semibold cursor-pointer w-32 text-blue-700'>LOG OUT</h1>
                    
                  </div>
                </div>
            </div>
          </div>
  )
}

export default Profilesetting
