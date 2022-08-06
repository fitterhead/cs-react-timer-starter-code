import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  console.log(time);

  const startTimer = () => {
    isStart.current = true;
    if (isStart.current === true) {
      refInterval.current = setInterval(
        () => setTime((time) => time + 1),
        1000
      );
      active.current.disabled = true;
    }
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    isStart.current = false;
    refInterval.current = 0;
    setTime(0);
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
