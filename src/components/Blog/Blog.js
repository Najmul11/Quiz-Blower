import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <p><mark>What is the purpose of react router? </mark><br />
                  React router's main purpose is to make navigation throug components/pages smother.
                  With react router we can easily build modern single page web application.
                   Using router we define route for the elements we would like to see on that particular route.
            </p>
            <p> <mark>How does context api work?</mark> <br />
                Context api prevents props drilling.In react we can send data to other components through props unidirectional way. Sometimes it becomes a very long tree and make the code look nesty, because we need to share  data to components that dont need it , but it becomes unavoidable as we need to share data to specific component. Thats where context api make it easier .  It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
            </p>
            <p><mark>What is the use of useRef hook? </mark><br />
                The useRef Hook allows you to persist values between renders.Why is useRef useful?
                The useRef hook is a very handy option for both interacting with DOM elements and storing mutating information in your app without triggering a re-render. However, it is suggested to only use the useRef when necessary and within a useEffect to avoid bugs.
            </p>
        </div>
    );
};

export default Blog;