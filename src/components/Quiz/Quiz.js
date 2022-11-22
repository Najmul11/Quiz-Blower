import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const {name,questions}=useLoaderData()
    return (
        <div className='container text-center my-5' style={{color:'goldenrod'}}>
            <h2>Quiz of {name}</h2>
            <div className=''>
                <CardGroup className='row'>
                    {
                       questions.map(allQuestion=><Questions key={allQuestion.id} allQuestion={allQuestion}></Questions>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Quiz;