import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(10)
  const [numbers,setnum] = useState(false)
  const [characters,setchar] = useState(false)
  const [pswd,setpswd] = useState("")

  const pswdGenerator = () => {
    let pass = ""
    let str = "ABCDEFGHIJIKLMNOPQRSTUVWXYZabcdefghjikmlnopqrstuvwxyz"
    if(numbers) 
        str += "0123456789"
    if(characters)
        str += "~!@#$%^&*()_+{}[]"
    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * str.length)
      pass += str.charAt(pos)
    }
    setpswd(pass)
  }
  
  useEffect(()=>{pswdGenerator()},[length,numbers,characters])
  const copyToClipboard = () => {
    navigator.clipboard.writeText(pswd);
  };
  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 text-yellow-400 bg-gray-500'>
        <h1 className='text-center my-3'><b>Password Generator</b></h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type='text' value={pswd}
            className='w-full outline-none py-3 px-3 rounded-md' 
            placeholder='password'
            readOnly
            />
            {/* <button className='outline-none py-3 px-3 rounded-md bg-blue-600 text-yellow-400'><b>copy</b></button> */}
            <button
            className="outline-none py-3 px-3 rounded-md bg-blue-600 text-yellow-400"
            onClick={copyToClipboard}
          >copy</button>
        </div>
        <div className='flex gap-2'>
          <div className='flex items-center'>
            <input
              type='range'
              min={6}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> setLength(e.target.value)}/>
              <label>Length{length}</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              defaultChecked={numbers}
              id = 'numberInput'
              onChange={()=> setnum(prev =>!prev)}/>
              <label>Numbers{numbers}</label>
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              defaultChecked={characters}
              id = 'characterInput'
              onChange={()=> setchar(prev =>!prev)}/>
              <label>characters{characters}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
