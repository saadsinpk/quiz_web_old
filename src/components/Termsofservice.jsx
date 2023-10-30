import React from 'react'
import questionmark from '../assets/termsofservice/questionmark.svg'
import '../app.css'

const Termsofservice = () => {
  return (
    <div className=' flex aligner flex-col fontpoppins relative bottom-24'>
      
      <div className='bg-white rounded-3xl p-9 px-40 font-bold text-2xl my-12 flex aligner' ><h1>Terms of use</h1></div>
      <div className=' flex flex-col gap-4  mediaquer39'>
        <p className='text-white mediaquer37'>1. Find a Quiz App: Search for a Quiz App that you want to play. This Could be a stand alone App. a chatbot on a messaging platform, or a web-based Quiz game.Make Sure it Supports text based interactions.</p>
        <p className='text-white mediaquer37'>2. Install or Acess the App: Download and Install the app if its a mobile Application. Alternatively, If its a chatbot, Access it through your prefered messaging Platform like Facebook messanger,Whatsapp or Website.</p>
        <p className='text-white mediaquer37'>3. Registration/Login : Many Quiz Apps require you to create an account or Log in using an existing account. Follow the on-screen instruction to complete this step.</p>
        <p className='text-white mediaquer37'>4. Choose a Quiz: Once you're Logged in, you'll likely have the option to choose from various catageories or topics. Select a Quiz that interests you.</p>
        <p className='text-white mediaquer37'>5. Start the Quiz: Begin the Quiz by selecting "start" or a similar option. The app or Bot will start asking you the questions.</p>
        <p className='text-white mediaquer37'>6. Answering Questions: When a Question is Presented, read it carefully, and type your answer as a text message. Send your Response to the bot or App.</p>
      </div>
    </div>
  )
}

export default Termsofservice
