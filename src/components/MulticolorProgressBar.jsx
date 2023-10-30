import React from 'react'

const MulticolorProgressBar = ({percentagerightanswers,circlewidth,percentagewronganswers}) => {
  
    const radius = 85
    const dasharray = radius * Math.PI * 2; 
    const dashoffset = dasharray - (dasharray * percentagerightanswers)/100

    const dashoffsetred = dasharray - (dasharray * percentagewronganswers)/100
  
    return (
        <div>
            <svg width={circlewidth} height={circlewidth} viewBox={`0 0 ${circlewidth} ${circlewidth}`}>
                <circle cx={circlewidth/2} cy={circlewidth/2} strokeWidth='25px' r={radius} className='fill-none stroke-slate-500'/>
                <circle cx={circlewidth/2} cy={circlewidth/2} strokeWidth='25px' r={radius} className='fill-none stroke-red-500' style={{strokeDasharray : dasharray, strokeDashoffset : dashoffsetred}} transform={`rotate( ${(percentagerightanswers/100)*360} ${circlewidth/2} ${circlewidth/2})`}/>
                <circle cx={circlewidth/2} cy={circlewidth/2} strokeWidth='25px' r={radius} className='fill-none stroke-green-500' style={{strokeDasharray : dasharray, strokeDashoffset : dashoffset}}/>
                <text x='50%' y='50%' dy='0.3em' textAnchor='middle' className='font-bold text-4xl'>{parseInt(percentagerightanswers)}%</text>
            </svg>
            
        </div>
  )
}

export default MulticolorProgressBar
