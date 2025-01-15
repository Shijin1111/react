import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Window from './Window'
import { useEffect } from 'react'

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <>
      <button onClick={()=>setShow(prev=> !prev)}> Toggle window tracker</button>
      {show && <Window />}
    </>
  )
}

export default App
