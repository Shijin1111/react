import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die'

function App() {

  const [Dice,setDice] = useState(generateAllNewDice());

  function generateAllNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++) {
      const randNum = Math.ceil(Math.random()*6);
      newDice.push(<Die value={randNum} key={i} />)
    }
    return newDice;
  }
  function rollDice(){
    setDice(generateAllNewDice());
  }
  return (
    <>
      <main>
        <div className='dice-container'>
          {generateAllNewDice()}
        </div>
        <button onClick={rollDice} className='roll-button'>Roll</button>
      </main>
    </>
  )
}

export default App
