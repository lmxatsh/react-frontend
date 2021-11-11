import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const userRoutes = {
  routes: [
    { exact: true, path: '/login', element: <Login /> },
    { exact: true, path: '/register', element: <Register /> },
  ],
}

export default userRoutes
