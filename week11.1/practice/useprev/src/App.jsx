import { useState } from "react"
import "./App.css"
import { usePrev } from "./hooks/usePrev";

function App() {

  const [count, setCount] = useState(0);
  const prev = usePrev(count);

  return (
    <>
      <p>Iam current value : {count}</p>
      <button onClick={() => setCount(c => c+1)}>update</button>
      <p>Iam previous value: {prev}</p>
    </>
  )
}

export default App
