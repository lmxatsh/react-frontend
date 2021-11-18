import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const AuthRoutes = {
  routes: [
    { exact: true, path: '/signin', element: <SignIn /> },
    { exact: true, path: '/signup', element: <SignUp /> },
  ],
}

export default AuthRoutes
