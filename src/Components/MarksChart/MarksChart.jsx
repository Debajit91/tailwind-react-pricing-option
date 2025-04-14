import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    
    /**
     * data processing for the chart
     * as the given data is in a nested object
     *  */ 
    const marksChartData = marksData.map(studentMark =>{
        const mark = {
            id: studentMark.id,
            math: studentMark.marks.math,
            chemistry: studentMark.marks.chemistry,
            physics: studentMark.marks.physics,
        }
        const avg = (mark.math + mark.physics + mark.chemistry) /3;
        mark.avg = avg;
        return mark;
    });
    
    console.log(marksChartData);
    return (
        <div className='mx-2 lg:mx-3 mt-5'>
            <BarChart width={1410} height={500} data={marksChartData} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
            <XAxis dataKey={"id"}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={"math"} fill='green'></Bar>
            <Bar dataKey={"physics"} fill='skyblue'></Bar>
            <Bar dataKey={"chemistry"} fill='gold'></Bar>
            <Bar dataKey={"avg"} fill='cyan'></Bar>
            <CartesianGrid stroke='cyan'></CartesianGrid>
            <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MarksChart;