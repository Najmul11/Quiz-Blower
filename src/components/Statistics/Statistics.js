import React from 'react';
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const Statistics = () => {
const quiz=useLoaderData()
   
    return (
        <div className='container text-md-center my-5'>
             <div className='row' >
                 <div className='col-lg-6 mx-md-auto px-0' style={{height:400}}>
                     <ResponsiveContainer>
                         <LineChart data={quiz}>
                             <XAxis dataKey="name" />
                             <YAxis />
                             <Tooltip />
                             <Legend />
                             <Line type="monotone" dataKey="total" stroke="goldenrod"  activeDot={{ r: 5 }} />
                         </LineChart>
                     </ResponsiveContainer>
                 </div>
             </div>
        </div>
        
    );
};

export default Statistics;