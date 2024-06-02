/* eslint-disable react/prop-types */

const TimerControls = ({ onClick, label, backgroundColor }) => {
  return (
    <>
      <button onClick={onClick} style={{ backgroundColor }}>
        {label}
      </button>
    </>
  );
};

export default TimerControls;
