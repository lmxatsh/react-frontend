import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from '../routes/AuthRoutes'

function Auth() {
  return (
    <div>
      <Routes>
        {AuthRoutes.routes.map((route) => {
          return <Route key={route.path} {...route} />
        })}
      </Routes>
    </div>
  )
}

export default Auth
