import React,{useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import Question from '@/shared/Question';
//npm i --save react-animated-numbers
import AnimatedNumbers from "react-animated-numbers";
//npm i --save react-confetti-explosion 
import ConfettiExplosion from 'react-confetti-explosion';
import { quizData } from '@/data/quizData';  
function Quiz() {
  
  const [isExploding, setIsExploding] = React.useState(false);
  const smallProps ={
  force: 0.8,
  duration: 3000,
  particleCount: 250,
  width: 1600,
}
  const point_per_question=100
    const { category } = useParams(); //  récupère le nom de la catégorie
  const quiz = quizData[category];  //  charge les questions correspondantes
    const [question,setQuestion]=useState(1)
    const [answers,setAnswers]=useState([])
      const [quizdone,setQuizdone]=useState(false)

      const [score,setScore]=useState(0)
    const saveAnswer=(e,q)=>{
        let newAnswers =answers
        newAnswers.push({
            question:q,answers:e
        })
        if (e){setScore(score+1)}
        setAnswers(newAnswers)
        setQuestion(question+1)
        if (question < quiz.length){setQuestion(question+1)}
        if (question == quiz.length){setQuizdone(true)}
        
    }
  return (
    <Card>
  <CardHeader>
    {!quizdone &&<CardTitle className='text-md'>Question {question}/{quiz.length}</CardTitle>}
    
  </CardHeader>
  <CardContent>
    <div className="w-[400px]">
        {!quizdone && quiz.map((x,index)=>{
            
            if (question == (index+1)){
            return <Question data={x} key={index} save={(e)=>saveAnswer(e,index)}> </Question>}
        })}
        {quizdone && <div className='flex flex-col items-center'>
          <h2 className='text-3xl'>Quiz Result</h2>
          <ConfettiExplosion {...smallProps} />
          <Separator className='my-4' />
          
          <AnimatedNumbers
        className='text-5xl mt-6'
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={score * point_per_question}
        fontStyle={{
          fontSize: 60,
         
        }}
      />
          <span className='text-2xl mt-4'>Points</span>
          <span className='text-2xl mt-4'>
            <AnimatedNumbers
        className='text-5xl mt-6'
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={score }
        fontStyle={{
          fontSize: 23,
          color:"red"
         
        }}
      />
            /{quiz.length} 
            Question are correct</span>
            <Link to='/'><Button className='text-black'>Back to home</Button></Link>
          </div>}
          

        
    </div>
    
  </CardContent>
  
</Card>
  )
}

export default Quiz