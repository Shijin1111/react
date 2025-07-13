import { useState } from "react";
function Greetingcard(props){
  const [count,setCount] = useState(2);
  const addCount = () => {
    setCount(count + 1);
  };
  const subtractCount = () => {
    setCount(count - 1);  
  };
    return(
    <div style={{ border: '2px solid blue', padding: '20px', borderRadius: '10px' }}>
      <h2>Hello, {props.name}!</h2>
      <h4>count: {count}</h4>
      <button onClick={addCount}>Add Count</button>
      <button onClick={subtractCount}>Subtract Count</button>
    </div>
    );
}

export default Greetingcard;
