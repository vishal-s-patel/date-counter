import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="counter">
        <button onClick={() => setStep((s) => s - 1)}>&minus;</button>
        <h4>Step: {step}</h4>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="counter">
        <button onClick={() => setCount((c) => c - 1)}>&minus;</button>
        <h4>Count: {count}</h4>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div>
        <h4>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
          {date.toDateString()}
        </h4>
      </div>
    </div>
  );
}
