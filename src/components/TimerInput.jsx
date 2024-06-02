/* eslint-disable react/prop-types */

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
