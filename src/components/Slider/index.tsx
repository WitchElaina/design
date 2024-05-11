import { useState, useRef, useEffect } from 'react';
import './index.css';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  title?: string;
  unit?: string;
}

function Slider(props: SliderProps) {
  const {
    min = 1,
    max = 100,
    step = 1,
    defaultValue = 20,
    onChange,
    title = 'Slider',
    unit = '%',
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [left, setLeft] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
      'sliderRef.current?.clientWidth',
      sliderRef.current?.clientWidth,
    );
    setLeft(
      (sliderRef?.current?.clientWidth - 70) * ((value - min) / (max - min)),
    );
  }, [sliderRef, value]);

  return (
    <div className="slider">
      <div className="slider-title">{title}</div>
      <div className="slider-value-wrapper">
        {value}
        <span>{unit}</span>
      </div>
      <div className="slider-wrapper" ref={sliderRef}>
        <div className="slider-track"></div>
        <div
          className="slider-track-fill"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        ></div>

        <div
          className="slider-button-wrapper"
          style={{
            left: left,
          }}
        >
          <div className="outer"></div>
          <div className="inner"></div>
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
            onChange && onChange(Number(e.target.value));
          }}
          className="ori-slider"
        />
      </div>
    </div>
  );
}

export default Slider;
