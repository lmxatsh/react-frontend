import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import { AuthContext } from '../context/AuthContext'
import UserProfile from './UserProfile'
import ProtectedRoute from './ProtectedRoute'
import axios from 'axios'
import NavBar from './NavBar'

function App() {
  const [authStatus, setAuthStatus] = useState(null)
  useEffect(() => {
    async function findUser() {
      await axios
        .get('/api/auth/user')
        .then((res) => {
          setAuthStatus(res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(`Error: ${err}`)
        })
    }
    findUser()
  }, [])

  return (
    <>
      <h1 data-testid="test-username-header" className="text-blue-400">
        Vite-React Demo App
      </h1>

      <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p>Hello Vite</p>
              </>
            }
          />
          <Route path="/auth/*" element={<Auth />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
