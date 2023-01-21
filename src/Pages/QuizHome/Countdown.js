import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import {MdOutlineTimer} from "react-icons/md"

const Countdown = ({seconds}) => {

    const formatTime = (time) =>{
        let minutes = Math.floor(time/60);
        let seconds = Math.floor(time - minutes * 60);

        if(minutes <= 10) minutes = "0" + minutes;
        if(seconds <= 10) seconds = "0" + seconds;
        return minutes + ":" + seconds

    }

    const [countdown, setCountdown] = useState(seconds);
    const timerId = useRef();
    useEffect(() =>{
        timerId.current = setInterval(() =>{
          setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() =>{
        if(countdown <= 0){
            clearInterval(timerId.current)
            toast.error("END")
        }
    }, [countdown])

    return (
        <div className='flex items-center bg-sky-300 p-2 rounded-lg'> 
            <MdOutlineTimer className='mr-1'></MdOutlineTimer>
            <h2>{formatTime(countdown)}</h2>
        </div>
    );
};

export default Countdown;