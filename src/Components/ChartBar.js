import React from 'react';
const ChartBar = (props) => {
    let chartHeight = '0%';
    if (props.maxValue) {
        chartHeight = Math.round((props.chartHeight / props.maxValue) * 100) + '%';
    }
    return (
        <>
            <div className='chart-bar--wrapper'>
                <div className='chart-inner'>
                    <div className='chart-height' style={{ height: chartHeight }}></div>
                </div>
                <label>{props.labelName}</label>
            </div>
        </>
    )
}
export default ChartBar;