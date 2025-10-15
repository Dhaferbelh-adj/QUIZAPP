import React, { useState } from 'react'
'use client'
import { FaCheckCircle ,FaTimesCircle} from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"


function Question(props) {
    const [submitted,setSubmitted]=useState(false)
    const [answer,setAnswer]=useState('')
    const submitAnswer = ()=>{
        setSubmitted(true)
    }
    const nextQuestion =()=>{
        props.save(answer ==props.data.answer)
    }
    const checkAnswer=(val)=>{
        if (val==answer && val==props.data.answer){
            return true
        }
        if (val==answer && val!==props.data.answer){
            return false
        }
        if (val!=answer && val==props.data.answer){
            return true
        }

    }
  return (
    <div className='flex flex-col'>
        <p className='text-3xl mb-4'>{props.data.text}</p>
        {props.data.options.map((x,i)=>{
            return <div onClick={()=>submitted ? '' : setAnswer(x)} key={i} className={`${answer == x ? 'border-[#aaa]' : ''} px-2 py-2 rounded mt-1 mb-2  flex justify-between items-center cursor-pointer border hover:border-gray-200`}>
                <span>{x}</span>

                {submitted && checkAnswer(x)==true && <FaCheckCircle className='text-green-400' />}
                {submitted && checkAnswer(x)==false &&  <FaTimesCircle className='text-red-400'  />}
                    
            </div>
 
        })}
        <Separator className='my-2 mx-2' />
        {!submitted ? <Button className='text-black' onClick={()=>submitAnswer()}>Submit</Button>:<Button className='text-black' onClick={()=>nextQuestion()}>Next</Button>}
        
        
    </div>
  )
}

export default Question