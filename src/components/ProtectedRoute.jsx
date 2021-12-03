import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function ProtectedRoute({ children }) {
  const { authStatus } = useContext(AuthContext)
  return authStatus ? children : <Navigate to="/auth/signin" />
}

export default ProtectedRoute
