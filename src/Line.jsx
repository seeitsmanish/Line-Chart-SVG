import React, { useLayoutEffect, useRef } from 'react'
import LineChartStyles from './LineChart.module.scss';

const Line = ({ dataset, maxXFromData, maxYFromData, padding, chartWidth, chartHeight }) => {
    const lineRef = useRef();

    useLayoutEffect(() => {
        if (!lineRef.current) return;
        const lineLength = lineRef.current.getTotalLength();
        console.log(lineLength);
        lineRef.current.style.strokeDasharray = lineLength;
        lineRef.current.style.strokeDashoffset = lineLength;
    }, [lineRef.current])

    const points = dataset.data
        .map((el) => {
            const x = (el.x / maxXFromData) * chartWidth + padding;
            const y = chartHeight - (el.y / maxYFromData) * chartHeight + padding;
            return `${x},${y}`;
        })
        .join(" ");

    return (
        <polyline
            fill="none"
            ref={lineRef}
            className={LineChartStyles.graphLine}
            stroke={dataset.color}
            points={points}
            strokeWidth="2" // Increased line thickness
        />
    );
}

export default Line;