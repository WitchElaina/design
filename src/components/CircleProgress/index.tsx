import { useEffect, useState } from 'react';
import './index.css';

export interface CircleProgressProps {
  min: number;
  max: number;
  value: number;
  label: string;
  showValue: string;
}

export default function CircleProgress(props: CircleProgressProps) {
  const { min, max, value, label, showValue } = props;
  const [percentage, setPercentage] = useState(
    ((value - min) / (max - min)) * 100,
  );

  useEffect(() => {
    setPercentage(((value - min) / (max - min)) * 100);
  }, [min, max, value, label, showValue]);

  return (
    <div className="circle-progress">
      <div className="circle-track"></div>

      <div
        className="circle-fill"
        style={{
          background: `conic-gradient(#6dc5d9 0deg, #bee9e6  ${
            3.6 * percentage
          }deg, #ffffff00 ${3.6 * percentage}deg 360deg)`,
        }}
      ></div>

      <div className="value-panel">
        <div className="value-content">
          <div className="label">{label}</div>
          <span>{showValue}</span>
        </div>
      </div>

      <div className="value-fill"></div>

      {value !== max && <div className="start-point"></div>}
      {/* <div className="start-point"></div> */}

      <div
        className="rotate-wrapper"
        style={{
          transform: `rotate(${percentage * 3.6}deg)`,
        }}
      >
        <div className="end-point"></div>
      </div>
    </div>
  );
}
