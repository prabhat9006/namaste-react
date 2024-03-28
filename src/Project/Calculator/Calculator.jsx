import { useState } from "react";
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const add = () => {
    setResult(Number(num1) + Number(num2));
  };
  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };
  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };
  const divide = () => {
    setResult(Number(num1) / Number(num2));
  };
  return (
    <div>
      <h1>Calculator App</h1>
      <div>
        <input
          type="number"
          id="num1"
          placeholder="Enter first number"
          className="input-cal"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          id="num2"
          placeholder="Enter second number"
          className="input-cal"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button id="add" type="button" className="btn-cal" onClick={add}>
          +
        </button>
        <button
          id="subtract"
          type="button"
          className="btn-cal"
          onClick={subtract}
        >
          -
        </button>
        <button
          id="multiply"
          type="button"
          className="btn-cal"
          onClick={multiply}
        >
          *
        </button>
        <button id="divide" type="button" className="btn-cal" onClick={divide}>
          /
        </button>
      </div>
      <p id="result">{result}</p>
    </div>
  );
};
export default Calculator;
