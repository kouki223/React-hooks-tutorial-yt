import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import KoukicodeContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const koukicodeInfo = useContext(KoukicodeContext);
  const ref = useRef();

  const handoleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  },[count]);

  const handleRef = () => {
    console.log(ref.current.value);
  }

  return (
   <div className="App">
    <h1>UseState</h1>
    <buttom onClick={handoleClick}>+</buttom>
    <p>{count}</p>

    <hr/>
      <h1>useContext</h1>
      <p>{koukicodeInfo.name}</p>
      <p>{koukicodeInfo.age}</p>

   <hr/>
    <h1>useRef</h1>
    <input type="text" ref={ref} />
    <button onClick={handleRef}>UseRef</button>
   </div>
  );
}

export default App;
