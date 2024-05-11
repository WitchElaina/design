import { useEffect, useState, useCallback } from 'react';
import { useTimer } from 'react-use-precision-timer';
import CircleProgress from '../components/CircleProgress';

export interface TimerProps {
  totalSeconds: number;
}

export default function Timer(props: TimerProps) {
  const [value, setValue] = useState(props.totalSeconds);
  const [running, setRunning] = useState(false);
  const [max, setMax] = useState(props.totalSeconds);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  const [curTime, setCurTime] = useState(formatTime(value));

  const callback = useCallback(() => {
    setValue((prev) => {
      const next = prev - 0.01;
      if (next < 0) {
        timer.stop();
        return 0;
      }

      setCurTime(formatTime(next));

      return next;
    });
  }, []);

  // The callback will be called every 1000 milliseconds.
  const timer = useTimer({ delay: 10 }, callback);

  const clickHandler = () => {
    setRunning((prev) => !prev);
  };

  const addHandler = (sec: number) => {
    timer.stop();
    setValue((prev) => {
      setCurTime(formatTime(prev + sec));
      return prev + sec;
    });
    setMax((prevMax) => prevMax + sec);
    running && timer.start();
  };

  useEffect(() => {
    if (running) {
      timer.start();
    } else {
      timer.stop();
    }
  }, [running]);

  return (
    <>
      <button onClick={clickHandler}>{running ? 'Stop' : 'Run'}</button>
      <button onClick={() => addHandler(5)}>Add 5s</button>
      <CircleProgress
        min={0}
        max={max}
        value={value}
        label="时间"
        showValue={curTime}
      />
      {max}
    </>
  );
}
