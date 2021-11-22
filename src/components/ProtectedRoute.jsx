import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function ProtectedRoute(props) {
  const [authStatus] = useContext(AuthContext)
  return authStatus ? (
    <>
      <Route {...props} />
    </>
  ) : (
    <>
      <Route path="/signin" element={<Navigate to="/auth/signin" />} />
    </>
  )
}

export default ProtectedRoute
