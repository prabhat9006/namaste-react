import React, { useReducer } from "react";

const initialState = {
  progress: 50, // Starting progress value
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        progress: state.progress >= 100 ? state.progress : state.progress + 10,
      };
    case "DECREASE":
      return {
        progress: state.progress <= 0 ? state.progress : state.progress - 10,
      };
    default:
      return state;
  }
  // complete this function to make the buttons work
}

const ProgressBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increase = () => {
    dispatch({ type: "INCREASE" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };
  console.log(state);
  return (
    <div>
      <h3>Complete the above function to increase or decrease bar length</h3>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${state.progress}%` }}
        ></div>
      </div>
      <div className="button-container">
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}> Increase</button>
      </div>
    </div>
  );
};

export default ProgressBar;
