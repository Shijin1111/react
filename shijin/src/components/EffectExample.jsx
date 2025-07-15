import { useEffect } from "react";
import { useState } from 'react';

function EffectExample() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Current count is: ", count);
    },[count]);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default EffectExample;