import React from 'react';

const Options = ({options}) => {
    return (
        <div className='col-12 col-md-6'>
           <div class="p-3 border bg-light h-100 d-flex justify-content-center align-items-center">{options}</div>
        </div>
    );
};

export default Options;