/* eslint-disable react/prop-types */

const TimerDisplay = ({ hour, minutes, seconds }) => {
  return (
    <div className="timerDisplay">
      <span>{String(hour).padStart(2, "0")}</span>:
      <span>{String(minutes).padStart(2, "0")}</span>:
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
};

export default TimerDisplay;
