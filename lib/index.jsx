import { useState } from "react";

export function logger(msg) {
  console.log(`hello : ${msg}`);
}

export function sum(a, b) {
  return a + b;
}

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}
