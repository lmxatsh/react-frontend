import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import UserProfile from '../components/UserProfile'

const userRoutes = {
  routes: [
    { exact: true, path: '/signin', element: <SignIn /> },
    { exact: true, path: '/signup', element: <SignUp /> },
    { exact: true, path: '/profile/:id', element: <UserProfile /> },
  ],
}

export default userRoutes
