
import {useState} from "react";
// useState is a function
// [undefined, ƒ]

const UseStateBasics = () => {
  // console.log(useState('bob'));

  const value = useState('hello')[0]
  const func = useState()[1]
  // console.log(value);
  // hello

  // console.log(func);
  // function milega

  // using destructuring
  const [count, setCount] = useState(0)

  const handleClick = () => {
    
    setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
  }
  return <div>
    <h4> You clicked {count} times</h4>
    <button type="button" className="btn" onClick={handleClick}>Increase</button>
    <div>
    <button className="btn" onClick={reset}>Reset</button>
    </div>
  </div>
};

export default UseStateBasics;
