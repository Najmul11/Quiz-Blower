import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center error-content'>
            <div className=' text-center text-white ms-lg-5 p-lg-5 error-btn'>
                <h1 className='display-1  fw-bold'>404</h1>
                <p className=' fw-bold'>Sorry we can’t find that page! Don’t worry, though everything is STILL AWESOME!</p>
                <Link to='/'><button className='fw-semibold  py-2 px-5 border-0 rounded-1'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;