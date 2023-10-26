import React, { useEffect, useState } from 'react';
import Bar from './Bar';
import './BarChart.css';

interface BarChartProps {
    labels?: string[];
    values: number[];
}


interface MousePosition {
    x: number;
    y: number;
}

const BarChart: React.FC<BarChartProps> = ({ values, labels }) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({x: 0, y: 0});

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [])


    const maxValue : number = Math.max(...values);



    return (

        <div className="bar-chart">
            
            <div className="bar-chart-container">
                <div className="yaxis">
                    <div style={{position: 'absolute', height: "100%", bottom: 0}}>{maxValue}-</div>
                    <div style={{position: 'absolute', height: `${3/4 * 100}%`, bottom: 0}}>{Math.round(2 * maxValue / 3 * 10) / 10}-</div>
                    <div style={{position: 'absolute', height: `${1/2 * 100}%`, bottom: 0}}>{Math.round(maxValue / 2 * 10) / 10}-</div>
                    <div style={{position: 'absolute', height: `${1/4 * 100}%`, bottom: 0}}>{Math.round(maxValue / 3 * 10) / 10}-</div>
                    <div style={{position: 'absolute', bottom: 0}}>0-</div>
                </div>
                {values.map((value, index) => (
                    <Bar value={value} id={index} maxValue={maxValue} mousePosition={mousePosition} label={labels?labels[index]:undefined}/>
                ))}
                
            </div>
        </div>
        
    );
};

export default BarChart;