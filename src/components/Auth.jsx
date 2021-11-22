import React from 'react'
import { Routes } from 'react-router-dom'
import AuthRoutes from '../routes/AuthRoutes'
import ProtectedRoute from './ProtectedRoute'

function Auth() {
  return (
    <div>
      <Routes>
        {AuthRoutes.routes.map((route) => {
          return <ProtectedRoute key={route.path} {...route} />
        })}
      </Routes>
    </div>
  )
}

export default Auth
