import React from 'react';
import { Link } from 'react-router-dom';
import QuizHome from '../../QuizHome/QuizHome';

const Home = () => {
    return (
        <div>
            <QuizHome></QuizHome>
            <div className='flex justify-center items-center mt-20 md:mt-52 h-full w-full'>
                <Link to="categories/1" className='btn bg-gradient-to-r from-primary to-secondary text-white'>Start</Link>
            </div>
        </div>
    );
};

export default Home;