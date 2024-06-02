/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TimerInput = ({ timer, setTimer, setInitialTimer }) => {
  return (
    <>
      <input
        type="number"
        placeholder="input time in seconds"
        value={timer}
        onChange={(e) => {
          setTimer(e.target.value);
          setInitialTimer(e.target.value);
        }}
      />
    </>
  );
};

export default TimerInput;
