import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function UserProfile() {
  const { authStatus } = useContext(AuthContext)
  return authStatus ? (
    <>
      <p>Signin Success</p>
      <p>User Email: {authStatus.email}</p>
    </>
  ) : (
    <>
      <p>Please Signin</p>
    </>
  )
}

export default UserProfile
