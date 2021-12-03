import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from '../routes/AuthRoutes'

function Auth() {
  return (
    <Routes>
      {AuthRoutes.routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        )
      })}
    </Routes>
  )
}

export default Auth
