import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import User from './User'

function App() {
  const [userName, updateUserName] = useState('')
  const [users, updateUsers] = useState('')
  async function getUsers(userId) {
    const res = await fetch(`/api/users/${userId}`).catch((err) =>
      console.log(err)
    )
    console.log(res)
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json().catch((err) => console.log(err))
      console.log(data[0].id, data[0].email)
      updateUsers(res)
    }
  }
  return (
    <div>
      <h1 data-testid="test-username-header" className="text-green-400">
        Vite-React Demo App
      </h1>
      <input
        id="username-input"
        data-testid="test-username-input"
        type="text"
        value={userName}
        placeholder="Please input"
        onChange={(e) => updateUserName(e.target.value)}
      />
      <div data-testid="test-username-display">user: {userName}</div>
      <button onClick={() => getUsers(userName)}>button</button>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li className="text-red-200 hover:text-blue-500">
                <Link to="/user/login">Login</Link>
              </li>
              <li className="text-red-200 hover:text-blue-500">
                <Link to="/user/register">Register</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/user/*" element={<User />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
