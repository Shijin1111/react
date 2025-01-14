import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [post, setpost] = useState([])

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post => setpost(post))
  },[])

  

  return (
    <>
      <h1>Fetch API</h1>
      <h2>
        {post.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </h2>
    </>
  )
}

export default App
