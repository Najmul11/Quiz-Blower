import React from 'react';
import Card from 'react-bootstrap/Card';
import {AiOutlineEye} from "react-icons/ai" ;
import Options from '../Options/Options';

const Questions = ({allQuestion}) => {
    const {question, correctAnswer, options,id}=allQuestion
    console.log(allQuestion);
    return (
        <div className='col-12 col-md-8 mx-auto p-0 my-3 shadow rounded'>
            <Card className='bg-white position-relative border-0'>
                <button className='position-absolute top-0 end-0 border-0 btn'><AiOutlineEye></AiOutlineEye></button>
                <Card.Body className='text-center '>
                    <Card.Title className='py-5'>{question}</Card.Title>
                    <div className='row g-2'>
                        {
                            options.map(option=><Options key={id} options={option}></Options>)
                        }
                    </div>
                </Card.Body>
            </Card>
         </div>
    );
};

export default Questions;