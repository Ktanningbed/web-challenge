import React, { useState } from 'react';
import './BarChart.css'
import styled, {keyframes} from 'styled-components'


interface MousePosition {
    x: number;
    y: number;
}

interface BarProps {
    maxValue: number;
    value: number;
    id: number;
    mousePosition: MousePosition;
    label?: string|null;
}



const Bar: React.FC<BarProps> = ({ value, id, maxValue, mousePosition, label }) => {
    const [showInfo, setShowInfo] = useState<Boolean>(false);

    var animation = keyframes`
        0% {height: 0;}
        100% {height: ${(value / maxValue) * 100};}
    `

    const BarValue = styled.div`
        animation: ${animation} 1s;
        background-color: #5668f2;
        border: 1px solid #333;
        border-bottom: none;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        /* padding: 5px 0; */
        font-weight: bold;
        height: 0;
        margin-right: 5px;
        margin-left: 5px;
    `
    return (
        <>
            <div className="info" style={{zIndex: 1, display: showInfo ? 'block' : 'none', position: 'absolute', left: mousePosition.x + 10, top: mousePosition.y + 10}}>Value: {value}<br/>{label && <>Label: {label}</>}</div>
            <div className="bar" key={id}>
                <div
                onMouseOver={() => setShowInfo(true)}
                onMouseOut={() => setShowInfo(false)}
                className="bar-value"
                style={{
                    height: `${(value / maxValue) * 95}%`,
                }}/>
                <div className="bar-label">{label && label}</div>
            </div>
        </>
        
    );
};

export default Bar;