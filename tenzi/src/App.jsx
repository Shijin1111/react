import { useState } from 'react';
import './App.css';
import Die from './Die';
import Comfetti from 'react-confetti';
function App() {
  // State to store dice data
  const [dice, setDice] = useState(generateAllNewDice());
  const [Tenzies, setTenzies] = useState(false);
  // Function to generate new dice data
  function generateAllNewDice() {
    const newDice = [];
    for (let i = 1; i <= 10; i++) {
      const randNum = Math.ceil(Math.random() * 6);
      newDice.push({
        value: randNum,
        isHeld: false,
        id: i,
      });
    }
    return newDice;
  }

  // Function to roll dice (only unheld ones)
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld
          ? die // Keep held dice as is
          : { ...die, value: Math.ceil(Math.random() * 6) } // Roll unheld dice
      )
    );
  }

  // Function to toggle the "isHeld" state of a die
  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const gameWon = (dice.every(die=> die.isHeld) && dice.every(die=> die.value === dice[0].value));

  return (
    <>
      <main>
        {gameWon && <Comfetti />}
        <h1>Tenzies</h1>
        <p>Roll untill all the dies are the same</p>
        <div className="dice-container">
          {dice.map((die) => (
            <Die
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              hold={() => hold(die.id)}
            />
          ))}
        </div>
        <button onClick={rollDice} className="roll-button">
          {gameWon?"New Game":"Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
