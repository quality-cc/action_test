import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="title">Olá Mundo!</h1>
        <p className="subtitle">Quality Contact Center (QCC)!</p>
        <div className="logo-react-container">
          {/* Adicionando um SVG do React para um toque visual */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458 458" className="react-logo">
            <g fill="none" stroke="#61DAFB" strokeWidth="20" strokeLinejoin="round">
              <path d="M229 25L229 433" strokeDasharray="390" strokeDashoffset="0" />
              <ellipse cx="229" cy="229" rx="204" ry="78" transform="rotate(60 229 229)" strokeDasharray="575" strokeDashoffset="0" />
              <ellipse cx="229" cy="229" rx="204" ry="78" transform="rotate(120 229 229)" strokeDasharray="575" strokeDashoffset="0" />
              <ellipse cx="229" cy="229" rx="204" ry="78" transform="rotate(180 229 229)" strokeDasharray="575" strokeDashoffset="0" />
            </g>
          </svg>
        </div>
      </header>
    </div>
  );
}

export default App
