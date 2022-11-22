import React from 'react';
import {useState} from 'react';
import './Option.css'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Options = ({options, correctAnswer}) => {
    const [isCorrect, setIsCorrect]=useState('')
    const handleAnswer = (e) =>{
        if (e.target.textContent===correctAnswer) {
            setIsCorrect('You are right')
        }else{
            setIsCorrect('You are wrong')
        }
        toast.info(isCorrect, {
            position: toast.POSITION.TOP_RIGHT
          });
    }
    return (
        <>
            {/* {isCorrect ? 'hii': 'bye'} */}
            <div onClick={handleAnswer} className='col-12 col-md-6 '>
                <ToastContainer  toastClassName='shadow-sm'/>
                <div className="p-3 border  h-100 d-flex justify-content-center align-items-center option">{options}</div>
            </div>
        
        </>
    );
};

export default Options;