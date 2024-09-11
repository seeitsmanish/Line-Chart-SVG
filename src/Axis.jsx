export const Axis = ({ points }) => (
    <polyline
        points={points}
        fill="none"
        stroke="#56566B"
        strokeDasharray={10}
        strokeWidth="1"
    />
);

export const XAxis = ({ padding, height, width }) => (
    <Axis
        points={`${padding},${height - padding} ${width - padding},${height - padding
            }`}
    />
);

export const YAxis = ({ padding, height }) => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
);
;