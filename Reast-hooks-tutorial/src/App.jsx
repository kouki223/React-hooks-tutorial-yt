import { useContext, useEffect, useRef, useState, useReducer } from "react";
import "./App.css";
import KoukicodeContext from "./main";

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
      case "decrement":
        return state - 1;
        default:
          return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const koukicodeInfo = useContext(KoukicodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handoleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello Hooks");
  },[count]);

  const handleRef = () => {
    console.log(ref.current.value);
  }

  //useMemo
  

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

    <hr/>
    <h1>useReducer</h1>
    <p>カウント：{state}</p>
    <button onClick={() => dispatch({ type: "increment" })}>+</button>
    <button onClick={() => dispatch({ type: "decrement" })}>-</button>

    <hr/>
    <h1>useMemo</h1>
   </div>
  );
}

export default App;
