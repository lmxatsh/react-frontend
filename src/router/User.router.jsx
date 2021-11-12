import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import UserProfile from '../components/UserProfile'

const userRoutes = {
  routes: [
    { exact: true, path: '/login', element: <Login /> },
    { exact: true, path: '/register', element: <Register /> },
    { exact: true, path: '/profile/:id', element: <UserProfile /> },
  ],
}

export default userRoutes
