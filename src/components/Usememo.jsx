import { useState, useMemo } from "react";

function Usememo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function slowFunction(num) {
    console.log("Heavy calculation running...");
    for (let i = 0; i < 100000000; i++) {} 
    return num * 2;
  }

  const result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  return (
    <>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default Usememo;



