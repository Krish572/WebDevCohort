
import { useEffect, useRef, useState } from 'react'
import './App.css'

function useDebounce(originalFn){
  const ref = useRef(null);

  const fn = () => {
    clearTimeout(ref.current);
    ref.current = setTimeout(originalFn, 1000);
  }

  return fn;
}

function App() {

  const [input, setInput] = useState("");

  function searchTitles(){
    fetch("api.amazon.com/search/");
  }

  const debounce = useDebounce(searchTitles);

  useEffect(() => {
    debounce();
  }, [input]);

  

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} />
    </>
  )
}

export default App
