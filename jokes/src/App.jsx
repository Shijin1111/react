import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jokesData from './jokesData'
import Joke from './Joke'
function App() {
  
  const [isShown,setisShown] = useState(false)
  function toggle()
  {
    setisShown(isShown=>!isShown)
    console.log(isShown)
  }
  const jokeElements = jokesData.map((joke,index)=>{
    return <Joke 
                  key={joke.id || index}
                  setup={joke.setup}
                  punchline={joke.punchline}
                  />
  })
  return (
    <>
      {jokeElements }
      <button onClick={toggle}>shijiin</button>
    </>
  )
}

export default App
