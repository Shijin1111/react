import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("red")

  return (

      <div className='w-full h-screen' 
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center  bg-white bottom-12 rounded-xl py-2 px-2 left-1/2 transform -translate-x-1/2'> 
          <div className='flex flex-wrap justify-center gap-3 shadow-sm'>
          <button onClick={() => {console.log("Changing color to green"); setColor("green");}} className='bg-green-500 px-4 py-2 rounded-xl'>Green</button>
          <button onClick={() => setColor("blue")} className='bg-blue-600 px-4 py-2 rounded-xl'>Blue</button>
          <button onClick={() => setColor("yellow")} className='bg-yellow-500 px-4 py-2 rounded-xl'>Yellow</button>
          <button onClick={() => setColor("orange")} className='bg-orange-500 px-4 py-2 rounded-xl'>Orange</button>
          <button onClick={() => setColor("slategray")} className='bg-slate-600 px-4 py-2 rounded-xl'>Slate</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
