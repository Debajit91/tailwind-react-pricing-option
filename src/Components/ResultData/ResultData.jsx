import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const studentMarks = [

    { id: 1, math: 85, physics: 78, chemistry: 92 },
    { id: 2, math: 90, physics: 88, chemistry: 84 },
    { id: 3, math: 76, physics: 81, chemistry: 79 },
    { id: 4, math: 65, physics: 70, chemistry: 72 },
    { id: 5, math: 88, physics: 92, chemistry: 89 },
    { id: 6, math: 58, physics: 60, chemistry: 63 },
    { id: 7, math: 95, physics: 94, chemistry: 91 },
    { id: 8, math: 72, physics: 69, chemistry: 75 },
    { id: 9, math: 80, physics: 85, chemistry: 82 },
    { id: 10, math: 67, physics: 73, chemistry: 70 }
  
];

const ResultData = () => {
    return (
        <div className='mx-6 lg:mx-7 mt-5'>
            <LineChart width={1370} height={500} data={studentMarks}>
                <Line dataKey={"math"} stroke="red"/>
                <Line dataKey={"physics"} stroke="green"/>
                <Line dataKey={"chemistry"} stroke="gold"/>
                <XAxis dataKey={"id"} />
                <YAxis />
                <CartesianGrid stroke='cyan' strokeDasharray={"5 5"}/>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default ResultData;