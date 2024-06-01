import { useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  const [timeInterval, setTimeInterval] = useState(null);

  const handleTimer = (countDownTime) => {
    let now = new Date().getTime();
    let interval = countDownTime - now;

    if (interval > 0) {
      setHour(Math.floor(interval / (1000 * 60 * 60)));
      setMinutes(Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((interval % (1000 * 60)) / 1000));
    } else {
      clearInterval(timeInterval);
    }
  };

  const handleStart = () => {
    const countDownTime = Date.now() + timer * 1000;
    setTimeInterval(setInterval(handleTimer, 1000, countDownTime));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="input time"
        onChange={(e) => setTimer(e.target.value)}
      />
      <button onClick={handleStart}>start</button>

      <h1>
        {hour}:{minutes}:{seconds}
      </h1>
    </div>
  );
}

export default App;
