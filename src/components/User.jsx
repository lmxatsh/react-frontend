import React from 'react'
import { Routes, Route } from 'react-router-dom'
import userRoutes from '../router/User.router'

function User() {
  return (
    <div>
      <Routes>
        {userRoutes.routes.map((route) => {
          return <Route key={route.path} {...route} />
        })}
      </Routes>
    </div>
  )
}

export default User
