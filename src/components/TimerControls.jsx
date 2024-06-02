/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TimerControls = ({ onClick, label }) => {
  return (
    <>
      {/* <button onClick={handlePause}>{label}</button> */}
      <button onClick={onClick}>{label}</button>
    </>
  );
};

export default TimerControls;
