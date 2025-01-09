import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pad from './Pad'
import padData from './pads'
function App() {

  return (
    <>
      <div className='pad-container'>
        <Pad />
      </div>
    </>
  )
}

export default App
