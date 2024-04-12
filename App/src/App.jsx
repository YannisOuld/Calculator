import { useState } from 'react'
import Calculator from './Calcutor'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Calculator />
      </div>
      <p className="read-the-docs">
        Bienvenue sur l'application calculator !
      </p>
    </>
  )
}

export default App
