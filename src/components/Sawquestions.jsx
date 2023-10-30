import React from 'react';
import '../app.css'

const Sawquestions = (props) => {
  const { questionnumber,question, options, selectedOption, correctAnswer } = props;

  return (
    <div className="py-3 flex flex-col gap-3  border-slate-600">
      
      
      <div className='flex text-white'>
        <h1 className='font-semibold text-xl'>Question {questionnumber} : ({selectedOption == correctAnswer ? 'Correct' : 'Incorrect'})</h1>
        
      </div>
      
      
      
      
      <h1 className="font-extrabold">{question}</h1>
      <div className="flex flex-col gap-1">
        {options.map((option, index) => (
          <h1
            key={index}
            className={`px-2 mx-1 py-1 my-[0.1rem] font-bold border-2 border-white w-44 rounded-full ${
              option === correctAnswer
                ? 'border-green-700 text-green-700 border bg-white '
                : option === selectedOption && option !== correctAnswer
                ? 'border-red-500 text-red-500 border bg-[rgb(239,68,68,0.3)]'
                : 'text-white'
            }`}
          >
            {option}
          </h1>
        ))}
        <div className='flex flex-col gap-3 justify-around'>
          <h1 className='text-xl font-bold'>Explanation</h1>
          <h1 className='bg-slate-300 rounded-3xl  mx-2 py-10 px-36 font-semibold'>{correctAnswer} Correct Answer</h1>
          <div class="w-[80%] border-t-2 border-white mx-3 my-2 "></div>
        </div>
      </div>
    </div>
  );
};

export default Sawquestions;
