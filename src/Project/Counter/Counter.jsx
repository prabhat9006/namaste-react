import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={handleStart} className="btn-cal">
        start
      </button>
      <button onClick={handleStop} className="btn-cal">
        stop
      </button>
      <button onClick={handlereset} className="btn-cal">
        reset
      </button>
    </div>
  );
};

export default Counter;
