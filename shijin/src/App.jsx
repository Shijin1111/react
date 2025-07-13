import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetingcard from './components/Greetingcard'

function App() {
  return(
    
    <div>
        <h2>Vite + React</h2>

      <Greetingcard name="Shijin" /><br />
      <Greetingcard name="John" /><br />
      <Greetingcard name="Jane" /><br />
    </div>
  );
}

export default App
