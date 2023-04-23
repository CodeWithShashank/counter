import { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countHandler = (selectedCount) => {
    if (selectedCount >= 0) setCount(selectedCount);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => countHandler(count + 1)}> Increment</button>
      <button onClick={() => countHandler(count - 1)}> Decrement</button>
      <button onClick={() => countHandler(0)}> Reset</button>
    </div>
  );
};

export default Counter;
