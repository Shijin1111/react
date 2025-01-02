import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Newfn from './newjs'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Newfn/>
    <h1>Shijin</h1>
    </> 
  )
}

export default App
