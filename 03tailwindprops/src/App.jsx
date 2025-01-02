import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-xl'>Tailwind CSS</h1>
      <Card username="shijin" btnvalue="open please"/>
      <Card username="akshay" btnvalue="again please"/>
    </>
  )
}

export default App
