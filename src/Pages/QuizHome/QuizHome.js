import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';

const QuizHome = () => {

    const quizzes = useLoaderData(); 

    const [allQuiz, setAllQuiz] = useState([]);
    useEffect(() =>{
        fetch(`https://exam-hub-server-tarikulk.vercel.app/categories`)
        .then(res => res.json())
        .then(data =>{
        setAllQuiz(data)
        })
    }, [])

    return (
        <div className='w-full bg-sky-300 p-5 rounded-lg'>
        <div>
        <input type="text" defaultValue="Question Type: React and Javascript" className="input w-full bg-gradient-to-r from-primary to-secondary text-white font-bold" />
        </div> 
                    <div>
                        {
                            quizzes?.map(quiz => <QuizData
                            key={quiz.id}
                            quiz={quiz}
                            allQuiz={allQuiz}
                            ></QuizData>)
                        }
                    </div>            
        </div>
    );
};

export default QuizHome;