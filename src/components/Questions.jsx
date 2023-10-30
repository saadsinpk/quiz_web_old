import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import verfiedicon from '../assets/for selected quiz/verified icon.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import clock from '../assets/popup/clock.png';
import { Allquestions } from '../fakeapi/Questionslist';
import defaul from '../assets/checkbox/default.svg' 
import selected from '../assets/checkbox/selected.png' 
import correct from '../assets/checkbox/correct.png' 
import wrong from '../assets/checkbox/wrong.png'
import { useNavigate } from 'react-router-dom'

const Questions = () => {
  const [show, setShow] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [questionindex, setQuestionindex] = useState(0);
  const [score,setScore] = useState(0)
  const [disabler,setDisabler] = useState(false);
  const [reviewpage,setReviewpage] = useState(false)
  const [buttonnamechanger,setButtonnamechanger] = useState(false)
  const [explanation,setExplanation] = useState(false)
  const [showme, setShowme] = useState(false)


  const currentquestion = questionindex + 1;
  const Totalquestions = 10;
  const attemptedquestions = 3;

  const totaltime = 40

  


  

  const next = () => {
    if (questionindex < 4) {setQuestionindex((e) => e + 1);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setDisabler(false)
    setButtonnamechanger(false)
  setShowme(!showme)}
    else if(questionindex == 4){
      setReviewpage(true)
    }
  };

  const previous = (e) => {
    if (questionindex > 0) setQuestionindex((e) => e - 1);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    setDisabler(false)
    setReviewpage(false)
  };

 
    const Navigate = useNavigate();
 

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);
    setCorrectAnswer(Allquestions[questionindex].answers.findIndex((answer) => answer.correct));

  };

  return (
    <div className={` backgroundvector flex aligner justify-center  `}>
    
    <div className={`flex flex-col aligner pb-4 ${show ? ' overlay':''}`}>
      <div className={`flex gap-4 aligner mt-3 ${show ? 'opacity-10 ':''}`}>
        <h1 className="text-3xl fontpoppins font-bold text-white">Hi, John</h1>
        <img src={verfiedicon} alt="Verified Icon" />
      </div>
      <div className={`flex gap-2 aligner ${show ? 'opacity-10':''}`}>
        <div className="bg-white p-2 rounded-3xl h-10 flex aligner">
          <meter className="w-[15rem] " min={0} max={Totalquestions} value={currentquestion}></meter>
          <h1 className="px-3 text-blue-500 font-semibold">{currentquestion}/{Totalquestions}</h1>
        </div>
        <span id="Timer" className="rounded-full p-2 bottom-4 bg-white text-2xl font-bold text-slate-600 relative">
        <CountdownCircleTimer
    isPlaying
    duration={totaltime}
    colors={['#0da3de', '#0da3de', '#A30000', '#A30000']}
    colorsTime={[totaltime,0 , 0, 0]}
    onComplete={()=>{Navigate("/reviewquestions")}}
    size={60}
    strokeWidth={7}
    
  >
    {({ remainingTime }) => remainingTime}

    
  </CountdownCircleTimer>
        </span>
      </div>
      <div className={`bg-blue-200 flex flex-col aligner pb-10 rounded-2xl gap-5 ${show ? 'opacity-10':''}`}>
        <h1 className="bg-white text-Black w-[57rem] mx-[2rem] mt-[2rem] text-center fontpoppins text-xl font-semibold py-10 rounded-2xl">
          {Allquestions[questionindex].Question}
        </h1>
        <div className="flex flex-col gap-3 aligner">
          <div className="flex flex-col justify-center gap-3">
            {Allquestions[questionindex].answers.map((answer, index) => (
              <div>
              {showme   ? <button 
                key={index}
                className={`text-blue-800 border-2 border-blue-800 flex aligner p-4 w-[22rem] rounded-2xl 
                  ${
                    selectedAnswer === index
                      ? answer.correct
                        ? 'bg-white border border-green-400 text-green-400'
                        : 'bg-red-500/[.26] border border-red-400 text-red-400'
                      : index === correctAnswer
                      ? 'bg-white border border-green-400 text-green-400'
                      : ''
                  }`}
                onClick={() => {handleOptionClick(index) ;setButtonnamechanger(true) ; if(answer.correct && disabler == false){setScore(score + 1);setDisabler(true);setExplanation(true) }}}
              >
                <h1 className="font-bold">{answer.text}</h1>
                <div className='w-72 ml-4 flex justify-end absolute'>
                <img 
                src={
                  selectedAnswer === index
                      ? answer.correct
                        ? correct
                        : wrong
                      : index === correctAnswer
                      ? correct
                      : defaul
                } className='w-5'/>
                </div>
              </button>
              : <button 
                key={index}
                className={`text-blue-800 border-2 border-blue-800 flex aligner p-4 w-[22rem] rounded-2xl 
                  ${
                    selectedAnswer === index
                      ? answer.correct
                        ? ''
                        : ''
                      : index === correctAnswer
                      ? ''
                      : ''
                  }`}
                onClick={() => {handleOptionClick(index) ;setButtonnamechanger(true) ; if(answer.correct && disabler == false){setScore(score + 1);setDisabler(true);setExplanation(true) }}}
              >
                <h1 className="font-bold">{answer.text}</h1>
                <div className='w-72 ml-4 flex justify-end absolute'>
                <img 
                src={
                  selectedAnswer === index
                      ? answer.correct
                        ? selected
                        : selected
                      : index === correctAnswer
                      ? defaul
                      : defaul
                } className='w-5'/>
                </div>
              </button>}
              </div>
              
              
            ))}
          </div>
          <h1 className='text-blue-600 text-2xl font-bold'>{showme ? 'Explanation' : ''}</h1>
          
          <div className='w-[19rem] bg-slate-300 rounded-2xl text-center text-sm m-2 font-semibold'>
          {showme ?  <div><h1 className='flex justify-start px-2 bg-white rounded-t-2xl z-10'>HTML</h1><h1 className=' text-black bg-slate-300 rounded-2xl pb-6 px-2 z-20'>New York is not correct because it is not in India</h1></div> : '' }
          </div>
          
        </div>
      </div>
      <div className={`flex gap-24 pt-4 ${show ? 'opacity-10':''}`}>
        <button
          className="bg-slate-400 text-white p-4 px-14 rounded-2xl"
          onClick={previous}
        >
          Back
        </button>
        {reviewpage ? 
        
        <button className="bg-blue-400 text-white p-2 px-14 rounded-2xl">
        <Link to={'/reviewquestions'}>
        {buttonnamechanger ? 'Submit' : 'Next'}
        </Link>
      </button>:
        
        buttonnamechanger ?
        <button className="bg-blue-400 text-white p-2 px-14 rounded-2xl" onClick={()=>{setShowme(true); setButtonnamechanger(false)}}>
        Submit
        </button> :
        <button className="bg-blue-400 text-white p-2 px-14 rounded-2xl" onClick={next}>
        Next
        </button>
        
          }
        
        




      </div>
      
      
      

      
      

    
      
      
    </div>
    
    </div>
    
  );
};

export default Questions;
