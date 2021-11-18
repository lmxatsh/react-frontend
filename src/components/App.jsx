import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import User from './User'

function App() {
  const [userName, setUserName] = useState('')

  return (
    <>
      <h1 data-testid="test-username-header" className="text-blue-400">
        Vite-React Demo App
      </h1>
      <input
        id="username-input"
        data-testid="test-username-input"
        type="text"
        value={userName}
        placeholder="Please input"
        onChange={(e) => setUserName(e.target.value)}
      />
      <p data-testid="test-username-display">user: {userName}</p>
      <h1>React Router</h1>
      <nav>
        <ul>
          <li className="text-red-200 hover:text-blue">
            <Link to="/user/login">Login</Link>
          </li>
          <li className="text-red-100 hover:text-blue">
            <Link to="/user/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/user/*" element={<User />} />
      </Routes>
    </>
  )
}

export default App
