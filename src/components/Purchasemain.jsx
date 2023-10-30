import React from 'react'
import '../app.css'
import { Link } from 'react-router-dom'
import mainimage from '../assets/unlock Your purchase/main image.svg'
import heading from '../assets/unlock Your purchase/heading.png'


const Purchasemain = () => {
  return (
    <div>
      <div className='flex query31 items-center'>
        <img src={mainimage} className='query32 relative top-32' />
        <div className='p-3 flex flex-col aligner'>
          <h1 className='text-white text-3xl font-bold p-2 border-b-2 border-white'>Unlock your Plan now</h1>
          <p className='text-white w-[36rem] py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque aperiam quasi eos quae atque! Ad quibusdam suscipit consectetur aspernatur alias sint quam aperiam exercitationem vero, illum dignissimos maxime culpa?</p>
        <div className=' flex flex-col bg-blue-200 p-10 gap-7 px-24 rounded-2xl justify-center aligner'>
            <div className='flex flex-col gap-7'>
            <div className='flex bg-white border-2 border-blue-700 rounded-2xl'>
                <h1 className='bg-blue-400 px-7 py-5  font-semibold rounded-xl text-white flex item-center'><h1 className='font-xl'>$</h1><h1 className='text-3xl'>6.99</h1></h1>
                <button className='px-20 text-blue-800 font-semibold hover:text-green-800'>Play Quiz Level 2</button>
            </div>
            <div className='flex bg-blue-400 border-2 border-blue-700 rounded-2xl'>
                <h1 className='bg-white text-blue-700 px-5 py-5 font-semibold rounded-xl border-blue-700 flex'><h1 className='font-xl'>$</h1><h1 className='text-3xl'>10.00</h1></h1>
                <button className='px-20 text-white font-semibold hover:text-green-800'>Play Quiz Level 5</button>
            </div>
            <div className='flex bg-white border-2 border-blue-700 rounded-2xl'>
                <h1 className='bg-blue-400 px-5 py-5 font-semibold rounded-xl flex text-white'><h1 className='font-xl'>$</h1><h1 className='text-3xl'>29.99</h1></h1>
                <button className='px-20 text-blue-800 font-semibold hover:text-green-800'>Play Quiz Level 9</button>
            </div>
            </div>
            <button className='bg-blue-400 text-white font-semibold w-[21rem] py-5 rounded-2xl hover:text-black'><Link to='/purchased/profile'>Continue</Link></button>
            <div className='flex flex-row justify-between w-[18rem] text-blue-900'>
                <button className='hover:text-blue-700'><Link to={'/purchased/termsofservice'}>Terms of Service</Link></button>
                <button className='hover:text-blue-700'><Link to={'/howitworks'}>Privacy policy</Link></button>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  )
}

export default Purchasemain
