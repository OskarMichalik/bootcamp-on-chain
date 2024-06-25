import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      {counter}
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </main>
  );
}

export default App;
