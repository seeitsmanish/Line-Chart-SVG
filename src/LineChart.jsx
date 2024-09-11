import React, { useCallback, useRef, useState } from "react";
import LineChartStyles from "./LineChart.module.scss";
import Tooltip from "./Tooltip";
import { XAxis } from "./Axis";
import Dot from "./Dot";
import Line from "./Line";
export default function LineChart({
  datasets,
  width,
  height,
  precision,
  numberOfHorizontalGuides,
  numberOfVerticalGuides,
}) {
  const maxXFromData = Math.max(
    ...datasets.flatMap((dataset) => dataset.data.map((e) => e.x))
  );
  const maxYFromData = Math.max(4, Math.max(
    ...datasets.flatMap((dataset) => dataset.data.map((e) => e.y))
  ));
  const getDivideFactor = () => {
    if (maxXFromData <= 20) return 30;
    else if (maxXFromData > 20 && maxXFromData <= 30) return 45;
    else if (maxXFromData > 30) return 50;
  }
  const FONT_SIZE = width / getDivideFactor(); // Increased font size for better visibility
  const digits = parseFloat(maxYFromData.toString()).toFixed(precision).length;
  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
  });
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [currentIndexFocussed, setCurrentIndexFocussed] = useState(null);

  const actualHorizontalGuides = Math.min(numberOfHorizontalGuides || 4, maxYFromData);

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;

    return new Array(actualHorizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / actualHorizontalGuides;
      const yCoordinate = chartHeight - chartHeight * ratio + padding;

      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke="#56566B"
            strokeWidth="1"
            strokeDasharray={10}
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </React.Fragment>
      );
    });
  };

  const VerticalGuides = () => {
    const startY = padding;
    const endY = height - padding;

    return new Array(numberOfVerticalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / numberOfVerticalGuides;
      const xCoordinate = chartWidth * ratio + padding;
      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke="#56566B"
            strokeWidth="1" // Increased stroke width
            points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
          />
        </React.Fragment>
      );
    });
  };

  const YLabels = () => {
    const xCoordinate = padding - FONT_SIZE * 2.5;
    return new Array(actualHorizontalGuides + 1).fill(0).map((_, index) => {
      const ratio = index / actualHorizontalGuides;
      const yCoordinate =
        chartHeight - chartHeight * ratio + padding - FONT_SIZE / 4;
      return (
        <text
          key={index}
          x={xCoordinate}
          y={yCoordinate + FONT_SIZE / 2}
          style={{
            fill: "#56566B",
            fontSize: FONT_SIZE,
          }}
        >
          {(Math.floor(maxYFromData * ratio)).toFixed(precision)}
        </text>
      );
    });
  };

  const XLabels = () => {
    const y = height - padding + FONT_SIZE * ((maxXFromData > 5) ? 3 : 2.5)
    return datasets[0].data.map((el, index, dataset) => {
      const ratio = el.x / maxXFromData;
      const x = ratio * chartWidth + padding - FONT_SIZE * 2;
      if (maxXFromData > 30) {
        if (index % 10 !== 0 && index !== maxXFromData) {
          return null;
        }
      }
      return (
        <text
          key={index}
          x={x}
          y={y}
          style={{
            fill: "#56566B",
            fontSize: FONT_SIZE,
          }}
          transform={`rotate(${dataset.length > 5 ? -45 : 0}, ${x}, ${y})`}
        >
          {el.label}
        </text>
      );
    });
  };

  const Dots = ({ data, color }) => {
    const numberOfDots = data.length;
    return data.map((el, index) => {
      return (
        <Dot
          key={index}
          index={index}
          el={el}
          color={color}
          numberOfDots={numberOfDots}
          maxXFromData={maxXFromData}
          maxYFromData={maxYFromData}
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          padding={padding}
          FONT_SIZE={FONT_SIZE}
          handleClickedOutside={() => {
            setIsFocused(false);
            setCurrentIndexFocussed(null);
          }}
          handleDotClick={(e) => {
            setIsFocused(true);
            setCurrentIndexFocussed(data[index]);
            setTooltipPosition({
              x: e.clientX - containerRef.current.getBoundingClientRect().x,
              y: e.clientY - containerRef.current.getBoundingClientRect().y,
            });
          }}
        />
      )
    });
  };

  const Lines = useCallback(() => {
    return datasets.map((dataset, index) => {
      return (
        <React.Fragment key={index}>
          <Dots data={dataset.data} color={dataset.color} />
          <Line
            key={index}
            dataset={dataset}
            maxXFromData={maxXFromData}
            maxYFromData={maxYFromData}
            padding={padding}
            chartWidth={chartWidth}
            chartHeight={chartHeight}
          />
        </React.Fragment>
      );
    });
  }, [datasets, maxXFromData, maxYFromData, padding, chartWidth, chartHeight]);

  const CategoryLabels = () => {
    return (
      <div className={LineChartStyles.categoryLabelsContainer}>
        {datasets.map((dataset, index) => (
          <div key={index} className={LineChartStyles.categoryLabel}>
            <div
              className={LineChartStyles.categoryColor}
              style={{ backgroundColor: dataset.color }}
            ></div>
            <p>{dataset.category}</p>
          </div>
        ))}
      </div>
    );
  };

  const TooltipContainer = () => {
    return (
      <div className={LineChartStyles.tooltipContainer}>
        <p className={LineChartStyles.line}>{currentIndexFocussed.label}</p>
        <p className={LineChartStyles.date}>
          <span className={LineChartStyles.bold}>{currentIndexFocussed.y}</span> Bookings
        </p>
        <p className={LineChartStyles.line}>
          <span className={LineChartStyles.bold}>Dummy</span> Room Nights
        </p>
        <p className={LineChartStyles.line}>
          <span className={LineChartStyles.bold}> IDR Random</span> Bookings Amount
        </p>
      </div>
    );
  }; ``

  return (
    <div className={LineChartStyles.container} ref={containerRef}>
      <svg viewBox={`0 0 ${width} ${height}`} className={LineChartStyles.chart}>
        <XAxis padding={padding} height={height} width={width} />
        <XLabels />
        {/* <YAxis padding={padding} height={height} width={width} />*/}
        <YLabels />
        <HorizontalGuides />
        {numberOfVerticalGuides && <VerticalGuides />}
        <Lines />
      </svg>
      <CategoryLabels />
      {isFocused && (
        <Tooltip
          style={{
            left: tooltipPosition.x + "px",
            top: tooltipPosition.y + "px",
          }}
        >
          <TooltipContainer />
        </Tooltip>
      )}
    </div>
  );
}
