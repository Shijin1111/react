import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cnt,setcnt] = useState(4)

  function add()
  {
    setcnt(cnt+1);
  }
  function minus()
  {
    setcnt(cnt-1);
  }
  return (
    <>
      <h1>count:{cnt}</h1>
      <button onClick={add}>+</button>
      &nbsp;
      <button onClick={minus}>-</button>
    </>
  )
}

export default App
