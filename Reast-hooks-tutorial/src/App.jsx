import { useContext, useEffect, useRef, useState, useReducer, useMemo, useCallback} from "react";
import "./App.css";
import KoukicodeContext from "./main";
import SomeChild from "./SomeChild";
import useLocalStorage from "./useLocalStorage";

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
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000) {
      i++;
    }
    console.log("クリックされました");
    return count02 * count02;
  },[count02]);
  
  const [counter, setCounter] = useState(0);

  const showCount = useCallback(() => {
    alert(`これは重い処理です。`);
  },[counter]);

  const [age, setAge] = useLocalStorage("age", 20);

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
    <div>カウント１：{count01}</div>
    <div>カウント２：{count02}</div>
    <div>結果:{square}</div>
    <button onClick={() => setCount01(count01 + 1)}>+</button>
    <button onClick={() => setCount02(count02 + 1)}>+</button>

    <hr/>
    <h1>useCallBack</h1>
    <SomeChild showCount={showCount} />

    <hr/>
    <h1>カスタムフック</h1>
    <p>{age}</p>
    <button onClick={() => setAge(80)}>年齢をセット</button>
   </div>
  );
}

export default App;
