import React, { useState } from 'react'
import '../app.css'
import { Link } from 'react-router-dom'
import mainimage from '../assets/savingprofile/main image.svg'
import EditProfile from './EditProfile'
import SaveProfile from './Saveprofile'


const ActiveProfile = () => {

  const name = 'John doe'
  const email = 'example@gmail.com'
  const Password = 'userPassword'
  const gender = 'male'

  const [profileedit,setProfileedit] = useState(true) 



  return (
    <div>
      <div className=' gap-11 query31'>
        <img src={mainimage} className='query33' />
        <div className='p-3 flex flex-col'>
        { profileedit ? 
        <EditProfile changer={() => setProfileedit(!profileedit)} orignal={profileedit}/>
        :
         <SaveProfile name={name} email={email} Password={Password} gender={gender} changer={() => setProfileedit(!profileedit)} orignal={profileedit}/>
        }
          
        </div>
      </div>
    </div>
  )
}

export default ActiveProfile