import React, { useEffect, useState } from "react";

const Counter = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const [count, setCount] = useState(30);
  let timer;
  const handleStart = () => {
    setCount(count - 1);
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(30);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <>
        <p> Time : {date.toLocaleTimeString()}</p>
      </>
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
