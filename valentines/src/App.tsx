import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="valentine-container">
      <div className={`card ${isOpen ? 'open' : ''}`}>
        <div className="card-front" onClick={() => setIsOpen(true)}>
          <h1>💝</h1>
          <p>Click to open</p>
        </div>
        <div className="card-inside">
          <h2>Happy Valentine's Day!</h2>
          <p>You're amazing! ❤️</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default App
