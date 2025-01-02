import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)
  // function plusfn()
  // {
  //   counter++  
  //   setCounter(counter)
  // }
  // function minusfn()
  // {
  //   if(counter!=0)
  //   counter-- 
  //   setCounter(counter)
  // }
    const plusfn = () => {
      counter++;
      setCounter(counter);
    }
    const minusfn = () => {
      counter--;
      setCounter(counter);
    }
  return (
    <>
      <h1>02 Counter project</h1>
      <h3>Counter value : {counter}</h3>

      <button onClick={plusfn}>increase value</button>
      &nbsp;
      <button onClick={minusfn}>decrease value</button>
    </>
  )
}

export default App
