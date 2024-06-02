import { useState, useRef } from "react";
import TimerControls from "./components/TimerControls";
import TimerInput from "./components/TimerInput";
import TimerDisplay from "./components/TimerDisplay";
import logo from "./assets/timer2.svg";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [timer, setTimer] = useState("");
  const [initialTimer, setInitialTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef(null);

  const handleTimer = (countDownTime) => {
    let now = new Date().getTime();
    let interval = countDownTime - now;

    if (interval > 0) {
      setHour(Math.floor(interval / (1000 * 60 * 60)));
      setMinutes(Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((interval % (1000 * 60)) / 1000));
    } else {
      clearInterval(timeInterval.current);
      setIsRunning(false);
    }
  };

  const handleStart = () => {
    if (!isPaused) {
      setInitialTimer(timer);
    }
    const countDownTime = Date.now() + timer * 1000;
    timeInterval.current = setInterval(() => handleTimer(countDownTime), 1000);
    setIsPaused(false);
    setIsRunning(true);
  };

  const handlePause = () => {
    clearInterval(timeInterval.current);
    setIsPaused(true);
  };

  const handleReset = () => {
    clearInterval(timeInterval.current);
    setHour(Math.floor(initialTimer / 3600));
    setMinutes(Math.floor((initialTimer % 3600) / 60));
    setSeconds(initialTimer % 60);
    setTimer(initialTimer);
    setIsPaused(false);
    setIsRunning(false);
  };

  const handleStop = () => {
    clearInterval(timeInterval.current);
    setHour(0);
    setMinutes(0);
    setSeconds(0);
    setTimer("");
    setIsPaused(false);
    setIsRunning(false);
  };

  return (
    <div className="app">
      <img src={logo} alt="logo" />
      <TimerDisplay hour={hour} minutes={minutes} seconds={seconds} />
      <div className="timerInput">
        <TimerInput
          timer={timer}
          setTimer={setTimer}
          setInitialTimer={setInitialTimer}
        />
      </div>
      <div className="controls">
        {isRunning ? (
          <TimerControls
            onClick={handleStop}
            label={"stop"}
            backgroundColor="#eb645f"
          />
        ) : (
          <TimerControls
            onClick={handleStart}
            label={"start"}
            backgroundColor="#2E8B57"
          />
        )}
        <TimerControls
          onClick={handlePause}
          label={"pause"}
          backgroundColor="#ff9601"
        />
        <TimerControls
          onClick={handleReset}
          label={"reset"}
          backgroundColor="#1a1a1a"
        />
      </div>
    </div>
  );
}

export default App;
