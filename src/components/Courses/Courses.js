import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import './Courses.css'
const Courses = ({course}) => {
    const {id, name, logo, total}=course
    return (
        <div className='col-sm-12 col-md-6 col-lg-3 px-5 px-md-4 px-lg-3  py-2'>
            <Card className='bg-dark text-white border-0 px-5 px-lg-3 py-5'>
                <Card.Img variant="top" src={logo}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Questions: {total}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='p-0 link-text'>
                    <Link to='/jiii'>
                        <button className='w-100 fw-semibold  py-2 border-0 rounded-1 d-flex justify-content-between align-items-center'>
                            Start practice <HiArrowRight/>
                        </button>
                    </Link>
                </Card.Footer>
            </Card>
         </div>
    );
};

export default Courses;