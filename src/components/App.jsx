import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Auth from './Auth'

function App() {

  return (
    <>
      <h1 data-testid="test-username-header" className="text-blue-400">
        Vite-React Demo App
      </h1>
      <nav className="fex-row">
        <ul>
          <li className="text-red-200 hover:text-blue">
            <Link to="/auth/signin">SignIn</Link>
          </li>
          <li className="text-red-100 hover:text-blue">
            <Link to="/auth/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<>Hello</>} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
