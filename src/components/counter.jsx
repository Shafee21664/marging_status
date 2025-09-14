import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incriment() {
    setCount((prevCoutn) => prevCoutn + 1);
    setCount((prevCoutn) => prevCoutn + 1);
    setCount((prevCoutn) => prevCoutn + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count} </h1>

      <div>
        <button onClick={incriment}>Counting</button>
      </div>
    </div>
  );
}
