import { useContext, useEffect, useState } from "react";
import "./App.css";
import KoukicodeContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const koukicodeInfo = useContext(KoukicodeContext);

  const handoleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  },[count]);

  return (
   <div className="App">
    <h1>UseState</h1>
    <buttom onClick={handoleClick}>+</buttom>
    <p>{count}</p>

    <hr/>
      <h1>useContext</h1>
      <p>{koukicodeInfo.name}</p>
      <p>{koukicodeInfo.age}</p>
   </div>
   
  );
}

export default App;
