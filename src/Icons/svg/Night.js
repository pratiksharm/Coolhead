
import React from 'react';

const SVG = ({
    style = {},
    fill = "none",
    stroke= "",
    width= "0%",
    className = "",
    viewBox = "0 0 170 150"
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        stroke={stroke}
        fill={fill}
        stroke-width = "4px"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path
          fill={fill}
            d="M127.22,134.59A75.58,75.58,0,0,1,73.88,5.48a75.56,75.56,0,1,0,59.53,128.83C131.37,134.48,129.31,134.59,127.22,134.59Z" 
        />
    </svg>
)

export default SVG;

