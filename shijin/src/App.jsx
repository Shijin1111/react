import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetingcard from './components/Greetingcard'
import Like_togglemsg from './components/Like_togglemsg'

function App() {
  return(
    
    <div>
        <h2>Vite + React</h2>
      <Like_togglemsg />
      <Greetingcard name="Shijin" /><br />
      <Greetingcard name="John" /><br />
      <Greetingcard name="Jane" /><br />
    </div>
  );
}

export default App
