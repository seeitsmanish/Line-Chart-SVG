import React, { useRef } from 'react'
import useOutsideClick from './useOutSideClick';
import LineChartStyles from './LineChart.module.scss';

const Dot = ({ index, el, numberOfDots, color, maxXFromData, maxYFromData, chartWidth, chartHeight, padding, FONT_SIZE, handleClickedOutside, handleDotClick }) => {
    const x = (el.x / maxXFromData) * chartWidth + padding;
    const y = chartHeight - (el.y / maxYFromData) * chartHeight + padding;
    const dotRef = useRef(null);
    useOutsideClick(dotRef, handleClickedOutside);
    return (
        <circle
            ref={dotRef}
            className={LineChartStyles.dot}
            style={{
                '--dot-delay': `${(index / numberOfDots) * 1.5}s`,
            }}
            cx={x}
            cy={y}
            r={FONT_SIZE / 3}
            fill={color}
            stroke="#000000"
            strokeWidth="2"
            onClick={handleDotClick}
        ></circle>
    );
}

export default Dot;


