import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/sub-3.jpg'
import './Home.css'

const Home = () => {
    const courses=useLoaderData()
    console.log(courses);
    return (
       <>
            <div className='bg-dark py-lg-5'>
                <Card className=" text-white container border-0 text-lg-center ps-lg-4 p-0" id='goldenrod'>
                    <div className='bg-dark bg-opacity-75 ps-lg-4'>
                    <Card.Img src={img1} alt="Card image" className="card-img"/>
                    <Card.ImgOverlay>
                        <Card.Title>
                            <h1 className='highlight'>Quiz Blower!</h1>
                        </Card.Title>
                        <Card.Text>
                            If you are practicing code for a long, this is the right place for you. Take the quizes here and judge yourself how far you have come! <br />
                            We provide certificate upon complitation of all the quizzes.
                        </Card.Text>
                        <Card.Text>React quiz updated 5mins ago</Card.Text>
                    </Card.ImgOverlay>
                    </div>
                </Card>
           </div>
            <div className='m-lg-5'>
                <CardGroup className='row'>
                    {
                        courses.map(course=><Courses key={course.id} course={course}></Courses>)
                    }
                </CardGroup>
            </div>
       </>
    );
};

export default Home;