import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './register'
import Login from './login'

function User() {
  return (
    <div>
      <h2>User</h2>
      <Routes>
        <Route path="" element={<div>Not Rendered</div>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default User
