import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import TooltipStyle from './Tooltip.module.scss'
const TooltipPosition = {
  MIDDLE: 'middle',
  LEFT: 'left',
  RIGHT: 'right',
}
const Tooltip = ({children, style}) => {
  const [tooltipPosition, setTooltipPosition] = useState(
    TooltipPosition.MIDDLE
  );
  const toolTipRef = useRef();
  useLayoutEffect(() => {
    if (!toolTipRef.current) return;
    const rect = toolTipRef.current.getBoundingClientRect();
    console.log(rect);
    if (rect.left < 0) {
      setTooltipPosition(TooltipPosition.LEFT);
    }
    if (rect.right > document.documentElement.clientWidth) {
      setTooltipPosition(TooltipPosition.RIGHT);
    }
  }, [toolTipRef.current]);

  useEffect(() => {
    console.log(window.clientWidth)
    console.log(tooltipPosition)
  },[tooltipPosition])

  return (
    <div 
      style={{position: 'absolute', ...style}} 
      className={`${TooltipStyle.tooltip} ${TooltipStyle[tooltipPosition]}`}
      ref={toolTipRef}
    >
        <div className={`${TooltipStyle.tip} ${TooltipStyle[tooltipPosition]}`}></div>
        {children}
    </div>
  )
}

export default Tooltip
