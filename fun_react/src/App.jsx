import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div 
      style={{width:600,margin: '0 auto', 
      padding: '20px',
      backgroundColor: '#f9f9f9', 
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 1, 0.1)',
      }}>
      <img src={reactLogo} width={100} />
      
      <h2>Fun facts about React</h2>
      <ul style={{listStyleType:'square',textAlign:'center'}}>
          <li>React was created by Jordan Walke, a software engineer at Facebook, in 2011.</li>
          <li>It was first used for Facebook's News Feed and later for Instagram in 2012.</li>
          <li>React uses a virtual DOM to improve performance by minimizing direct manipulations of the real DOM.</li>
          <li>The library follows a component-based architecture, making code reusable and easier to manage.</li>
          <li>React introduced the concept of hooks in version 16.8, simplifying state and side-effect management in functional components.</li>
          <li>It's maintained by Facebook, but it has a massive open-source community contributing to its growth.</li>
          <li>React powers major websites and applications, including Netflix, Airbnb, and WhatsApp Web.</li>
          <li>JSX (JavaScript XML) is a unique syntax used in React to write HTML-like code within JavaScript.</li>
          <li>React Native, a framework for building mobile apps, is based on React and allows developers to use a single codebase for iOS and Android.</li>
          <li>React has a strong ecosystem with tools like React Router, Redux, and Next.js, making it suitable for a wide range of applications.</li>
      </ul>

    </div>
  )
}

export default App
