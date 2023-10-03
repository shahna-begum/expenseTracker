import React from 'react';
import ChartBar from './ChartBar';
import './css/Chart.css'
const Chart = (props) => {
    const dataPoints = [
        { id: 0, label: "jan", value: 0 },
        { id: 1, label: "feb", value: 0 },
        { id: 2, label: "mar", value: 0 },
        { id: 3, label: "apr", value: 0 },
        { id: 4, label: "may", value: 0 },
        { id: 5, label: "jun", value: 0 },
        { id: 6, label: "jul", value: 0 },
        { id: 7, label: "aug", value: 0 },
        { id: 8, label: "sep", value: 0 },
        { id: 9, label: "oct", value: 0 },
        { id: 10, label: "nov", value: 0 },
        { id: 11, label: "dec", value: 0 },
    ];
    for (const key of props.items) {
        let monthValue = key.expenseDate.getMonth();
        dataPoints[monthValue].value += Number(key.expenseAmount);
    }
    const dataPointsValue = dataPoints.map(item => item.value);
    let maxVal = Math.max(...dataPointsValue);
    return (
        <>
            {dataPoints.map(item => (
                <ChartBar key={item.id} labelName={item.label} chartHeight={item.value} maxValue={maxVal} />
            ))}
        </>
    )
}
export default Chart;