import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <main>
        <div className='dice-container'>
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />

        </div>
      </main>
    </>
  )
}

export default App
