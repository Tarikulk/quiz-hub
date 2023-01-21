import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';
import QuizResult from './QuizResult';

const QuizData = ({quiz, allQuiz, seconds}) => {
    console.log(allQuiz.length)
    const {question, option, correctAnswer, category_id} = quiz;
    const [first, second, third, fourth] = option
    const [correctAns, setCorrectAns] = useState(0)
    const [score, setScore] = useState(0)

    const isQuizEnd = category_id <= allQuiz.length;

    const isCorrect = (text) =>{
        if(correctAnswer === text){
           setScore(score+5) 
           setCorrectAns(correctAns+1)
           return toast.success("Oh Great!, Your Answer Is Correct")
        }
        else{
            return toast.error("Sorry! Your Answer is Wrong. Try Again")
        }
    } 

    return (
       <div>   
            <div className='bg-white px-5 py-3 rounded-lg flex justify-between items-center mt-5'>
            <h1 className='font-bold'>Score: {score}</h1>
            <h1 className='font-bold'>CorrectAns: {correctAns}</h1>
            <div>
            <Countdown
            seconds={300} 
            ></Countdown>
            </div>
            </div> <p className='bg-white p-3 rounded-lg mt-5'><span className='font-bold'>Question {category_id} :</span> {question}</p>
            <div className='mt-10'> 
             <Link to={`/categories/${category_id + 1}`} onClick={() => isCorrect(first)} className='bg-white p-3 rounded-lg my-1 block'><span className='font-bold'>1.</span> {first}</Link>
             <Link to={`/categories/${category_id + 1}`} onClick={() => isCorrect(second)} className='bg-white p-3 rounded-lg my-1 block'><span className='font-bold'>2.</span> {second}</Link>
             <Link to={`/categories/${category_id + 1}`} onClick={() => isCorrect(third)} className='bg-white p-3 rounded-lg my-1 block'><span className='font-bold'>3.</span> {third}</Link>
             <Link to={`/categories/${category_id + 1}`} onClick={() => isCorrect(fourth)} className='bg-white p-3 rounded-lg my-1 block'> <span className='font-bold'>4.</span> {fourth}</Link>
            </div> 
            <div className='flex justify-between items-center mt-5'>
            <Link to={`/categories/${category_id - 1}`} className='btn bg-gradient-to-r from-primary to-secondary text-white'>prev</Link>
            <Link to={`/categories/${category_id + 1}`} className='btn bg-gradient-to-r from-primary to-secondary text-white'>Next</Link>
            </div>   
       </div>
    );
};

export default QuizData;