/* eslint-disable react/prop-types */

const TimerDisplay = ({ hour, minutes, seconds }) => {
  return (
    <h1>
      {String(hour).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </h1>
  );
};

export default TimerDisplay;
