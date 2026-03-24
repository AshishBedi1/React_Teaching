import { useState, memo } from "react";
const Child = memo(function Child({ name }) {
  console.log("Child rendered");
  return <h2>Hello {name}</h2>;
});

export default function Reactmemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child name="Akshay" />
    </>
  );
}


