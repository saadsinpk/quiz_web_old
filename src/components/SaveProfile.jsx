import React,{useState} from 'react'
import '../App.css'
import imageside from '../assets/savingprofile/imageside.svg'
import profilepic from '../assets/savingprofile/profilepic.png'

const SaveProfile = (props) => {

  const [selectedValue, setSelectedValue] = useState('placeholder');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  


    const name = props.name
    const email = props.email
    const Password = props.Password
    const Gender = props.gender


    const profileedit = props.orignal;
  const setProfileedit = props.changer;
  
    return (
    <div className=' flex aligner bg-white p-10 gap-14 px-14 rounded-2xl'>
            <div>
                <div className='bg-blue-600 circleofimage rounded-full relative'>
                    
                    <img src={profilepic} />
                    <img src={imageside} className='absolute bottom-0 right-0 w-12' />
                    
                </div>
                <div className='flex flex-col justify-center my-7 '>
                    <button className='font-bold'>John doe</button>
                    <button className='text-slate-700'>example@site.com</button>
                    
                </div>
            </div>
            <div >
                <h1 className='text-blue-800 text-2xl font-bold pb-7'>My Profile</h1>
                <div id='condition' className='font-bold flex flex-col gap-4'>
                  <div className='flex border-black border-b w-96 aligner justify-between'>
                    <h1 className='py-5 font-semibold '>Name</h1>
                    <button className='flex flex-row '><input type="text" placeholder={name} className='w-52 placeholder: text-right'/></button>
                  </div>
                  <div className='flex border-black border-b w-96 aligner justify-between'>
                    <h1 className='py-5 font-semibold '>Email</h1>
                    <button className='flex flex-row '><input type="text" placeholder={email} className='w-60 placeholder: text-right'/></button>
                  </div>
                  <div className='flex border-black border-b w-96 aligner justify-between'>
                    <h1 className='py-5 font-semibold '>Password</h1>
                    <button className='flex flex-row '><input type="password" placeholder={Password} className='w-60 placeholder: text-right'/></button>
                  </div>
                  <div className='flex border-black border-b w-96 aligner justify-between'>
                    <h1 className='py-5 font-semibold cursor-pointer w-20'>Gender</h1>
                    <button className='flex flex-row '>
                      <select id='gender' value={selectedValue} onChange={handleChange} style={{ color: selectedValue == 'placeholder' ? 'gray' : 'black' }}  className={` appearance-none font-semibold cursor-pointer text-center`}>
                        <option disabled value="placeholder">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      </button>
                  </div>
                </div>
                <button className='bg-blue-800 text-white px-8 py-2 mx-14 my-8 rounded-xl' onClick={() => setProfileedit(!profileedit)}>Save Profile</button>
            </div>
          </div>
  )
}

export default SaveProfile
